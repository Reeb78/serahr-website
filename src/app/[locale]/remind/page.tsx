import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "remind_page" });
  return { title: t("meta_title"), description: t("meta_description") };
}

export default function RemindPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  return (
    <ProductPage
      namespace="remind"
      appUrl="https://remindme.serahr.de"
      color="serahr-bright"
      features={[
        { key: "sms", icon: "📱" },
        { key: "timing", icon: "⏰" },
        { key: "integration", icon: "🚀" },
        { key: "analytics", icon: "📈" },
      ]}
    />
  );
}
