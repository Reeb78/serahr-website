import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Bot, Zap, Globe, Shield } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import JsonLd from "@/components/JsonLd";
import { getAlternates, SITE_URL } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "chat_page" });
  return { title: t("meta_title"), description: t("meta_description"), alternates: getAlternates("/chat") };
}

export default async function ChatPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "chat_page" });

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [1, 2, 3, 4].map((n) => ({
      "@type": "Question",
      name: t(`faq.q${n}`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`faq.a${n}`),
      },
    })),
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SerahrChat",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}/${locale}/chat`,
    description: t("meta_description"),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "29",
      highPrice: "49",
      offerCount: "2",
    },
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={productLd} />
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
    </>
  );
}
