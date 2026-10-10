"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile } from "@/application/learner-store";
import {
  getGoalById,
  getPublishedScenarios,
  getGoalsForScenario,
} from "@/domain/curriculum/registry";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";

export default function ProgressPage() {
  const t = useTranslations("progress");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [profile, setProfile] = useState<LearnerProfile | null>(null);

  useEffect(() => {
    const p = getStoredProfile();
    if (!p) {
      router.replace("/onboarding");
      return;
    }
    if (!p.placementCompleted) {
      router.replace("/placement");
      return;
    }
    setProfile(p);
  }, [router]);

  if (!profile) {
    return (
      <div className="max-w-content mx-auto px-6 py-20">
        <div className="h-8 w-48 bg-ink-100 rounded-lg animate-pulse" />
      </div>
    );
  }

  const scenarios = getPublishedScenarios();

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-10 text-pretty">{t("subtitle")}</p>

      <Card className="mb-6">
        <h2 className="text-caption text-ink-400 mb-3">{t("demonstrated")}</h2>
        {profile.completedGoals.length === 0 ? (
          <p className="text-body text-ink-500">{t("noneYet")}</p>
        ) : (
          <ul className="space-y-3">
            {profile.completedGoals.map((gid) => {
              const g = getGoalById(gid);
              return g ? (
                <li key={gid} className="flex items-start gap-3 text-body text-ink-800">
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-success-100 text-success-700 text-xs flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  {g.canDoStatement[locale]}
                </li>
              ) : null;
            })}
          </ul>
        )}
      </Card>

      {scenarios.map((scenario) => {
        const goals = getGoalsForScenario(scenario.id);
        const done = goals.filter((g) =>
          profile.completedGoals.includes(g.id)
        ).length;

        return (
          <Card key={scenario.id} className="mb-6">
            <h3 className="text-body-lg font-medium text-ink-950 mb-1">
              {scenario.title[locale]}
            </h3>
            <p className="text-caption text-ink-400 mb-4">
              {t("scenarioProgress", { done, total: goals.length })}
            </p>
            <ul className="space-y-2">
              {goals.map((g) => {
                const completed = profile.completedGoals.includes(g.id);
                return (
                  <li
                    key={g.id}
                    className={`text-body-sm flex items-center gap-2 ${
                      completed ? "text-ink-800" : "text-ink-400"
                    }`}
                  >
                    <span className="w-4 text-center">{completed ? "✓" : "·"}</span>
                    {g.title[locale]}
                  </li>
                );
              })}
            </ul>
          </Card>
        );
      })}

      <p className="text-caption text-ink-400 mb-8">{t("note")}</p>

      <Link href="/dashboard">
        <Button variant="secondary">{t("back")}</Button>
      </Link>
    </div>
  );
}
