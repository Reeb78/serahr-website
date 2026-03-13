"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function LifetimeCounter() {
  const t = useTranslations("chat_page");
  const [data, setData] = useState<{ remaining: number; limit: number } | null>(null);

  useEffect(() => {
    fetch("/api/lifetime-remaining")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && d.available && setData({ remaining: d.remaining, limit: d.limit }))
      .catch(() => {});
  }, []);

  if (!data) return null;

  return (
    <p className="mt-3 text-xs font-medium text-serahr-bright">
      {t("pricing.lifetime_remaining", { remaining: data.remaining, limit: data.limit })}
    </p>
  );
}
