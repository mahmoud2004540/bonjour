"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile, markGoalCompleted } from "@/application/learner-store";
import { recordStudyActivity } from "@/application/motivation-store";
import { trackEvent } from "@/application/local-events";
import { getUnitById, getUnitAfter } from "@/domain/lessons/registry";
import { speakFrench, canSpeak } from "@/lib/speech";
import type { LessonPhase } from "@/domain/lessons/types";
import type { Locale } from "@/i18n/config";

const PHASES: LessonPhase[] = ["lesson", "vocab", "exercise", "review", "quiz"];
const MAX_LIVES = 5;

function norm(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[?.!']/g, "")
    .replace(/\s+/g, " ");
}

export default function LessonUnitPage({
  params,
}: {
  params: Promise<{ unitId: string; locale: string }>;
}) {
  const t = useTranslations("lessonFlow");
  const locale = useLocale() as Locale;
  const router = useRouter();

  const [unitId, setUnitId] = useState<string | null>(null);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabRevealed, setVocabRevealed] = useState(false);
  const [exIndex, setExIndex] = useState(0);
  const [exAnswer, setExAnswer] = useState("");
  const [exFeedback, setExFeedback] = useState<null | boolean>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [lives, setLives] = useState(MAX_LIVES);
  const [ttsOk, setTtsOk] = useState(false);

  useEffect(() => {
    params.then((p) => setUnitId(p.unitId));
  }, [params]);

  useEffect(() => {
    if (!getStoredProfile()) router.replace("/onboarding");
    setTtsOk(canSpeak());
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }
  }, [router]);

  const unit = useMemo(
    () => (unitId ? getUnitById(unitId) : undefined),
    [unitId]
  );

  if (!unitId) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16">
        <div className="h-2 w-full bg-ink-100 rounded-full animate-pulse" />
      </div>
    );
  }

  if (!unit) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="mb-6">{t("notFound")}</p>
        <Link href="/path">
          <Button variant="secondary">{t("toPath")}</Button>
        </Link>
      </div>
    );
  }

  const phase = PHASES[phaseIndex];
  const totalSteps =
    1 + unit.vocab.length + unit.exercises.length + 1 + unit.quiz.length;
  let stepDone = 0;
  if (phaseIndex === 0) stepDone = 0;
  else if (phaseIndex === 1) stepDone = 1 + vocabIndex;
  else if (phaseIndex === 2) stepDone = 1 + unit.vocab.length + exIndex;
  else if (phaseIndex === 3) stepDone = 1 + unit.vocab.length + unit.exercises.length;
  else stepDone = 1 + unit.vocab.length + unit.exercises.length + 1 + quizIndex;
  const progressPct = Math.min(100, Math.round((stepDone / totalSteps) * 100));

  function goNextPhase() {
    if (phaseIndex < PHASES.length - 1) {
      setPhaseIndex(phaseIndex + 1);
      recordStudyActivity(5);
    }
  }

  function finishUnit(passed: boolean) {
    if (passed) {
      for (const g of unit!.completesGoals) markGoalCompleted(g);
      trackEvent("unit_passed", { unitId: unit!.id });
      recordStudyActivity(25);
    }
    setQuizDone(true);
  }

  function checkExercise() {
    const item = unit!.exercises[exIndex];
    const ok = item.answers.some((a) => norm(a) === norm(exAnswer));
    setExFeedback(ok);
    if (ok) recordStudyActivity(3);
    else setLives((l) => Math.max(0, l - 1));
  }

  function nextExercise() {
    setExAnswer("");
    setExFeedback(null);
    if (exIndex + 1 < unit!.exercises.length) setExIndex(exIndex + 1);
    else goNextPhase();
  }

  function answerQuiz(opt: number) {
    if (selectedOpt !== null) return;
    setSelectedOpt(opt);
    const item = unit!.quiz[quizIndex];
    const correct = opt === item.correctIndex;
    const nextScore = quizScore + (correct ? 1 : 0);
    setQuizScore(nextScore);
    if (!correct) setLives((l) => Math.max(0, l - 1));

    setTimeout(() => {
      setSelectedOpt(null);
      if (quizIndex + 1 < unit!.quiz.length) setQuizIndex(quizIndex + 1);
      else {
        const ratio = nextScore / unit!.quiz.length;
        finishUnit(ratio >= unit!.passRatio);
      }
    }, 500);
  }

  function ListenBtn({ text }: { text: string }) {
    if (!ttsOk) return null;
    return (
      <button
        type="button"
        onClick={() => speakFrench(text)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent-50 text-accent-800 border border-accent-200 text-body-sm font-medium hover:bg-accent-100 transition-all active:scale-95 shadow-sm"
        aria-label={t("listen")}
      >
        <span className="text-lg">🔊</span>
        {t("listen")}
      </button>
    );
  }

  return (
    <div className="min-h-[100dvh] flex flex-col max-w-lg mx-auto">
      <header className="sticky top-0 z-20 bg-surface/95 backdrop-blur border-b border-ink-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/path" className="text-ink-400 hover:text-ink-700 text-xl leading-none px-1" aria-label={t("exit")}>
            ×
          </Link>
          <div className="flex-1 h-3 rounded-full bg-ink-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="flex items-center gap-0.5 text-sm" title={t("lives")}>
            {Array.from({ length: MAX_LIVES }).map((_, i) => (
              <span key={i} className={i < lives ? "opacity-100" : "opacity-25"}>
                🧡
              </span>
            ))}
          </div>
        </div>
        <p className="text-caption text-ink-400 mt-2 text-center">
          {unit.level} · {unit.title[locale]} · {t(`phase_${phase}`)}
        </p>
      </header>

      <main className="flex-1 px-4 py-6 pb-24">
        {lives === 0 && !quizDone && (
          <Card className="mb-6 text-center border-accent-200">
            <p className="text-body text-ink-800 mb-4">{t("outOfLives")}</p>
            <Button
              variant="accent"
              onClick={() => {
                setLives(MAX_LIVES);
                setPhaseIndex(0);
                setVocabIndex(0);
                setExIndex(0);
                setQuizIndex(0);
                setQuizScore(0);
                setExFeedback(null);
              }}
            >
              {t("retry")}
            </Button>
          </Card>
        )}

        {phase === "lesson" && lives > 0 && (
          <div className="space-y-5">
            <p className="text-body text-ink-700 text-pretty">{unit.lesson.intro[locale]}</p>
            <div className="space-y-3">
              {unit.lesson.dialogue.map((line, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 ${
                    i % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex-1 rounded-2xl px-4 py-3 text-body shadow-sm ${
                      i % 2 === 1
                        ? "bg-accent-50 border border-accent-100 text-ink-900 rounded-se-md"
                        : "bg-white border border-ink-100 text-ink-800 rounded-ss-md"
                    }`}
                  >
                    {line}
                  </div>
                  <button
                    type="button"
                    className="mt-2 shrink-0 w-10 h-10 rounded-full bg-ink-50 border border-ink-100 flex items-center justify-center hover:bg-accent-50 active:scale-95"
                    onClick={() => speakFrench(line.replace(/^—\s*/, ""))}
                    aria-label={t("listen")}
                  >
                    🔊
                  </button>
                </div>
              ))}
            </div>
            <p className="text-body-sm text-ink-500 text-pretty border-s-2 border-accent-300 ps-3">
              {unit.lesson.tip[locale]}
            </p>
            <Button variant="accent" className="w-full h-12" onClick={goNextPhase}>
              {t("nextWords")}
            </Button>
          </div>
        )}

        {phase === "vocab" && lives > 0 && (
          <div className="flex flex-col items-center text-center pt-6">
            <p className="text-caption text-ink-400 mb-6">
              {t("wordProgress", { current: vocabIndex + 1, total: unit.vocab.length })}
            </p>
            <p className="text-display-sm font-serif text-ink-950 mb-4">
              {unit.vocab[vocabIndex].term}
            </p>
            <ListenBtn text={unit.vocab[vocabIndex].term} />
            <p className="text-body-sm text-ink-500 italic mt-6 mb-8">
              {unit.vocab[vocabIndex].example}
            </p>
            <button
              type="button"
              className="text-caption text-accent-700 mb-4 underline"
              onClick={() => speakFrench(unit.vocab[vocabIndex].example)}
            >
              {t("listenExample")}
            </button>
            {!vocabRevealed ? (
              <Button variant="secondary" className="w-full max-w-xs h-12" onClick={() => setVocabRevealed(true)}>
                {t("showMeaning")}
              </Button>
            ) : (
              <div className="w-full max-w-xs space-y-4">
                <p className="text-body-lg text-ink-800 rounded-2xl bg-success-50 border border-success-100 py-4 px-4">
                  {unit.vocab[vocabIndex].meaning[locale]}
                </p>
                <Button
                  variant="accent"
                  className="w-full h-12"
                  onClick={() => {
                    setVocabRevealed(false);
                    if (vocabIndex + 1 < unit.vocab.length) setVocabIndex(vocabIndex + 1);
                    else goNextPhase();
                  }}
                >
                  {vocabIndex + 1 < unit.vocab.length ? t("nextWord") : t("nextExercises")}
                </Button>
              </div>
            )}
          </div>
        )}

        {phase === "exercise" && lives > 0 && (
          <div>
            <p className="text-caption text-ink-400 mb-2">
              {t("exProgress", { current: exIndex + 1, total: unit.exercises.length })}
            </p>
            <p className="text-body-lg text-ink-900 mb-6 text-pretty font-medium">
              {unit.exercises[exIndex].prompt[locale]}
            </p>
            {exFeedback === false && unit.exercises[exIndex].hint && (
              <p className="text-caption text-warning-700 mb-3">
                {t("hint")}: {unit.exercises[exIndex].hint![locale]}
              </p>
            )}
            <input
              className="input-field mb-4 h-14 text-center text-body-lg"
              value={exAnswer}
              onChange={(e) => setExAnswer(e.target.value)}
              placeholder={t("typeAnswer")}
              disabled={exFeedback === true}
              onKeyDown={(e) => {
                if (e.key === "Enter" && exFeedback !== true) checkExercise();
              }}
            />
            {exFeedback === true && (
              <div className="rounded-2xl bg-success-50 border border-success-200 p-4 mb-4 text-success-800 text-body">
                {t("correct")} ✨
              </div>
            )}
            {exFeedback === false && (
              <div className="rounded-2xl bg-accent-50 border border-accent-200 p-4 mb-4 text-accent-800 text-body">
                {t("tryAgain")}
              </div>
            )}
            {exFeedback !== true ? (
              <Button variant="accent" className="w-full h-14 text-body-lg" onClick={checkExercise} disabled={!exAnswer.trim()}>
                {t("check")}
              </Button>
            ) : (
              <Button variant="accent" className="w-full h-14" onClick={nextExercise}>
                {exIndex + 1 < unit.exercises.length ? t("nextEx") : t("nextReview")}
              </Button>
            )}
          </div>
        )}

        {phase === "review" && lives > 0 && (
          <div>
            <p className="text-body text-ink-700 mb-6 text-pretty">{unit.review.summary[locale]}</p>
            <ul className="space-y-3 mb-8">
              {unit.review.checklist[locale].map((line, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-white border border-ink-100 px-4 py-3 shadow-sm"
                >
                  <span className="text-success-600 text-lg">✓</span>
                  <span className="text-body text-ink-800 flex-1">{line}</span>
                  <button
                    type="button"
                    className="text-ink-400 hover:text-accent-600"
                    onClick={() => speakFrench(line)}
                  >
                    🔊
                  </button>
                </li>
              ))}
            </ul>
            <Button variant="accent" className="w-full h-14" onClick={goNextPhase}>
              {t("startQuiz")}
            </Button>
          </div>
        )}

        {phase === "quiz" && !quizDone && lives > 0 && (
          <div>
            <p className="text-caption text-ink-400 mb-3">
              {t("quizProgress", { current: quizIndex + 1, total: unit.quiz.length })}
            </p>
            <p className="text-body-lg text-ink-900 mb-6 font-medium text-pretty">
              {unit.quiz[quizIndex].prompt[locale]}
            </p>
            <div className="space-y-3">
              {unit.quiz[quizIndex].options[locale].map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => answerQuiz(idx)}
                  className={`w-full text-start px-4 py-4 rounded-2xl border-2 text-body transition-all active:scale-[0.98] ${
                    selectedOpt === idx
                      ? idx === unit.quiz[quizIndex].correctIndex
                        ? "border-success-500 bg-success-50 shadow-md"
                        : "border-accent-500 bg-accent-50"
                      : "border-ink-150 bg-white hover:border-ink-300 shadow-sm"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === "quiz" && quizDone && (() => {
          const passed = quizScore / unit.quiz.length >= unit.passRatio;
          const nextUnit = passed ? getUnitAfter(unit.id) : null;
          return (
          <div className="text-center pt-8 scene-3d">
            <div className="text-5xl mb-4">{passed ? "🎉" : "💪"}</div>
            <h2 className="text-title-sm font-serif text-ink-950 mb-3">
              {passed ? t("passedTitle") : t("failedTitle")}
            </h2>
            <p className="text-body text-ink-600 mb-2">
              {t("score", { score: quizScore, total: unit.quiz.length })}
            </p>
            <p className="text-body-sm text-ink-500 mb-6">
              {passed ? t("passedBody") : t("failedBody")}
            </p>
            {passed && nextUnit && (
              <p className="text-body-sm text-accent-700 mb-4 font-medium">
                {t("nextLessonReady", { title: nextUnit.title[locale] })}
              </p>
            )}
            <div className="flex flex-col gap-3 max-w-xs mx-auto">
              {!passed && (
                <Button
                  variant="secondary"
                  className="h-12"
                  onClick={() => {
                    setPhaseIndex(0);
                    setVocabIndex(0);
                    setExIndex(0);
                    setQuizIndex(0);
                    setQuizScore(0);
                    setQuizDone(false);
                    setLives(MAX_LIVES);
                  }}
                >
                  {t("retry")}
                </Button>
              )}
              {passed && nextUnit && (
                <Link href={`/lesson/${nextUnit.id}`}>
                  <Button variant="accent" className="w-full h-14 text-body-lg">
                    {t("continueNext")}
                  </Button>
                </Link>
              )}
              <Link href="/path">
                <Button variant={passed && nextUnit ? "secondary" : "accent"} className="w-full h-12">
                  {t("toPath")}
                </Button>
              </Link>
            </div>
          </div>
          );
        })()}
      </main>
    </div>
  );
}
