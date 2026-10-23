"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAchievements } from "@/application/achievements";

export default function AchievementsPage() {
  const t = useTranslations("achievements");
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
                  {t(`label_${a.id}`)}
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
