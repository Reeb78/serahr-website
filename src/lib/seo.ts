import { routing } from "@/i18n/routing";

export const SITE_URL = "https://serahr.de";

export function getAlternates(path: string) {
  return {
    canonical: `${SITE_URL}${path}`,
    languages: Object.fromEntries(
      routing.locales.map((locale) => [locale, `/${locale}${path}`])
    ),
  };
}
