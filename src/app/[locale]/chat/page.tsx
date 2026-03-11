import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "chat_page" });
  return { title: t("meta_title"), description: t("meta_description") };
}

export default function ChatPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  return (
    <ProductPage
      namespace="chat"
      appUrl="https://serahrchat.serahr.de"
      color="serahr-medium"
      features={[
        { key: "ai", icon: "🤖" },
        { key: "setup", icon: "⚡" },
        { key: "widget", icon: "🌐" },
        { key: "managed", icon: "🛡️" },
      ]}
    />
  );
}
