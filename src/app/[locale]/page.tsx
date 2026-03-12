import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import TimelineProgress from "@/components/TimelineProgress";
import CountUp from "@/components/CountUp";
import {
  BellRing,
  MessageSquare,
  Lightbulb,
  MessageCircle,
  ClipboardList,
  Code2,
  Rocket,
  Wrench,
  MapPin,
  Handshake,
  Clock,
  ShieldCheck,
  UserCheck,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react";

export default function Home({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = useTranslations();

  const products = [
    { key: "remind" as const, icon: <BellRing className="h-6 w-6 text-serahr-medium" />, href: "/remind" },
    { key: "chat" as const, icon: <MessageSquare className="h-6 w-6 text-serahr-medium" />, href: "/chat" },
    { key: "count" as const, icon: <Lightbulb className="h-6 w-6 text-amber-500" />, href: "/kontakt" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Nav />

      {/* ═══ Hero ═══ */}
      <HeroSection />

      {/* Wave divider */}
      <div className="relative -mt-1 bg-white">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V20C240 45 480 55 720 45C960 35 1200 15 1440 25V60H0Z" fill="white" />
          <path d="M0 20C240 45 480 55 720 45C960 35 1200 15 1440 25" stroke="#EAF4FB" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* ═══ Products ═══ */}
      <section id="products" className="relative bg-white pb-28 pt-20 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-serahr-bright">
                {t("products.section_label")}
              </p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-serahr-deep sm:text-5xl">
                {t("products.title")}
              </h2>
              <p className="mt-5 text-lg text-muted">
                {t("products.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {products.map((product, i) => {
              const isIdea = product.key === "count";
              return (
                <ScrollReveal key={product.key} delay={i + 1}>
                  <Link
                    href={product.href}
                    className={`group block h-full rounded-2xl p-8 ${
                      isIdea
                        ? "border-2 border-dashed border-serahr-medium/30 bg-serahr-ice/20"
                        : "card-glow border border-serahr-ice bg-gradient-to-b from-white to-serahr-ice/30"
                    }`}
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                      isIdea ? "bg-amber-50" : "bg-serahr-ice"
                    }`}>
                      {product.icon}
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-bold text-serahr-deep">
                      {t(`products.${product.key}.name`)}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-serahr-bright">
                      {t(`products.${product.key}.tagline`)}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {t(`products.${product.key}.description`)}
                    </p>
                    <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-serahr-medium">
                      {t(`products.${product.key}.link`)}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Stats ═══ */}
      <section className="border-y border-serahr-ice bg-serahr-ice/30 py-16">
        <ScrollReveal>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 text-center sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <Wrench className="mb-2 h-5 w-5 text-serahr-bright" />
              <p className="font-heading text-3xl font-extrabold text-serahr-deep"><CountUp end={2} suffix="+" /></p>
              <p className="mt-1 text-sm text-muted">{t("stats.tools_label")}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="mb-2 h-5 w-5 text-serahr-bright" />
              <p className="font-heading text-3xl font-extrabold text-serahr-deep">{t("stats.origin_value")}</p>
              <p className="mt-1 text-sm text-muted">{t("stats.origin_label")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Handshake className="mb-2 h-5 w-5 text-serahr-bright" />
              <p className="font-heading text-3xl font-extrabold text-serahr-deep">{t("stats.support_value")}</p>
              <p className="mt-1 text-sm text-muted">{t("stats.support_label")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="mb-2 h-5 w-5 text-serahr-bright" />
              <p className="font-heading text-3xl font-extrabold text-serahr-deep"><CountUp end={24} suffix="h" /></p>
              <p className="mt-1 text-sm text-muted">{t("stats.response_label")}</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ═══ Process ═══ */}
      <section className="relative overflow-hidden bg-white py-28">
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-serahr-ice/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-serahr-bright/5 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-serahr-bright">
                {t("process.section_label")}
              </p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-serahr-deep sm:text-5xl">
                {t("process.title")}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
                {t("process.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Scroll-progress line */}
            <TimelineProgress />

            {([
              { step: 1, icon: <MessageCircle className="h-5 w-5" /> },
              { step: 2, icon: <ClipboardList className="h-5 w-5" /> },
              { step: 3, icon: <Code2 className="h-5 w-5" /> },
              { step: 4, icon: <Rocket className="h-5 w-5" /> },
            ]).map(({ step, icon }, i) => (
              <ScrollReveal key={step} delay={i % 2 === 0 ? 1 : 2}>
                <div className={`relative mb-12 last:mb-0 sm:flex sm:items-start sm:gap-12 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                  {/* Step number on timeline */}
                  <div data-timeline-step={step} className="absolute left-6 top-0 z-10 hidden -translate-x-1/2 sm:left-1/2 sm:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-serahr-deep text-sm font-bold text-white shadow-lg shadow-serahr-deep/20">
                      {step}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`sm:w-[calc(50%-3rem)] ${i % 2 === 0 ? "sm:text-right" : ""}`}>
                    <div className="rounded-2xl border border-serahr-ice bg-gradient-to-b from-white to-serahr-ice/20 p-8 shadow-sm transition-all hover:shadow-md hover:shadow-serahr-bright/10">
                      <div className={`flex items-center gap-3 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                        {/* Mobile step number */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-serahr-deep text-sm font-bold text-white sm:hidden">
                          {step}
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-serahr-ice text-serahr-medium">
                          {icon}
                        </div>
                        <h3 className="font-heading text-xl font-bold text-serahr-deep">
                          {t(`process.step${step}_title`)}
                        </h3>
                      </div>
                      <p className={`mt-4 text-sm leading-relaxed text-muted ${i % 2 === 0 ? "sm:text-right" : ""}`}>
                        {t(`process.step${step}_text`)}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 text-center">
              <Link
                href="/kontakt"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-serahr-deep px-10 text-sm font-semibold text-white shadow-xl shadow-serahr-deep/25 transition-all hover:bg-serahr-medium hover:shadow-serahr-medium/30 hover:-translate-y-0.5"
              >
                {t("process.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-sm text-muted">{t("process.cta_note")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Trust ═══ */}
      <section className="border-y border-serahr-ice bg-serahr-ice/30 py-20">
        <ScrollReveal>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
            {([
              { icon: <ShieldCheck className="h-16 w-16" />, labelKey: "item1_label" as const, textKey: "item1_text" as const },
              { icon: <UserCheck className="h-16 w-16" />, labelKey: "item2_label" as const, textKey: "item2_text" as const },
              { icon: <HeadphonesIcon className="h-16 w-16" />, labelKey: "item3_label" as const, textKey: "item3_text" as const },
            ]).map((item) => (
              <div key={item.labelKey} className="relative overflow-hidden rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="pointer-events-none absolute right-3 top-3 text-serahr-bright/[0.07]">
                  {item.icon}
                </div>
                <div className="relative">
                  <p className="font-heading text-xl font-extrabold text-serahr-deep">
                    {t(`trust.${item.labelKey}`)}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {t(`trust.${item.textKey}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
