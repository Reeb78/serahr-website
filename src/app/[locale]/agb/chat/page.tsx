import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/LegalPage";
import EnglishDisclaimer from "@/components/EnglishDisclaimer";

export default function AGBChatPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("legal");

  if (params.locale === "en") {
    return (
      <LegalPage title={t("terms_title", { product: "SerahrChat" })}>
        <EnglishDisclaimer />
        <AGBChatEN />
      </LegalPage>
    );
  }

  return (
    <LegalPage title={t("terms_title", { product: "SerahrChat" })}>
      <AGBChatDE />
    </LegalPage>
  );
}

function AGBChatDE() {
  return (
    <>
      <p className="text-sm text-muted">Version 1.0 — gültig ab 01.04.2026</p>
      <p className="text-sm text-muted">Anbieter: Thorsten Ahrens, Serahr — serahr.de</p>

      <h2>1. Geltungsbereich</h2>
      <p>Diese AGB gelten für die Nutzung des Software-Produkts SerahrChat, bereitgestellt von Thorsten Ahrens (nachfolgend &quot;Anbieter&quot;). SerahrChat richtet sich ausschließlich an <strong>Unternehmen, Freiberufler, Vereine, Stiftungen und sonstige juristische Personen</strong> zur Nutzung im Rahmen ihrer gewerblichen, selbstständigen oder satzungsgemäßen Tätigkeit (nachfolgend &quot;Kunde&quot;). Der Kunde bestätigt bei Vertragsschluss, nicht als Verbraucher im Sinne von § 13 BGB zu handeln. SerahrChat ist eine Self-Hosted-Chatbot-Lösung, die der Kunde auf seinem eigenen Server betreibt. Mit dem Erwerb einer Lizenz akzeptiert der Kunde diese AGB.</p>

      <h2>2. Leistungsbeschreibung</h2>
      <p>SerahrChat ist ein KI-gestützter Chatbot für Websites, der Fragen auf Basis hochgeladener Dokumente beantwortet. Der Anbieter stellt bereit:</p>
      <ul>
        <li>Die SerahrChat-Software als Docker-Container (Self-Hosted)</li>
        <li>Ein Installations-Script für die automatisierte Einrichtung</li>
        <li>Ein Setup-Wizard für die Erstkonfiguration</li>
        <li>Ein einbettbares Chat-Widget (JavaScript, Shadow DOM)</li>
        <li>Ein Admin-Panel zur Verwaltung von Dokumenten, Analytics und Einstellungen</li>
        <li>Automatische Updates über den Update-Server (update.serahr.de)</li>
        <li>Lizenzverwaltung über den Lizenzserver (licence.serahr.de)</li>
      </ul>
      <p><strong>Nicht im Leistungsumfang enthalten:</strong> Serverhosting, LLM-/Embedding-API-Kosten, Domain-/SSL-Zertifikate, individuelle Anpassungen oder Programmierung.</p>

      <h2>3. Tarife und Preise</h2>
      <p>SerahrChat wird in folgenden Tarifen angeboten:</p>
      <ul>
        <li><strong>Basis:</strong> 29 EUR/Monat oder 290 EUR/Jahr — 1 Instanz, bis zu 10 Dokumente, E-Mail-Support, Basis-Analytics, DE/EN</li>
        <li><strong>Pro:</strong> 49 EUR/Monat oder 490 EUR/Jahr — 1 Instanz, bis zu 50 Dokumente, White Label, eigene Farben, Custom Instructions (System Prompt), Topic-Clustering, Management-API, Prioritäts-Support</li>
        <li><strong>Lifetime:</strong> 999 EUR einmalig — alle Pro-Features, Lifetime-Updates, keine laufenden Kosten</li>
      </ul>
      <p>Alle Preise verstehen sich netto zzgl. der gesetzlichen Mehrwertsteuer. Preisänderungen werden mindestens 30 Tage vor Inkrafttreten per E-Mail angekündigt.</p>

      <h2>4. Kostenlose Testphase (Trial)</h2>
      <p>Neukunden erhalten eine 7-tägige kostenlose Testphase mit dem Funktionsumfang des Basis-Tarifs. Die Testphase beginnt mit der Installation. Eine Zahlungsmethode ist während der Testphase nicht erforderlich. Nach Ablauf der Testphase wird der Chatbot deaktiviert, bis ein Tarif erworben wird.</p>

      <h2>5. Vertragsschluss und Zahlung</h2>
      <p>Der Vertrag kommt durch den Abschluss des Kaufvorgangs über Stripe Checkout zustande. Die Zahlung erfolgt per Kreditkarte, SEPA-Lastschrift oder anderen von Stripe unterstützten Zahlungsmethoden. Bei Monatsplänen wird monatlich im Voraus abgerechnet, bei Jahresplänen jährlich im Voraus.</p>

      <h2>6. Kündigung und Laufzeit</h2>
      <ul>
        <li><strong>Monatspläne:</strong> Jederzeit zum Ende des aktuellen Abrechnungszeitraums kündbar.</li>
        <li><strong>Jahrespläne:</strong> Kündigung zum Ende der Jahreslaufzeit. Keine anteilige Erstattung bei vorzeitiger Kündigung.</li>
        <li><strong>Lifetime:</strong> Zeitlich unbefristete Lizenz für die Dauer des aktiven Produktangebots von SerahrChat. &quot;Lifetime&quot; bezieht sich auf die Lebensdauer des Produkts, nicht auf die Lebenszeit des Kunden oder des Unternehmens. Im Falle einer Produkteinstellung erhalten Lifetime-Kunden ein abschließendes Update, das die Software ohne Lizenzvalidierung weiter nutzbar macht. Ein Anspruch auf Weiterentwicklung oder neue Funktionen besteht nicht. Keine Kündigung erforderlich.</li>
      </ul>
      <p>Die Kündigung erfolgt über das Stripe Customer Portal, erreichbar aus dem SerahrChat Admin-Panel.</p>

      <h2>7. Verhalten nach Vertragsende</h2>
      <ul>
        <li>Der Chatbot (Widget) wird sofort deaktiviert und beantwortet keine Anfragen mehr.</li>
        <li>Der Kunde hat 30 Tage Zugriff auf das Admin-Panel, um Daten zu exportieren.</li>
        <li>Nach Ablauf der 30 Tage wird der Zugang gesperrt.</li>
        <li>Alle Daten verbleiben auf dem Server des Kunden — der Anbieter hat keinen Zugriff darauf und löscht keine Daten auf dem Kundenserver.</li>
      </ul>

      <h2>8. Kein Widerrufsrecht / Kulanz-Rückgabe</h2>
      <p>Da sich SerahrChat ausschließlich an Unternehmer im Sinne von § 14 BGB richtet, besteht <strong>kein gesetzliches Widerrufsrecht</strong>.</p>
      <p>Der Anbieter gewährt auf freiwilliger Basis eine <strong>Kulanzfrist von 14 Tagen</strong> ab Vertragsschluss (nachfolgend &quot;Kulanzfrist&quot;). Dieses Recht ist freiwillig, widerruflich und begründet <strong>keinen gesetzlichen Anspruch</strong>. Es handelt sich nicht um ein Widerrufsrecht im Sinne der §§ 355 ff. BGB. Voraussetzung für die Inanspruchnahme ist eine formlose Mitteilung per E-Mail an kontakt@serahr.de innerhalb der Kulanzfrist.</p>
      <p>Bei Inanspruchnahme der Kulanzfrist wird der gezahlte Betrag abzüglich eines anteiligen Wertersatzes für bereits erbrachte Leistungen (Updates, Support, Lizenzvalidierung) erstattet. Der Wertersatz berechnet sich wie folgt:</p>
      <ul>
        <li><strong>Monatspläne:</strong> Tagesgenaue Abrechnung (Monatspreis / 30 × Nutzungstage)</li>
        <li><strong>Jahrespläne:</strong> Auf Basis des vergleichbaren Monatstarifs (Jahrespreis / 12 / 30 × Nutzungstage)</li>
        <li><strong>Lifetime-Plan:</strong> Auf Basis von 49 EUR/Monat (Pro-Monatstarif) / 30 × Nutzungstage</li>
      </ul>
      <p><strong>Hinweis:</strong> Sollte im Einzelfall dennoch ein gesetzliches Widerrufsrecht bestehen (z.B. weil der Kunde entgegen seiner Angabe als Verbraucher handelt), gelten die gesetzlichen Regelungen der §§ 355 ff. BGB. Der Anbieter behält sich in diesem Fall vor, Wertersatz für bereits erbrachte Leistungen geltend zu machen.</p>

      <h2>9. Pflichten des Kunden</h2>
      <p>Der Kunde ist verantwortlich für:</p>
      <ul>
        <li>Bereitstellung und Wartung eines geeigneten Servers (Linux, Docker-fähig)</li>
        <li>Einhaltung der Datenschutzvorschriften auf seiner Website (z.B. Consent-Banner für den Chatbot)</li>
        <li>Beschaffung und Kosten von API-Keys für LLM- und Embedding-Dienste</li>
        <li>Serverkosten (Hosting, Domain, SSL) — diese sind nicht im Lizenzpreis enthalten</li>
        <li>Sicherung seiner Zugangsdaten (Admin-Passwort, Recovery Codes)</li>
        <li>Prüfung der vom Chatbot generierten Antworten auf Richtigkeit</li>
      </ul>

      <h2>10. Haftung</h2>
      <p>Der Anbieter haftet unbeschränkt bei Vorsatz, grober Fahrlässigkeit sowie für Schäden aus der Verletzung von Leben, Körper oder Gesundheit. Unberührt bleiben ferner die Haftung nach dem Produkthaftungsgesetz, aus der Übernahme einer Garantie sowie bei arglistigem Verschweigen eines Mangels.</p>
      <p>Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden beschränkt, maximal jedoch auf den Vertragswert der letzten 12 Monate (bei Lifetime-Plan: 999 EUR).</p>
      <p>Der Anbieter übernimmt insbesondere keine Haftung für:</p>
      <ul>
        <li>Inhaltliche Richtigkeit der KI-generierten Chatbot-Antworten</li>
        <li>Verfügbarkeit oder Leistung externer LLM-Dienste</li>
        <li>Datenverluste auf dem Server des Kunden</li>
        <li>Schäden durch unsachgemäße Installation oder Konfiguration</li>
        <li>Schäden, die durch vom Kunden gewählte LLM-Anbieter verursacht werden</li>
      </ul>

      <h2>11. Freistellung (LLM-Anbieter und Datenschutz)</h2>
      <p>SerahrChat stellt eine technische Schnittstelle zur Anbindung externer KI-Sprachmodelle (Large Language Models, &quot;LLM&quot;) bereit. Der Kunde bestimmt eigenverantwortlich die <strong>Zwecke und Mittel der Datenverarbeitung</strong> durch den LLM-Anbieter, insbesondere:</p>
      <ul>
        <li>Die Auswahl des LLM-Anbieters (z.B. OpenRouter, OpenAI, Mistral, Ollama)</li>
        <li>Die Konfiguration des API-Keys (eigenes Konto beim LLM-Anbieter)</li>
        <li>Den Abschluss etwaig erforderlicher Auftragsverarbeitungsverträge (AVV) mit dem LLM-Anbieter</li>
        <li>Die datenschutzrechtliche Information der Endnutzer (Website-Besucher) über die LLM-Nutzung</li>
      </ul>
      <p>Der Anbieter agiert weder als Auftragsverarbeiter noch als gemeinsam Verantwortlicher für die Verarbeitung von Chat-Anfragen durch den LLM-Anbieter. Der Kunde stellt den Anbieter von sämtlichen Ansprüchen Dritter frei, die aus einer datenschutzwidrigen Konfiguration oder Nutzung der LLM-Anbindung resultieren, einschließlich angemessener Kosten der Rechtsverteidigung.</p>

      <h2>12. Keine Auftragsverarbeitung (Self-Hosted)</h2>
      <p>Für die Verarbeitung personenbezogener Daten im Rahmen des Betriebs von SerahrChat auf dem Kundensystem ist der Kunde allein Verantwortlicher im Sinne der DSGVO. Der Anbieter verarbeitet diese Daten weder im Auftrag des Kunden noch hat er Zugriff auf diese Daten. Ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO ist für den Betrieb der Self-Hosted-Software nicht erforderlich.</p>

      <h2>13. Rechte an KI-generierten Inhalten</h2>
      <p>Die vom Chatbot generierten Antworten unterliegen keinem Urheberrecht des Anbieters. Der Kunde erhält das Recht, alle vom Chatbot generierten Texte im Rahmen seines Geschäftsbetriebs uneingeschränkt zu nutzen. Der Anbieter übernimmt keine Gewähr für die urheberrechtliche Unbedenklichkeit der generierten Inhalte, da diese von Drittanbieter-KI-Modellen erzeugt werden.</p>

      <h2>14. Updates und Support</h2>
      <p>Der Anbieter stellt regelmäßig Updates bereit, die über den Update-Server (update.serahr.de) verteilt und im Admin-Panel installiert werden können. Der Anbieter behält sich vor, den Funktionsumfang im Rahmen von Updates zu erweitern oder anzupassen, ohne dabei wesentliche Funktionen zu entfernen.</p>
      <p><strong>Support-Reaktionszeiten:</strong> E-Mail-Support wird an Werktagen (Mo–Fr) bearbeitet. Basis-Plan: Antwort in der Regel innerhalb von 72 Stunden. Pro-/Lifetime-Plan: Antwort in der Regel innerhalb von 24 Stunden. Eine 100%ige Verfügbarkeit des Update- und Lizenzservers wird nicht garantiert.</p>

      <h2>15. Exportkontrolle</h2>
      <p>Der Kunde verpflichtet sich, die Software nicht in Länder zu exportieren oder dort zu nutzen, die EU- oder US-Embargobestimmungen unterliegen.</p>

      <h2>16. Datenschutz</h2>
      <p>Einzelheiten zur Datenverarbeitung finden Sie in unserer Datenschutzerklärung.</p>

      <h2>17. AGB-Änderungen</h2>
      <p>Der Anbieter kann diese AGB mit einer Ankündigungsfrist von 30 Tagen per E-Mail ändern. Widerspricht der Kunde nicht innerhalb von 30 Tagen nach Zugang der Änderungsmitteilung, gelten die neuen AGB als akzeptiert. Bei wesentlichen Änderungen hat der Kunde ein Sonderkündigungsrecht zum Änderungszeitpunkt.</p>

      <h2>18. Sprachfassungen</h2>
      <p>Diese AGB sind in deutscher und englischer Sprache verfasst. Bei Widersprüchen zwischen der deutschen und der englischen Fassung ist <strong>ausschließlich die deutsche Fassung maßgeblich</strong>. Die englische Fassung dient nur der Information.</p>

      <h2>19. Schlussbestimmungen</h2>
      <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für Kaufleute ist der Sitz des Anbieters. Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam.</p>
    </>
  );
}

function AGBChatEN() {
  return (
    <>
      <p className="text-sm text-muted">Version 1.0 — effective from April 1, 2026</p>
      <p className="text-sm text-muted">Provider: Thorsten Ahrens, Serahr — serahr.de</p>

      <h2>1. Scope</h2>
      <p>These Terms and Conditions apply to the use of the software product SerahrChat, provided by Thorsten Ahrens (hereinafter &quot;Provider&quot;). SerahrChat is intended exclusively for <strong>businesses, freelancers, associations, foundations, and other legal entities</strong> for use in the course of their commercial, professional, or statutory activities (hereinafter &quot;Customer&quot;). The Customer confirms at the time of purchase that they are not acting as a consumer within the meaning of § 13 BGB (German Civil Code). SerahrChat is a self-hosted chatbot solution that the Customer operates on their own server. By purchasing a license, the Customer accepts these Terms.</p>

      <h2>2. Service Description</h2>
      <p>SerahrChat is an AI-powered chatbot for websites that answers questions based on uploaded documents. The Provider supplies:</p>
      <ul>
        <li>The SerahrChat software as Docker containers (self-hosted)</li>
        <li>An installation script for automated setup</li>
        <li>A setup wizard for initial configuration</li>
        <li>An embeddable chat widget (JavaScript, Shadow DOM)</li>
        <li>An admin panel for managing documents, analytics, and settings</li>
        <li>Automatic updates via the update server (update.serahr.de)</li>
        <li>License management via the license server (licence.serahr.de)</li>
      </ul>
      <p><strong>Not included:</strong> Server hosting, LLM/embedding API costs, domain/SSL certificates, custom development or programming.</p>

      <h2>3. Plans and Pricing</h2>
      <ul>
        <li><strong>Basis:</strong> EUR 29/month or EUR 290/year — 1 instance, up to 10 documents, email support, basic analytics, DE/EN</li>
        <li><strong>Pro:</strong> EUR 49/month or EUR 490/year — 1 instance, up to 50 documents, white label, custom colors, custom instructions (system prompt), topic clustering, management API, priority support</li>
        <li><strong>Lifetime:</strong> EUR 999 one-time — all Pro features, lifetime updates, no recurring costs</li>
      </ul>
      <p>All prices are net prices excluding applicable VAT. Price changes will be announced at least 30 days in advance by email.</p>

      <h2>4. Free Trial</h2>
      <p>New customers receive a 7-day free trial with Basis plan features. The trial starts upon installation. No payment method is required during the trial. After the trial expires, the chatbot is deactivated until a plan is purchased.</p>

      <h2>5. Contract and Payment</h2>
      <p>The contract is established upon completing the purchase via Stripe Checkout. Payment is processed via credit card, SEPA direct debit, or other Stripe-supported methods. Monthly plans are billed monthly in advance; annual plans are billed annually in advance.</p>

      <h2>6. Cancellation and Term</h2>
      <ul>
        <li><strong>Monthly plans:</strong> Cancellable at any time, effective at the end of the current billing period.</li>
        <li><strong>Annual plans:</strong> Cancellation effective at the end of the annual term. No pro-rata refund for early cancellation.</li>
        <li><strong>Lifetime:</strong> Perpetual license for the duration of the active product offering of SerahrChat. &quot;Lifetime&quot; refers to the lifetime of the product, not the lifetime of the Customer or the company. In the event of product discontinuation, Lifetime customers will receive a final update that allows the software to continue operating without license validation. No cancellation required.</li>
      </ul>
      <p>Cancellation is managed through the Stripe Customer Portal, accessible from the SerahrChat admin panel.</p>

      <h2>7. Post-Termination</h2>
      <ul>
        <li>The chatbot widget is deactivated immediately and stops answering queries.</li>
        <li>The customer retains 30 days of admin panel access to export data.</li>
        <li>After 30 days, access is revoked.</li>
        <li>All data remains on the customer&apos;s server — the Provider has no access and does not delete any data on the customer&apos;s server.</li>
      </ul>

      <h2>8. No Right of Withdrawal / Courtesy Return</h2>
      <p>As SerahrChat is intended exclusively for businesses within the meaning of § 14 BGB, there is <strong>no statutory right of withdrawal</strong>.</p>
      <p>The Provider voluntarily grants a <strong>courtesy return period of 14 days</strong> from the date of contract conclusion. This right is voluntary, revocable, and <strong>does not constitute a statutory entitlement</strong>. A request must be submitted informally by email to kontakt@serahr.de within the Courtesy Period.</p>
      <p>Compensation is calculated as follows:</p>
      <ul>
        <li><strong>Monthly plans:</strong> Daily pro-rata (monthly price / 30 × days used)</li>
        <li><strong>Annual plans:</strong> Based on the comparable monthly rate (annual price / 12 / 30 × days used)</li>
        <li><strong>Lifetime plan:</strong> Based on EUR 49/month (Pro monthly rate) / 30 × days used</li>
      </ul>

      <h2>9. Customer Obligations</h2>
      <ul>
        <li>Providing and maintaining a suitable server (Linux, Docker-capable)</li>
        <li>Compliance with data protection regulations on their website (e.g., consent banner for the chatbot)</li>
        <li>Procurement and costs of API keys for LLM and embedding services</li>
        <li>Server costs (hosting, domain, SSL) — not included in the license fee</li>
        <li>Safeguarding access credentials (admin password, recovery codes)</li>
        <li>Reviewing chatbot-generated answers for accuracy</li>
      </ul>

      <h2>10. Liability</h2>
      <p>The Provider shall be liable without limitation in cases of intent, gross negligence, and for damages resulting from injury to life, body, or health.</p>
      <p>In cases of slight negligence, the Provider shall only be liable for breach of material contractual obligations (cardinal obligations). Liability is limited to the foreseeable, contract-typical damage, up to a maximum of the contract value of the last 12 months (for the Lifetime plan: EUR 999).</p>
      <p>The Provider assumes no liability in particular for:</p>
      <ul>
        <li>Accuracy of AI-generated chatbot responses</li>
        <li>Availability or performance of external LLM services</li>
        <li>Data loss on the Customer&apos;s server</li>
        <li>Damages caused by improper installation or configuration</li>
        <li>Damages caused by LLM providers chosen by the Customer</li>
      </ul>

      <h2>11. Indemnification (LLM Providers and Data Protection)</h2>
      <p>The Customer independently determines the <strong>purposes and means of data processing</strong> by the LLM provider. The Provider acts neither as a data processor nor as a joint controller. The Customer shall indemnify the Provider against all third-party claims arising from non-compliant configuration or use of the LLM integration.</p>

      <h2>12. No Data Processing Agreement (Self-Hosted)</h2>
      <p>The Customer is the sole data controller within the meaning of the GDPR for all personal data processed through the operation of SerahrChat. A data processing agreement pursuant to Art. 28 GDPR is not required for the operation of the self-hosted software.</p>

      <h2>13. Rights to AI-Generated Content</h2>
      <p>AI-generated chatbot responses are not subject to the Provider&apos;s copyright. The Customer receives the right to use all chatbot-generated texts without restriction.</p>

      <h2>14. Updates and Support</h2>
      <p><strong>Support response times:</strong> Basis plan: typically within 72 hours. Pro/Lifetime plan: typically within 24 hours (business days Mon–Fri).</p>

      <h2>15. Export Control</h2>
      <p>The Customer undertakes not to export the software to or use it in countries subject to EU or US embargo regulations.</p>

      <h2>16. Data Protection</h2>
      <p>Details on data processing can be found in our Privacy Policy.</p>

      <h2>17. Changes to Terms</h2>
      <p>The Provider may amend these Terms with 30 days&apos; notice by email. If the Customer does not object within 30 days, the new Terms are deemed accepted.</p>

      <h2>18. Language Versions</h2>
      <p>In the event of any discrepancy between the German and English versions, the <strong>German version shall prevail</strong>. The English version is for informational purposes only.</p>

      <h2>19. Final Provisions</h2>
      <p>German law applies. The place of jurisdiction is the Provider&apos;s registered office. Should individual provisions be invalid, the remainder of the contract shall remain effective.</p>
    </>
  );
}
