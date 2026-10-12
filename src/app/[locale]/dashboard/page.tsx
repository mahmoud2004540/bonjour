"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile, clearLearner } from "@/application/learner-store";
import { trackEvent } from "@/application/local-events";
import { getDueVocab } from "@/application/vocab-store";
import {
  getAllUnits,
  getNextUnit,
  isUnitComplete,
} from "@/domain/lessons/registry";
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
        <div className="h-8 w-48 bg-ink-100 rounded-lg animate-pulse" />
      </div>
    );
  }

  const nextUnit = getNextUnit(profile);
  const allUnits = getAllUnits();
  const doneCount = allUnits.filter((u) => isUnitComplete(u, profile)).length;

  return (
    <div className="max-w-content mx-auto px-6 py-16 scene-3d">
      <div className="mb-8">
        <p className="text-caption text-ink-400 mb-1">
          {t("greeting", { name: profile.displayName })}
        </p>
        <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
        <p className="text-body-sm text-ink-500">{t("encourage")}</p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <Card depth={false}>
          <p className="text-caption text-ink-400">{t("xp")}</p>
          <p className="text-title-sm font-serif">{profile.xp ?? 0}</p>
        </Card>
        <Card depth={false}>
          <p className="text-caption text-ink-400">{t("streak")}</p>
          <p className="text-title-sm font-serif">{profile.streakDays ?? 0}</p>
        </Card>
        <Card depth={false}>
          <p className="text-caption text-ink-400">{t("unitsProgress")}</p>
          <p className="text-title-sm font-serif">
            {doneCount}/{allUnits.length}
          </p>
        </Card>
      </div>

      <Card className="mb-4 border-accent-200 bg-gradient-to-br from-accent-50/50 to-white">
        <h3 className="text-title-sm font-serif text-ink-950 mb-2">
          {t("academyCardTitle")}
        </h3>
        <p className="text-body-sm text-ink-600 mb-4">{t("academyCardBody")}</p>
        <Link href="/path">
          <Button variant="accent">{t("viewPath")}</Button>
        </Link>
      </Card>

      <Card className="mb-6 layer-stack">
        <h3 className="text-title-sm font-serif text-ink-950 mb-2">
          {t("teacherCardTitle")}
        </h3>
        <p className="text-body-sm text-ink-600 mb-4">{t("teacherCardBody")}</p>
        <Link href="/teacher">
          <Button variant="secondary">{t("viewTeacher")}</Button>
        </Link>
      </Card>

      {nextUnit && (
        <Card className="mb-6">
          <p className="text-overline text-accent-700 mb-2">
            {t("todayLesson")} · {nextUnit.level}
          </p>
          <h2 className="text-title-sm font-serif mb-2">{nextUnit.title[locale]}</h2>
          <p className="text-body-sm text-ink-500 mb-4">{t("lessonFlowHint")}</p>
          <Link href={`/lesson/${nextUnit.id}`}>
            <Button variant="secondary">{t("startLesson")}</Button>
          </Link>
        </Card>
      )}

      {dueCount > 0 && (
        <Card className="mb-6">
          <p className="text-body mb-3">{t("vocabDue", { count: dueCount })}</p>
          <Link href="/vocabulary">
            <Button variant="secondary" size="sm">{t("reviewVocab")}</Button>
          </Link>
        </Card>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/path">
          <Button variant="secondary" size="sm">{t("viewPath")}</Button>
        </Link>
        <Link href="/teacher">
          <Button variant="secondary" size="sm">{t("viewTeacher")}</Button>
        </Link>
        <Link href="/academic">
          <Button variant="secondary" size="sm">{t("viewAcademic")}</Button>
        </Link>
        <Link href="/vocabulary">
          <Button variant="secondary" size="sm">{t("viewVocab")}</Button>
        </Link>
      </div>

      <button
        type="button"
        onClick={() => {
          clearLearner();
          router.push("/");
        }}
        className="text-caption text-ink-300"
      >
        {t("reset")}
      </button>
    </div>
  );
}
