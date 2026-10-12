"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAchievements } from "@/application/achievements";
import type { Locale } from "@/i18n/config";

const LABELS: Record<string, Record<Locale, string>> = {
  first_goal: {
    en: "First goal shown",
    fr: "Premier objectif démontré",
    ar: "أول هدف أثبتّه",
  },
  five_goals: {
    en: "Five goals shown",
    fr: "Cinq objectifs démontrés",
    ar: "خمسة أهداف أثبتّها",
  },
  xp_100: {
    en: "100 XP reached",
    fr: "100 XP atteints",
    ar: "وصلت إلى 100 نقطة",
  },
  streak_3: {
    en: "3-day streak",
    fr: "Série de 3 jours",
    ar: "سلسلة 3 أيام",
  },
  vocab_master_1: {
    en: "First mastered word",
    fr: "Premier mot maîtrisé",
    ar: "أول كلمة مُتقَنة",
  },
};

export default function AchievementsPage() {
  const t = useTranslations("achievements");
  const locale = useLocale() as Locale;
  const [items, setItems] = useState<{ id: string; unlocked: boolean }[]>([]);

  useEffect(() => {
    setItems(getAchievements());
  }, []);

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-8 text-pretty">{t("subtitle")}</p>

      <ul className="space-y-3 mb-10">
        {items.map((a) => (
          <li key={a.id}>
            <Card className={a.unlocked ? "border-success-100" : "opacity-60"}>
              <div className="flex items-center justify-between gap-3">
                <p className="text-body text-ink-900">
                  {LABELS[a.id]?.[locale] ?? a.id}
                </p>
                <span className="text-caption text-ink-500">
                  {a.unlocked ? t("unlocked") : t("locked")}
                </span>
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <Link href="/dashboard">
        <Button variant="ghost">{t("back")}</Button>
      </Link>
    </div>
  );
}
