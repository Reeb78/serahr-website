import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import PageLayout from "./PageLayout";

type Feature = {
  key: string;
  icon: React.ReactNode;
};

export default function ProductPage({
  namespace,
  appUrl,
  features,
  color,
  hasDocumentation,
}: {
  namespace: string;
  appUrl: string;
  features: Feature[];
  color: string;
  hasDocumentation?: boolean;
}) {
  const t = useTranslations(`${namespace}_page`);
  const slug = namespace.replace("_page", "");

  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-serahr-deep sm:text-5xl lg:text-6xl">
            {t("headline")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {t("subheadline")}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-serahr-deep px-8 text-sm font-medium text-white shadow-lg shadow-serahr-deep/20 transition-all hover:bg-serahr-medium hover:shadow-serahr-medium/30"
            >
              {t("cta")}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center rounded-full border border-serahr-medium/30 px-8 text-sm font-medium text-serahr-deep transition-all hover:border-serahr-medium hover:bg-serahr-ice"
            >
              Fragen? Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-serahr-deep">
            {t("features.title")}
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.key}
                className="card-glow rounded-2xl border border-serahr-ice bg-gradient-to-b from-white to-serahr-ice/30 p-8"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="border-y border-serahr-ice bg-serahr-ice/30 py-16">
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
      </section>

      {/* Legal links */}
      <section className="py-12">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 px-6 text-sm text-muted">
          <Link href={`/agb/${slug}`} className="hover:text-serahr-deep">
            AGB
          </Link>
          <Link href={`/datenschutz/${slug}`} className="hover:text-serahr-deep">
            Datenschutz
          </Link>
          {hasDocumentation && (
            <Link href={`/dokumentation/${slug}`} className="hover:text-serahr-deep">
              Dokumentation
            </Link>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
