"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import {
  getAllUnits,
  getNextUnit,
  isUnitComplete,
} from "@/domain/lessons/registry";
import { getStoredProfile } from "@/application/learner-store";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";

/**
 * Learning path — Duolingo-like progression map,
 * Bonjour visual identity (warm, not green clone).
 */
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

  const units = getAllUnits();
  const next = getNextUnit(profile);
  let locked = false;

  return (
    <div className="max-w-md mx-auto px-6 py-12 md:py-16 scene-3d">
      <div className="text-center mb-10">
        <p className="text-overline text-accent-700 mb-2">{t("eyebrow")}</p>
        <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
        <p className="text-body-sm text-ink-500 text-pretty">{t("subtitle")}</p>
        <div className="mt-4 flex justify-center gap-4 text-caption text-ink-500">
          <span>✦ {profile.xp ?? 0} XP</span>
          <span>🔥 {profile.streakDays ?? 0}</span>
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-0">
        {/* vertical line */}
        <div
          className="absolute top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-accent-400 via-ink-200 to-ink-100"
          style={{ left: "50%", transform: "translateX(-50%)", zIndex: 0 }}
          aria-hidden
        />

        {units.map((u, i) => {
          const done = isUnitComplete(u, profile);
          const isCurrent = next?.id === u.id;
          if (!done && !isCurrent && next && units.findIndex((x) => x.id === next.id) < i) {
            locked = true;
          }
          if (done) locked = false;

          const state = done ? "done" : isCurrent ? "current" : locked ? "locked" : "open";

          return (
            <div
              key={u.id}
              className="relative z-10 flex flex-col items-center mb-6 w-full"
              style={{
                marginInlineStart: i % 2 === 0 ? "0" : "12%",
                marginInlineEnd: i % 2 === 0 ? "12%" : "0",
              }}
            >
              {state === "locked" ? (
                <div
                  className="w-16 h-16 rounded-full bg-ink-100 border-4 border-ink-200 flex items-center justify-center text-ink-300 shadow-inner"
                  title={t("locked")}
                >
                  🔒
                </div>
              ) : (
                <Link
                  href={`/lesson/${u.id}`}
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-medium transition-transform duration-300 hover:scale-110 ${
                    state === "done"
                      ? "bg-success-600 text-white shadow-lg border-4 border-success-400"
                      : state === "current"
                        ? "bg-accent-600 text-white shadow-[0_8px_24px_rgba(224,106,84,0.45)] border-4 border-accent-300 ring-4 ring-accent-100 animate-pulse"
                        : "bg-white text-ink-800 border-4 border-ink-200 shadow-md"
                  }`}
                >
                  {state === "done" ? "✓" : u.level.slice(0, 2)}
                </Link>
              )}
              <p
                className={`mt-2 text-center text-body-sm max-w-[10rem] ${
                  state === "locked" ? "text-ink-300" : "text-ink-800"
                }`}
              >
                {u.title[locale]}
              </p>
              {state === "current" && (
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

      <div className="mt-10 text-center space-y-3">
        <Link href="/academic">
          <Button variant="secondary">{t("academic")}</Button>
        </Link>
        <div>
          <Link href="/dashboard" className="text-caption text-ink-400 hover:text-ink-600">
            {t("dashboard")}
          </Link>
        </div>
      </div>
    </div>
  );
}
