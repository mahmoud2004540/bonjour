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
import {
  getOverallReadiness,
  getLevelReadiness,
} from "@/domain/learning/readiness";
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
      <div className="max-w-content mx-auto px-5 py-20 text-center">
        <p className="text-body text-ink-600 mb-4">
          {t("preparing")}
        </p>
        <div className="h-10 w-48 mx-auto bg-ink-100 rounded-2xl animate-pulse" />
      </div>
    );
  }

  const nextUnit = getNextUnit(profile);
  const allUnits = getAllUnits();
  const doneCount = allUnits.filter((u) => isUnitComplete(u, profile)).length;
  const overall = getOverallReadiness(profile);
  const a1 = getLevelReadiness(profile, "A1");

  const hub = [
    {
      href: "/path",
      title: t("hub.path.title"),
      body: t("hub.path.body"),
      cta: t("hub.path.cta"),
      primary: true,
    },
    {
      href: "/practice-lab",
      title: t("hub.practiceLab.title"),
      body: t("hub.practiceLab.body"),
      cta: t("hub.practiceLab.cta"),
      primary: false,
    },
    {
      href: "/vocabulary",
      title: t("hub.vocabulary.title"),
      body:
        dueCount > 0
          ? t("hub.vocabulary.due", { count: dueCount })
          : t("hub.vocabulary.body"),
      cta: t("hub.vocabulary.cta"),
      primary: false,
    },
    {
      href: "/speech",
      title: t("hub.speech.title"),
      body: t("hub.speech.body"),
      cta: t("hub.speech.cta"),
      primary: false,
    },
    {
      href: "/listening",
      title: t("hub.listening.title"),
      body: t("hub.listening.body"),
      cta: t("hub.listening.cta"),
      primary: false,
    },
    {
      href: "/exam",
      title: t("hub.exam.title"),
      body: t("hub.exam.body"),
      cta: t("hub.exam.cta"),
      primary: false,
    },
    {
      href: "/settings",
      title: t("hub.settings.title"),
      body: t("hub.settings.body"),
      cta: t("hub.settings.cta"),
      primary: false,
    },
  ];

  return (
    <div className="max-w-content mx-auto px-5 sm:px-6 py-10 sm:py-14 scene-3d">
      <div className="mb-8">
        <p className="text-caption font-semibold text-accent-700 mb-1">
          {t("greeting", { name: profile.displayName })}
        </p>
        <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
        <p className="text-body-sm text-ink-500 max-w-xl">
          {t("intro")}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: t("statGoals"), value: profile.completedGoals.length },
          { label: t("statStudyDays"), value: profile.streakDays ?? 0 },
          { label: t("statUnits"), value: `${doneCount}/${allUnits.length}` },
          { label: t("statReady"), value: `${overall}%` },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border-2 border-ink-100 bg-white px-4 py-4 shadow-[0_4px_0_#e8e4dc]"
          >
            <p className="text-caption font-semibold text-ink-400 mb-1">
              {s.label}
            </p>
            <p className="text-title-sm font-serif text-ink-950">{s.value}</p>
          </div>
        ))}
      </div>

      {nextUnit && (
        <Card className="mb-8 border-accent-300 bg-gradient-to-br from-white to-accent-50/40">
          <p className="text-overline text-accent-700 mb-2 font-bold">
            {t("todayLesson")} · {nextUnit.level}
          </p>
          <h2 className="text-title-sm font-serif mb-2 text-ink-950">
            {nextUnit.title[locale]}
          </h2>
          <p className="text-body-sm text-ink-500 mb-5">{t("lessonFlowHint")}</p>
          <Link href={`/lesson/${nextUnit.id}`}>
            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              {t("startLesson")}
            </Button>
          </Link>
        </Card>
      )}

      <h2 className="text-body font-bold text-ink-800 mb-3">
        {t("sections")}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {hub.map((item) => (
          <Card
            key={item.href}
            className={item.primary ? "border-ink-900 sm:col-span-2" : ""}
          >
            <h3 className="text-title-sm font-serif text-ink-950 mb-1.5">
              {item.title}
            </h3>
            <p className="text-body-sm text-ink-500 mb-4 text-pretty">
              {item.body}
            </p>
            <Link href={item.href}>
              <Button
                variant={item.primary ? "primary" : "secondary"}
                size="sm"
              >
                {item.cta}
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      <p className="text-caption text-ink-400 mb-6">
        {t("footerStats", { pct: a1.percent, due: dueCount })}
      </p>

      <button
        type="button"
        onClick={() => {
          if (!window.confirm(t("resetConfirm"))) return;
          clearLearner();
          router.push("/");
        }}
        className="text-caption text-ink-300 hover:text-ink-500"
      >
        {t("reset")}
      </button>
    </div>
  );
}
