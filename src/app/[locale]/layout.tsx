import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const otherLocale = locale === "de" ? "en" : "de";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: `%s | Serahr`,
    },
    description: t("description"),
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      siteName: "Serahr",
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary",
    },
    alternates: {
      languages: {
        [locale]: `/${locale}`,
        [otherLocale]: `/${otherLocale}`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Serahr",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      locale === "de"
        ? "Individuelle Softwareentwicklung — Prototyping für Softwarelösungen"
        : "Custom Software Development — Prototyping for Software Solutions",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zillestr. 75",
      addressLocality: "Köln",
      postalCode: "51067",
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@serahr.de",
      contactType: "customer service",
      availableLanguage: ["German", "English"],
    },
  };

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} font-sans antialiased`}
      >
        <JsonLd data={organizationLd} />
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
