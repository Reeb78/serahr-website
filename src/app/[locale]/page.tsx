import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = useTranslations();

  const products = [
    { key: "remind" as const, icon: "🔔", href: "/remind" },
    { key: "chat" as const, icon: "💬", href: "/chat" },
    { key: "count" as const, icon: "📊", href: "/count" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-serahr-bright/30" />
          <div className="animate-float-delay absolute left-[10%] top-[35%] h-3 w-3 rounded-full bg-serahr-medium/20" />
          <div className="animate-float-delay-2 absolute right-[20%] top-[30%] h-2.5 w-2.5 rounded-full bg-serahr-bright/25" />
          <div className="animate-float absolute right-[15%] bottom-[35%] h-2 w-2 rounded-full bg-serahr-medium/20" />
          <div className="animate-float-delay absolute left-[25%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-serahr-light/30" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
            <line x1="15%" y1="25%" x2="10%" y2="35%" stroke="#2E86C1" strokeWidth="1" />
            <line x1="10%" y1="35%" x2="25%" y2="45%" stroke="#2E86C1" strokeWidth="1" />
            <line x1="80%" y1="30%" x2="85%" y2="40%" stroke="#3DB4F2" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-serahr-bright/20 bg-serahr-ice/60 px-4 py-1.5 text-sm text-serahr-deep backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-serahr-bright animate-pulse" />
            {t("hero.badge")}
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-serahr-deep sm:text-6xl lg:text-7xl">
            {t("hero.headline")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {t("hero.subheadline")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#products"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-serahr-deep px-8 text-sm font-medium text-white shadow-lg shadow-serahr-deep/20 transition-all hover:bg-serahr-medium hover:shadow-serahr-medium/30"
            >
              {t("hero.cta")}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center rounded-full border border-serahr-medium/30 px-8 text-sm font-medium text-serahr-deep transition-all hover:border-serahr-medium hover:bg-serahr-ice"
            >
              {t("hero.cta_secondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-serahr-bright">
              Solutions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-serahr-deep sm:text-4xl">
              {t("products.title")}
            </h2>
            <p className="mt-4 text-lg text-muted">
              {t("products.subtitle")}
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.key}
                href={product.href}
                className="card-glow group rounded-2xl border border-serahr-ice bg-gradient-to-b from-white to-serahr-ice/30 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-serahr-ice text-2xl">
                  {product.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-serahr-deep">
                  {t(`products.${product.key}.name`)}
                </h3>
                <p className="mt-2 text-sm font-medium text-serahr-bright">
                  {t(`products.${product.key}.tagline`)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {t(`products.${product.key}.description`)}
                </p>
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-serahr-medium opacity-0 transition-all group-hover:opacity-100">
                  {t(`products.${product.key}.link`)}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-serahr-ice bg-serahr-ice/30 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center sm:flex-row sm:justify-around sm:text-left">
          <div>
            <p className="text-2xl font-bold text-serahr-deep">{t("trust.item1_label")}</p>
            <p className="mt-1 text-sm text-muted">{t("trust.item1_text")}</p>
          </div>
          <div className="hidden h-8 w-px bg-serahr-medium/20 sm:block" />
          <div>
            <p className="text-2xl font-bold text-serahr-deep">{t("trust.item2_label")}</p>
            <p className="mt-1 text-sm text-muted">{t("trust.item2_text")}</p>
          </div>
          <div className="hidden h-8 w-px bg-serahr-medium/20 sm:block" />
          <div>
            <p className="text-2xl font-bold text-serahr-deep">{t("trust.item3_label")}</p>
            <p className="mt-1 text-sm text-muted">{t("trust.item3_text")}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
