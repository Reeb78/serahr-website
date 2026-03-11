import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PageLayout from "./PageLayout";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  const t = useTranslations("legal");

  return (
    <PageLayout>
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-serahr-deep"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t("back")}
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-serahr-deep sm:text-4xl">
            {title}
          </h1>
          <div className="mt-10 prose prose-zinc max-w-none text-muted leading-relaxed">
            {children || (
              <p className="rounded-2xl border border-serahr-ice bg-serahr-ice/30 p-8 text-center">
                {t("placeholder")}
              </p>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
