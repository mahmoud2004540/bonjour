"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FR_GRAMMAR_TOPICS } from "@/domain/grammar/fr-topics";
import type { Locale } from "@/i18n/config";

export default function GrammarPage() {
  const t = useTranslations("grammar");
  const locale = useLocale() as Locale;

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-8 text-pretty">{t("subtitle")}</p>

      <ul className="space-y-4 mb-10">
        {FR_GRAMMAR_TOPICS.map((topic) => (
          <li key={topic.id}>
            <Card>
              <p className="text-caption text-ink-400 mb-1">{topic.level}</p>
              <h2 className="text-title-sm font-serif text-ink-950 mb-2">
                {topic.title[locale]}
              </h2>
              <p className="text-body text-ink-700 mb-4 text-pretty">
                {topic.summary[locale]}
              </p>
              <ul className="space-y-2 mb-4">
                {topic.examples.map((ex, i) => (
                  <li key={i} className="text-body-sm text-ink-800">
                    <span className="font-medium">{ex.fr}</span>
                    <span className="text-ink-500"> — {ex.gloss[locale]}</span>
                  </li>
                ))}
              </ul>
              <p className="text-caption text-ink-500 text-pretty">
                {t("mistakes")}: {topic.commonMistakes[locale]}
              </p>
            </Card>
          </li>
        ))}
      </ul>

      <Link href="/dashboard">
        <Button variant="ghost">{t("back")}</Button>
      </Link>
    </div>
  );
}
