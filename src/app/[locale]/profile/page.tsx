"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile } from "@/application/learner-store";
import type { LearnerProfile, Locale } from "@/domain/types";

const STATUS_LABELS: Record<string, Record<Locale, string>> = {
  demonstrated: { en: "Demonstrated", fr: "Démontré", ar: "مُثبت" },
  partial: { en: "Partial", fr: "Partiel", ar: "جزئي" },
  not_yet: { en: "Not yet", fr: "Pas encore", ar: "ليس بعد" },
  unknown: { en: "Not assessed", fr: "Non évalué", ar: "لم يُقيَّم" },
};

export default function ProfilePage() {
  const t = useTranslations("profile");
  const locale = useLocale() as Locale;
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

  if (!profile) return null;

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-10">{t("subtitle")}</p>

      <Card className="mb-6">
        <h2 className="text-lg font-medium text-ink-950 mb-1">{profile.displayName}</h2>
        <p className="text-caption text-ink-500 mb-4">{profile.email}</p>

        <div className="border-t border-ink-100 pt-4">
          <p className="text-sm text-ink-500 mb-1">{t("startingPoint")}</p>
          <p className="text-body-lg font-medium text-ink-900">
            {profile.estimatedStartingLevel === "unknown"
              ? t("levelUnknown")
              : t("levelEstimate", { level: profile.estimatedStartingLevel })}
          </p>
          <p className="text-caption text-ink-500 mt-1">{t("levelNote")}</p>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="text-sm font-medium text-ink-700 mb-4">{t("evidenceTitle")}</h3>
        <ul className="space-y-3">
          {profile.skillEvidence.map((ev) => (
            <li key={ev.dimension} className="flex justify-between items-center">
              <span className="text-body text-ink-800 capitalize">{ev.dimension}</span>
              <span
                className={`text-caption font-medium px-2.5 py-1 rounded-full ${
                  ev.status === "demonstrated"
                    ? "bg-green-50 text-green-700"
                    : ev.status === "partial"
                    ? "bg-amber-50 text-amber-700"
                    : "bg-ink-50 text-ink-500"
                }`}
              >
                {STATUS_LABELS[ev.status][locale]}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-caption text-ink-500 mt-4">{t("evidenceNote")}</p>
      </Card>

      <div className="flex justify-end">
        <Link href="/dashboard">
          <Button variant="accent">{t("goToDashboard")}</Button>
        </Link>
      </div>
    </div>
  );
}
