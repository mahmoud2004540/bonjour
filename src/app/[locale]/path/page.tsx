"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import {
  LEVEL_SEQUENCE,
  getAllUnits,
  getNextUnit,
  getUnitsByLevel,
  isLevelUnlocked,
  isUnitAccessible,
  isUnitComplete,
} from "@/domain/lessons/registry";
import { getLevelReadiness } from "@/domain/learning/readiness";
import { getStoredProfile } from "@/application/learner-store";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const READY_LABEL: Record<
  string,
  Record<"start" | "building" | "ready_practice" | "ready_exam", string>
> = {
  ar: {
    start: "لسه في البداية",
    building: "بتبني الأساس",
    ready_practice: "جاهز لممارسة مكثفة",
    ready_exam: "جاهز لمحاكاة الامتحان",
  },
  en: {
    start: "Just starting",
    building: "Building the base",
    ready_practice: "Ready for intensive practice",
    ready_exam: "Ready for mock exam",
  },
  fr: {
    start: "Début",
    building: "Bases en cours",
    ready_practice: "Prêt pour la pratique intensive",
    ready_exam: "Prêt pour l'examen blanc",
  },
};

export default function PathPage() {
  const t = useTranslations("path");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  const [openLevel, setOpenLevel] = useState<string | null>(null);

  useEffect(() => {
    const p = getStoredProfile();
    if (!p) {
      router.replace("/onboarding");
      return;
    }
    setProfile(p);
    const next = getNextUnit(p);
    if (next) setOpenLevel(next.level);
    else setOpenLevel("A1");
  }, [router]);

  if (!profile) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="h-10 w-48 bg-ink-100 rounded-xl animate-pulse" />
      </div>
    );
  }

  const next = getNextUnit(profile);
  const allUnits = getAllUnits();
  const unitsDone = allUnits.filter((u) => isUnitComplete(u, profile)).length;
  const labels = READY_LABEL[locale] ?? READY_LABEL.en;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Header — course catalogue style */}
      <header className="mb-10 border-b-2 border-ink-100 pb-8">
        <p className="text-overline text-accent-700 mb-2">{t("eyebrow")}</p>
        <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
        <p className="text-body-sm text-ink-500 max-w-lg">{t("subtitle")}</p>
        <p className="text-caption text-ink-400 mt-2">{t("chainHint")}</p>

        <div className="mt-5 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-xl border-2 border-ink-200 bg-white px-3.5 py-2 text-sm font-bold text-ink-800 shadow-[0_3px_0_#e8e4dc]">
            <span className="text-accent-600">{t("lessonsDone")}</span>{" "}
            {unitsDone}/{allUnits.length}
          </span>
          <span className="inline-flex items-center gap-2 rounded-xl border-2 border-ink-200 bg-white px-3.5 py-2 text-sm font-bold text-ink-800 shadow-[0_3px_0_#e8e4dc]">
            <span className="text-accent-600">{t("studyDays")}</span>{" "}
            {profile.streakDays ?? 0}
          </span>
          {next && (
            <Link
              href={`/lesson/${next.id}`}
              className="inline-flex items-center rounded-xl bg-accent-600 px-4 py-2 text-sm font-bold text-white shadow-[0_3px_0_#9a3d2c] hover:bg-accent-700"
            >
              {locale === "ar"
                ? "كمّل من هنا ←"
                : locale === "fr"
                  ? "Continuer →"
                  : "Continue →"}
            </Link>
          )}
        </div>
      </header>

      {/* Levels as curriculum chapters — list, not bubbles */}
      <div className="space-y-4">
        {LEVEL_SEQUENCE.map((level, levelIdx) => {
          const units = getUnitsByLevel(level);
          if (units.length === 0) return null;

          const unlocked = isLevelUnlocked(level, profile);
          const doneCount = units.filter((u) => isUnitComplete(u, profile)).length;
          const levelDone = doneCount === units.length && units.length > 0;
          const nextLevel = LEVEL_SEQUENCE[levelIdx + 1];
          const readiness = getLevelReadiness(profile, level);
          const isOpen = openLevel === level;

          return (
            <section
              key={level}
              className={cn(
                "rounded-2xl border-2 bg-white overflow-hidden transition-shadow",
                unlocked
                  ? levelDone
                    ? "border-success-300 shadow-[0_6px_0_#b8e0c8]"
                    : "border-ink-200 shadow-[0_6px_0_#e8e4dc]"
                  : "border-ink-100 opacity-80"
              )}
            >
              {/* Chapter header — click to expand */}
              <button
                type="button"
                disabled={!unlocked}
                onClick={() =>
                  setOpenLevel((cur) => (cur === level ? null : level))
                }
                className={cn(
                  "w-full text-start px-5 py-4 flex items-center gap-4",
                  unlocked ? "hover:bg-ink-50/80" : "cursor-not-allowed"
                )}
              >
                <div
                  className={cn(
                    "shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-serif border-2",
                    levelDone
                      ? "bg-success-600 text-white border-success-500"
                      : unlocked
                        ? "bg-ink-950 text-white border-ink-800"
                        : "bg-ink-100 text-ink-400 border-ink-200"
                  )}
                >
                  <span className="text-lg leading-none">{level}</span>
                  {levelDone && (
                    <span className="text-[0.65rem] font-sans font-bold">
                      OK
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-body font-bold text-ink-950">
                    {t("levelLabel", { level })}
                  </p>
                  <p className="text-caption text-ink-500 mt-0.5">
                    {unlocked
                      ? t("levelProgress", {
                          done: doneCount,
                          total: units.length,
                        })
                      : t("levelLocked")}
                  </p>
                  {unlocked && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-ink-100 overflow-hidden max-w-[12rem]">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            readiness.percent >= 90
                              ? "bg-success-500"
                              : "bg-accent-500"
                          )}
                          style={{ width: `${readiness.percent}%` }}
                        />
                      </div>
                      <span className="text-caption font-semibold text-ink-600">
                        {readiness.percent}% · {labels[readiness.label]}
                      </span>
                    </div>
                  )}
                </div>

                {unlocked && (
                  <span
                    className={cn(
                      "text-ink-400 text-lg transition-transform",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden
                  >
                    ▾
                  </span>
                )}
              </button>

              {/* Lesson list — table rows, academic */}
              {unlocked && isOpen && (
                <div className="border-t-2 border-ink-100 bg-surface/50">
                  <ul className="divide-y divide-ink-100">
                    {units.map((u, i) => {
                      const done = isUnitComplete(u, profile);
                      const isCurrent = next?.id === u.id;
                      const accessible = isUnitAccessible(u, profile);
                      const locked = !accessible && !done;
                      const isExam = u.id.includes("-exam-");

                      const row = (
                        <div
                          className={cn(
                            "flex items-center gap-3 px-5 py-3.5",
                            locked && "opacity-50",
                            isCurrent && "bg-accent-50",
                            done && !isCurrent && "bg-success-50/40"
                          )}
                        >
                          <span
                            className={cn(
                              "shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold border-2",
                              done
                                ? "bg-success-600 text-white border-success-500"
                                : isCurrent
                                  ? "bg-accent-600 text-white border-accent-500"
                                  : locked
                                    ? "bg-ink-50 text-ink-300 border-ink-200"
                                    : isExam
                                      ? "bg-ink-900 text-white border-ink-700"
                                      : "bg-white text-ink-700 border-ink-200"
                            )}
                          >
                            {done ? "✓" : locked ? "–" : isExam ? "E" : i + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p
                              className={cn(
                                "text-body-sm font-semibold truncate",
                                locked ? "text-ink-400" : "text-ink-900"
                              )}
                            >
                              {u.title[locale]}
                            </p>
                            {isExam && (
                              <p className="text-caption text-ink-400">
                                {locale === "ar"
                                  ? "اختبار نهاية المستوى"
                                  : locale === "fr"
                                    ? "Épreuve de fin de niveau"
                                    : "End-of-level check"}
                              </p>
                            )}
                          </div>
                          {isCurrent && (
                            <span className="shrink-0 text-caption font-bold text-accent-700 bg-accent-100 px-2.5 py-1 rounded-lg">
                              {locale === "ar"
                                ? "الآن"
                                : locale === "fr"
                                  ? "En cours"
                                  : "Now"}
                            </span>
                          )}
                          {done && !isCurrent && (
                            <span className="shrink-0 text-caption font-bold text-success-700">
                              {locale === "ar" ? "تم" : "Done"}
                            </span>
                          )}
                        </div>
                      );

                      return (
                        <li key={u.id}>
                          {locked ? (
                            <div aria-disabled>{row}</div>
                          ) : (
                            <Link href={`/lesson/${u.id}`} className="block hover:bg-ink-50/60">
                              {row}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  {levelDone && nextLevel && (
                    <p className="px-5 py-3 text-body-sm text-success-800 border-t border-success-100 bg-success-50/50">
                      {t("levelCompleteNext", { next: nextLevel })}
                    </p>
                  )}
                </div>
              )}

              {!unlocked && (
                <p className="px-5 pb-4 text-body-sm text-ink-400">
                  {t("finishPrevLevel", {
                    level: LEVEL_SEQUENCE[levelIdx - 1] ?? "A1",
                  })}
                </p>
              )}
            </section>
          );
        })}
      </div>

      <footer className="mt-12 flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Link href="/practice-lab">
          <Button variant="accent">
            {locale === "ar"
              ? "معمل الممارسة"
              : locale === "fr"
                ? "Labo de pratique"
                : "Practice lab"}
          </Button>
        </Link>
        <Link href="/exam">
          <Button variant="secondary">
            {locale === "ar"
              ? "محاكاة امتحان"
              : locale === "fr"
                ? "Examen blanc"
                : "Mock exam"}
          </Button>
        </Link>
        <Link
          href="/dashboard"
          className="text-caption text-ink-400 hover:text-ink-700 font-medium"
        >
          {t("dashboard")}
        </Link>
      </footer>
    </div>
  );
}
