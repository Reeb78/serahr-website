import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import LegalPage from "@/components/LegalPage";
import EnglishDisclaimer from "@/components/EnglishDisclaimer";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return { title: t("docs_product_title", { product: "SerahrChat" }), description: t("docs_product_description", { product: "SerahrChat" }), alternates: getAlternates("/dokumentation/chat") };
}

export default async function DokumentationChatPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal" });

  if (locale === "en") {
    return (
      <LegalPage title={t("docs_product_title", { product: "SerahrChat" })} slug="chat" hasDocumentation>
        <DoksChatEN />
      </LegalPage>
    );
  }

  return (
    <LegalPage title={t("docs_product_title", { product: "SerahrChat" })} slug="chat" hasDocumentation>
      <DoksChatDE />
    </LegalPage>
  );
}

function DoksChatDE() {
  return (
    <>
      <p>Diese Anleitung richtet sich an Administratoren, die SerahrChat auf einem eigenen Server installieren möchten. Technische Vorkenntnisse sind nicht erforderlich — die Installation ist weitgehend automatisiert.</p>

      <h2>1. Systemvoraussetzungen</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Anforderung</th><th>Minimum</th><th>Empfohlen</th></tr></thead>
          <tbody>
            <tr><td>Betriebssystem</td><td>Linux (x86_64)</td><td>Ubuntu 22.04 / Debian 12</td></tr>
            <tr><td>RAM</td><td>2 GB</td><td>4 GB</td></tr>
            <tr><td>Festplatte</td><td>1 GB frei</td><td>10 GB frei</td></tr>
            <tr><td>CPU</td><td>1 vCPU</td><td>2 vCPU</td></tr>
            <tr><td>Ports</td><td>80, 443 frei</td><td></td></tr>
            <tr><td>Netzwerk</td><td>Ausgehender HTTPS-Zugang</td><td></td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Software</strong> (wird bei Bedarf automatisch installiert): Docker &gt;= 20.x, Docker Compose v2, git, curl</p>
      <p><strong>Zusätzlich benötigt:</strong></p>
      <ul>
        <li>Eine Domain oder Subdomain (z.B. <code>chat.meinefirma.de</code>), die per DNS auf den Server zeigt</li>
        <li>Einen OpenRouter API-Key — <em>oder</em> ein lokales KI-Modell mit Ollama oder LM Studio</li>
        <li>Optional: Einen SerahrChat-Lizenzschlüssel (ohne startet eine 7-Tage-Testversion)</li>
      </ul>

      <h2>2. Server vorbereiten</h2>
      <p>Wir empfehlen <strong>Hetzner Cloud</strong> als Hosting-Anbieter: Ein <strong>CX23</strong> genügt (2 vCPU, 4 GB RAM, 40 GB SSD, ab ca. 4 EUR/Monat). Rechenzentrum in Deutschland.</p>
      <p>Jeder Linux-Server mit den oben genannten Mindestvoraussetzungen ist geeignet. Stellen Sie sicher, dass Ports 80 und 443 in der Firewall geöffnet sind und SSH-Zugang besteht.</p>
      <p><strong>DNS einrichten:</strong> Erstellen Sie bei Ihrem Domain-Provider einen A-Record, der Ihre Subdomain auf die Server-IP zeigt.</p>

      <h2>3. Mit dem Server verbinden (SSH)</h2>
      <p>Öffnen Sie ein Terminal (Windows: PowerShell, macOS/Linux: Terminal) und verbinden Sie sich mit Ihrem Server:</p>
      <pre><code>ssh root@&lt;Server-IP&gt;</code></pre>
      <p>Ersetzen Sie <code>&lt;Server-IP&gt;</code> durch die IP-Adresse Ihres Servers, z.B. <code>ssh root@49.12.234.56</code></p>
      <p>Falls Sie einen eigenen SSH-Key verwenden (z.B. <code>id_serahr</code>), geben Sie den Pfad an:</p>
      <pre><code>ssh -i ~/.ssh/id_serahr root@&lt;Server-IP&gt;</code></pre>
      <p>Beim ersten Verbinden erscheint eine Sicherheitsabfrage — mit <code>yes</code> bestätigen.</p>

      <h2>4. Installation</h2>
      <p>Auf dem Server angekommen, führen Sie folgenden Befehl aus:</p>
      <pre><code>curl -fsSL https://update.serahr.de/serahrchat/preflight.sh | sudo bash -s -- --install</code></pre>
      <p>Das Script prüft automatisch alle Voraussetzungen (Docker, RAM, Ports, etc.) und führt die Installation durch:</p>
      <ol>
        <li>Installiert Docker und git (falls nötig)</li>
        <li>Erstellt Verzeichnisse unter <code>/opt/serahrchat/</code></li>
        <li>Generiert einen Master Key (Verschlüsselungsschlüssel für Ihre Dokumente)</li>
        <li>Fragt nach dem Lizenzschlüssel (oder startet eine 7-Tage-Testversion)</li>
        <li>Baut und startet die Docker-Container</li>
      </ol>
      <p>Am Ende erhalten Sie die URL zum Admin-Panel und ein initiales Passwort. <strong>Notieren Sie sich dieses Passwort!</strong></p>

      <h2>5. HTTPS aktivieren</h2>
      <p>HTTPS ist für den Produktivbetrieb erforderlich. Das Setup nutzt kostenlose Let&apos;s Encrypt Zertifikate, die automatisch erneuert werden.</p>
      <p><strong>Voraussetzung:</strong> Ihre Domain muss per DNS bereits auf den Server zeigen (A-Record). Falls Sie den DNS-Eintrag gerade erst erstellt haben, warten Sie bis zu 30 Minuten.</p>
      <p>Das Script erwartet zwei Angaben:</p>
      <ul>
        <li><strong>Domain</strong> — Die Domain unter der SerahrChat erreichbar sein soll (ohne <code>https://</code>)</li>
        <li><strong>E-Mail</strong> — Ihre E-Mail-Adresse für Zertifikats-Benachrichtigungen von Let&apos;s Encrypt</li>
      </ul>
      <pre><code>sudo bash /opt/serahrchat/scripts/setup-tls.sh &lt;Ihre-Domain&gt; &lt;Ihre-E-Mail&gt;</code></pre>
      <p><strong>Beispiel:</strong></p>
      <pre><code>sudo bash /opt/serahrchat/scripts/setup-tls.sh chat.meinefirma.de admin@meinefirma.de</code></pre>
      <p>Das Script beantragt ein TLS-Zertifikat, konfiguriert nginx für HTTPS und richtet automatische Zertifikatserneuerung ein. HTTP wird automatisch auf HTTPS umgeleitet.</p>

      <h2>6. Setup-Wizard</h2>
      <p>Öffnen Sie <code>https://chat.meinefirma.de/admin/ui/</code> im Browser und melden Sie sich mit dem initialen Passwort an. Der Setup-Wizard führt Sie durch:</p>
      <ol>
        <li><strong>Passwort ändern</strong> — Vergeben Sie ein sicheres Passwort</li>
        <li><strong>KI-Anbieter wählen</strong> — OpenRouter (empfohlen), OpenAI, Mistral oder lokal (Ollama / LM Studio)</li>
        <li><strong>API-Key eingeben</strong> — Ihren Schlüssel vom gewählten Anbieter</li>
        <li><strong>KI-Modell wählen</strong> — Schnell &amp; günstig, ausgewogen oder höchste Qualität</li>
        <li><strong>Dokumente hochladen</strong> — PDFs, Word-Dateien oder Textdokumente</li>
        <li><strong>Test</strong> — Stellen Sie eine Frage, um die Antwortqualität zu prüfen</li>
      </ol>

      <h2>7. Widget einbetten</h2>
      <p>Fügen Sie folgenden Code in Ihre Website ein (vor <code>&lt;/body&gt;</code>). Für WordPress gibt es ein fertiges Plugin (siehe unten).</p>
      <p><strong>HTML / statische Websites:</strong></p>
      <pre><code>{`<script
  src="https://chat.meinefirma.de/embed/widget.js"
  data-instance="https://chat.meinefirma.de"
  data-position="bottom-right"
  data-color="#2563eb"
></script>`}</code></pre>
      <p><strong>Next.js / React</strong> — in Ihre <code>layout.tsx</code>:</p>
      <pre><code>{`import Script from 'next/script'

<Script
  src="https://chat.meinefirma.de/embed/widget.js"
  data-instance="https://chat.meinefirma.de"
  data-position="bottom-right"
  data-color="#2563eb"
  strategy="lazyOnload"
/>`}</code></pre>
      <p><strong>WordPress:</strong> Installieren Sie das SerahrChat-Plugin unter Plugins → Installieren → Plugin hochladen, und tragen Sie die URL Ihrer Instanz unter Einstellungen → SerahrChat ein.</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Parameter</th><th>Beschreibung</th><th>Standard</th></tr></thead>
          <tbody>
            <tr><td><code>data-instance</code></td><td>URL Ihrer SerahrChat-Instanz</td><td><em>erforderlich</em></td></tr>
            <tr><td><code>data-position</code></td><td><code>bottom-right</code> oder <code>bottom-left</code></td><td><code>bottom-right</code></td></tr>
            <tr><td><code>data-color</code></td><td>Farbe des Buttons (Hex-Code)</td><td><code>#2563eb</code></td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>CORS:</strong> Falls das Widget auf einer anderen Domain eingebettet wird (z.B. Instanz auf <code>chat.meinefirma.de</code>, Widget auf <code>www.meinefirma.de</code>), tragen Sie die Widget-Domain im Admin-Bereich unter Einstellungen als erlaubte Herkunft ein.</p>

      <h2>8. Lokales KI-Modell mit Ollama oder LM Studio (optional)</h2>
      <p>Anstatt einen Cloud-Dienst zu nutzen, können Sie ein KI-Modell direkt auf Ihrem Server betreiben — <strong>keine API-Kosten</strong>, <strong>100% Datensouveränität</strong>, keine Abhängigkeit von externen Diensten.</p>
      <p><strong>Wichtiger Hinweis zu den Hardware-Anforderungen:</strong> Lokale KI-Modelle benötigen eine <strong>dedizierte Grafikkarte (GPU) mit eigenem Grafikspeicher (VRAM)</strong>. VRAM ist <em>nicht</em> dasselbe wie der normale Arbeitsspeicher (RAM) Ihres Servers. Herkömmliche Cloud-Server (z.B. Hetzner CX- oder CPX-Reihe) verfügen <strong>nicht</strong> über eine GPU und sind für lokale KI-Modelle nicht geeignet.</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>GPU-Grafikspeicher (VRAM)</th><th>Geeignete Modelle</th><th>Antwortqualität</th></tr></thead>
          <tbody>
            <tr><td>4 GB</td><td>Gemma 2B, Phi-3 Mini</td><td>Einfache FAQs</td></tr>
            <tr><td>8 GB</td><td>Mistral 7B, Llama 3.1 8B</td><td>Gute Qualität</td></tr>
            <tr><td>16 GB+</td><td>Mistral Small, Llama 3.1 70B</td><td>Sehr gute Qualität</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Ollama</h3>
      <pre><code>{`# Ollama installieren
curl -fsSL https://ollama.com/install.sh | sh

# Empfohlenes Modell herunterladen
ollama pull mistral

# Embedding-Modell herunterladen
ollama pull nomic-embed-text`}</code></pre>

      <h3>LM Studio</h3>
      <p>Alternativ können Sie LM Studio verwenden. Laden Sie die Software herunter, wählen Sie ein Modell aus dem integrierten Katalog und starten Sie den lokalen Server. LM Studio bietet eine grafische Oberfläche und ist besonders für Einsteiger geeignet.</p>
      <p>Wählen Sie anschließend im Admin-Panel unter Einstellungen → API-Provider <strong>Ollama (Lokal)</strong> oder <strong>LM Studio</strong> aus.</p>

      <h2>9. Backup und Wiederherstellung</h2>
      <p>Bei der Installation wird ein <strong>tägliches automatisches Backup</strong> eingerichtet. Es sichert die Datenbank, den Suchindex und alle Dokumente. Die letzten 3 Backups werden aufbewahrt.</p>
      <pre><code>{`# Backup wiederherstellen
bash /opt/serahrchat/scripts/restore.sh`}</code></pre>

      <h2>10. Updates</h2>
      <p><strong>Sicherheitsupdates</strong> werden automatisch im Hintergrund installiert. <strong>Feature-Updates</strong> und Bugfixes werden im Admin-Panel unter System angezeigt und per Klick installiert.</p>
      <p>Falls ein Update fehlschlägt, wird <strong>automatisch</strong> auf die letzte funktionierende Version zurückgerollt. Sie müssen nichts tun — kein SSH-Zugang erforderlich.</p>

      <h2>11. DSGVO-Textbaustein</h2>
      <p>Wenn Sie SerahrChat auf Ihrer Website einsetzen, nehmen Sie folgenden Textbaustein in Ihre Datenschutzerklärung auf (markierte Stellen anpassen):</p>
      <blockquote>
        <p><strong>KI-gestützter FAQ-Assistent</strong></p>
        <p>Auf unserer Website setzen wir einen KI-gestützten FAQ-Assistenten (SerahrChat) ein. Der Assistent beantwortet Ihre Fragen auf Basis unserer hinterlegten Dokumente.</p>
        <p><strong>Datenverarbeitung:</strong> Ihre Eingaben werden direkt auf unserem eigenen Server verarbeitet. Die Daten verlassen unseren Server nur für die Anfrage an den KI-Sprachdienst (OpenRouter / [ANBIETER EINTRAGEN]).</p>
        <p><strong>Gespeicherte Daten:</strong> Chat-Verläufe werden anonymisiert gespeichert und nach 90 Tagen automatisch gelöscht. IP-Adressen werden anonymisiert (letztes Oktett = 0).</p>
        <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
      </blockquote>
      <p><em>Dieser Textbaustein ist ein Formulierungsvorschlag und ersetzt keine Rechtsberatung.</em></p>

      <h2>12. Fehlerbehebung</h2>
      <p><strong>Seite nicht erreichbar:</strong> Warten Sie 1–2 Minuten nach einem Update. Prüfen Sie <code>/health</code> — sollte &quot;ok&quot; anzeigen.</p>
      <p><strong>Widget antwortet nicht:</strong> Prüfen Sie <code>data-instance</code> im Widget-Code (kein abschließendes <code>/</code>). Prüfen Sie CORS im Admin-Bereich.</p>
      <p><strong>Chat antwortet mit Fehler:</strong> Prüfen Sie Ihr API-Guthaben beim LLM-Anbieter und das monatliche Budget im Admin-Bereich.</p>

      <h2>13. Support</h2>
      <p><strong>Support-Reaktionszeiten:</strong> Basis-Plan: 72 Stunden — Pro-/Lifetime-Plan: 24 Stunden (Werktage Mo–Fr).</p>
    </>
  );
}

function DoksChatEN() {
  return (
    <>
      <p>This guide is intended for administrators who want to install SerahrChat on their own server. No technical expertise is required — the installation is largely automated.</p>

      <h2>1. System Requirements</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Requirement</th><th>Minimum</th><th>Recommended</th></tr></thead>
          <tbody>
            <tr><td>Operating System</td><td>Linux (x86_64)</td><td>Ubuntu 22.04 / Debian 12</td></tr>
            <tr><td>RAM</td><td>2 GB</td><td>4 GB</td></tr>
            <tr><td>Disk Space</td><td>1 GB free</td><td>10 GB free</td></tr>
            <tr><td>CPU</td><td>1 vCPU</td><td>2 vCPU</td></tr>
            <tr><td>Ports</td><td>80, 443 open</td><td></td></tr>
            <tr><td>Network</td><td>Outbound HTTPS access</td><td></td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Software</strong> (installed automatically if needed): Docker &gt;= 20.x, Docker Compose v2, git, curl</p>
      <p><strong>Additionally required:</strong></p>
      <ul>
        <li>A domain or subdomain (e.g. <code>chat.mycompany.com</code>) with DNS pointing to the server</li>
        <li>An OpenRouter API key — <em>or</em> a local AI model with Ollama or LM Studio</li>
        <li>Optional: A SerahrChat license key (without one, a 7-day free trial starts)</li>
      </ul>

      <h2>2. Server Setup</h2>
      <p>We recommend <strong>Hetzner Cloud</strong>: A <strong>CX23</strong> is sufficient (2 vCPU, 4 GB RAM, 40 GB SSD, from approx. EUR 4/month). Data center in Germany.</p>
      <p><strong>DNS setup:</strong> Create an A record at your domain provider pointing your subdomain to the server IP.</p>

      <h2>3. Connect to Server (SSH)</h2>
      <p>Open a terminal (Windows: PowerShell, macOS/Linux: Terminal) and connect to your server:</p>
      <pre><code>ssh root@&lt;Server-IP&gt;</code></pre>
      <p>Replace <code>&lt;Server-IP&gt;</code> with your server&apos;s IP address, e.g. <code>ssh root@49.12.234.56</code></p>
      <p>If you use a custom SSH key (e.g. <code>id_serahr</code>), specify the path:</p>
      <pre><code>ssh -i ~/.ssh/id_serahr root@&lt;Server-IP&gt;</code></pre>
      <p>On first connection, confirm the security prompt with <code>yes</code>.</p>

      <h2>4. Installation</h2>
      <p>Once connected, run the following command:</p>
      <pre><code>curl -fsSL https://update.serahr.de/serahrchat/preflight.sh | sudo bash -s -- --install</code></pre>
      <ol>
        <li>Installs Docker and git (if needed)</li>
        <li>Creates directories under <code>/opt/serahrchat/</code></li>
        <li>Generates a Master Key (encryption key for your documents)</li>
        <li>Prompts for the license key (or starts a 7-day trial)</li>
        <li>Builds and starts the Docker containers</li>
      </ol>
      <p>At the end you will receive the admin panel URL and an initial password. <strong>Save this password!</strong></p>

      <h2>5. Enable HTTPS</h2>
      <p>HTTPS is required for production use. The setup uses free Let&apos;s Encrypt certificates that renew automatically.</p>
      <p><strong>Prerequisite:</strong> Your domain must already point to the server via DNS (A record). If you just created the DNS entry, wait up to 30 minutes.</p>
      <p>The script requires two parameters:</p>
      <ul>
        <li><strong>Domain</strong> — The domain where SerahrChat should be accessible (without <code>https://</code>)</li>
        <li><strong>Email</strong> — Your email address for certificate notifications from Let&apos;s Encrypt</li>
      </ul>
      <pre><code>sudo bash /opt/serahrchat/scripts/setup-tls.sh &lt;your-domain&gt; &lt;your-email&gt;</code></pre>
      <p><strong>Example:</strong></p>
      <pre><code>sudo bash /opt/serahrchat/scripts/setup-tls.sh chat.mycompany.com admin@mycompany.com</code></pre>
      <p>The script requests a TLS certificate, configures nginx for HTTPS, and sets up automatic certificate renewal. HTTP is automatically redirected to HTTPS.</p>

      <h2>6. Setup Wizard</h2>
      <ol>
        <li><strong>Change password</strong> — Set a secure password</li>
        <li><strong>Choose AI provider</strong> — OpenRouter (recommended), OpenAI, Mistral, or local (Ollama / LM Studio)</li>
        <li><strong>Enter API key</strong> — Your key from the chosen provider</li>
        <li><strong>Choose AI model</strong> — Fast &amp; cheap, balanced, or highest quality</li>
        <li><strong>Upload documents</strong> — PDFs, Word files, or text documents</li>
        <li><strong>Test</strong> — Ask a question to verify answer quality</li>
      </ol>

      <h2>7. Embed Widget</h2>
      <p>Add the following code to your website (before <code>&lt;/body&gt;</code>). A WordPress plugin is also available (see below).</p>
      <p><strong>HTML / static websites:</strong></p>
      <pre><code>{`<script
  src="https://chat.mycompany.com/embed/widget.js"
  data-instance="https://chat.mycompany.com"
  data-position="bottom-right"
  data-color="#2563eb"
></script>`}</code></pre>
      <p><strong>Next.js / React</strong> — in your <code>layout.tsx</code>:</p>
      <pre><code>{`import Script from 'next/script'

<Script
  src="https://chat.mycompany.com/embed/widget.js"
  data-instance="https://chat.mycompany.com"
  data-position="bottom-right"
  data-color="#2563eb"
  strategy="lazyOnload"
/>`}</code></pre>
      <p><strong>WordPress:</strong> Install the SerahrChat plugin via Plugins → Add New → Upload Plugin, then enter your instance URL under Settings → SerahrChat.</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Parameter</th><th>Description</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>data-instance</code></td><td>URL of your SerahrChat instance</td><td><em>required</em></td></tr>
            <tr><td><code>data-position</code></td><td><code>bottom-right</code> or <code>bottom-left</code></td><td><code>bottom-right</code></td></tr>
            <tr><td><code>data-color</code></td><td>Button color (hex code)</td><td><code>#2563eb</code></td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>CORS:</strong> If the widget is embedded on a different domain (e.g. instance on <code>chat.mycompany.com</code>, widget on <code>www.mycompany.com</code>), add the widget domain as an allowed origin in the admin panel under Settings.</p>

      <h2>8. Local AI Model with Ollama or LM Studio (optional)</h2>
      <p><strong>Important note on hardware requirements:</strong> Local AI models require a <strong>dedicated graphics card (GPU) with its own graphics memory (VRAM)</strong>. Standard cloud servers do <strong>not</strong> have a GPU.</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>GPU Memory (VRAM)</th><th>Suitable Models</th><th>Answer Quality</th></tr></thead>
          <tbody>
            <tr><td>4 GB</td><td>Gemma 2B, Phi-3 Mini</td><td>Simple FAQs</td></tr>
            <tr><td>8 GB</td><td>Mistral 7B, Llama 3.1 8B</td><td>Good quality</td></tr>
            <tr><td>16 GB+</td><td>Mistral Small, Llama 3.1 70B</td><td>Very good quality</td></tr>
          </tbody>
        </table>
      </div>
      <h3>Ollama</h3>
      <pre><code>{`# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Download recommended model
ollama pull mistral

# Download embedding model
ollama pull nomic-embed-text`}</code></pre>
      <h3>LM Studio</h3>
      <p>Alternatively, use LM Studio. Download the software, choose a model from the built-in catalog, and start the local server.</p>

      <h2>9. Backup and Restore</h2>
      <p>A <strong>daily automatic backup</strong> is configured during installation. The last 3 backups are retained.</p>
      <pre><code>bash /opt/serahrchat/scripts/restore.sh</code></pre>

      <h2>10. Updates</h2>
      <p><strong>Security updates</strong> are installed automatically. <strong>Feature updates</strong> are shown in the admin panel and installed with a single click. Failed updates automatically roll back.</p>

      <h2>11. GDPR Template</h2>
      <p>If you use SerahrChat on your website, include the following template in your privacy policy:</p>
      <blockquote>
        <p><strong>AI-Powered FAQ Assistant</strong></p>
        <p>Our website uses an AI-powered FAQ assistant (SerahrChat) that answers questions based on our uploaded documents.</p>
        <p><strong>Data processing:</strong> Your inputs are processed directly on our own server. Data only leaves our server for the query to the AI language service.</p>
        <p><strong>Stored data:</strong> Chat histories are stored anonymously and automatically deleted after 90 days.</p>
        <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest).</p>
      </blockquote>
      <p><em>This template is a suggested wording and does not constitute legal advice.</em></p>

      <h2>12. Troubleshooting</h2>
      <p><strong>Site not reachable:</strong> Wait 1–2 minutes after an update. Check <code>/health</code>.</p>
      <p><strong>Widget not responding:</strong> Check <code>data-instance</code> (no trailing <code>/</code>). Check CORS settings.</p>
      <p><strong>Chat returns error:</strong> Check your API balance and monthly budget in the admin panel.</p>

      <h2>13. Support</h2>
      <p><strong>Support response times:</strong> Basis plan: 72 hours — Pro/Lifetime plan: 24 hours (business days Mon–Fri).</p>
    </>
  );
}
