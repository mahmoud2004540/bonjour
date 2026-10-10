"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  getPublishedScenarios,
  getGoalsForScenario,
} from "@/domain/curriculum/registry";
import type { Locale } from "@/i18n/config";

export default function ScenariosPage() {
  const t = useTranslations("scenarios");
  const locale = useLocale() as Locale;
  const scenarios = getPublishedScenarios();

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-10 text-pretty">{t("subtitle")}</p>

      <ul className="space-y-4 mb-12">
        {scenarios.map((s) => {
          const goals = getGoalsForScenario(s.id);
          return (
            <li key={s.id}>
              <Card>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-caption text-ink-400 mb-1">{s.level}</p>
                    <h2 className="text-title-sm font-serif text-ink-950 mb-1">
                      {s.title[locale]}
                    </h2>
                    <p className="text-body-sm text-ink-600 mb-3">
                      {s.description[locale]}
                    </p>
                    <p className="text-caption text-ink-400">
                      {t("goalsCount", { count: goals.length })}
                    </p>
                  </div>
                  <Link href="/onboarding">
                    <Button variant="secondary" size="sm">
                      {t("start")}
                    </Button>
                  </Link>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>

      <Link href="/">
        <Button variant="ghost">{t("home")}</Button>
      </Link>
    </div>
  );
}
