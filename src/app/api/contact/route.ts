import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, topic, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !topic || !subject || !message) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    const topicLabels: Record<string, string> = {
      project: "Projektanfrage",
      question: "Allgemeine Frage",
      other: "Sonstiges",
    };

    await transporter.sendMail({
      from: `"Serahr Kontaktformular" <${process.env.SMTP_USER}>`,
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `[Kontaktformular] [${topicLabels[topic] || topic}] ${subject}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `E-Mail: ${email}`,
        `Thema: ${topicLabels[topic] || topic}`,
        `Betreff: ${subject}`,
        "",
        "Nachricht:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nachricht konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
