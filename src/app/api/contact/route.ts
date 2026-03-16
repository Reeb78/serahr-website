import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/rate-limit";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const VALID_TOPICS = ["project", "question", "other"] as const;
type Topic = (typeof VALID_TOPICS)[number];

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n\t]/g, " ").trim().slice(0, 200);
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting (5 requests per IP per hour)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";
    const { success, remaining } = rateLimit(ip);

    if (!success) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
        {
          status: 429,
          headers: { "Retry-After": "3600", "X-RateLimit-Remaining": "0" },
        }
      );
    }

    // Origin check (basic CSRF protection)
    const origin = req.headers.get("origin");
    const host = req.headers.get("host");
    if (origin && host && !origin.includes(host)) {
      return NextResponse.json(
        { error: "Ungültige Anfrage." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { firstName, lastName, email, topic, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !topic || !subject || !message) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich." },
        { status: 400 }
      );
    }

    // Validate topic against allowlist
    if (!VALID_TOPICS.includes(topic as Topic)) {
      return NextResponse.json(
        { error: "Ungültiges Thema." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    // Length limits
    if (firstName.length > 100 || lastName.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "Eingabe zu lang." },
        { status: 400 }
      );
    }

    const topicLabels: Record<string, string> = {
      project: "Projektanfrage",
      question: "Allgemeine Frage",
      other: "Sonstiges",
    };

    const safeName = sanitizeHeader(`${firstName} ${lastName}`);
    const safeSubject = sanitizeHeader(subject);

    await transporter.sendMail({
      from: `"Serahr Kontaktformular" <${process.env.SMTP_USER}>`,
      replyTo: `"${safeName}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `[Kontaktformular] [${topicLabels[topic]}] ${safeSubject}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `E-Mail: ${email}`,
        `Thema: ${topicLabels[topic]}`,
        `Betreff: ${subject}`,
        "",
        "Nachricht:",
        message,
      ].join("\n"),
    });

    return NextResponse.json(
      { ok: true },
      { headers: { "X-RateLimit-Remaining": String(remaining) } }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nachricht konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
