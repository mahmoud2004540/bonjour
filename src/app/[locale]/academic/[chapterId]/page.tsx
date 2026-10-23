"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getChapterById } from "@/domain/academic/chapters";
import { markGoalCompleted, getStoredProfile } from "@/application/learner-store";
import { recordStudyActivity } from "@/application/motivation-store";
import type { Locale } from "@/i18n/config";

type Phase = "theory" | "examples" | "drills" | "quiz" | "done";

function norm(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[?.!']/g, "")
    .replace(/\s+/g, " ");
}

export default function AcademicChapterPage({
  params,
}: {
  params: Promise<{ chapterId: string }>;
}) {
  const t = useTranslations("academic");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [chapterId, setChapterId] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("theory");
  const [drillIndex, setDrillIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<null | boolean>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    params.then((p) => setChapterId(p.chapterId));
  }, [params]);

  useEffect(() => {
    if (!getStoredProfile()) router.replace("/onboarding");
  }, [router]);

  const chapter = useMemo(
    () => (chapterId ? getChapterById(chapterId) : undefined),
    [chapterId]
  );

  if (!chapterId) {
    return (
      <div className="max-w-content mx-auto px-6 py-20">
        <div className="h-6 w-40 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="max-w-content mx-auto px-6 py-20 text-center">
        <p className="mb-6">{t("notFound")}</p>
        <Link href="/academic">
          <Button variant="secondary">{t("backList")}</Button>
        </Link>
      </div>
    );
  }

  function checkDrill() {
    const item = chapter!.drills[drillIndex];
    const ok = item.answers.some((a) => norm(a) === norm(answer));
    setFeedback(ok);
    if (ok) recordStudyActivity();
  }

  function nextDrill() {
    setAnswer("");
    setFeedback(null);
    if (drillIndex + 1 < chapter!.drills.length) {
      setDrillIndex(drillIndex + 1);
    } else {
      setPhase("quiz");
    }
  }

  function answerQuiz(opt: number) {
    if (selected !== null) return;
    setSelected(opt);
    const item = chapter!.quiz[quizIndex];
    const correct = opt === item.correctIndex;
    const next = quizScore + (correct ? 1 : 0);
    setQuizScore(next);
    setTimeout(() => {
      setSelected(null);
      if (quizIndex + 1 < chapter!.quiz.length) {
        setQuizIndex(quizIndex + 1);
      } else {
        const ratio = next / chapter!.quiz.length;
        if (ratio >= chapter!.passRatio) {
          markGoalCompleted(`academic-${chapter!.id}`);
          recordStudyActivity();
        }
        setPhase("done");
      }
    }, 400);
  }

  const phases: Phase[] = ["theory", "examples", "drills", "quiz"];
  const phaseIdx = phases.indexOf(phase === "done" ? "quiz" : phase);

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20 scene-3d">
      <p className="text-caption text-ink-400 mb-1">
        {chapter.level} · {t("academicLabel")}
      </p>
      <h1 className="text-title font-serif text-ink-950 mb-4">
        {chapter.title[locale]}
      </h1>

      {phase !== "done" && (
        <div className="flex gap-1.5 mb-8" aria-hidden>
          {phases.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                i <= phaseIdx ? "bg-accent-600" : "bg-ink-200"
              }`}
            />
          ))}
        </div>
      )}

      {phase === "theory" && (
        <Card>
          <p className="text-overline text-accent-700 mb-3">{t("theory")}</p>
          <p className="text-body text-ink-800 mb-8 text-pretty leading-relaxed">
            {chapter.theory[locale]}
          </p>
          <Button variant="accent" onClick={() => setPhase("examples")}>
            {t("nextExamples")}
          </Button>
        </Card>
      )}

      {phase === "examples" && (
        <Card>
          <p className="text-overline text-accent-700 mb-4">{t("examples")}</p>
          <ul className="space-y-3 mb-8">
            {chapter.examples.map((ex, i) => (
              <li key={i} className="border-b border-ink-100 pb-3">
                <p className="font-serif text-body-lg text-ink-950">{ex.fr}</p>
                <p className="text-body-sm text-ink-500">{ex.gloss[locale]}</p>
              </li>
            ))}
          </ul>
          <Button variant="accent" onClick={() => setPhase("drills")}>
            {t("nextDrills")}
          </Button>
        </Card>
      )}

      {phase === "drills" && (
        <Card>
          <p className="text-caption text-ink-400 mb-2">
            {t("drillProgress", {
              current: drillIndex + 1,
              total: chapter.drills.length,
            })}
          </p>
          <p className="text-body-lg text-ink-900 mb-4 text-pretty">
            {chapter.drills[drillIndex].prompt[locale]}
          </p>
          {feedback === false && chapter.drills[drillIndex].hint && (
            <p className="text-caption text-warning-700 mb-2">
              {t("hint")}: {chapter.drills[drillIndex].hint![locale]}
            </p>
          )}
          <input
            className="input-field mb-4"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={feedback === true}
            placeholder={t("typeAnswer")}
          />
          {feedback === true && (
            <p className="text-body-sm text-success-700 mb-4">{t("correct")}</p>
          )}
          {feedback === false && (
            <p className="text-body-sm text-accent-700 mb-4">{t("tryAgain")}</p>
          )}
          {feedback !== true ? (
            <Button variant="accent" onClick={checkDrill} disabled={!answer.trim()}>
              {t("check")}
            </Button>
          ) : (
            <Button variant="accent" onClick={nextDrill}>
              {drillIndex + 1 < chapter.drills.length ? t("nextDrill") : t("nextQuiz")}
            </Button>
          )}
        </Card>
      )}

      {phase === "quiz" && (
        <Card>
          <p className="text-caption text-ink-400 mb-2">
            {t("quizProgress", {
              current: quizIndex + 1,
              total: chapter.quiz.length,
            })}
          </p>
          <p className="text-body-lg text-ink-900 mb-5 text-pretty">
            {chapter.quiz[quizIndex].prompt[locale]}
          </p>
          <div className="space-y-2.5">
            {chapter.quiz[quizIndex].options[locale].map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => answerQuiz(idx)}
                className={`w-full text-start px-4 py-3.5 rounded-xl border transition-all ${
                  selected === idx
                    ? idx === chapter.quiz[quizIndex].correctIndex
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

      {phase === "done" && (
        <Card className="text-center">
          <h2 className="text-title-sm font-serif text-ink-950 mb-3">
            {quizScore / chapter.quiz.length >= chapter.passRatio
              ? t("passed")
              : t("failed")}
          </h2>
          <p className="text-body text-ink-600 mb-6">
            {t("score", { score: quizScore, total: chapter.quiz.length })}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="secondary"
              onClick={() => {
                setPhase("theory");
                setDrillIndex(0);
                setQuizIndex(0);
                setQuizScore(0);
              }}
            >
              {t("retry")}
            </Button>
            <Link href="/academic">
              <Button variant="accent">{t("backList")}</Button>
            </Link>
          </div>
        </Card>
      )}

      <div className="mt-8">
        <Link href="/academic">
          <Button variant="ghost">{t("exit")}</Button>
        </Link>
      </div>
    </div>
  );
}
