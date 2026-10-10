"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-4">{t("title")}</h1>
      <p className="text-body-lg text-ink-600 mb-10 text-pretty">{t("intro")}</p>

      <section className="mb-10">
        <h2 className="text-title-sm font-serif text-ink-950 mb-3">{t("whyTitle")}</h2>
        <p className="text-body text-ink-600 text-pretty">{t("whyBody")}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-title-sm font-serif text-ink-950 mb-3">{t("howTitle")}</h2>
        <ol className="space-y-3 list-decimal list-inside text-body text-ink-700">
          <li>{t("how1")}</li>
          <li>{t("how2")}</li>
          <li>{t("how3")}</li>
          <li>{t("how4")}</li>
          <li>{t("how5")}</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-title-sm font-serif text-ink-950 mb-3">{t("honestTitle")}</h2>
        <p className="text-body text-ink-600 text-pretty">{t("honestBody")}</p>
      </section>

      <Link href="/onboarding">
        <Button variant="accent">{t("cta")}</Button>
      </Link>
    </div>
  );
}
