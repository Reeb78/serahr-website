import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";

const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/remind", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/chat", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/datenschutz/remind", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/datenschutz/chat", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/agb/chat", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/dokumentation/chat", priority: 0.5, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_URL}/${l}${page.path}`])
        ),
      },
    }))
  );
}
