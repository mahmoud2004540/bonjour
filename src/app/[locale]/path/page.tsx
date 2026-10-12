"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import {
  LEVEL_SEQUENCE,
  getNextUnit,
  getUnitsByLevel,
  isLevelUnlocked,
  isUnitAccessible,
  isUnitComplete,
} from "@/domain/lessons/registry";
import { getStoredProfile } from "@/application/learner-store";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";

export default function PathPage() {
  const t = useTranslations("path");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [profile, setProfile] = useState<LearnerProfile | null>(null);

  useEffect(() => {
    const p = getStoredProfile();
    if (!p) {
      router.replace("/onboarding");
      return;
    }
    setProfile(p);
  }, [router]);

  if (!profile) {
    return (
      <div className="max-w-md mx-auto px-6 py-20">
        <div className="h-8 w-40 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  const next = getNextUnit(profile);

  return (
    <div className="max-w-lg mx-auto px-5 py-12 md:py-16 scene-3d">
      <div className="text-center mb-12">
        <p className="text-overline text-accent-700 mb-2">{t("eyebrow")}</p>
        <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
        <p className="text-body-sm text-ink-500 text-pretty max-w-sm mx-auto">
          {t("subtitle")}
        </p>
        <p className="text-caption text-ink-400 mt-3">{t("chainHint")}</p>
        <div className="mt-4 flex justify-center gap-5 text-caption text-ink-600">
          <span className="px-3 py-1 rounded-full bg-white shadow-sm border border-ink-100">
            ✦ {profile.xp ?? 0} XP
          </span>
          <span className="px-3 py-1 rounded-full bg-white shadow-sm border border-ink-100">
            🔥 {profile.streakDays ?? 0}
          </span>
        </div>
      </div>

      <div className="space-y-10">
        {LEVEL_SEQUENCE.map((level, levelIdx) => {
          const units = getUnitsByLevel(level);
          if (units.length === 0) return null;

          const unlocked = isLevelUnlocked(level, profile);
          const doneCount = units.filter((u) => isUnitComplete(u, profile)).length;
          const levelDone = doneCount === units.length;
          const nextLevel = LEVEL_SEQUENCE[levelIdx + 1];

          return (
            <section key={level} className="relative">
              <div
                className={`level-block-3d rounded-3xl border bg-white/90 p-5 md:p-6 ${
                  unlocked
                    ? levelDone
                      ? "border-success-200"
                      : "border-accent-200"
                    : "border-ink-100 opacity-70"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-overline text-accent-700">
                      {t("levelLabel", { level })}
                    </p>
                    <p className="text-body-sm text-ink-500">
                      {unlocked
                        ? t("levelProgress", {
                            done: doneCount,
                            total: units.length,
                          })
                        : t("levelLocked")}
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-serif text-body-lg ${
                      levelDone
                        ? "bg-success-600 text-white node-3d-done"
                        : unlocked
                          ? "bg-accent-600 text-white node-3d-current"
                          : "bg-ink-100 text-ink-400 node-3d-locked"
                    }`}
                  >
                    {levelDone ? "✓" : level}
                  </div>
                </div>

                {!unlocked ? (
                  <p className="text-body-sm text-ink-400 text-center py-6">
                    {t("finishPrevLevel", {
                      level: LEVEL_SEQUENCE[levelIdx - 1] ?? "A1",
                    })}
                  </p>
                ) : (
                  <div className="relative flex flex-col items-center">
                    <div
                      className="path-rail absolute top-2 bottom-2 w-1.5 rounded-full left-1/2 -translate-x-1/2 z-0"
                      aria-hidden
                    />

                    {units.map((u, i) => {
                      const done = isUnitComplete(u, profile);
                      const isCurrent = next?.id === u.id;
                      const accessible = isUnitAccessible(u, profile);
                      const locked = !accessible && !done;

                      return (
                        <div
                          key={u.id}
                          className="relative z-10 flex flex-col items-center mb-7 w-full"
                          style={{
                            marginInlineStart: i % 2 === 0 ? "0" : "14%",
                            marginInlineEnd: i % 2 === 0 ? "14%" : "0",
                          }}
                        >
                          {locked ? (
                            <div
                              className="node-3d node-3d-locked w-[4.25rem] h-[4.25rem] rounded-full bg-ink-100 border-[5px] border-ink-200 flex items-center justify-center text-ink-300 text-xl"
                              title={t("locked")}
                            >
                              🔒
                            </div>
                          ) : (
                            <Link
                              href={`/lesson/${u.id}`}
                              className={`node-3d w-[4.25rem] h-[4.25rem] rounded-full flex items-center justify-center text-base font-semibold border-[5px] ${
                                done
                                  ? "bg-success-600 text-white border-success-400 node-3d-done"
                                  : isCurrent
                                    ? "bg-accent-600 text-white border-accent-300 node-3d-current"
                                    : "bg-white text-ink-800 border-ink-200 shadow-md"
                              }`}
                            >
                              {done ? "✓" : i + 1}
                            </Link>
                          )}

                          <p
                            className={`mt-2.5 text-center text-body-sm max-w-[11rem] font-medium ${
                              locked ? "text-ink-300" : "text-ink-800"
                            }`}
                          >
                            {u.title[locale]}
                          </p>

                          {isCurrent && (
                            <Link href={`/lesson/${u.id}`} className="mt-2">
                              <Button variant="accent" size="sm">
                                {t("start")}
                              </Button>
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {levelDone && nextLevel && (
                  <p className="text-center text-body-sm text-success-700 mt-2 pt-4 border-t border-success-100">
                    {t("levelCompleteNext", { next: nextLevel })}
                  </p>
                )}

                {levelDone && !nextLevel && (
                  <div className="text-center mt-4 pt-4 border-t border-success-100">
                    <p className="text-body-sm text-success-700 mb-3">
                      {t("exam")}
                    </p>
                    <Link href="/exam">
                      <Button variant="accent" size="sm">
                        {t("exam")}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {levelIdx < LEVEL_SEQUENCE.length - 1 && (
                <div className="flex justify-center my-3" aria-hidden>
                  <div className="w-0.5 h-8 bg-gradient-to-b from-accent-400 to-ink-200 rounded-full" />
                </div>
              )}
            </section>
          );
        })}
      </div>

      <div className="mt-12 text-center space-y-3">
        <Link href="/exam">
          <Button variant="accent">{t("exam")}</Button>
        </Link>
        <div>
          <Link href="/teacher">
            <Button variant="secondary">{t("teacher")}</Button>
          </Link>
        </div>
        <div>
          <Link
            href="/dashboard"
            className="text-caption text-ink-400 hover:text-ink-600"
          >
            {t("dashboard")}
          </Link>
        </div>
      </div>
    </div>
  );
}
