import { useTranslations, useLocale } from "next-intl";
import { getLegalDocument, formatLegalDate } from "@/data/legal-versions";
import { FileDown } from "lucide-react";

interface LegalArchiveProps {
  /** Slug matching legalDocuments entry, e.g. "agb/chat" */
  slug: string;
}

export default function LegalArchive({ slug }: LegalArchiveProps) {
  const t = useTranslations("legal_archive");
  const locale = useLocale();
  const doc = getLegalDocument(slug);

  if (!doc) return null;

  const hasArchive = doc.archive.length > 0;

  return (
    <div className="mt-12 border-t border-serahr-ice pt-8">
      {/* Current version info */}
      <p className="text-sm text-muted">
        {t("current_version", {
          version: doc.current.version,
          date: formatLegalDate(doc.current.validFrom, locale),
        })}
      </p>

      {/* Archived versions */}
      {hasArchive && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-serahr-deep">
            {t("archive_title")}
          </h2>
          <ul className="mt-3 space-y-2">
            {doc.archive.map((version) => (
              <li
                key={version.version}
                className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-serahr-ice bg-serahr-ice/20 px-4 py-3 text-sm"
              >
                <span className="font-medium text-serahr-deep">
                  {t("version_label", { version: version.version })}
                </span>
                <span className="text-muted">
                  {t("valid_period", {
                    from: formatLegalDate(version.validFrom, locale),
                    to: version.validTo
                      ? formatLegalDate(version.validTo, locale)
                      : t("today"),
                  })}
                </span>
                {version.pdf && (
                  <span className="flex gap-2">
                    <a
                      href={version.pdf.de}
                      download
                      className="inline-flex items-center gap-1 text-serahr-medium hover:text-serahr-deep"
                    >
                      <FileDown className="h-3.5 w-3.5" />
                      DE (PDF)
                    </a>
                    <a
                      href={version.pdf.en}
                      download
                      className="inline-flex items-center gap-1 text-serahr-medium hover:text-serahr-deep"
                    >
                      <FileDown className="h-3.5 w-3.5" />
                      EN (PDF)
                    </a>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
