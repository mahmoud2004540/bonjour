"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  getAllListeningPacks,
  type ListeningPack,
} from "@/domain/lessons/listening-packs";
import { getStoredProfile } from "@/application/learner-store";
import { recordStudyActivity } from "@/application/motivation-store";
import { speakFrench, canSpeak } from "@/lib/speech";
import type { Locale } from "@/i18n/config";

export default function ListeningPage() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [tts, setTts] = useState(false);
  const [active, setActive] = useState<ListeningPack | null>(null);
  const [showText, setShowText] = useState(false);
  const [reps, setReps] = useState(0);

  useEffect(() => {
    if (!getStoredProfile()) {
      router.replace("/onboarding");
      return;
    }
    setReady(true);
    setTts(canSpeak());
  }, [router]);

  if (!ready) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20">
        <div className="h-8 w-40 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  const packs = getAllListeningPacks();

  function playFull(pack: ListeningPack) {
    setActive(pack);
    setShowText(false);
    if (tts) speakFrench(pack.passage);
    setReps((r) => r + 1);
    recordStudyActivity();
  }

  return (
    <div className="max-w-lg mx-auto px-5 py-12 scene-3d">
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="text-caption text-ink-400 hover:text-ink-600"
        >
          ← {locale === "ar" ? "لوحة التحكم" : "Dashboard"}
        </Link>
        <h1 className="text-title font-serif text-ink-950 mt-3 mb-2">
          {locale === "ar"
            ? "جلسات استماع أطول"
            : locale === "fr"
              ? "Écoute prolongée"
              : "Longer listening"}
        </h1>
        <p className="text-body-sm text-ink-500 text-pretty">
          {locale === "ar"
            ? "مقاطع أطول على الموقع (نطق المتصفح). اسمع كاملًا، بعدين شوف النص وكرّر الجمل المهمة."
            : "Longer on-site passages via browser speech. Listen fully, then reveal text and repeat focus lines."}
        </p>
      </div>

      {!tts && (
        <Card className="mb-4 border-accent-100">
          <p className="text-body-sm text-ink-600">
            {locale === "ar"
              ? "النطق غير متاح في المتصفح ده — تقدر تقرأ المقاطع وتتمرن بصوت عالي."
              : "Speech synthesis unavailable — you can still read and practice aloud."}
          </p>
        </Card>
      )}

      <div className="space-y-4 mb-8">
        {packs.map((pack) => (
          <Card key={pack.id} className="layer-stack">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <p className="text-overline text-accent-700">{pack.level}</p>
                <h2 className="text-body-lg font-medium text-ink-900">
                  {pack.title[locale]}
                </h2>
              </div>
              <Button
                variant="accent"
                size="sm"
                onClick={() => playFull(pack)}
              >
                {locale === "ar" ? "تشغيل كامل" : "Play full"}
              </Button>
            </div>
            {active?.id === pack.id && (
              <div className="mt-4 pt-4 border-t border-ink-100 space-y-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowText((s) => !s)}
                >
                  {showText
                    ? locale === "ar"
                      ? "إخفاء النص"
                      : "Hide text"
                    : locale === "ar"
                      ? "إظهار النص"
                      : "Show text"}
                </Button>
                {showText && (
                  <p
                    className="text-body text-ink-800 leading-relaxed font-serif"
                    dir="ltr"
                  >
                    {pack.passage}
                  </p>
                )}
                <p className="text-caption text-ink-400">
                  {locale === "ar" ? "جمل للتركيز:" : "Focus lines:"}
                </p>
                <ul className="space-y-2">
                  {pack.focus.map((line) => (
                    <li key={line} className="flex gap-2 items-start">
                      <button
                        type="button"
                        className="text-accent-700 text-caption underline shrink-0"
                        onClick={() => tts && speakFrench(line)}
                      >
                        ▶
                      </button>
                      <span className="text-body-sm text-ink-800" dir="ltr">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>

      <p className="text-caption text-ink-400 mb-4">
        {locale === "ar"
          ? `تكرارات هالجلسة: ${reps}`
          : `Plays this session: ${reps}`}
      </p>

      <div className="flex flex-wrap gap-2">
        <Link href="/practice-lab">
          <Button variant="secondary">
            {locale === "ar" ? "معمل الممارسة" : "Practice lab"}
          </Button>
        </Link>
        <Link href="/path">
          <Button variant="secondary">
            {locale === "ar" ? "المسار" : "Path"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
