"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import PageLayout from "@/components/PageLayout";

export default function KontaktPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: Connect to Supabase when DB is set up
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  }

  const inputClass =
    "mt-2 block w-full rounded-xl border border-serahr-ice bg-white px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-all focus:border-serahr-bright focus:ring-2 focus:ring-serahr-bright/20";

  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-serahr-deep sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative -mt-1 bg-white">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V20C240 45 480 55 720 45C960 35 1200 15 1440 25V60H0Z" fill="white" />
          <path d="M0 20C240 45 480 55 720 45C960 35 1200 15 1440 25" stroke="#EAF4FB" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Form */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-xl">
          {status === "success" ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                ✓
              </div>
              <p className="mt-4 text-lg font-medium text-green-800">{t("success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-serahr-deep">
                    {t("firstName")}
                  </label>
                  <input type="text" id="firstName" name="firstName" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-serahr-deep">
                    {t("lastName")}
                  </label>
                  <input type="text" id="lastName" name="lastName" required className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-serahr-deep">
                  {t("email")}
                </label>
                <input type="email" id="email" name="email" required className={inputClass} />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-serahr-deep">
                  {t("topic")}
                </label>
                <select id="topic" name="topic" required className={inputClass}>
                  <option value="">{t("topic_none")}</option>
                  <option value="project">{t("topic_project")}</option>
                  <option value="question">{t("topic_question")}</option>
                  <option value="other">{t("topic_other")}</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-serahr-deep">
                  {t("subject")}
                </label>
                <input type="text" id="subject" name="subject" required className={inputClass} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-serahr-deep">
                  {t("message")}
                </label>
                <textarea id="message" name="message" rows={5} required className={`${inputClass} resize-none`} />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 rounded border-serahr-ice text-serahr-deep accent-serahr-deep"
                />
                <label htmlFor="consent" className="text-sm leading-relaxed text-muted">
                  {t("consent")}{" "}
                  <Link href="/datenschutz" className="text-serahr-medium hover:text-serahr-deep">
                    {t("consent_link")}
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-serahr-deep px-8 text-sm font-semibold text-white shadow-xl shadow-serahr-deep/25 transition-all hover:bg-serahr-medium hover:shadow-serahr-medium/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {status === "sending" ? "..." : t("submit")}
              </button>
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
