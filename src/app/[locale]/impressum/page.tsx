import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/LegalPage";
import EnglishDisclaimer from "@/components/EnglishDisclaimer";

export default function ImpressumPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("legal");

  return (
    <LegalPage title={t("imprint_title")}>
      {params.locale === "en" && <EnglishDisclaimer />}

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Thorsten Ahrens<br />
        Zillestr. 75<br />
        51067 Köln<br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 174 6628053<br />
        E-Mail: contact@serahr.de
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE363343172
      </p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>
        Thorsten Ahrens<br />
        Zillestr. 75<br />
        51067 Köln
      </p>

      <h2>Geltungsbereich</h2>
      <p>Dieses Impressum gilt für folgende Websites:</p>
      <ul>
        <li>serahr.de</li>
        <li>serahrchat.serahr.de</li>
        <li>serahrremind.serahr.de</li>
        <li>serahrcount.serahr.de</li>
        <li>serahrphoneagent.serahr.de</li>
        <li>kineahnung.de</li>
        <li>kieneangst.de</li>
      </ul>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPage>
  );
}
