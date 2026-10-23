"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile } from "@/application/learner-store";
import type { LearnerProfile } from "@/domain/types";

export default function ProfilePage() {
  const t = useTranslations("profile");
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
        <div className="h-8 w-56 bg-ink-100 rounded-lg animate-pulse mb-4" />
        <div className="h-4 w-80 bg-ink-50 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-12 text-pretty">{t("subtitle")}</p>

      <Card className="mb-6">
        <h2 className="text-title-sm font-medium text-ink-950 mb-0.5">
          {profile.displayName}
        </h2>
        <p className="text-caption text-ink-400 mb-5">{profile.email}</p>

        <div className="border-t border-ink-100 pt-5">
          <p className="text-caption text-ink-400 mb-1">{t("startingPoint")}</p>
          <p className="text-body-lg font-medium text-ink-900">
            {profile.estimatedStartingLevel === "unknown"
              ? t("levelUnknown")
              : t("levelEstimate", { level: profile.estimatedStartingLevel })}
          </p>
          <p className="text-caption text-ink-400 mt-1.5">{t("levelNote")}</p>
        </div>
      </Card>

      <Card className="mb-8">
        <h3 className="text-caption text-ink-400 mb-5">{t("evidenceTitle")}</h3>
        <ul className="space-y-3.5">
          {profile.skillEvidence.map((ev) => (
            <li key={ev.dimension}>
              <div className="flex justify-between items-center gap-3">
                <span className="text-body text-ink-800">{t(`dim_${ev.dimension}`)}</span>
                <span
                  className={`text-caption font-medium px-2.5 py-1 rounded-full ${
                    ev.status === "demonstrated"
                      ? "bg-success-50 text-success-700"
                      : ev.status === "partial"
                      ? "bg-warning-50 text-warning-700"
                      : "bg-ink-50 text-ink-400"
                  }`}
                >
                  {t(`status_${ev.status}`)}
                </span>
              </div>
              {ev.notes === "pending_review" && (
                <p className="text-caption text-ink-500 mt-1">{t("pendingReview")}</p>
              )}
              {ev.dimension === "speaking" && ev.status === "unknown" && (
                <p className="text-caption text-ink-500 mt-1">{t("speakingNote")}</p>
              )}
            </li>
          ))}
        </ul>
        <p className="text-caption text-ink-400 mt-5">{t("evidenceNote")}</p>
      </Card>

      <div className="flex justify-end">
        <Link href="/dashboard">
          <Button variant="accent">{t("goToDashboard")}</Button>
        </Link>
      </div>
    </div>
  );
}
