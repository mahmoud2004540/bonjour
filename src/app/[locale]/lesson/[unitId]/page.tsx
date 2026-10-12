"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile, markGoalCompleted } from "@/application/learner-store";
import { recordStudyActivity } from "@/application/motivation-store";
import { trackEvent } from "@/application/local-events";
import {
  getUnitById,
  type LessonPhase,
} from "@/domain/lessons/fr-a1-intro-unit";
import type { Locale } from "@/i18n/config";

const PHASES: LessonPhase[] = ["lesson", "vocab", "exercise", "review", "quiz"];

function norm(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[?.!]/g, "");
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

  useEffect(() => {
    params.then((p) => setUnitId(p.unitId));
  }, [params]);

  useEffect(() => {
    if (!getStoredProfile()) router.replace("/onboarding");
  }, [router]);

  const unit = useMemo(
    () => (unitId ? getUnitById(unitId) : undefined),
    [unitId]
  );

  if (!unitId || !unit) {
    return (
      <div className="max-w-content mx-auto px-6 py-20">
        <div className="h-6 w-40 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  const phase = PHASES[phaseIndex];

  function goNextPhase() {
    if (phaseIndex < PHASES.length - 1) {
      setPhaseIndex(phaseIndex + 1);
      recordStudyActivity(5);
    }
  }

  function finishUnit(passed: boolean) {
    if (passed) {
      for (const g of unit!.completesGoals) {
        markGoalCompleted(g);
      }
      trackEvent("unit_passed", { unitId: unit!.id });
      recordStudyActivity(20);
    } else {
      trackEvent("unit_failed", { unitId: unit!.id });
    }
    setQuizDone(true);
  }

  function checkExercise() {
    const item = unit!.exercises[exIndex];
    const ok = item.answers.some((a) => norm(a) === norm(exAnswer));
    setExFeedback(ok);
    if (ok) recordStudyActivity(3);
  }

  function nextExercise() {
    setExAnswer("");
    setExFeedback(null);
    if (exIndex + 1 < unit!.exercises.length) {
      setExIndex(exIndex + 1);
    } else {
      goNextPhase();
    }
  }

  function answerQuiz(opt: number) {
    if (selectedOpt !== null) return;
    setSelectedOpt(opt);
    const item = unit!.quiz[quizIndex];
    const correct = opt === item.correctIndex;
    const nextScore = quizScore + (correct ? 1 : 0);
    setQuizScore(nextScore);

    setTimeout(() => {
      setSelectedOpt(null);
      if (quizIndex + 1 < unit!.quiz.length) {
        setQuizIndex(quizIndex + 1);
      } else {
        const ratio = nextScore / unit!.quiz.length;
        finishUnit(ratio >= unit!.passRatio);
      }
    }, 500);
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <p className="text-caption text-ink-400 mb-1">
        {unit.level} · {unit.title[locale]}
      </p>
      <h1 className="text-title font-serif text-ink-950 mb-4">{t(`phase_${phase}`)}</h1>

      <div className="flex gap-1.5 mb-8" aria-hidden>
        {PHASES.map((p, i) => (
          <div
            key={p}
            className={`h-1.5 flex-1 rounded-full ${
              i <= phaseIndex ? "bg-accent-600" : "bg-ink-200"
            }`}
          />
        ))}
      </div>

      {phase === "lesson" && (
        <Card>
          <p className="text-body text-ink-700 mb-6 text-pretty">{unit.lesson.intro[locale]}</p>
          <div className="bg-ink-50 rounded-xl p-5 mb-6 space-y-2 font-serif text-body text-ink-900">
            {unit.lesson.dialogue.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <p className="text-body-sm text-ink-500 mb-8 text-pretty">{unit.lesson.tip[locale]}</p>
          <Button variant="accent" onClick={goNextPhase}>
            {t("nextWords")}
          </Button>
        </Card>
      )}

      {phase === "vocab" && (
        <Card>
          <p className="text-caption text-ink-400 mb-3">
            {t("wordProgress", {
              current: vocabIndex + 1,
              total: unit.vocab.length,
            })}
          </p>
          <p className="text-title-sm font-serif text-ink-950 mb-3">
            {unit.vocab[vocabIndex].term}
          </p>
          <p className="text-body-sm text-ink-500 italic mb-4">
            {unit.vocab[vocabIndex].example}
          </p>
          {!vocabRevealed ? (
            <Button variant="secondary" onClick={() => setVocabRevealed(true)}>
              {t("showMeaning")}
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-body text-ink-800">
                {unit.vocab[vocabIndex].meaning[locale]}
              </p>
              <Button
                variant="accent"
                onClick={() => {
                  setVocabRevealed(false);
                  if (vocabIndex + 1 < unit.vocab.length) {
                    setVocabIndex(vocabIndex + 1);
                  } else {
                    goNextPhase();
                  }
                }}
              >
                {vocabIndex + 1 < unit.vocab.length ? t("nextWord") : t("nextExercises")}
              </Button>
            </div>
          )}
        </Card>
      )}

      {phase === "exercise" && (
        <Card>
          <p className="text-caption text-ink-400 mb-3">
            {t("exProgress", {
              current: exIndex + 1,
              total: unit.exercises.length,
            })}
          </p>
          <p className="text-body-lg text-ink-900 mb-4 text-pretty">
            {unit.exercises[exIndex].prompt[locale]}
          </p>
          {unit.exercises[exIndex].hint && exFeedback === false && (
            <p className="text-caption text-warning-700 mb-3">
              {t("hint")}: {unit.exercises[exIndex].hint![locale]}
            </p>
          )}
          <input
            className="input-field mb-4"
            value={exAnswer}
            onChange={(e) => setExAnswer(e.target.value)}
            placeholder={t("typeAnswer")}
            disabled={exFeedback === true}
          />
          {exFeedback === true && (
            <p className="text-body-sm text-success-700 mb-4">{t("correct")}</p>
          )}
          {exFeedback === false && (
            <p className="text-body-sm text-accent-700 mb-4">{t("tryAgain")}</p>
          )}
          <div className="flex flex-wrap gap-3">
            {exFeedback !== true ? (
              <Button variant="accent" onClick={checkExercise} disabled={!exAnswer.trim()}>
                {t("check")}
              </Button>
            ) : (
              <Button variant="accent" onClick={nextExercise}>
                {exIndex + 1 < unit.exercises.length ? t("nextEx") : t("nextReview")}
              </Button>
            )}
          </div>
        </Card>
      )}

      {phase === "review" && (
        <Card>
          <p className="text-body text-ink-700 mb-5 text-pretty">{unit.review.summary[locale]}</p>
          <ul className="space-y-3 mb-8">
            {unit.review.checklist[locale].map((line, i) => (
              <li key={i} className="text-body text-ink-800 flex gap-2">
                <span className="text-accent-600">✓</span>
                {line}
              </li>
            ))}
          </ul>
          <Button variant="accent" onClick={goNextPhase}>
            {t("startQuiz")}
          </Button>
        </Card>
      )}

      {phase === "quiz" && !quizDone && (
        <Card>
          <p className="text-caption text-ink-400 mb-3">
            {t("quizProgress", {
              current: quizIndex + 1,
              total: unit.quiz.length,
            })}
          </p>
          <p className="text-body-lg text-ink-900 mb-5 text-pretty">
            {unit.quiz[quizIndex].prompt[locale]}
          </p>
          <div className="space-y-2.5">
            {unit.quiz[quizIndex].options[locale].map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => answerQuiz(idx)}
                className={`w-full text-start px-4 py-3.5 rounded-xl border transition-all ${
                  selectedOpt === idx
                    ? idx === unit.quiz[quizIndex].correctIndex
                      ? "border-success-600 bg-success-50"
                      : "border-accent-500 bg-accent-50"
                    : "border-ink-200 hover:border-ink-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </Card>
      )}

      {phase === "quiz" && quizDone && (
        <Card className="text-center">
          <h2 className="text-title-sm font-serif text-ink-950 mb-3">
            {quizScore / unit.quiz.length >= unit.passRatio
              ? t("passedTitle")
              : t("failedTitle")}
          </h2>
          <p className="text-body text-ink-600 mb-2">
            {t("score", { score: quizScore, total: unit.quiz.length })}
          </p>
          <p className="text-body-sm text-ink-500 mb-8 text-pretty">
            {quizScore / unit.quiz.length >= unit.passRatio
              ? t("passedBody")
              : t("failedBody")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {quizScore / unit.quiz.length < unit.passRatio && (
              <Button
                variant="secondary"
                onClick={() => {
                  setPhaseIndex(0);
                  setVocabIndex(0);
                  setExIndex(0);
                  setQuizIndex(0);
                  setQuizScore(0);
                  setQuizDone(false);
                }}
              >
                {t("retry")}
              </Button>
            )}
            <Link href="/dashboard">
              <Button variant="accent">{t("toDashboard")}</Button>
            </Link>
          </div>
        </Card>
      )}

      <div className="mt-8">
        <Link href="/dashboard">
          <Button variant="ghost">{t("exit")}</Button>
        </Link>
      </div>
    </div>
  );
}
