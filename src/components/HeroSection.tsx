"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import Typewriter from "./Typewriter";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      {/* Decorative neural dots */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute left-[12%] top-[22%] h-2.5 w-2.5 rounded-full bg-serahr-bright/25" />
        <div className="animate-float-delay absolute left-[8%] top-[38%] h-3.5 w-3.5 rounded-full bg-serahr-medium/15" />
        <div className="animate-float-delay-2 absolute right-[18%] top-[28%] h-3 w-3 rounded-full bg-serahr-bright/20" />
        <div className="animate-float absolute right-[12%] bottom-[32%] h-2.5 w-2.5 rounded-full bg-serahr-medium/15" />
        <div className="animate-float-delay absolute left-[22%] bottom-[22%] h-2 w-2 rounded-full bg-serahr-light/25" />
        <div className="animate-float-delay-2 absolute right-[30%] top-[18%] h-1.5 w-1.5 rounded-full bg-serahr-bright/20" />
        <div className="animate-float absolute left-[35%] top-[15%] h-2 w-2 rounded-full bg-serahr-medium/10" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]">
          <line x1="12%" y1="22%" x2="8%" y2="38%" stroke="#2E86C1" strokeWidth="1" />
          <line x1="8%" y1="38%" x2="22%" y2="48%" stroke="#2E86C1" strokeWidth="1" />
          <line x1="82%" y1="28%" x2="88%" y2="38%" stroke="#3DB4F2" strokeWidth="1" />
          <line x1="35%" y1="15%" x2="22%" y2="22%" stroke="#3DB4F2" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-serahr-bright/20 bg-white/60 px-5 py-2 text-sm font-medium text-serahr-deep shadow-sm backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-serahr-bright animate-pulse" />
          {t("hero.badge")}
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
        >
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-serahr-deep sm:text-6xl lg:text-7xl">
            <Typewriter text={t("hero.headline")} delay={800} speed={50} />
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
        >
          {t("hero.subheadline")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease }}
        >
          <a
            href="#products"
            className="inline-flex h-14 items-center gap-2 rounded-full bg-serahr-deep px-10 text-sm font-semibold text-white shadow-xl shadow-serahr-deep/25 transition-all hover:bg-serahr-medium hover:shadow-serahr-medium/30 hover:-translate-y-0.5"
          >
            {t("hero.cta")}
            <ChevronDown className="h-4 w-4" />
          </a>
          <Link
            href="/kontakt"
            className="inline-flex h-14 items-center rounded-full border border-serahr-medium/30 bg-white/50 px-10 text-sm font-semibold text-serahr-deep backdrop-blur-sm transition-all hover:border-serahr-medium hover:bg-serahr-ice hover:-translate-y-0.5"
          >
            {t("hero.cta_secondary")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
