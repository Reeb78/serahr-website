import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/LegalPage";

export default function ImpressumPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("legal");

  return (
    <LegalPage title={t("imprint_title")}>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-serahr-deep">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            Thorsten Ahrens<br />
            {/* Adresse hier einfügen */}
            [Adresse]<br />
            [PLZ Ort]
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-serahr-deep">Kontakt</h2>
          <p className="mt-2">
            E-Mail: [E-Mail-Adresse]
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-serahr-deep">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="mt-2">
            Thorsten Ahrens<br />
            [Adresse]
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-serahr-deep">Streitschlichtung</h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </LegalPage>
  );
}
