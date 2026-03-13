import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: getAlternates("/kontakt"),
  };
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
