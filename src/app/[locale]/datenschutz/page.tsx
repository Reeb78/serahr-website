import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LegalPage from "@/components/LegalPage";
import EnglishDisclaimer from "@/components/EnglishDisclaimer";
import LegalArchive from "@/components/LegalArchive";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: t("privacy_title"),
    description: t("privacy_description"),
    alternates: getAlternates("/datenschutz"),
  };
}

function DatenschutzDE() {
  return (
    <>
      <h2>Verantwortlicher</h2>
      <p>
        Thorsten Ahrens<br />
        Zillestr. 75<br />
        51067 Köln, Deutschland<br />
        E-Mail: contact@serahr.de
      </p>

      <h2>Datenerhebung auf dieser Website</h2>
      <p>
        Diese Website erfasst personenbezogene Daten ausschließlich im Kontext von Kontaktanfragen.
        Bei der Kommunikation per E-Mail oder Kontaktformular werden Ihre Daten (Name, E-Mail-Adresse,
        Nachrichteninhalt) gespeichert, um Ihre Anfrage zu bearbeiten.
      </p>

      <h2>Kontaktformular</h2>
      <p>
        Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden die von Ihnen
        mitgeteilten Daten (Ihre E-Mail-Adresse, Ihr Name, das gewählte Thema sowie Ihre Nachricht)
        gespeichert, um Ihre Anfrage zu bearbeiten. Die Daten werden nicht ohne Ihre Einwilligung
        an Dritte weitergegeben.
      </p>

      <h2>Rechtsgrundlagen</h2>
      <p>
        Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
        (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
        effizienten Bearbeitung von Anfragen).
      </p>

      <h2>Speicherdauer</h2>
      <p>
        Ihre Kontaktdaten werden gelöscht, sobald sie für den Zweck der Verarbeitung nicht mehr
        erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
      </p>

      <h2>Hosting</h2>
      <p>
        Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
        erfasst werden (z. B. IP-Adressen, Kontaktanfragen), werden auf den Servern des Hosters
        gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>Ihre Rechte</h2>
      <p>Sie haben das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      </ul>

      <h2>Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständig ist die
        Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
      </p>

      <hr />

      <h2>Produktspezifische Datenschutzerklärungen</h2>
      <ul>
        <li>
          <Link href="/datenschutz/remind">
            Datenschutzerklärung — SerahrRemind →
          </Link>
        </li>
        <li>
          <Link href="/datenschutz/chat">
            Datenschutzerklärung — SerahrChat →
          </Link>
        </li>
      </ul>
    </>
  );
}

function DatenschutzEN() {
  return (
    <>
      <EnglishDisclaimer />

      <h2>Controller</h2>
      <p>
        Thorsten Ahrens<br />
        Zillestr. 75<br />
        51067 Cologne, Germany<br />
        Email: contact@serahr.de
      </p>

      <h2>Data Collection on This Website</h2>
      <p>
        This website collects personal data exclusively in the context of contact requests.
        When communicating via email or the contact form, your data (name, email address,
        message content) is stored in order to process your enquiry.
      </p>

      <h2>Contact Form</h2>
      <p>
        When you send us enquiries via the contact form, the data you provide (your email address,
        your name, the selected topic, and your message) is stored in order to process your request.
        Your data will not be shared with third parties without your consent.
      </p>

      <h2>Legal Basis</h2>
      <p>
        Your data is processed on the basis of Art. 6(1)(b) GDPR (pre-contractual measures)
        and Art. 6(1)(f) GDPR (legitimate interest in the efficient handling of enquiries).
      </p>

      <h2>Storage Duration</h2>
      <p>
        Your contact data will be deleted as soon as it is no longer required for the purpose
        of processing and no statutory retention obligations apply.
      </p>

      <h2>Hosting</h2>
      <p>
        This website is hosted externally. Personal data collected on this website (e.g. IP addresses,
        contact requests) is stored on the servers of the hosting provider. Processing is carried
        out on the basis of Art. 6(1)(f) GDPR.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your stored data (Art. 15 GDPR)</li>
        <li>Rectification of inaccurate data (Art. 16 GDPR)</li>
        <li>Erasure of your data (Art. 17 GDPR)</li>
        <li>Restriction of processing (Art. 18 GDPR)</li>
        <li>Data portability (Art. 20 GDPR)</li>
        <li>Object to processing (Art. 21 GDPR)</li>
      </ul>

      <h2>Right to Lodge a Complaint</h2>
      <p>
        You have the right to lodge a complaint with a supervisory authority. The competent authority
        is the State Commissioner for Data Protection and Freedom of Information of North
        Rhine-Westphalia (LDI NRW).
      </p>

      <hr />

      <h2>Product-Specific Privacy Policies</h2>
      <ul>
        <li>
          <Link href="/datenschutz/remind">
            Privacy Policy — SerahrRemind →
          </Link>
        </li>
        <li>
          <Link href="/datenschutz/chat">
            Privacy Policy — SerahrChat →
          </Link>
        </li>
      </ul>
    </>
  );
}

export default function DatenschutzPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("legal");

  return (
    <LegalPage title={t("privacy_title")}>
      {params.locale === "en" ? <DatenschutzEN /> : <DatenschutzDE />}
      <LegalArchive slug="datenschutz" />
    </LegalPage>
  );
}
