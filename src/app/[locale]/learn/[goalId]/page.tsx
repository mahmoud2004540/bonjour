"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile, markGoalCompleted } from "@/application/learner-store";
import { getGoalById, getTasksForGoal } from "@/domain/curriculum/a1-faire-connaissance";
import type { Locale, Task } from "@/domain/types";

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

  useEffect(() => {
    params.then((p) => setGoalId(p.goalId));
  }, [params]);

  useEffect(() => {
    const profile = getStoredProfile();
    if (!profile) {
      router.replace("/onboarding");
    }
  }, [router]);

  if (!goalId) return null;

  const goal = getGoalById(goalId);
  const tasks = getTasksForGoal(goalId);

  if (!goal || tasks.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        <p className="text-body text-ink-600">{t("notFound")}</p>
        <Link href="/dashboard" className="mt-4 inline-block">
          <Button variant="secondary">{t("backToDashboard")}</Button>
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
      // Mark goal as demonstrated when learner completes the evidence step
      if (isEvidence || isProduction) {
        markGoalCompleted(goalId!);
      }
      router.push("/dashboard");
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
    <div className="max-w-lg mx-auto px-6 py-16">
      {/* Progress */}
      <div className="mb-8">
        <p className="text-caption text-ink-500 mb-1">{goal.title[locale]}</p>
        <div className="flex gap-1 mb-4">
          {tasks.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i <= taskIndex ? "bg-ink-950" : "bg-ink-200"
              }`}
            />
          ))}
        </div>
        <h1 className="text-title font-serif text-ink-950">{task.title[locale]}</h1>
      </div>

      <Card>
        <p className="text-body-lg text-ink-900 mb-4">{task.prompt[locale]}</p>

        {task.content && (
          <div className="bg-ink-50 rounded-xl p-4 mb-6 text-body text-ink-800 whitespace-pre-line">
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
                className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-surface focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none mb-4"
                placeholder={t("writePlaceholder")}
              />
            )}

            {isEvidence && (
              <div className="space-y-3 mb-4">
                <p className="text-body text-ink-600">{t("selfAssessPrompt")}</p>
                <div className="flex gap-3">
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
          <div className="bg-ink-50 rounded-xl p-4 mb-4">
            <p className="text-body text-ink-800">{t("feedbackRecorded")}</p>
            <p className="text-caption text-ink-500 mt-1">{t("feedbackNote")}</p>
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

      {/* Can-do reminder */}
      <p className="text-caption text-ink-500 text-center mt-8">
        {goal.canDoStatement[locale]}
      </p>
    </div>
  );
}
