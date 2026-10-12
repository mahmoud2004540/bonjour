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
  getAllUnits,
  getNextUnit,
  isUnitComplete,
} from "@/domain/lessons/registry";
import { getGoalById } from "@/domain/curriculum/registry";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";

export default function DashboardPage() {
  const t = useTranslations("dashboard");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  const [dueCount, setDueCount] = useState(0);

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

  const nextUnit = getNextUnit(profile);
  const allUnits = getAllUnits();
  const doneCount = allUnits.filter((u) => isUnitComplete(u, profile)).length;

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20 scene-3d">
      <div className="mb-10">
        <p className="text-caption text-ink-400 mb-1">
          {t("greeting", { name: profile.displayName })}
        </p>
        <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
        <p className="text-body-sm text-ink-500 mb-2">{t("learningFrench")}</p>
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
          <p className="text-caption text-ink-400">{t("unitsProgress")}</p>
          <p className="text-title-sm font-serif text-ink-950">
            {doneCount}/{allUnits.length}
          </p>
        </Card>
      </div>

      {nextUnit ? (
        <Card className="mb-8 border-accent-200/80 bg-gradient-to-br from-accent-50/50 to-surface-elevated">
          <p className="text-overline text-accent-700 uppercase mb-3">
            {t("todayLesson")} · {nextUnit.level}
          </p>
          <h2 className="text-title-sm font-serif text-ink-950 mb-2">
            {nextUnit.title[locale]}
          </h2>
          <p className="text-body-sm text-ink-600 mb-6 text-pretty">{t("lessonFlowHint")}</p>
          <Link href={`/lesson/${nextUnit.id}`}>
            <Button variant="accent" className="min-w-[12rem]">
              {t("startLesson")}
            </Button>
          </Link>
        </Card>
      ) : (
        <Card className="mb-8">
          <h2 className="text-title-sm font-serif text-ink-950 mb-2">{t("allUnitsDone")}</h2>
          <p className="text-body text-ink-600 mb-4">{t("allDoneBody")}</p>
          <Link href="/vocabulary">
            <Button variant="accent">{t("reviewVocab")}</Button>
          </Link>
        </Card>
      )}

      <Card className="mb-6">
        <h3 className="text-title-sm font-serif text-ink-950 mb-2">{t("academyCardTitle")}</h3>
        <p className="text-body-sm text-ink-600 mb-4 text-pretty">{t("academyCardBody")}</p>
        <Link href="/academy">
          <Button variant="secondary">{t("viewAcademy")}</Button>
        </Link>
      </Card>

      {dueCount > 0 && (
        <Card className="mb-6">
          <p className="text-body text-ink-800 mb-3">{t("vocabDue", { count: dueCount })}</p>
          <Link href="/vocabulary">
            <Button variant="secondary" size="sm">{t("reviewVocab")}</Button>
          </Link>
        </Card>
      )}

      <Card className="mb-6">
        <h3 className="text-caption text-ink-400 mb-4">{t("allUnits")}</h3>
        <ul className="space-y-2.5">
          {allUnits.map((u) => {
            const done = isUnitComplete(u, profile);
            return (
              <li key={u.id} className="flex items-center justify-between gap-3">
                <span className={`text-body-sm ${
                  done ? "text-ink-400 line-through" : "text-ink-800"
                }`}>
                  <span className="text-caption text-ink-400 me-2">{u.level}</span>
                  {u.title[locale]}
                </span>
                {done ? (
                  <span className="text-caption text-success-700">{t("unitDone")}</span>
                ) : (
                  <Link href={`/lesson/${u.id}`} className="text-caption text-accent-700 hover:underline">
                    {t("openUnit")}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Card>

      {profile.completedGoals.length > 0 && (
        <Card className="mb-6">
          <h3 className="text-caption text-ink-400 mb-4">{t("completed")}</h3>
          <ul className="space-y-3">
            {profile.completedGoals.slice(0, 12).map((gid) => {
              const g = getGoalById(gid);
              return g ? (
                <li key={gid} className="text-body-sm text-ink-800 flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-success-100 text-success-700 text-xs flex items-center justify-center flex-shrink-0">✓</span>
                  {g.canDoStatement[locale]}
                </li>
              ) : null;
            })}
          </ul>
        </Card>
      )}

      <div className="flex flex-wrap gap-3 mb-8">
        <Link href="/academy"><Button variant="secondary" size="sm">{t("viewAcademy")}</Button></Link>
        <Link href="/progress"><Button variant="secondary" size="sm">{t("viewProgress")}</Button></Link>
        <Link href="/vocabulary"><Button variant="secondary" size="sm">{t("viewVocab")}</Button></Link>
        <Link href="/grammar"><Button variant="secondary" size="sm">{t("viewGrammar")}</Button></Link>
        <Link href="/writing"><Button variant="secondary" size="sm">{t("viewWriting")}</Button></Link>
        <Link href="/tutor"><Button variant="secondary" size="sm">{t("viewTutor")}</Button></Link>
        <Link href="/achievements"><Button variant="secondary" size="sm">{t("viewAchievements")}</Button></Link>
        <Link href="/resources"><Button variant="secondary" size="sm">{t("viewResources")}</Button></Link>
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
