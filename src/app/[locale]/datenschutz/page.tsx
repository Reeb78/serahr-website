import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LegalPage from "@/components/LegalPage";

export default function DatenschutzPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("legal");

  return (
    <LegalPage title={t("privacy_title")}>
      <p>{t("placeholder")}</p>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-serahr-deep">Produktspezifische Datenschutzerklärungen</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <Link href="/datenschutz/remind" className="text-serahr-medium hover:text-serahr-deep">
              Datenschutzerklärung — SerahrRemind →
            </Link>
          </li>
          <li>
            <Link href="/datenschutz/chat" className="text-serahr-medium hover:text-serahr-deep">
              Datenschutzerklärung — SerahrChat →
            </Link>
          </li>
          <li>
            <Link href="/datenschutz/count" className="text-serahr-medium hover:text-serahr-deep">
              Datenschutzerklärung — SerahrCount →
            </Link>
          </li>
        </ul>
      </div>
    </LegalPage>
  );
}
