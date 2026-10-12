"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAllUnits, isUnitComplete } from "@/domain/lessons/registry";
import { getStoredProfile } from "@/application/learner-store";
import { recordStudyActivity } from "@/application/motivation-store";
import { speakFrench, canSpeak } from "@/lib/speech";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";

type Drill = {
  id: string;
  kind: "write" | "quiz" | "listen";
  prompt: string;
  answers?: string[];
  options?: string[];
  correctIndex?: number;
  speakText?: string;
};

function norm(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[?.!']/g, "")
    .replace(/\s+/g, " ");
}

function buildDrills(locale: Locale, profile: LearnerProfile): Drill[] {
  const drills: Drill[] = [];
  const units = getAllUnits().filter(
    (u) => isUnitComplete(u, profile) || true
  );

  for (const u of units.slice(0, 40)) {
    for (const v of u.vocab.slice(0, 2)) {
      drills.push({
        id: `${u.id}-v-${v.term}`,
        kind: "write",
        prompt:
          locale === "ar"
            ? `اكتب بالفرنسية: ${v.meaning.ar}`
            : locale === "fr"
              ? `Écrivez : ${v.meaning.fr}`
              : `Write in French: ${v.meaning.en}`,
        answers: [v.term, v.term.toLowerCase()],
        speakText: v.term,
      });
    }
    for (const q of u.quiz.slice(0, 1)) {
      drills.push({
        id: `${u.id}-${q.id}`,
        kind: "quiz",
        prompt: q.prompt[locale],
        options: q.options[locale],
        correctIndex: q.correctIndex,
      });
    }
    if (u.lesson.dialogue[0]) {
      const line = u.lesson.dialogue[0].replace(/^—\s*/, "");
      drills.push({
        id: `${u.id}-listen`,
        kind: "listen",
        prompt:
          locale === "ar"
            ? "اسمع وكرّر الجملة (اضغط تشغيل)"
            : "Listen and repeat",
        speakText: line,
      });
    }
  }

  // Shuffle lightly
  for (let i = drills.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [drills[i], drills[j]] = [drills[j], drills[i]];
  }
  return drills.slice(0, 24);
}

export default function PracticeLabPage() {
  const t = useTranslations("practiceLab");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<null | boolean>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const [tts, setTts] = useState(false);

  useEffect(() => {
    const p = getStoredProfile();
    if (!p) {
      router.replace("/onboarding");
      return;
    }
    setProfile(p);
    setTts(canSpeak());
  }, [router]);

  const drills = useMemo(() => {
    if (!profile) return [];
    return buildDrills(locale, profile);
  }, [profile, locale]);

  if (!profile) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20">
        <div className="h-8 w-40 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  const drill = drills[idx];
  const minutes = Math.max(1, Math.round((Date.now() - startedAt) / 60000));

  function finishSession() {
    recordStudyActivity(Math.min(40, 5 + score * 2));
    setDone(true);
  }

  function next() {
    setAnswer("");
    setFeedback(null);
    if (idx + 1 >= drills.length) finishSession();
    else setIdx(idx + 1);
  }

  function checkWrite() {
    if (!drill?.answers) return;
    const ok = drill.answers.some((a) => norm(a) === norm(answer));
    setFeedback(ok);
    if (ok) setScore((s) => s + 1);
  }

  function answerQuiz(opt: number) {
    if (drill?.correctIndex === undefined) return;
    const ok = opt === drill.correctIndex;
    setFeedback(ok);
    if (ok) setScore((s) => s + 1);
    setTimeout(next, 450);
  }

  return (
    <div className="max-w-lg mx-auto min-h-[100dvh] flex flex-col scene-3d">
      <header className="sticky top-0 z-10 bg-surface/95 backdrop-blur border-b border-ink-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-ink-400 text-xl px-1">
            ×
          </Link>
          <div className="flex-1">
            <p className="text-caption text-ink-400">{t("eyebrow")}</p>
            <p className="text-body-sm font-medium">{t("title")}</p>
          </div>
          <span className="text-caption text-ink-500">
            {idx + 1}/{drills.length || 1}
          </span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-ink-100 overflow-hidden">
          <div
            className="h-full bg-accent-500 transition-all"
            style={{
              width: `${drills.length ? ((idx + 1) / drills.length) * 100 : 0}%`,
            }}
          />
        </div>
      </header>

      <main className="flex-1 px-4 py-6 pb-24">
        <Card className="mb-4 border-accent-100 bg-accent-50/30">
          <p className="text-body-sm text-ink-700 text-pretty">{t("instituteNote")}</p>
        </Card>

        {!done && drill && (
          <Card className="layer-stack">
            <p className="text-caption text-ink-400 mb-2">
              {t(`kind_${drill.kind}`)}
            </p>
            <p className="text-body-lg font-medium text-ink-900 mb-4 text-pretty">
              {drill.prompt}
            </p>

            {drill.kind === "listen" && drill.speakText && (
              <div className="space-y-3">
                {tts && (
                  <Button
                    variant="accent"
                    onClick={() => speakFrench(drill.speakText!)}
                  >
                    {t("play")}
                  </Button>
                )}
                <p className="font-serif text-body text-ink-800" dir="ltr">
                  {drill.speakText}
                </p>
                <Button variant="secondary" onClick={next}>
                  {t("heard")}
                </Button>
              </div>
            )}

            {drill.kind === "write" && (
              <div>
                {tts && drill.speakText && (
                  <button
                    type="button"
                    className="text-caption text-accent-700 underline mb-3"
                    onClick={() => speakFrench(drill.speakText!)}
                  >
                    {t("play")}
                  </button>
                )}
                <input
                  className="input-field h-14 mb-3 text-center"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder={t("typeAnswer")}
                  dir="ltr"
                  disabled={feedback === true}
                />
                {feedback === true && (
                  <p className="text-success-700 mb-3">{t("correct")}</p>
                )}
                {feedback === false && (
                  <p className="text-accent-700 mb-3">{t("tryAgain")}</p>
                )}
                {feedback !== true ? (
                  <Button
                    variant="accent"
                    className="w-full"
                    onClick={checkWrite}
                    disabled={!answer.trim()}
                  >
                    {t("check")}
                  </Button>
                ) : (
                  <Button variant="accent" className="w-full" onClick={next}>
                    {t("next")}
                  </Button>
                )}
              </div>
            )}

            {drill.kind === "quiz" && drill.options && (
              <div className="space-y-2">
                {drill.options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => answerQuiz(i)}
                    className={`w-full text-start px-4 py-3 rounded-2xl border-2 ${
                      feedback !== null && i === drill.correctIndex
                        ? "border-success-500 bg-success-50"
                        : "border-ink-100 bg-white"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </Card>
        )}

        {done && (
          <Card className="text-center">
            <p className="text-4xl mb-3">⏱</p>
            <h2 className="text-title-sm font-serif mb-2">{t("sessionDone")}</h2>
            <p className="text-body text-ink-600 mb-1">
              {t("sessionScore", { score, total: drills.length })}
            </p>
            <p className="text-body-sm text-ink-500 mb-6">
              {t("sessionMinutes", { min: minutes })}
            </p>
            <div className="flex flex-col gap-2">
              <Button
                variant="accent"
                onClick={() => {
                  setIdx(0);
                  setScore(0);
                  setDone(false);
                  setAnswer("");
                  setFeedback(null);
                }}
              >
                {t("anotherRound")}
              </Button>
              <Link href="/path">
                <Button variant="secondary" className="w-full">
                  {t("toPath")}
                </Button>
              </Link>
              <Link href="/exam">
                <Button variant="secondary" className="w-full">
                  {t("toExam")}
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
}
