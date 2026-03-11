import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-serahr-deep text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Serahr"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-white">Serahr</span>
            </Link>
            <p className="mt-2 text-sm text-white/50">{t("tagline")}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/impressum" className="transition-colors hover:text-white">
              {t("imprint")}
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white">
              {t("privacy")}
            </Link>
            <Link href="/kontakt" className="transition-colors hover:text-white">
              {t("contact")}
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
