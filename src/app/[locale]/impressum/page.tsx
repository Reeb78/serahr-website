import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/LegalPage";
import EnglishDisclaimer from "@/components/EnglishDisclaimer";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: t("imprint_title"),
    description: t("imprint_description"),
    alternates: getAlternates("/impressum"),
  };
}

function ImpressumDE() {
  return (
    <>
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
    </>
  );
}

function ImpressumEN() {
  return (
    <>
      <EnglishDisclaimer />

      <h2>Information pursuant to § 5 TMG</h2>
      <p>
        Thorsten Ahrens<br />
        Zillestr. 75<br />
        51067 Cologne<br />
        Germany
      </p>

      <h2>Contact</h2>
      <p>
        Phone: +49 174 6628053<br />
        Email: contact@serahr.de
      </p>

      <h2>VAT ID</h2>
      <p>
        VAT identification number pursuant to § 27 a of the German VAT Act:<br />
        DE363343172
      </p>

      <h2>Responsible for Content pursuant to § 55 (2) RStV</h2>
      <p>
        Thorsten Ahrens<br />
        Zillestr. 75<br />
        51067 Cologne
      </p>

      <h2>Scope</h2>
      <p>This legal notice applies to the following websites:</p>
      <ul>
        <li>serahr.de</li>
        <li>serahrchat.serahr.de</li>
        <li>serahrremind.serahr.de</li>
        <li>serahrcount.serahr.de</li>
        <li>serahrphoneagent.serahr.de</li>
        <li>kineahnung.de</li>
        <li>kieneangst.de</li>
      </ul>

      <h2>Dispute Resolution</h2>
      <p>
        The European Commission provides a platform for online dispute resolution (ODR):{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <p>
        We are neither willing nor obliged to participate in dispute resolution proceedings
        before a consumer arbitration board.
      </p>
    </>
  );
}

export default function ImpressumPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("legal");

  return (
    <LegalPage title={t("imprint_title")}>
      {params.locale === "en" ? <ImpressumEN /> : <ImpressumDE />}
    </LegalPage>
  );
}
