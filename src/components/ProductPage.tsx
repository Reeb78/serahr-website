import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ExternalLink } from "lucide-react";
import PageLayout from "./PageLayout";
import ScrollReveal from "./ScrollReveal";
import LifetimeCounter from "./LifetimeCounter";

type Feature = {
  key: string;
  icon: React.ReactNode;
};

type PricingTier = {
  key: string;
  isPopular?: boolean;
  isLifetime?: boolean;
};

export default function ProductPage({
  namespace,
  appUrl,
  features,
  color,
  hasDocumentation,
  pricingTiers,
  hasFaq,
  isBeta,
}: {
  namespace: string;
  appUrl: string;
  features: Feature[];
  color: string;
  hasDocumentation?: boolean;
  pricingTiers?: PricingTier[];
  hasFaq?: boolean;
  isBeta?: boolean;
}) {
  const t = useTranslations(`${namespace}_page`);
  const tCommon = useTranslations("common");
  const tFooter = useTranslations("footer");
  const slug = namespace.replace("_page", "");

  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            {isBeta && (
              <p className="mb-6 inline-block rounded-full border border-serahr-bright/30 bg-serahr-ice px-4 py-1.5 text-xs font-semibold text-serahr-medium">
                {t("beta_note")}
              </p>
            )}
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-serahr-deep sm:text-5xl lg:text-6xl">
              {t("headline")}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {t("subheadline")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-serahr-deep px-10 text-sm font-semibold text-white shadow-xl shadow-serahr-deep/25 transition-all hover:bg-serahr-medium hover:shadow-serahr-medium/30 hover:-translate-y-0.5"
              >
                {t("cta")}
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/kontakt"
                className="inline-flex h-14 items-center rounded-full border border-serahr-medium/30 bg-white/50 px-10 text-sm font-semibold text-serahr-deep backdrop-blur-sm transition-all hover:border-serahr-medium hover:bg-serahr-ice hover:-translate-y-0.5"
              >
                {tCommon("contact_cta")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative -mt-1 bg-white">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V20C240 45 480 55 720 45C960 35 1200 15 1440 25V60H0Z" fill="white" />
          <path d="M0 20C240 45 480 55 720 45C960 35 1200 15 1440 25" stroke="#EAF4FB" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Features */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-serahr-bright">
              {t("features.label")}
            </p>
            <h2 className="mt-4 text-center font-heading text-3xl font-extrabold tracking-tight text-serahr-deep sm:text-4xl">
              {t("features.title")}
            </h2>
          </ScrollReveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.key} delay={(i % 2) + 1}>
                <div className="card-glow h-full rounded-2xl border border-serahr-ice bg-gradient-to-b from-white to-serahr-ice/30 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-serahr-ice">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-serahr-deep">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(`features.${feature.key}.text`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {pricingTiers && pricingTiers.length > 0 && (
        <section className="border-y border-serahr-ice bg-serahr-ice/30 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-serahr-bright">
                  {t("pricing.label")}
                </p>
                <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-serahr-deep sm:text-4xl">
                  {t("pricing.title")}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                  {t("pricing.subtitle")}
                </p>
              </div>
            </ScrollReveal>

            <div className={`mt-16 grid gap-6 sm:grid-cols-2 ${pricingTiers.length >= 3 ? "lg:grid-cols-3" : ""}`}>
              {pricingTiers.map((tier, i) => (
                <ScrollReveal key={tier.key} delay={(i % 3) + 1}>
                  <div className={`relative h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                    tier.isPopular
                      ? "border-2 border-serahr-bright bg-white shadow-lg shadow-serahr-bright/10 hover:shadow-xl hover:shadow-serahr-bright/20"
                      : "border border-serahr-ice bg-white shadow-sm hover:border-serahr-bright/50 hover:shadow-lg hover:shadow-serahr-bright/10"
                  }`}>
                    {tier.isPopular && (
                      <span className="absolute -top-3 right-4 rounded-full bg-serahr-bright px-3 py-0.5 text-xs font-semibold text-white shadow-sm">
                        {tCommon("recommended")}
                      </span>
                    )}
                    <h3 className="font-heading text-xl font-bold text-serahr-deep">
                      {t(`pricing.${tier.key}.name`)}
                    </h3>
                    <p className="mt-3 font-heading text-2xl font-extrabold text-serahr-medium">
                      {t(`pricing.${tier.key}.price`)}{" "}
                      <span className="text-sm font-medium text-muted">
                        {tier.isLifetime ? t("pricing.one_time") : t("pricing.month")}
                      </span>
                    </p>
                    {!tier.isLifetime && (
                      <p className="mt-1 text-xs text-muted">
                        {t("pricing.yearly_note", { price: t(`pricing.${tier.key}.price_yearly`) })}
                      </p>
                    )}
                    <ul className="mt-6 space-y-3 text-sm text-muted">
                      {["f1", "f2", "f3", "f4"].map((fKey) => (
                        <li key={fKey} className="flex items-start gap-2">
                          <span className="mt-0.5 text-serahr-bright">&#10003;</span>
                          {t(`pricing.${tier.key}.${fKey}`)}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs font-semibold text-serahr-deep">
                      {t(`pricing.${tier.key}.highlight`)}
                    </p>
                    {tier.isLifetime && <LifetimeCounter />}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <p className="mt-8 text-center text-sm text-muted">
                {t("pricing.vat_note")}
              </p>
              <p className="mt-2 text-center text-sm text-muted">
                {t("pricing.purchase_note")}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Audience */}
      <section className={`${pricingTiers ? "" : "border-y border-serahr-ice bg-serahr-ice/30 "}py-16`}>
        <ScrollReveal>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-heading text-2xl font-extrabold text-serahr-deep">
              {t("audience.title")}
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {t("audience.items")
                .split(", ")
                .map((item: string) => (
                  <span
                    key={item}
                    className="rounded-full border border-serahr-bright/20 bg-white px-4 py-2 text-sm text-serahr-deep"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      {hasFaq && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-serahr-bright">
                {t("faq.label")}
              </p>
              <h2 className="mt-4 text-center font-heading text-3xl font-extrabold tracking-tight text-serahr-deep sm:text-4xl">
                {t("faq.title")}
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[1, 2, 3, 4].map((n) => (
                <ScrollReveal key={n} delay={(n % 2) + 1}>
                  <div className="h-full rounded-2xl border border-serahr-ice bg-gradient-to-b from-white to-serahr-ice/30 p-6">
                    <h3 className="font-semibold text-serahr-deep">
                      {t(`faq.q${n}`)}
                    </h3>
                    <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted">
                      {t(`faq.a${n}`)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="border-t border-serahr-ice bg-serahr-ice/30 py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-serahr-deep">
              {t("cta_bottom.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              {t("cta_bottom.text")}
            </p>
            <div className="mt-8">
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-serahr-deep px-10 text-sm font-semibold text-white shadow-xl shadow-serahr-deep/25 transition-all hover:bg-serahr-medium hover:shadow-serahr-medium/30 hover:-translate-y-0.5"
              >
                {t("cta_bottom.button")}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">{t("cta_bottom.note")}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Legal links */}
      <section className="py-12">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 px-6 text-sm text-muted">
          <Link href={`/agb/${slug}`} className="hover:text-serahr-deep">
            {tFooter("terms")}
          </Link>
          <Link href={`/datenschutz/${slug}`} className="hover:text-serahr-deep">
            {tFooter("privacy")}
          </Link>
          {hasDocumentation && (
            <Link href={`/dokumentation/${slug}`} className="hover:text-serahr-deep">
              {tFooter("documentation")}
            </Link>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
