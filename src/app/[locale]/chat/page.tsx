import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Bot, Zap, Globe, Shield } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "chat_page" });
  return { title: t("meta_title"), description: t("meta_description"), alternates: getAlternates("/chat") };
}

export default function ChatPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  return (
    <ProductPage
      namespace="chat"
      appUrl="https://serahrchat.serahr.de"
      color="serahr-medium"
      hasDocumentation
      hasFaq
      isBeta
      features={[
        { key: "ai", icon: <Bot className="h-6 w-6 text-serahr-medium" /> },
        { key: "setup", icon: <Zap className="h-6 w-6 text-serahr-medium" /> },
        { key: "widget", icon: <Globe className="h-6 w-6 text-serahr-medium" /> },
        { key: "managed", icon: <Shield className="h-6 w-6 text-serahr-medium" /> },
      ]}
      pricingTiers={[
        { key: "basis" },
        { key: "pro", isPopular: true },
        { key: "lifetime", isLifetime: true },
      ]}
    />
  );
}
