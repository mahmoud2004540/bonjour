"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAllUnits } from "@/domain/lessons/registry";
import { SPEECH_CAPABILITIES } from "@/domain/speech/types";
import { getStoredProfile } from "@/application/learner-store";
import { recordStudyActivity } from "@/application/motivation-store";
import { speakFrench, canSpeak } from "@/lib/speech";
import {
  getRecognitionSupport,
  listenOnceFrench,
  matchPronunciation,
  type MatchLevel,
  type PronunciationMatch,
} from "@/lib/speech-recognition";
import type { Locale } from "@/i18n/config";

function levelLabel(locale: Locale, level: MatchLevel): string {
  const map: Record<MatchLevel, Record<string, string>> = {
    exact: { ar: "تطابق ممتاز", en: "Excellent match", fr: "Très bonne correspondance" },
    close: { ar: "قريب جدًا", en: "Very close", fr: "Très proche" },
    partial: { ar: "جزئي — كرّر", en: "Partial — try again", fr: "Partiel — réessayez" },
    weak: { ar: "ضعيف — اسمع وكرّر", en: "Weak — listen & repeat", fr: "Faible — écoutez et répétez" },
  };
  return map[level][locale] || map[level].en;
}

export default function SpeechPracticePage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("speech");
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [tts, setTts] = useState(false);
  const [recOk, setRecOk] = useState(false);
  const [targets, setTargets] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);
  const [listening, setListening] = useState(false);
  const [lastMatch, setLastMatch] = useState<PronunciationMatch | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (!getStoredProfile()) {
      router.replace("/onboarding");
      return;
    }
    setReady(true);
    setTts(canSpeak());
    setRecOk(getRecognitionSupport().supported);

    const lines: string[] = [];
    for (const u of getAllUnits().slice(0, 35)) {
      for (const v of u.vocab.slice(0, 2)) lines.push(v.term);
      for (const d of u.lesson.dialogue.slice(0, 2)) {
        const clean = d.replace(/^—\s*/, "").trim();
        if (clean.length > 3 && clean.length < 90) lines.push(clean);
      }
    }
    // unique
    setTargets(Array.from(new Set(lines)).slice(0, 40));
  }, [router]);

  const target = targets[idx] || "";

  const disclaimer = t("disclaimer");

  async function startListen() {
    if (!target || listening) return;
    setError(null);
    setLastMatch(null);
    setListening(true);
    const result = await listenOnceFrench(9000);
    setListening(false);

    if (!result.ok) {
      const msg =
        result.error === "not-allowed" || result.error === "service-not-allowed"
          ? t("errMic")
          : result.error === "timeout"
            ? t("errTimeout")
            : result.error === "unsupported"
              ? t("errUnsupported")
              : t("errOther", { error: result.error ?? "" });
      setError(msg);
      return;
    }

    const match = matchPronunciation(target, result.transcript);
    setLastMatch(match);
    setAttempts((a) => a + 1);
    if (match.level === "exact" || match.level === "close") {
      recordStudyActivity();
    }
  }

  function nextTarget() {
    setLastMatch(null);
    setError(null);
    setIdx((i) => (i + 1) % Math.max(targets.length, 1));
  }

  if (!ready) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20">
        <div className="h-8 w-40 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-5 py-12 scene-3d">
      <Link
        href="/dashboard"
        className="text-caption text-ink-400 hover:text-ink-600"
      >
        ← {t("dashboard")}
      </Link>

      <h1 className="text-title font-serif text-ink-950 mt-3 mb-2">
        {t("title")}
      </h1>

      <Card className="mb-4 border-accent-100 bg-accent-50/40">
        <p className="text-body-sm text-ink-700 text-pretty">{disclaimer}</p>
        <p className="text-caption text-ink-400 mt-2">
          mode: {SPEECH_CAPABILITIES.automaticEvaluationMode}
        </p>
      </Card>

      {!recOk && (
        <Card className="mb-4">
          <p className="text-body-sm text-ink-600">
            {t("noRecognition")}
          </p>
        </Card>
      )}

      <Card className="layer-stack mb-6">
        <p className="text-caption text-ink-400 mb-1">
          {idx + 1} / {targets.length || 1}
        </p>
        <p className="font-serif text-body-lg text-ink-950 mb-4" dir="ltr">
          {target || "…"}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tts && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => speakFrench(target)}
              disabled={!target}
            >
              {t("hearTarget")}
            </Button>
          )}
          <Button
            variant="accent"
            size="sm"
            onClick={startListen}
            disabled={!recOk || listening || !target}
          >
            {listening ? t("listening") : t("speakNow")}
          </Button>
          <Button variant="ghost" size="sm" onClick={nextTarget}>
            {t("nextLine")}
          </Button>
        </div>

        {error && (
          <p className="text-body-sm text-accent-700 mb-3">{error}</p>
        )}

        {lastMatch && (
          <div className="rounded-2xl border border-ink-100 bg-white p-4 space-y-2">
            <p className="text-body font-medium text-ink-900">
              {levelLabel(locale, lastMatch.level)}
            </p>
            <p className="text-caption text-ink-500">
              {t("wordOverlap")}:{" "}
              {lastMatch.wordScore}%
            </p>
            <p className="text-body-sm text-ink-700" dir="ltr">
              <span className="text-ink-400">
                {t("heard")}{" "}
              </span>
              {lastMatch.heard || "—"}
            </p>
            {lastMatch.missingWords.length > 0 && (
              <p className="text-caption text-ink-500" dir="ltr">
                missing: {lastMatch.missingWords.join(", ")}
              </p>
            )}
          </div>
        )}
      </Card>

      <p className="text-caption text-ink-400 mb-4">
        {t("attempts", { count: attempts })}
      </p>

      <div className="flex flex-wrap gap-2">
        <Link href="/listening">
          <Button variant="secondary">
            {t("toListening")}
          </Button>
        </Link>
        <Link href="/teacher">
          <Button variant="secondary">
            {t("toTeacher")}
          </Button>
        </Link>
        <Link href="/path">
          <Button variant="ghost">
            {t("toPath")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
