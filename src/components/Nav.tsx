import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Nav() {
  const t = useTranslations("nav");

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
        <div className="flex items-center gap-8">
          <Link
            href="/#products"
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
      </div>
    </nav>
  );
}

function LocaleSwitcher() {
  return (
    <div className="flex gap-0.5 rounded-full border border-serahr-bright/20 bg-serahr-ice/50 p-0.5 text-xs">
      <Link
        href="/"
        locale="de"
        className="rounded-full px-2.5 py-1 font-medium text-serahr-deep transition-colors hover:bg-white"
      >
        DE
      </Link>
      <Link
        href="/"
        locale="en"
        className="rounded-full px-2.5 py-1 font-medium text-serahr-deep transition-colors hover:bg-white"
      >
        EN
      </Link>
    </div>
  );
}
