import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "count_page" });
  return { title: t("meta_title"), description: t("meta_description") };
}

export default function CountPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  return (
    <ProductPage
      namespace="count"
      appUrl="https://serahrcount.serahr.de"
      color="serahr-deep"
      features={[
        { key: "realtime", icon: "📊" },
        { key: "simple", icon: "👆" },
        { key: "history", icon: "📅" },
        { key: "share", icon: "🔗" },
      ]}
    />
  );
}
