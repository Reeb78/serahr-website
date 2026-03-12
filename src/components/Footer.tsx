import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-serahr-deep text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Serahr"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-white">Serahr</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {t("tagline")}
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
              Produkte
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/remind" className="text-sm transition-colors hover:text-white">
                  SerahrRemind
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-sm transition-colors hover:text-white">
                  SerahrChat
                </Link>
              </li>
              <li>
                <Link href="/count" className="text-sm transition-colors hover:text-white">
                  SerahrCount
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
              Rechtliches
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/impressum" className="text-sm transition-colors hover:text-white">
                  {t("imprint")}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm transition-colors hover:text-white">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm transition-colors hover:text-white">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
