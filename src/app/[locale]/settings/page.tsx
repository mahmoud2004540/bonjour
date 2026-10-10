"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { clearLearner, getStoredProfile } from "@/application/learner-store";

export default function SettingsPage() {
  const t = useTranslations("settings");
  const router = useRouter();
  const [cleared, setCleared] = useState(false);
  const hasProfile = typeof window !== "undefined" && !!getStoredProfile();

  function handleClear() {
    if (!window.confirm(t("confirm"))) return;
    clearLearner();
    try {
      localStorage.removeItem("bonjour_real_life_v1");
      localStorage.removeItem("bonjour_events_v1");
    } catch {
      /* ignore */
    }
    setCleared(true);
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-8 text-pretty">{t("subtitle")}</p>

      <Card className="mb-8">
        <h2 className="text-body font-medium text-ink-900 mb-2">{t("localTitle")}</h2>
        <p className="text-body-sm text-ink-600 mb-5">{t("localBody")}</p>
        {cleared ? (
          <p className="text-body-sm text-success-700 mb-4">{t("cleared")}</p>
        ) : (
          <Button variant="secondary" onClick={handleClear} disabled={!hasProfile}>
            {t("clear")}
          </Button>
        )}
      </Card>

      <div className="flex flex-wrap gap-3">
        <Link href="/dashboard">
          <Button variant="ghost">{t("dashboard")}</Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">{t("home")}</Button>
        </Link>
        {cleared && (
          <Button variant="accent" onClick={() => router.push("/onboarding")}>
            {t("restart")}
          </Button>
        )}
      </div>
    </div>
  );
}
