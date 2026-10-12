"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile, clearLearner } from "@/application/learner-store";
import { trackEvent } from "@/application/local-events";
import { getDailyProgress } from "@/application/motivation-store";
import { getDueVocab } from "@/application/vocab-store";
import {
  getPrimaryNextAction,
  getNextRecommendations,
} from "@/domain/learning/recommendation";
import {
  getGoalById,
  getScenarioById,
  getPublishedScenarios,
} from "@/domain/curriculum/registry";
import { getLanguageMeta } from "@/domain/languages";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";

export default function DashboardPage() {
  const t = useTranslations("dashboard");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  const [dueCount, setDueCount] = useState(0);
  const [daily, setDaily] = useState({ minutes: 0, goal: 15 });

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
    setDueCount(getDueVocab(50).length);
    const d = getDailyProgress();
    setDaily({ minutes: d.minutes, goal: d.goal });
    trackEvent("dashboard_view");
  }, [router]);

  if (!profile) {
    return (
      <div className="max-w-content mx-auto px-6 py-20">
        <div className="h-8 w-48 bg-ink-100 rounded-lg animate-pulse mb-4" />
        <div className="h-4 w-72 bg-ink-50 rounded animate-pulse" />
      </div>
    );
  }

  const target = profile.preferences.targetLanguage ?? "fr";
  const langMeta = getLanguageMeta(target);
  const primary = getPrimaryNextAction(profile);
  const allRecs = getNextRecommendations(profile);
  const primaryGoal = primary ? getGoalById(primary.goalId) : null;
  const primaryScenario = primaryGoal
    ? getScenarioById(primaryGoal.scenarioId)
    : null;
  const scenarios = getPublishedScenarios(target);

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="text-caption text-ink-400 mb-1">
          {t("greeting", { name: profile.displayName })}
        </p>
        <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
        {langMeta && (
          <p className="text-body-sm text-ink-500 mb-2">
            {langMeta.name[locale]}
            {" · "}
            {langMeta.pathDepth === "full" ? t("pathFull") : t("pathStarter")}
          </p>
        )}
        <p className="text-body-sm text-ink-500 text-pretty">{t("encourage")}</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        <Card>
          <p className="text-caption text-ink-400">{t("xp")}</p>
          <p className="text-title-sm font-serif text-ink-950">{profile.xp ?? 0}</p>
        </Card>
        <Card>
          <p className="text-caption text-ink-400">{t("streak")}</p>
          <p className="text-title-sm font-serif text-ink-950">{profile.streakDays ?? 0}</p>
        </Card>
        <Card>
          <p className="text-caption text-ink-400">{t("dailyGoal")}</p>
          <p className="text-title-sm font-serif text-ink-950">
            {daily.minutes}/{daily.goal} min
          </p>
        </Card>
      </div>

      <Card className="mb-8 border-accent-200/80 bg-gradient-to-br from-accent-50/40 to-surface-elevated">
        <p className="text-overline text-accent-700 uppercase mb-4">{t("nextAction")}</p>
        {primaryGoal ? (
          <>
            <h2 className="text-title-sm font-serif text-ink-950 mb-2">
              {primaryGoal.title[locale]}
            </h2>
            <p className="text-body text-ink-600 mb-1">{primaryGoal.canDoStatement[locale]}</p>
            <p className="text-caption text-ink-400 mb-7">{primary?.reason[locale]}</p>
            <Link href={`/learn/${primaryGoal.id}`}>
              <Button variant="accent" className="min-w-[12rem]">
                {t("continueLearning")}
              </Button>
            </Link>
          </>
        ) : (
          <>
            <h2 className="text-title-sm font-serif text-ink-950 mb-2">{t("allDone")}</h2>
            <p className="text-body text-ink-600 mb-4">{t("allDoneBody")}</p>
            <Link href="/vocabulary">
              <Button variant="accent">{t("reviewVocab")}</Button>
            </Link>
          </>
        )}
      </Card>

      {dueCount > 0 && (
        <Card className="mb-6">
          <p className="text-body text-ink-800 mb-3">{t("vocabDue", { count: dueCount })}</p>
          <Link href="/vocabulary">
            <Button variant="secondary" size="sm">{t("reviewVocab")}</Button>
          </Link>
        </Card>
      )}

      {primaryScenario && (
        <Card className="mb-6">
          <h3 className="text-caption text-ink-400 mb-2">{t("currentScenario")}</h3>
          <p className="text-body-lg font-medium text-ink-950">{primaryScenario.title[locale]}</p>
          <p className="text-body-sm text-ink-600 mt-1">{primaryScenario.description[locale]}</p>
        </Card>
      )}

      <Card className="mb-6">
        <h3 className="text-caption text-ink-400 mb-3">{t("allScenarios")}</h3>
        <ul className="space-y-2">
          {scenarios.map((s) => (
            <li key={s.id} className="text-body-sm text-ink-700">
              {s.title[locale]}
              <span className="text-caption text-ink-400 ms-2">{s.level}</span>
            </li>
          ))}
        </ul>
      </Card>

      {profile.completedGoals.length > 0 && (
        <Card className="mb-6">
          <h3 className="text-caption text-ink-400 mb-4">{t("completed")}</h3>
          <ul className="space-y-3">
            {profile.completedGoals.map((gid) => {
              const g = getGoalById(gid);
              return g ? (
                <li key={gid} className="text-body text-ink-800 flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-success-100 text-success-700 text-xs flex items-center justify-center flex-shrink-0">✓</span>
                  {g.canDoStatement[locale]}
                </li>
              ) : null;
            })}
          </ul>
        </Card>
      )}

      {allRecs.length > 1 && (
        <Card className="mb-6">
          <h3 className="text-caption text-ink-400 mb-3">{t("upcoming")}</h3>
          <ul className="space-y-2.5">
            {allRecs.slice(1, 6).map((rec) => {
              const g = getGoalById(rec.goalId);
              return g ? (
                <li key={rec.goalId} className="text-body-sm text-ink-500">{g.title[locale]}</li>
              ) : null;
            })}
          </ul>
        </Card>
      )}

      <div className="flex flex-wrap gap-3 mb-8">
        <Link href="/progress"><Button variant="secondary" size="sm">{t("viewProgress")}</Button></Link>
        <Link href="/vocabulary"><Button variant="secondary" size="sm">{t("viewVocab")}</Button></Link>
        <Link href="/grammar"><Button variant="secondary" size="sm">{t("viewGrammar")}</Button></Link>
        <Link href="/writing"><Button variant="secondary" size="sm">{t("viewWriting")}</Button></Link>
        <Link href="/tutor"><Button variant="secondary" size="sm">{t("viewTutor")}</Button></Link>
        <Link href="/achievements"><Button variant="secondary" size="sm">{t("viewAchievements")}</Button></Link>
        <Link href="/resources"><Button variant="secondary" size="sm">{t("viewResources")}</Button></Link>
        <Link href="/practice"><Button variant="secondary" size="sm">{t("viewPractice")}</Button></Link>
        <Link href="/real-life"><Button variant="secondary" size="sm">{t("viewRealLife")}</Button></Link>
        <Link href="/scenarios"><Button variant="secondary" size="sm">{t("viewScenarios")}</Button></Link>
      </div>

      <div className="pt-8 border-t border-ink-100">
        <button type="button" onClick={() => { clearLearner(); router.push("/"); }}
          className="text-caption text-ink-300 hover:text-ink-500 transition-colors">
          {t("reset")}
        </button>
      </div>
    </div>
  );
}
