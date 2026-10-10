"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile } from "@/application/learner-store";
import { getGoalById } from "@/domain/curriculum/registry";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";

/** Review completed goals — honest re-practice, no invented spaced algorithm scores. */
export default function PracticePage() {
  const t = useTranslations("practice");
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
      <div className="max-w-content mx-auto px-6 py-20">
        <div className="h-6 w-40 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  const completed = profile.completedGoals
    .map((id) => getGoalById(id))
    .filter(Boolean);

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-8 text-pretty">{t("subtitle")}</p>

      {completed.length === 0 ? (
        <Card className="mb-10">
          <p className="text-body text-ink-600">{t("empty")}</p>
          <Link href="/dashboard" className="inline-block mt-4">
            <Button variant="accent">{t("toDashboard")}</Button>
          </Link>
        </Card>
      ) : (
        <ul className="space-y-3 mb-10">
          {completed.map((g) =>
            g ? (
              <li key={g.id}>
                <Card className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-body font-medium text-ink-900">
                      {g.title[locale]}
                    </p>
                    <p className="text-caption text-ink-400">
                      {g.canDoStatement[locale]}
                    </p>
                  </div>
                  <Link href={`/learn/${g.id}`}>
                    <Button variant="secondary" size="sm">
                      {t("review")}
                    </Button>
                  </Link>
                </Card>
              </li>
            ) : null
          )}
        </ul>
      )}

      <Link href="/dashboard">
        <Button variant="ghost">{t("back")}</Button>
      </Link>
    </div>
  );
}
