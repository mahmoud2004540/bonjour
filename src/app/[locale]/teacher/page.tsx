"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAllTeacherSessions, type TeacherTrack } from "@/domain/teacher/sessions";
import type { Locale } from "@/i18n/config";

const TRACKS: TeacherTrack[] = ["reading", "listening", "writing", "vocab"];

export default function TeacherHubPage() {
  const t = useTranslations("teacher");
  const locale = useLocale() as Locale;
  const sessions = getAllTeacherSessions();

  return (
    <div className="max-w-content mx-auto px-6 py-16 scene-3d">
      <p className="text-overline text-accent-700 mb-2">{t("eyebrow")}</p>
      <h1 className="text-title font-serif text-ink-950 mb-3">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-2 text-pretty max-w-2xl">{t("subtitle")}</p>
      <p className="text-body-sm text-ink-500 mb-10 text-pretty max-w-2xl">{t("coachNote")}</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {TRACKS.map((track) => (
          <Card key={track} className="layer-stack">
            <p className="text-2xl mb-2">{t(`icon_${track}`)}</p>
            <h2 className="text-title-sm font-serif text-ink-950 mb-2">
              {t(`track_${track}`)}
            </h2>
            <p className="text-body-sm text-ink-500 mb-4 text-pretty">
              {t(`trackBody_${track}`)}
            </p>
            <p className="text-caption text-ink-400 mb-3">
              {t("sessionCount", {
                count: sessions.filter((s) => s.track === track).length,
              })}
            </p>
            <Link href={`/teacher/${track}`}>
              <Button variant="accent" size="sm">
                {t("openTrack")}
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/path">
          <Button variant="secondary">{t("toPath")}</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="ghost">{t("toDashboard")}</Button>
        </Link>
      </div>
    </div>
  );
}
