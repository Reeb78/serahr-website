/**
 * Legal Document Version Tracking
 *
 * Workflow when updating a legal document:
 * 1. Open the current live page in the browser (DE + EN)
 * 2. Print to PDF (Browser → Print → Save as PDF)
 * 3. Save as: public/legal/archive/{slug}-v{version}-{locale}.pdf
 *    Example: agb-chat-v1.0-de.pdf, agb-chat-v1.0-en.pdf
 * 4. Move the current version to archive[] with validTo date
 * 5. Add new current version with new validFrom date
 * 6. Update the document content in the page file
 */

export interface LegalVersion {
  version: string;
  validFrom: string; // YYYY-MM-DD
  validTo?: string; // YYYY-MM-DD — undefined = current version
  pdf?: {
    de: string; // path relative to /public
    en: string;
  };
}

export interface LegalDocument {
  /** URL slug used for routing, e.g. "agb/chat" */
  slug: string;
  /** Display label (used as fallback, pages use translations) */
  label: { de: string; en: string };
  /** Current active version */
  current: LegalVersion;
  /** Archived versions, newest first */
  archive: LegalVersion[];
}

export const legalDocuments: LegalDocument[] = [
  {
    slug: "agb/chat",
    label: {
      de: "AGB — SerahrChat",
      en: "Terms — SerahrChat",
    },
    current: {
      version: "1.0",
      validFrom: "2026-04-01",
    },
    archive: [],
  },
  {
    slug: "datenschutz",
    label: {
      de: "Datenschutzerklärung",
      en: "Privacy Policy",
    },
    current: {
      version: "1.0",
      validFrom: "2026-02-01",
    },
    archive: [],
  },
  {
    slug: "datenschutz/chat",
    label: {
      de: "Datenschutzerklärung — SerahrChat",
      en: "Privacy Policy — SerahrChat",
    },
    current: {
      version: "1.1",
      validFrom: "2026-04-01",
    },
    archive: [],
  },
  {
    slug: "datenschutz/remind",
    label: {
      de: "Datenschutzerklärung — SerahrRemind",
      en: "Privacy Policy — SerahrRemind",
    },
    current: {
      version: "1.0",
      validFrom: "2026-03-12",
    },
    archive: [],
  },
];

/** Find a legal document by its slug */
export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments.find((doc) => doc.slug === slug);
}

/** Format a date string (YYYY-MM-DD) for display */
export function formatLegalDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString(locale === "de" ? "de-DE" : "en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
