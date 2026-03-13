"use client";

import { useState, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";

export default function Nav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const scrollToProducts = useCallback((e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-serahr-ice bg-white/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Serahr Logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-xl font-bold tracking-tight text-serahr-deep">
            Serahr
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 sm:flex">
          <Link
            href="/#products"
            onClick={scrollToProducts}
            className="text-sm font-medium text-muted transition-colors hover:text-serahr-deep"
          >
            {t("products")}
          </Link>
          <Link
            href="/kontakt"
            className="text-sm font-medium text-muted transition-colors hover:text-serahr-deep"
          >
            {t("contact")}
          </Link>
          <LocaleSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-serahr-deep transition-colors hover:bg-serahr-ice sm:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-serahr-ice bg-white/95 backdrop-blur-lg transition-all duration-300 sm:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          <Link
            href="/#products"
            onClick={scrollToProducts}
            className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-serahr-ice hover:text-serahr-deep"
          >
            {t("products")}
          </Link>
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-serahr-ice hover:text-serahr-deep"
          >
            {t("contact")}
          </Link>
          <div className="mt-2 flex items-center gap-2 px-4">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <div className="flex gap-0.5 rounded-full border border-serahr-bright/20 bg-serahr-ice/50 p-0.5 text-xs">
      <Link
        href="/"
        locale="de"
        className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
          locale === "de"
            ? "bg-serahr-deep text-white"
            : "text-serahr-deep hover:bg-white"
        }`}
      >
        DE
      </Link>
      <Link
        href="/"
        locale="en"
        className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
          locale === "en"
            ? "bg-serahr-deep text-white"
            : "text-serahr-deep hover:bg-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
