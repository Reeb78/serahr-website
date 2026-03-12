import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LegalPage from "@/components/LegalPage";
import EnglishDisclaimer from "@/components/EnglishDisclaimer";

export default function DatenschutzPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("legal");

  return (
    <LegalPage title={t("privacy_title")}>
      {params.locale === "en" && <EnglishDisclaimer />}

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

      <p className="text-sm">Stand: Februar 2026</p>

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
        <li>
          <Link href="/datenschutz/count">
            Datenschutzerklärung — SerahrCount →
          </Link>
        </li>
      </ul>
    </LegalPage>
  );
}
