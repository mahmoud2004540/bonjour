"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile, clearLearner } from "@/application/learner-store";
import { getPrimaryNextAction, getNextRecommendations } from "@/domain/learning/recommendation";
import { getGoalById, SCENARIO_FAIRE_CONNAISSANCE } from "@/domain/curriculum/a1-faire-connaissance";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";

export default function DashboardPage() {
  const t = useTranslations("dashboard");
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
        <div className="h-8 w-48 bg-ink-100 rounded-lg animate-pulse mb-4" />
        <div className="h-4 w-72 bg-ink-50 rounded animate-pulse" />
      </div>
    );
  }

  const primary = getPrimaryNextAction(profile);
  const allRecs = getNextRecommendations(profile);
  const primaryGoal = primary ? getGoalById(primary.goalId) : null;

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <div className="mb-12">
        <p className="text-caption text-ink-400 mb-1">
          {t("greeting", { name: profile.displayName })}
        </p>
        <h1 className="text-title font-serif text-ink-950">{t("title")}</h1>
      </div>

      {/* Primary next action */}
      <Card className="mb-8 border-accent-200/80 bg-gradient-to-br from-accent-50/40 to-surface-elevated">
        <p className="text-overline text-accent-700 uppercase mb-4">
          {t("nextAction")}
        </p>

        {primaryGoal ? (
          <>
            <h2 className="text-title-sm font-serif text-ink-950 mb-2">
              {primaryGoal.title[locale]}
            </h2>
            <p className="text-body text-ink-600 mb-1">
              {primaryGoal.canDoStatement[locale]}
            </p>
            <p className="text-caption text-ink-400 mb-7">
              {primary?.reason[locale]}
            </p>
            <Link href={`/learn/${primaryGoal.id}`}>
              <Button variant="accent">{t("start")}</Button>
            </Link>
          </>
        ) : (
          <>
            <h2 className="text-title-sm font-serif text-ink-950 mb-2">{t("allDone")}</h2>
            <p className="text-body text-ink-600">{t("allDoneBody")}</p>
          </>
        )}
      </Card>

      {/* Scenario context */}
      <Card className="mb-6">
        <h3 className="text-caption text-ink-400 mb-2">{t("currentScenario")}</h3>
        <p className="text-body-lg font-medium text-ink-950">
          {SCENARIO_FAIRE_CONNAISSANCE.title[locale]}
        </p>
        <p className="text-body-sm text-ink-550 text-ink-600 mt-1">
          {SCENARIO_FAIRE_CONNAISSANCE.description[locale]}
        </p>
      </Card>

      {/* Completed goals */}
      {profile.completedGoals.length > 0 && (
        <Card className="mb-6">
          <h3 className="text-caption text-ink-400 mb-4">{t("completed")}</h3>
          <ul className="space-y-3">
            {profile.completedGoals.map((gid) => {
              const g = getGoalById(gid);
              return g ? (
                <li key={gid} className="text-body text-ink-800 flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-success-100 text-success-700 text-xs flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  {g.canDoStatement[locale]}
                </li>
              ) : null;
            })}
          </ul>
        </Card>
      )}

      {/* Upcoming */}
      {allRecs.length > 1 && (
        <Card className="mb-6">
          <h3 className="text-caption text-ink-400 mb-3">{t("upcoming")}</h3>
          <ul className="space-y-2.5">
            {allRecs.slice(1).map((rec) => {
              const g = getGoalById(rec.goalId);
              return g ? (
                <li key={rec.goalId} className="text-body-sm text-ink-500">
                  {g.title[locale]}
                </li>
              ) : null;
            })}
          </ul>
        </Card>
      )}

      <div className="pt-8 border-t border-ink-100">
        <button
          onClick={() => {
            clearLearner();
            router.push("/");
          }}
          className="text-caption text-ink-300 hover:text-ink-500 transition-colors duration-200"
        >
          {t("reset")}
        </button>
      </div>
    </div>
  );
}
