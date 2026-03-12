import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Activity, DoorOpen, Download, Share2 } from "lucide-react";
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
        { key: "realtime", icon: <Activity className="h-6 w-6 text-serahr-medium" /> },
        { key: "simple", icon: <DoorOpen className="h-6 w-6 text-serahr-medium" /> },
        { key: "history", icon: <Download className="h-6 w-6 text-serahr-medium" /> },
        { key: "share", icon: <Share2 className="h-6 w-6 text-serahr-medium" /> },
      ]}
    />
  );
}
