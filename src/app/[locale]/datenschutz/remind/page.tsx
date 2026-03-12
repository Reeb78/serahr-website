import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/LegalPage";
import EnglishDisclaimer from "@/components/EnglishDisclaimer";

export default function DatenschutzRemindPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("legal");

  if (params.locale === "en") {
    return (
      <LegalPage title={t("privacy_product_title", { product: "SerahrRemind" })}>
        <EnglishDisclaimer />
        <DSERemindEN />
      </LegalPage>
    );
  }

  return (
    <LegalPage title={t("privacy_product_title", { product: "SerahrRemind" })}>
      <DSERemindDE />
    </LegalPage>
  );
}

function DSERemindDE() {
  return (
    <>
      <p className="text-sm text-muted">Version 1.0 — gültig ab 12.03.2026</p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Hinweis:</strong> Diese Datenschutzerklärung bezieht sich auf die öffentlich zugängliche Demo-Version von SerahrRemind unter serahrremind.serahr.de. Die Demo dient ausschließlich zu Testzwecken. Bitte geben Sie nur fiktive Testdaten ein. Alle Daten werden stündlich automatisch gelöscht.
      </div>

      <h2>1. Verantwortlicher</h2>
      <p>Thorsten Ahrens<br />Serahr — serahr.de<br />E-Mail: kontakt@serahr.de</p>

      <h2>2. Überblick: Welche Daten werden verarbeitet?</h2>
      <p>SerahrRemind ist eine SaaS-Plattform für automatisierte Termin-Erinnerungen. In der Demo-Version werden folgende Daten verarbeitet:</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Daten</th><th>Speicherort</th><th>Zweck</th></tr></thead>
          <tbody>
            <tr><td>Demo-Zugangsdaten (E-Mail, Passwort)</td><td>Supabase (Frankfurt, DE)</td><td>Authentifizierung</td></tr>
            <tr><td>Eingegebene Patientendaten (Name, E-Mail, Telefon)</td><td>Supabase (Frankfurt, DE)</td><td>Demo-Funktionalität</td></tr>
            <tr><td>Termindaten (Datum, Uhrzeit, Art)</td><td>Supabase (Frankfurt, DE)</td><td>Demo-Funktionalität</td></tr>
            <tr><td>E-Mail-Erinnerungen</td><td>Resend (USA)</td><td>Versand von Demo-Erinnerungen</td></tr>
            <tr><td>Technische Zugriffsdaten (IP, Browser)</td><td>Vercel (USA)</td><td>Bereitstellung der Website</td></tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
        <strong>Demo-Besonderheit:</strong> Alle in der Demo eingegebenen Daten (Patienten, Termine, Erinnerungen) werden <strong>stündlich automatisch gelöscht</strong>. Die Demo-Accounts werden dabei auf den Ausgangszustand zurückgesetzt. SMS- und Telefonanruf-Funktionen sind in der Demo deaktiviert — es werden ausschließlich E-Mail-Erinnerungen versendet.
      </div>

      <h2>3. Datenverarbeitung im Detail</h2>

      <h3>3.1 Website-Besuch</h3>
      <p>Beim Besuch von serahrremind.serahr.de werden durch den Webserver automatisch erhoben:</p>
      <ul>
        <li>IP-Adresse (in Server-Logs)</li>
        <li>Browsertyp, Betriebssystem, Referrer-URL</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
      </ul>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung der Website). Es werden keine Tracking-Cookies oder Third-Party-Tracker eingesetzt.</p>

      <h3>3.2 Demo-Nutzung</h3>
      <p>Bei der Nutzung der Demo können Sie Testdaten eingeben:</p>
      <ul>
        <li><strong>Patientendaten:</strong> Name, E-Mail-Adresse, Telefonnummer (bitte nur fiktive Daten verwenden)</li>
        <li><strong>Termindaten:</strong> Datum, Uhrzeit, Terminart, zugeordneter Patient</li>
        <li><strong>Erinnerungen:</strong> Konfiguration von Erinnerungssequenzen</li>
      </ul>
      <p>Diese Daten werden in der Supabase-Datenbank (Region Frankfurt, Deutschland) gespeichert und <strong>stündlich automatisch gelöscht</strong>.</p>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung einer funktionsfähigen Demo).</p>

      <h3>3.3 E-Mail-Versand (Erinnerungen)</h3>
      <p>Wenn Sie in der Demo eine E-Mail-Erinnerung auslösen, wird eine E-Mail an die eingegebene Adresse versendet. Der Versand erfolgt über den Dienst <strong>Resend</strong> (Resend Inc., USA).</p>
      <ul>
        <li><strong>Übermittelte Daten:</strong> E-Mail-Adresse des Empfängers, Erinnerungstext (Vorname, Terminzeit)</li>
        <li><strong>Hinweis:</strong> Verwenden Sie bitte nur eigene oder fiktive E-Mail-Adressen</li>
      </ul>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Demonstration der Kernfunktionalität).</p>

      <h3>3.4 Deaktivierte Funktionen in der Demo</h3>
      <p>Folgende Kommunikationskanäle sind in der Demo aus Kostengründen deaktiviert:</p>
      <ul>
        <li><strong>SMS-Versand</strong> (regulär über Spryng B.V., Niederlande)</li>
        <li><strong>Telefonanrufe / Text-to-Speech</strong> (regulär über Microsoft Azure + Twilio)</li>
      </ul>
      <p>In der Vollversion stehen diese Kanäle zur Verfügung. Die zugehörigen Datenschutzinformationen werden in der Datenschutzerklärung der Vollversion beschrieben.</p>

      <h2>4. Cookies und lokale Speicherung</h2>
      <p>Die Anwendung verwendet ausschließlich technisch notwendige Cookies:</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Cookie / Speicher</th><th>Zweck</th><th>Dauer</th></tr></thead>
          <tbody>
            <tr><td>Session-Cookie (Supabase Auth)</td><td>Login-Session</td><td>Session / 7 Tage</td></tr>
            <tr><td>Sprachauswahl</td><td>DE/EN-Präferenz</td><td>1 Jahr</td></tr>
            <tr><td>Theme-Präferenz</td><td>Dark/Light Mode</td><td>1 Jahr</td></tr>
          </tbody>
        </table>
      </div>
      <p>Es werden keine Tracking-Cookies, Analyse-Tools oder Werbe-Tracker eingesetzt. Eine Einwilligung ist für technisch notwendige Cookies nicht erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG).</p>

      <h2>5. Aufbewahrungsfristen</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Daten</th><th>Frist</th></tr></thead>
          <tbody>
            <tr><td>Demo-Daten (Patienten, Termine, Erinnerungen)</td><td>Max. 1 Stunde (automatische Löschung)</td></tr>
            <tr><td>Server-Logs (Vercel)</td><td>30 Tage (Vercel-Standard)</td></tr>
            <tr><td>E-Mail-Versandprotokolle (Resend)</td><td>Gemäß Resend-Datenschutzrichtlinie</td></tr>
          </tbody>
        </table>
      </div>

      <h2>6. Ihre Rechte</h2>
      <p>Sie haben gemäß DSGVO folgende Rechte:</p>
      <ul>
        <li><strong>Auskunft</strong> (Art. 15) — Welche Daten über Sie gespeichert sind</li>
        <li><strong>Berichtigung</strong> (Art. 16) — Korrektur unrichtiger Daten</li>
        <li><strong>Löschung</strong> (Art. 17) — Löschung Ihrer Daten</li>
        <li><strong>Einschränkung</strong> (Art. 18) — Einschränkung der Verarbeitung</li>
        <li><strong>Datenübertragbarkeit</strong> (Art. 20) — Herausgabe in maschinenlesbarem Format</li>
        <li><strong>Widerspruch</strong> (Art. 21) — Widerspruch gegen die Verarbeitung</li>
      </ul>
      <p>Anfragen richten Sie bitte an kontakt@serahr.de. Da alle Demo-Daten stündlich gelöscht werden, sind in der Regel keine personenbezogenen Daten über die Löschfrist hinaus gespeichert.</p>

      <h2>7. Beschwerderecht</h2>
      <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.</p>

      <h2>8. Auftragsverarbeiter</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Dienstleister</th><th>Zweck</th><th>Sitz</th></tr></thead>
          <tbody>
            <tr><td><strong>Supabase, Inc.</strong></td><td>Datenbank und Authentifizierung</td><td>USA / EU-Region (Frankfurt)</td></tr>
            <tr><td><strong>Vercel, Inc.</strong></td><td>Hosting der Webanwendung</td><td>USA (EU-Standardvertragsklauseln)</td></tr>
            <tr><td><strong>Resend, Inc.</strong></td><td>E-Mail-Versand (Erinnerungen)</td><td>USA (EU-Standardvertragsklauseln)</td></tr>
            <tr><td><strong>netcup GmbH</strong></td><td>Domain-Hosting (serahr.de)</td><td>Deutschland</td></tr>
          </tbody>
        </table>
      </div>

      <h2>9. Änderungen</h2>
      <p>Diese Datenschutzerklärung kann bei Bedarf aktualisiert werden. Die aktuelle Version mit Datum finden Sie stets auf dieser Seite.</p>
    </>
  );
}

function DSERemindEN() {
  return (
    <>
      <p className="text-sm text-muted">Version 1.0 — effective from March 12, 2026</p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Note:</strong> This privacy policy applies to the publicly accessible demo version of SerahrRemind at serahrremind.serahr.de. The demo is for testing purposes only. Please enter only fictitious test data. All data is automatically deleted every hour.
      </div>

      <h2>1. Data Controller</h2>
      <p>Thorsten Ahrens<br />Serahr — serahr.de<br />Email: kontakt@serahr.de</p>

      <h2>2. Overview: What Data Is Processed?</h2>
      <p>SerahrRemind is a SaaS platform for automated appointment reminders. In the demo version, the following data is processed:</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Data</th><th>Storage Location</th><th>Purpose</th></tr></thead>
          <tbody>
            <tr><td>Demo credentials (email, password)</td><td>Supabase (Frankfurt, DE)</td><td>Authentication</td></tr>
            <tr><td>Entered patient data (name, email, phone)</td><td>Supabase (Frankfurt, DE)</td><td>Demo functionality</td></tr>
            <tr><td>Appointment data (date, time, type)</td><td>Supabase (Frankfurt, DE)</td><td>Demo functionality</td></tr>
            <tr><td>Email reminders</td><td>Resend (USA)</td><td>Sending demo reminders</td></tr>
            <tr><td>Technical access data (IP, browser)</td><td>Vercel (USA)</td><td>Website delivery</td></tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
        <strong>Demo specifics:</strong> All data entered in the demo (patients, appointments, reminders) is <strong>automatically deleted every hour</strong>. Demo accounts are reset to their initial state. SMS and phone call features are disabled in the demo — only email reminders are sent.
      </div>

      <h2>3. Data Processing in Detail</h2>

      <h3>3.1 Website Visits</h3>
      <p>When visiting serahrremind.serahr.de, the web server automatically collects:</p>
      <ul>
        <li>IP address (in server logs)</li>
        <li>Browser type, operating system, referrer URL</li>
        <li>Date and time of access</li>
      </ul>
      <p>Legal basis: Art. 6(1)(f) GDPR (legitimate interest in providing the website). No tracking cookies or third-party trackers are used.</p>

      <h3>3.2 Demo Usage</h3>
      <p>When using the demo, you can enter test data:</p>
      <ul>
        <li><strong>Patient data:</strong> Name, email address, phone number (please use only fictitious data)</li>
        <li><strong>Appointment data:</strong> Date, time, appointment type, assigned patient</li>
        <li><strong>Reminders:</strong> Configuration of reminder sequences</li>
      </ul>
      <p>This data is stored in the Supabase database (Frankfurt region, Germany) and <strong>automatically deleted every hour</strong>.</p>
      <p>Legal basis: Art. 6(1)(f) GDPR (legitimate interest in providing a functional demo).</p>

      <h3>3.3 Email Sending (Reminders)</h3>
      <p>When you trigger an email reminder in the demo, an email is sent to the entered address. Emails are sent via <strong>Resend</strong> (Resend Inc., USA).</p>
      <ul>
        <li><strong>Transmitted data:</strong> Recipient email address, reminder text (first name, appointment time)</li>
        <li><strong>Note:</strong> Please use only your own or fictitious email addresses</li>
      </ul>
      <p>Legal basis: Art. 6(1)(f) GDPR (legitimate interest in demonstrating core functionality).</p>

      <h3>3.4 Disabled Features in the Demo</h3>
      <p>The following communication channels are disabled in the demo for cost reasons:</p>
      <ul>
        <li><strong>SMS sending</strong> (normally via Spryng B.V., Netherlands)</li>
        <li><strong>Phone calls / Text-to-Speech</strong> (normally via Microsoft Azure + Twilio)</li>
      </ul>
      <p>These channels are available in the full version. The corresponding privacy information will be described in the full version&apos;s privacy policy.</p>

      <h2>4. Cookies and Local Storage</h2>
      <p>The application uses only technically necessary cookies:</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Cookie / Storage</th><th>Purpose</th><th>Duration</th></tr></thead>
          <tbody>
            <tr><td>Session cookie (Supabase Auth)</td><td>Login session</td><td>Session / 7 days</td></tr>
            <tr><td>Language preference</td><td>DE/EN preference</td><td>1 year</td></tr>
            <tr><td>Theme preference</td><td>Dark/Light mode</td><td>1 year</td></tr>
          </tbody>
        </table>
      </div>
      <p>No tracking cookies, analytics tools, or advertising trackers are used. No consent is required for technically necessary cookies (§ 25(2)(2) TDDDG).</p>

      <h2>5. Retention Periods</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Data</th><th>Period</th></tr></thead>
          <tbody>
            <tr><td>Demo data (patients, appointments, reminders)</td><td>Max. 1 hour (automatic deletion)</td></tr>
            <tr><td>Server logs (Vercel)</td><td>30 days (Vercel default)</td></tr>
            <tr><td>Email delivery logs (Resend)</td><td>Per Resend privacy policy</td></tr>
          </tbody>
        </table>
      </div>

      <h2>6. Your Rights</h2>
      <p>Under GDPR: Access (Art. 15), Rectification (Art. 16), Erasure (Art. 17), Restriction (Art. 18), Data portability (Art. 20), Objection (Art. 21).</p>
      <p>Direct requests to kontakt@serahr.de. Since all demo data is deleted hourly, typically no personal data is stored beyond the deletion period.</p>

      <h2>7. Right to Complain</h2>
      <p>You have the right to lodge a complaint with a data protection supervisory authority.</p>

      <h2>8. Processors</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Service Provider</th><th>Purpose</th><th>Location</th></tr></thead>
          <tbody>
            <tr><td><strong>Supabase, Inc.</strong></td><td>Database and authentication</td><td>USA / EU region (Frankfurt)</td></tr>
            <tr><td><strong>Vercel, Inc.</strong></td><td>Web application hosting</td><td>USA (EU SCCs)</td></tr>
            <tr><td><strong>Resend, Inc.</strong></td><td>Email sending (reminders)</td><td>USA (EU SCCs)</td></tr>
            <tr><td><strong>netcup GmbH</strong></td><td>Domain hosting (serahr.de)</td><td>Germany</td></tr>
          </tbody>
        </table>
      </div>

      <h2>9. Changes</h2>
      <p>This privacy policy may be updated as needed. The current version is always available on this page.</p>
    </>
  );
}
