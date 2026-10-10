"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PLACEMENT_QUESTIONS } from "@/domain/placement/questions";
import { finalizePlacement, getStoredProfile } from "@/application/learner-store";
import type { PlacementObservation } from "@/domain/types";
import type { Locale } from "@/i18n/config";

export default function PlacementPage() {
  const t = useTranslations("placement");
  const locale = useLocale() as Locale;
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [openText, setOpenText] = useState("");

  useEffect(() => {
    const profile = getStoredProfile();
    if (!profile) {
      router.replace("/onboarding");
    } else if (profile.placementCompleted) {
      router.replace("/dashboard");
    }
  }, [router]);

  const question = PLACEMENT_QUESTIONS[current];
  const isLast = current === PLACEMENT_QUESTIONS.length - 1;

  function selectOption(index: number) {
    setAnswers({ ...answers, [question.id]: index });
  }

  function handleNext() {
    const nextAnswers = { ...answers };
    if (question.type === "open") {
      nextAnswers[question.id] = openText;
    }

    if (isLast) {
      const observations: PlacementObservation[] = PLACEMENT_QUESTIONS.map((q) => {
        const answer = nextAnswers[q.id] ?? (q.type === "open" ? openText : -1);
        let isCorrect: boolean | null = null;

        if (q.type === "multiple_choice" && typeof answer === "number") {
          isCorrect = answer === q.correctIndex;
        }

        return {
          dimension: q.dimension,
          questionId: q.id,
          response: String(answer),
          isCorrect,
          observedAt: new Date().toISOString(),
        };
      });

      finalizePlacement(observations);
      router.push("/profile");
    } else {
      setAnswers(nextAnswers);
      setCurrent(current + 1);
      setOpenText("");
    }
  }

  const canContinue =
    question.type === "open"
      ? openText.trim().length > 0
      : answers[question.id] !== undefined;

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <p className="text-caption text-ink-400 tabular-nums">
            {t("progress", { current: current + 1, total: PLACEMENT_QUESTIONS.length })}
          </p>
          <div className="flex gap-1.5" aria-hidden="true">
            {PLACEMENT_QUESTIONS.map((_, i) => (
              <div
                key={i}
                className={`h-1 w-7 rounded-full transition-colors duration-300 ${
                  i <= current ? "bg-ink-950" : "bg-ink-200"
                }`}
              />
            ))}
          </div>
        </div>
        <h1 className="text-title font-serif text-ink-950">{t("title")}</h1>
        <p className="text-body text-ink-600 mt-2 text-pretty">{t("subtitle")}</p>
      </div>

      <Card>
        <p className="text-body-lg text-ink-900 mb-7 text-pretty">
          {question.prompt[locale]}
        </p>

        {question.type === "multiple_choice" && question.options && (
          <div className="space-y-2.5">
            {question.options[locale].map((opt, idx) => (
              <button
                key={idx}
                onClick={() => selectOption(idx)}
                className={`w-full text-start px-4 py-3.5 rounded-xl border transition-all duration-150 ${
                  answers[question.id] === idx
                    ? "border-accent-500 bg-accent-50 text-ink-950"
                    : "border-ink-200 hover:border-ink-300 text-ink-700"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {question.type === "open" && (
          <textarea
            value={openText}
            onChange={(e) => setOpenText(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-surface-elevated text-body text-ink-950 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none transition-all duration-200"
            placeholder={t("openPlaceholder")}
          />
        )}

        <div className="mt-8 flex justify-end">
          <Button onClick={handleNext} disabled={!canContinue}>
            {isLast ? t("finish") : t("next")}
          </Button>
        </div>
      </Card>
    </div>
  );
}
