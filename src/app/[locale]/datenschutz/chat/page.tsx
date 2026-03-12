import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/LegalPage";
import EnglishDisclaimer from "@/components/EnglishDisclaimer";

export default function DatenschutzChatPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("legal");

  if (params.locale === "en") {
    return (
      <LegalPage title={t("privacy_product_title", { product: "SerahrChat" })}>
        <EnglishDisclaimer />
        <DSEChatEN />
      </LegalPage>
    );
  }

  return (
    <LegalPage title={t("privacy_product_title", { product: "SerahrChat" })}>
      <DSEChatDE />
    </LegalPage>
  );
}

function DSEChatDE() {
  return (
    <>
      <p className="text-sm text-muted">Version 1.1 — gültig ab 01.04.2026</p>

      <h2>1. Verantwortlicher</h2>
      <p>Thorsten Ahrens<br />Serahr — serahr.de<br />E-Mail: kontakt@serahr.de</p>
      <p>Diese Datenschutzerklärung bezieht sich auf die Website serahrchat.serahr.de und das Software-Produkt SerahrChat.</p>

      <h2>2. Überblick: Wo werden welche Daten gespeichert?</h2>
      <p>SerahrChat ist eine Self-Hosted-Lösung. Die meisten Daten verbleiben auf dem Server des Kunden.</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Daten</th><th>Speicherort</th><th>Zweck</th></tr></thead>
          <tbody>
            <tr><td>Hochgeladene Dokumente</td><td>Kundenserver</td><td>Wissensbasis für den Chatbot</td></tr>
            <tr><td>Vektor-Index (Embeddings)</td><td>Kundenserver (LanceDB)</td><td>Semantische Suche</td></tr>
            <tr><td>Chat-Verläufe</td><td>Kundenserver (SQLite)</td><td>Analytics, automatisch nach 90 Tagen gelöscht</td></tr>
            <tr><td>Analytics (aggregiert)</td><td>Kundenserver</td><td>Nutzungsstatistiken, 90-Tage-Rotation</td></tr>
            <tr><td>Audit-Log</td><td>Kundenserver</td><td>Sicherheitsprotokoll, IP-anonymisiert, 90-Tage-Rotation</td></tr>
            <tr><td>Admin-Zugangsdaten</td><td>Kundenserver</td><td>Authentifizierung (Argon2-gehashed)</td></tr>
            <tr><td>Chat-Anfragen (zur Beantwortung)</td><td>Vom Kunden gewählter LLM-Anbieter (z.B. OpenRouter, OpenAI, Mistral oder lokal)</td><td>KI-Antwortgenerierung — durchgeleitet, nicht dauerhaft gespeichert</td></tr>
            <tr><td>Dokument-Embeddings (bei Erstellung)</td><td>Vom Kunden gewählter Embedding-Anbieter (z.B. OpenAI, OpenRouter oder lokal)</td><td>Vektorisierung der Dokumente für semantische Suche — Ergebnis wird lokal auf dem Kundenserver gespeichert</td></tr>
            <tr><td>Lizenzschlüssel + Instance-ID</td><td>Lizenzserver (licence.serahr.de)</td><td>Lizenzvalidierung</td></tr>
            <tr><td>Zahlungsdaten</td><td>Stripe</td><td>Zahlungsabwicklung (PCI-konform)</td></tr>
            <tr><td>E-Mail-Adresse</td><td>Lizenzserver + Resend</td><td>Lizenzkommunikation, Passwort-Reset, Trial-Onboarding</td></tr>
            <tr><td>Trial-Registrierung</td><td>Lizenzserver (licence.serahr.de)</td><td>Onboarding-E-Mails während der Testphase</td></tr>
          </tbody>
        </table>
      </div>

      <h2>3. Datenverarbeitung im Detail</h2>

      <h3>3.1 Website-Besuch (serahrchat.serahr.de)</h3>
      <p>Beim Besuch dieser Website werden durch den Webserver automatisch erhoben:</p>
      <ul>
        <li>IP-Adresse (in Server-Logs, automatische Rotation)</li>
        <li>Browsertyp, Betriebssystem, Referrer-URL</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
      </ul>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung der Website). Es werden keine Tracking-Cookies oder Third-Party-Tracker eingesetzt.</p>

      <h3>3.2 Lizenzerwerb und Zahlung</h3>
      <p>Beim Kauf einer Lizenz werden verarbeitet:</p>
      <ul>
        <li><strong>E-Mail-Adresse:</strong> Für Lizenzzustellung, Rechnungen und Support-Kommunikation. Gespeichert auf dem Lizenzserver (Supabase, EU-Region).</li>
        <li><strong>Zahlungsdaten:</strong> Ausschließlich über Stripe verarbeitet (PCI-DSS-zertifiziert). Wir speichern keine Kreditkarten- oder Kontodaten.</li>
      </ul>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).</p>

      <h3>3.3 Lizenzvalidierung (Phone-Home)</h3>
      <p>Die SerahrChat-Installation auf dem Kundenserver kontaktiert regelmäßig den Lizenzserver zur Validierung:</p>
      <ul>
        <li><strong>Übermittelte Daten:</strong> Instance-ID, Lizenzschlüssel</li>
        <li><strong>Häufigkeit:</strong> Maximal einmal pro 7 Tage (lokaler Cache)</li>
        <li><strong>Bei Nichterreichbarkeit:</strong> Grace Period — der Chatbot funktioniert weiter</li>
      </ul>
      <p><strong>Trial-Registrierung:</strong> Nach Abschluss des Setup-Wizards übermittelt die Installation einmalig Instance-ID, E-Mail-Adresse und gewählte Sprache an den Lizenzserver. Während der Testphase signalisiert die Installation alle 12 Stunden, dass der Server noch aktiv ist (nur Instance-ID, keine Nutzungsdaten).</p>
      <p>Es werden keine Nutzungsdaten, Dokumenteninhalte oder Chat-Verläufe übermittelt. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).</p>

      <h3>3.4 Update-Prüfung</h3>
      <p>Die Installation prüft automatisch auf neue Versionen über update.serahr.de. Dabei wird ausschließlich die aktuelle Versionsnummer abgeglichen. Es werden keine personenbezogenen Daten übermittelt.</p>

      <h3>3.5 Chat-Anfragen, Embedding und LLM-Anbieter</h3>
      <p><strong>Dies ist der wichtigste Punkt für die Datenschutzbewertung:</strong></p>
      <p><strong>a) Dokumenten-Embedding (beim Upload):</strong></p>
      <p>Wenn der Kunde Dokumente hochlädt, werden diese in Vektoren umgewandelt (Embedding), um eine semantische Suche zu ermöglichen. Der Embedding-Anbieter wird vom Kunden selbst gewählt:</p>
      <ul>
        <li><strong>Externer Anbieter (z.B. OpenAI, OpenRouter):</strong> Dokumenteninhalte werden an den gewählten Anbieter übermittelt, um Embedding-Vektoren zu erzeugen. Die resultierenden Vektoren werden lokal auf dem Kundenserver gespeichert (LanceDB).</li>
        <li><strong>Lokale Modelle:</strong> Keine externen Datenübertragungen — vollständig lokal auf dem Kundenserver.</li>
      </ul>

      <p><strong>b) Chat-Anfragen (bei Nutzung):</strong></p>
      <p>Wenn ein Website-Besucher eine Frage im Chatbot stellt, geschieht Folgendes:</p>
      <ol>
        <li>Die Frage wird auf dem Kundenserver verarbeitet</li>
        <li>Relevante Textpassagen aus den hochgeladenen Dokumenten werden per semantischer Suche ermittelt (lokal, LanceDB)</li>
        <li>Frage + relevante Textpassagen werden an den konfigurierten LLM-Anbieter gesendet, um eine Antwort zu generieren</li>
        <li>Die Antwort wird an den Besucher zurückgegeben</li>
      </ol>

      <p><strong>Sowohl der LLM-Anbieter als auch der Embedding-Anbieter werden vom Kunden selbst gewählt und konfiguriert (eigener API-Key).</strong> Mögliche Anbieter:</p>
      <ul>
        <li><strong>OpenRouter:</strong> Vermittlerdienst, leitet Anfragen an verschiedene LLMs weiter (OpenAI, Anthropic, Mistral u.a.). Sitz: USA.</li>
        <li><strong>Direkte Anbieter-APIs:</strong> OpenAI (USA), Mistral (Frankreich/EU), Anthropic (USA) u.a.</li>
        <li><strong>Lokale Modelle (Ollama, LMStudio):</strong> Keine externen Datenübertragungen — vollständig lokal auf dem Kundenserver.</li>
      </ul>
      <p><strong>Hinweis zur DSGVO-Konformität:</strong> Die gespeicherten Daten (Dokumente, Chat-Verläufe, Analytics, Embedding-Vektoren) verbleiben vollständig auf dem Kundenserver. Bei externer LLM- oder Embedding-Nutzung werden Daten jedoch an Dritte übermittelt. Für vollständige DSGVO-Konformität empfehlen wir lokale Modelle oder EU-basierte Anbieter. Die Auswahl und Verantwortung liegt beim Kunden.</p>

      <h3>3.6 E-Mail-Versand</h3>
      <p>E-Mails werden ausschließlich für folgende Zwecke versendet:</p>
      <ul>
        <li>Lizenzzustellung nach Kauf</li>
        <li>Passwort-Reset-Codes</li>
        <li>E-Mail-Verifizierungscodes</li>
        <li>Onboarding-E-Mails während der kostenlosen Testphase</li>
      </ul>
      <p>Der Versand erfolgt über den Dienst Resend. Die Onboarding-E-Mails werden ausschließlich während der 7-tägigen Testphase versendet und enden automatisch bei Kauf einer Lizenz oder wenn der Server nicht mehr erreichbar ist. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).</p>

      <h2>4. Datenspeicherung auf dem Kundenserver</h2>
      <p>Die folgenden Daten werden ausschließlich auf dem Server des Kunden gespeichert und sind für den Anbieter nicht zugänglich:</p>
      <ul>
        <li><strong>Dokumente:</strong> Hochgeladene PDFs, Word-Dateien, Textdateien — verschlüsselt gespeichert (Fernet/AES)</li>
        <li><strong>Vektor-Datenbank:</strong> Embedding-Vektoren der Dokumente (LanceDB)</li>
        <li><strong>Chat-Verläufe:</strong> Fragen und Antworten, anonymisiert gespeichert, automatische Löschung nach 90 Tagen</li>
        <li><strong>Analytics:</strong> Aggregierte Tagesstatistiken (Anzahl Fragen, Uhrzeiten), 90-Tage-Rotation</li>
        <li><strong>Audit-Log:</strong> Sicherheitsrelevante Ereignisse, IP-Adressen anonymisiert (letztes Oktett = 0), 90-Tage-Rotation</li>
        <li><strong>Admin-Datenbank:</strong> Konfiguration, Passwort-Hash (Argon2), Recovery-Codes (HMAC-SHA256)</li>
      </ul>

      <h2>5. Aufbewahrungsfristen</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Daten</th><th>Frist</th></tr></thead>
          <tbody>
            <tr><td>Chat-Verläufe</td><td>90 Tage (automatische Löschung)</td></tr>
            <tr><td>Analytics</td><td>90 Tage (automatische Rotation)</td></tr>
            <tr><td>Audit-Log</td><td>90 Tage (automatische Rotation, CSV-Export möglich)</td></tr>
            <tr><td>Dokumente</td><td>Bis zur manuellen Löschung durch den Kunden</td></tr>
            <tr><td>E-Mail-Adresse (Lizenzserver)</td><td>Bis zur Vertragsbeendigung + gesetzliche Aufbewahrungspflichten</td></tr>
            <tr><td>Zahlungsdaten (Stripe)</td><td>Gemäß Stripe-Datenschutzrichtlinie</td></tr>
            <tr><td>Admin-Zugang nach Vertragsende</td><td>30 Tage nach Ablauf, dann Sperrung</td></tr>
          </tbody>
        </table>
      </div>

      <h2>6. Ihre Rechte</h2>
      <p>Sie haben gemäß DSGVO folgende Rechte:</p>
      <ul>
        <li><strong>Auskunft</strong> (Art. 15) — Welche Daten über Sie gespeichert sind</li>
        <li><strong>Berichtigung</strong> (Art. 16) — Korrektur unrichtiger Daten</li>
        <li><strong>Löschung</strong> (Art. 17) — Löschung Ihrer Daten (&quot;Recht auf Vergessenwerden&quot;)</li>
        <li><strong>Einschränkung</strong> (Art. 18) — Einschränkung der Verarbeitung</li>
        <li><strong>Datenübertragbarkeit</strong> (Art. 20) — Herausgabe Ihrer Daten in maschinenlesbarem Format</li>
        <li><strong>Widerspruch</strong> (Art. 21) — Widerspruch gegen die Verarbeitung</li>
      </ul>
      <p>Anfragen richten Sie bitte an kontakt@serahr.de. Für auf Ihrem eigenen Server gespeicherte Daten (Dokumente, Chat-Verläufe) können Sie jederzeit über das Admin-Panel einen Export durchführen oder Daten löschen — der Anbieter hat auf diese Daten keinen Zugriff.</p>

      <h2>7. Beschwerderecht</h2>
      <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.</p>

      <h2>8. Cookies und Tracking</h2>
      <p>Diese Website verwendet keine Tracking-Cookies, keine Third-Party-Tracker und kein Analytics-Tool.</p>
      <p><strong>SerahrChat-Widget (auf Kundenwebsites):</strong> Das Chat-Widget speichert keine Cookies. Die Session-Verwaltung erfolgt über ein JWT-Token im localStorage des Browsers. localStorage-Daten werden nur lokal im Browser des Nutzers gespeichert und nicht an Dritte übermittelt. Eine Einwilligung ist hierfür nicht erforderlich, da die Speicherung technisch notwendig für die Funktionserbringung ist (§ 25 Abs. 2 Nr. 2 TDDDG).</p>

      <h2>9. Auftragsverarbeiter und Unterauftragsverarbeiter</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Dienstleister</th><th>Zweck</th><th>Sitz</th></tr></thead>
          <tbody>
            <tr><td><strong>Stripe, Inc.</strong></td><td>Zahlungsabwicklung (Checkout, Abonnements, Rechnungen)</td><td>USA (EU-Standardvertragsklauseln)</td></tr>
            <tr><td><strong>Supabase, Inc.</strong></td><td>Lizenzserver-Backend (Datenbank, Auth)</td><td>USA / EU-Region (Frankfurt)</td></tr>
            <tr><td><strong>Resend, Inc.</strong></td><td>Transaktionaler E-Mail-Versand</td><td>USA (EU-Standardvertragsklauseln)</td></tr>
            <tr><td><strong>Vercel, Inc.</strong></td><td>Hosting des Lizenzservers (licence.serahr.de)</td><td>USA (EU-Standardvertragsklauseln)</td></tr>
            <tr><td><strong>GitHub, Inc.</strong></td><td>Hosting des Update-Manifests (update.serahr.de)</td><td>USA (EU-Standardvertragsklauseln)</td></tr>
            <tr><td><strong>netcup GmbH</strong></td><td>Webhosting (serahr.de, serahrchat.serahr.de)</td><td>Deutschland</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Hinweis zu LLM- und Embedding-Anbietern:</strong> LLM- und Embedding-Anbieter (OpenRouter, OpenAI, Mistral etc.) werden nicht von uns beauftragt, sondern vom Kunden selbst gewählt und konfiguriert (eigener API-Key). Der Kunde ist für die datenschutzrechtliche Bewertung seiner gewählten Anbieter selbst verantwortlich.</p>

      <h2>10. Änderungen</h2>
      <p>Diese Datenschutzerklärung kann bei Bedarf aktualisiert werden. Die aktuelle Version mit Datum finden Sie stets auf dieser Seite.</p>
    </>
  );
}

function DSEChatEN() {
  return (
    <>
      <p className="text-sm text-muted">Version 1.1 — effective from April 1, 2026</p>

      <h2>1. Data Controller</h2>
      <p>Thorsten Ahrens<br />Serahr — serahr.de<br />Email: kontakt@serahr.de</p>
      <p>This policy covers serahrchat.serahr.de and the SerahrChat software product.</p>

      <h2>2. Overview: Where Is Data Stored?</h2>
      <p>SerahrChat is self-hosted. Most data remains on the customer&apos;s server.</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Data</th><th>Storage Location</th><th>Purpose</th></tr></thead>
          <tbody>
            <tr><td>Uploaded documents</td><td>Customer server</td><td>Knowledge base for the chatbot</td></tr>
            <tr><td>Vector index (embeddings)</td><td>Customer server (LanceDB)</td><td>Semantic search</td></tr>
            <tr><td>Chat histories</td><td>Customer server (SQLite)</td><td>Analytics, auto-deleted after 90 days</td></tr>
            <tr><td>Aggregated analytics</td><td>Customer server</td><td>Usage statistics, 90-day rotation</td></tr>
            <tr><td>Audit logs</td><td>Customer server</td><td>Security log, IP-anonymized, 90-day rotation</td></tr>
            <tr><td>Admin credentials</td><td>Customer server</td><td>Authentication (Argon2-hashed)</td></tr>
            <tr><td>Chat queries (for answering)</td><td>Customer-chosen LLM provider (e.g. OpenRouter, OpenAI, Mistral, or local)</td><td>AI response generation — forwarded, not permanently stored</td></tr>
            <tr><td>Document embeddings (on creation)</td><td>Customer-chosen embedding provider (e.g. OpenAI, OpenRouter, or local)</td><td>Document vectorization for semantic search — result stored locally on customer server</td></tr>
            <tr><td>License key + Instance ID</td><td>License server (licence.serahr.de)</td><td>License validation</td></tr>
            <tr><td>Payment data</td><td>Stripe</td><td>Payment processing (PCI-compliant)</td></tr>
            <tr><td>Email address</td><td>License server + Resend</td><td>License communication, password reset, trial onboarding</td></tr>
          </tbody>
        </table>
      </div>

      <h2>3. Data Processing in Detail</h2>

      <h3>3.1 Website Visits</h3>
      <p>Server automatically collects: IP addresses (in server logs, automatic rotation), browser type, operating system, referrer URL, date and time of access.</p>
      <p>Legal basis: Art. 6(1)(f) GDPR (legitimate interest). No tracking cookies or third-party trackers used.</p>

      <h3>3.2 License Purchase and Payment</h3>
      <ul>
        <li><strong>Email address:</strong> For license delivery, invoices, and support communication. Stored on the license server (Supabase, EU region).</li>
        <li><strong>Payment data:</strong> Processed exclusively through Stripe (PCI-DSS certified). We do not store credit card or bank account data.</li>
      </ul>
      <p>Legal basis: Art. 6(1)(b) GDPR (contract performance).</p>

      <h3>3.3 License Validation (Phone-Home)</h3>
      <ul>
        <li><strong>Transmitted data:</strong> Instance ID, license key</li>
        <li><strong>Frequency:</strong> Maximum once per 7 days (local cache)</li>
        <li><strong>If unreachable:</strong> Grace period — the chatbot continues to function</li>
      </ul>
      <p>No usage data, document content, or chat histories are transmitted. Legal basis: Art. 6(1)(b) GDPR.</p>

      <h3>3.4 Update Checks</h3>
      <p>The installation automatically checks for new versions via update.serahr.de. Only the current version number is compared. No personal data is transmitted.</p>

      <h3>3.5 Chat Queries, Embedding, and LLM Providers</h3>
      <p><strong>This is the most important point for data protection assessment:</strong></p>

      <p><strong>a) Document Embedding (on upload):</strong></p>
      <p>When the customer uploads documents, they are converted into vectors (embedding) to enable semantic search. The embedding provider is chosen by the customer:</p>
      <ul>
        <li><strong>External provider (e.g. OpenAI, OpenRouter):</strong> Document content is transmitted to the chosen provider to generate embedding vectors. The resulting vectors are stored locally on the customer&apos;s server (LanceDB).</li>
        <li><strong>Local models:</strong> No external data transfers — fully local on the customer&apos;s server.</li>
      </ul>

      <p><strong>b) Chat queries (during use):</strong></p>
      <ol>
        <li>The question is processed on the customer&apos;s server</li>
        <li>Relevant text passages from uploaded documents are identified via semantic search (local, LanceDB)</li>
        <li>Question + relevant text passages are sent to the configured LLM provider to generate an answer</li>
        <li>The answer is returned to the visitor</li>
      </ol>

      <p><strong>Both the LLM provider and the embedding provider are chosen and configured by the customer (own API key).</strong> Possible providers: OpenRouter (USA), OpenAI (USA), Mistral (France/EU), or local models (Ollama, LMStudio) with no external data transfers.</p>
      <p><strong>Note on GDPR compliance:</strong> Stored data (documents, chat histories, analytics, embedding vectors) remains entirely on the customer&apos;s server. When using external LLM or embedding providers, data is transmitted to third parties. For full GDPR compliance, we recommend local models or EU-based providers. The choice and responsibility lies with the customer.</p>

      <h3>3.6 Email Communication</h3>
      <p>Emails are sent exclusively for: license delivery, password reset codes, email verification codes, and onboarding emails during the free trial.</p>
      <p>Sent via Resend. Onboarding emails are sent only during the 7-day trial. Legal basis: Art. 6(1)(b) GDPR.</p>

      <h2>4. Data Storage on Customer Server</h2>
      <ul>
        <li><strong>Documents:</strong> Encrypted storage (Fernet/AES)</li>
        <li><strong>Vector database:</strong> Document embedding vectors (LanceDB)</li>
        <li><strong>Chat histories:</strong> Anonymized, automatic deletion after 90 days</li>
        <li><strong>Analytics:</strong> Aggregated daily statistics, 90-day rotation</li>
        <li><strong>Audit log:</strong> Security events, IP-anonymized, 90-day rotation</li>
        <li><strong>Admin database:</strong> Configuration, password hash (Argon2), recovery codes (HMAC-SHA256)</li>
      </ul>

      <h2>5. Retention Periods</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Data</th><th>Period</th></tr></thead>
          <tbody>
            <tr><td>Chat histories</td><td>90 days (automatic deletion)</td></tr>
            <tr><td>Analytics</td><td>90 days (automatic rotation)</td></tr>
            <tr><td>Audit logs</td><td>90 days (automatic rotation)</td></tr>
            <tr><td>Documents</td><td>Until manual deletion by customer</td></tr>
            <tr><td>Email address (license server)</td><td>Until contract termination + statutory retention</td></tr>
            <tr><td>Payment data (Stripe)</td><td>Per Stripe privacy policy</td></tr>
            <tr><td>Admin access after contract end</td><td>30 days after expiry, then revoked</td></tr>
          </tbody>
        </table>
      </div>

      <h2>6. Your Rights</h2>
      <p>Under GDPR: Access (Art. 15), Rectification (Art. 16), Erasure (Art. 17), Restriction (Art. 18), Data portability (Art. 20), Objection (Art. 21).</p>
      <p>Direct requests to kontakt@serahr.de. For data on your own server, you can export or delete data anytime via the admin panel.</p>

      <h2>7. Right to Complain</h2>
      <p>You have the right to lodge a complaint with a data protection supervisory authority.</p>

      <h2>8. Cookies and Tracking</h2>
      <p>This website uses no tracking cookies, no third-party trackers, and no analytics tools.</p>
      <p><strong>SerahrChat widget:</strong> No cookies. Session management uses a JWT token in localStorage. No consent required (§ 25(2)(2) TDDDG).</p>

      <h2>9. Processors and Sub-Processors</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Service Provider</th><th>Purpose</th><th>Location</th></tr></thead>
          <tbody>
            <tr><td><strong>Stripe, Inc.</strong></td><td>Payment processing</td><td>USA (EU SCCs)</td></tr>
            <tr><td><strong>Supabase, Inc.</strong></td><td>License server backend</td><td>USA / EU region (Frankfurt)</td></tr>
            <tr><td><strong>Resend, Inc.</strong></td><td>Transactional email</td><td>USA (EU SCCs)</td></tr>
            <tr><td><strong>Vercel, Inc.</strong></td><td>License server hosting</td><td>USA (EU SCCs)</td></tr>
            <tr><td><strong>GitHub, Inc.</strong></td><td>Update manifest hosting</td><td>USA (EU SCCs)</td></tr>
            <tr><td><strong>netcup GmbH</strong></td><td>Web hosting</td><td>Germany</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Note on LLM and embedding providers:</strong> LLM and embedding providers (OpenRouter, OpenAI, Mistral, etc.) are not commissioned by us but chosen and configured by the customer (own API key). The customer is responsible for the data protection assessment of their chosen providers.</p>

      <h2>10. Changes</h2>
      <p>This privacy policy may be updated as needed. The current version is always available on this page.</p>
    </>
  );
}
