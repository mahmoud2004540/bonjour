"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAllChapters } from "@/domain/academic/chapters";
import type { Locale } from "@/i18n/config";

export default function AcademicIndexPage() {
  const t = useTranslations("academic");
  const locale = useLocale() as Locale;
  const chapters = getAllChapters();

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20 scene-3d">
      <p className="text-overline text-accent-700 mb-2">{t("eyebrow")}</p>
      <h1 className="text-title font-serif text-ink-950 mb-3">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-2 text-pretty max-w-2xl">{t("subtitle")}</p>
      <p className="text-body-sm text-ink-500 mb-10 text-pretty max-w-2xl">{t("onsite")}</p>

      <ul className="space-y-4 mb-12">
        {chapters.map((ch) => (
          <li key={ch.id}>
            <Card className="layer-stack">
              <p className="text-caption text-ink-400 mb-1">{ch.level}</p>
              <h2 className="text-title-sm font-serif text-ink-950 mb-2">
                {ch.title[locale]}
              </h2>
              <p className="text-body-sm text-ink-600 mb-4 line-clamp-2 text-pretty">
                {ch.theory[locale]}
              </p>
              <Link href={`/academic/${ch.id}`}>
                <Button variant="accent">{t("openChapter")}</Button>
              </Link>
            </Card>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3">
        <Link href="/dashboard">
          <Button variant="secondary">{t("toDashboard")}</Button>
        </Link>
        <Link href="/academy">
          <Button variant="ghost">{t("toAcademy")}</Button>
        </Link>
      </div>
    </div>
  );
}
