import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/LegalPage";

export default function AGBCountPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("legal");

  return (
    <LegalPage title={t("terms_title", { product: "SerahrCount" })} />
  );
}
