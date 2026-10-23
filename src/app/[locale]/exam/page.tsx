"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAllExamBlueprints } from "@/domain/exam/catalog";
import {
  getUnitsByLevel,
  isUnitComplete,
} from "@/domain/lessons/registry";
import { getStoredProfile } from "@/application/learner-store";
import type { LearnerProfile } from "@/domain/types";

export default function ExamHubPage() {
  const t = useTranslations("exam");
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
      <div className="max-w-content mx-auto px-6 py-20">
        <div className="h-8 w-48 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  const levels = getAllExamBlueprints();

  return (
    <div className="max-w-content mx-auto px-6 py-16 scene-3d">
      <p className="text-overline text-accent-700 mb-2">{t("eyebrow")}</p>
      <h1 className="text-title font-serif text-ink-950 mb-3">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-4 text-pretty max-w-2xl">{t("subtitle")}</p>

      <Card className="mb-8 border-accent-200 bg-accent-50/40">
        <p className="text-body-sm text-ink-800 text-pretty mb-2">{t("honestTitle")}</p>
        <p className="text-body-sm text-ink-600 text-pretty">{t("honestBody")}</p>
      </Card>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {levels.map((bp) => {
          const units = getUnitsByLevel(bp.level);
          const done =
            units.length > 0 &&
            units.every((u) => isUnitComplete(u, profile));
          const progress =
            units.length === 0
              ? 0
              : Math.round(
                  (units.filter((u) => isUnitComplete(u, profile)).length /
                    units.length) *
                    100
                );

          return (
            <Card key={bp.level} className="layer-stack">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-overline text-accent-700">{bp.officialName}</p>
                  <h2 className="text-title-sm font-serif text-ink-950">
                    {t("levelCard", { level: bp.level })}
                  </h2>
                </div>
                <span
                  className={`text-caption px-2 py-1 rounded-lg ${
                    done
                      ? "bg-success-50 text-success-700"
                      : "bg-ink-50 text-ink-500"
                  }`}
                >
                  {done ? t("readyBadge") : t("prepBadge", { pct: progress })}
                </span>
              </div>
              <p className="text-body-sm text-ink-500 mb-4">
                {t("duration", { min: bp.durationMinutes })}
              </p>
              <Link href={`/exam/${bp.level}`}>
                <Button variant={done ? "accent" : "secondary"} size="sm">
                  {t("openLevel")}
                </Button>
              </Link>
            </Card>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/path">
          <Button variant="secondary">{t("toPath")}</Button>
        </Link>
        <Link href="/teacher">
          <Button variant="ghost">{t("toTeacher")}</Button>
        </Link>
      </div>
    </div>
  );
}
