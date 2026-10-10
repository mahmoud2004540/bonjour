"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile, markGoalCompleted } from "@/application/learner-store";
import { getGoalById, getTasksForGoal } from "@/domain/curriculum/registry";
import type { Task } from "@/domain/types";
import type { Locale } from "@/i18n/config";

export default function LearnPage({
  params,
}: {
  params: Promise<{ goalId: string; locale: string }>;
}) {
  const t = useTranslations("learn");
  const locale = useLocale() as Locale;
  const router = useRouter();

  const [goalId, setGoalId] = useState<string | null>(null);
  const [taskIndex, setTaskIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    params.then((p) => setGoalId(p.goalId));
  }, [params]);

  useEffect(() => {
    const profile = getStoredProfile();
    if (!profile) {
      router.replace("/onboarding");
    }
  }, [router]);

  if (!goalId) {
    return (
      <div className="max-w-content mx-auto px-6 py-20">
        <div className="h-6 w-40 bg-ink-100 rounded animate-pulse mb-4" />
        <div className="h-4 w-64 bg-ink-50 rounded animate-pulse" />
      </div>
    );
  }

  const goal = getGoalById(goalId);
  const tasks = getTasksForGoal(goalId);

  if (!goal || tasks.length === 0) {
    return (
      <div className="max-w-content mx-auto px-6 py-20 text-center">
        <p className="text-body text-ink-600 mb-6">{t("notFound")}</p>
        <Link href="/dashboard">
          <Button variant="secondary">{t("backToDashboard")}</Button>
        </Link>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="max-w-content mx-auto px-6 py-20 text-center">
        <h1 className="text-title font-serif text-ink-950 mb-3">{t("doneTitle")}</h1>
        <p className="text-body text-ink-600 mb-8 text-pretty">{t("doneBody")}</p>
        <Link href="/dashboard">
          <Button variant="accent">{t("backToDashboard")}</Button>
        </Link>
      </div>
    );
  }

  const task: Task = tasks[taskIndex];
  const isLast = taskIndex === tasks.length - 1;
  const isEvidence = task.type === "evidence";
  const isProduction = task.type === "supported" || task.type === "independent";

  function handleContinue() {
    if (isLast) {
      if (isEvidence || isProduction) {
        markGoalCompleted(goalId!);
      }
      setFinished(true);
    } else {
      setTaskIndex(taskIndex + 1);
      setResponse("");
      setShowFeedback(false);
    }
  }

  function handleSelfAssess(demonstrated: boolean) {
    if (demonstrated) {
      markGoalCompleted(goalId!);
    }
    setShowFeedback(true);
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="text-caption text-ink-400 mb-2">{goal.title[locale]}</p>
        <div className="flex gap-1.5 mb-5" aria-hidden="true">
          {tasks.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i <= taskIndex ? "bg-ink-950" : "bg-ink-200"
              }`}
            />
          ))}
        </div>
        <h1 className="text-title font-serif text-ink-950">{task.title[locale]}</h1>
      </div>

      <Card>
        <p className="text-body-lg text-ink-900 mb-5 text-pretty">{task.prompt[locale]}</p>

        {task.content && (
          <div className="bg-ink-50 rounded-xl p-5 mb-6 text-body text-ink-800 whitespace-pre-line leading-relaxed">
            {task.content[locale]}
          </div>
        )}

        {(isProduction || isEvidence) && !showFeedback && (
          <>
            {isProduction && (
              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-surface-elevated text-body text-ink-950 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none mb-5 transition-all duration-200"
                placeholder={t("writePlaceholder")}
              />
            )}

            {isEvidence && (
              <div className="space-y-4 mb-5">
                <p className="text-body text-ink-600">{t("selfAssessPrompt")}</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="accent" onClick={() => handleSelfAssess(true)}>
                    {t("yesICan")}
                  </Button>
                  <Button variant="secondary" onClick={() => handleSelfAssess(false)}>
                    {t("notYet")}
                  </Button>
                </div>
              </div>
            )}
          </>
        )}

        {showFeedback && (
          <div className="bg-ink-50 rounded-xl p-5 mb-5">
            <p className="text-body text-ink-800">{t("feedbackRecorded")}</p>
            <p className="text-caption text-ink-400 mt-1.5">{t("feedbackNote")}</p>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Link href="/dashboard">
            <Button variant="ghost">{t("exit")}</Button>
          </Link>

          {(!isEvidence || showFeedback) && (
            <Button
              onClick={handleContinue}
              disabled={isProduction && !response.trim() && !showFeedback}
            >
              {isLast ? t("finish") : t("continue")}
            </Button>
          )}
        </div>
      </Card>

      <p className="text-caption text-ink-400 text-center mt-10">
        {goal.canDoStatement[locale]}
      </p>
    </div>
  );
}
