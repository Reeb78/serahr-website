"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";

export default function KontaktPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: Connect to Supabase when DB is set up
    // For now, simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  }

  return (
    <PageLayout>
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-serahr-deep sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-muted">
            {t("subtitle")}
          </p>

          {status === "success" ? (
            <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <p className="text-lg font-medium text-green-800">{t("success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-serahr-deep">
                  {t("name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 block w-full rounded-xl border border-serahr-ice bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-serahr-bright focus:ring-1 focus:ring-serahr-bright"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-serahr-deep">
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block w-full rounded-xl border border-serahr-ice bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-serahr-bright focus:ring-1 focus:ring-serahr-bright"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-serahr-deep">
                  {t("product")}
                </label>
                <select
                  id="product"
                  name="product"
                  className="mt-2 block w-full rounded-xl border border-serahr-ice bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-serahr-bright focus:ring-1 focus:ring-serahr-bright"
                >
                  <option value="">{t("product_none")}</option>
                  <option value="remind">SerahrRemind</option>
                  <option value="chat">SerahrChat</option>
                  <option value="count">SerahrCount</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-serahr-deep">
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 block w-full resize-none rounded-xl border border-serahr-ice bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-serahr-bright focus:ring-1 focus:ring-serahr-bright"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-serahr-deep px-8 text-sm font-medium text-white shadow-lg shadow-serahr-deep/20 transition-all hover:bg-serahr-medium disabled:opacity-50"
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
