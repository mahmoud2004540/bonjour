"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  getSessionsByTrack,
  type TeacherTrack,
} from "@/domain/teacher/sessions";
import type { Locale } from "@/i18n/config";

const VALID: TeacherTrack[] = ["reading", "listening", "writing", "vocab"];

export default function TeacherTrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const t = useTranslations("teacher");
  const locale = useLocale() as Locale;
  const [track, setTrack] = useState<TeacherTrack | null | undefined>(undefined);

  useEffect(() => {
    params.then((p) => {
      if (VALID.includes(p.track as TeacherTrack)) {
        setTrack(p.track as TeacherTrack);
      } else {
        setTrack(null);
      }
    });
  }, [params]);

  if (track === undefined) {
    return (
      <div className="max-w-content mx-auto px-6 py-20">
        <div className="h-6 w-40 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  if (track === null) {
    return (
      <div className="max-w-content mx-auto px-6 py-20 text-center">
        <p className="mb-4">{t("notFound")}</p>
        <Link href="/teacher">
          <Button variant="secondary">{t("backHub")}</Button>
        </Link>
      </div>
    );
  }

  const list = getSessionsByTrack(track);

  return (
    <div className="max-w-content mx-auto px-6 py-16 scene-3d">
      <p className="text-overline text-accent-700 mb-2">{t(`track_${track}`)}</p>
      <h1 className="text-title font-serif text-ink-950 mb-8">
        {t(`track_${track}`)}
      </h1>

      <ul className="space-y-4 mb-10">
        {list.map((s) => (
          <li key={s.id}>
            <Card>
              <p className="text-caption text-ink-400 mb-1">{s.level}</p>
              <h2 className="text-body-lg font-serif text-ink-950 mb-2">
                {s.title[locale]}
              </h2>
              <p className="text-body-sm text-ink-500 mb-4 text-pretty">
                {s.coach[locale]}
              </p>
              <Link href={`/teacher/session/${s.id}`}>
                <Button variant="accent" size="sm">
                  {t("startSession")}
                </Button>
              </Link>
            </Card>
          </li>
        ))}
      </ul>

      <Link href="/teacher">
        <Button variant="ghost">{t("backHub")}</Button>
      </Link>
    </div>
  );
}
