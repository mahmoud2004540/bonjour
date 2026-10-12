"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  createLearner,
  updatePreferences,
  startAsBeginner,
} from "@/application/learner-store";
import { trackEvent } from "@/application/local-events";
import { getSelectableLanguages } from "@/domain/languages";
import type { Locale } from "@/i18n/config";
import type { TargetLanguage } from "@/domain/types";

const OBJECTIVES = [
  { id: "daily", en: "Daily life", fr: "Vie quotidienne", ar: "الحياة اليومية" },
  { id: "work", en: "Work", fr: "Travail", ar: "العمل" },
  { id: "travel", en: "Travel", fr: "Voyage", ar: "السفر" },
  { id: "admin", en: "Administration", fr: "Démarches administratives", ar: "الإجراءات الإدارية" },
  { id: "social", en: "Social situations", fr: "Situations sociales", ar: "المواقف الاجتماعية" },
  { id: "integration", en: "Living abroad", fr: "Vivre à l'étranger", ar: "العيش في الخارج" },
];

const SITUATIONS = [
  { id: "shopping", en: "Shopping", fr: "Courses", ar: "التسوق" },
  { id: "healthcare", en: "Healthcare", fr: "Santé", ar: "الرعاية الصحية" },
  { id: "housing", en: "Housing", fr: "Logement", ar: "السكن" },
  { id: "meeting", en: "Meeting people", fr: "Rencontrer des gens", ar: "مقابلة الناس" },
  { id: "travel", en: "Travel & transport", fr: "Voyage et transports", ar: "السفر والمواصلات" },
  { id: "work", en: "Workplace", fr: "Lieu de travail", ar: "مكان العمل" },
];

const MINUTES = [10, 15, 20, 30, 45];

export default function OnboardingPage() {
  const t = useTranslations("onboarding");
  const locale = useLocale() as Locale;
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  /** Product focus: French only for now */
  const targetLanguage: TargetLanguage = "fr";
  const [dailyMinutes, setDailyMinutes] = useState(15);
  const [objectives, setObjectives] = useState<string[]>([]);
  const [situations, setSituations] = useState<string[]>([]);

  const selectable = getSelectableLanguages();

  function toggle(list: string[], id: string, setter: (v: string[]) => void) {
    setter(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  }

  function saveProfileBase() {
    createLearner(name || "Learner", email || "learner@example.com", locale);
    updatePreferences({
      objectives,
      situations,
      availability: `${dailyMinutes}m`,
      preferredStyle: "",
      targetLanguage: "fr",
      dailyMinutes,
    });
    trackEvent("onboarding_complete", { lang: "fr" });
  }

  function handlePlacement() {
    saveProfileBase();
    router.push("/placement");
  }

  function handleBeginner() {
    saveProfileBase();
    startAsBeginner();
    router.push("/dashboard");
  }

  const totalSteps = 4;

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="text-caption text-ink-400 mb-2 tabular-nums">
          {t("step", { current: step + 1, total: totalSteps })}
        </p>
        <h1 className="text-title font-serif text-ink-950">
          {step === 0 && t("steps.0.title")}
          {step === 1 && t("langTitle")}
          {step === 2 && t("steps.1.title")}
          {step === 3 && t("steps.2.title")}
        </h1>
        <p className="text-body text-ink-600 mt-2 text-pretty">
          {step === 0 && t("steps.0.description")}
          {step === 1 && t("langBody")}
          {step === 2 && t("steps.1.description")}
          {step === 3 && t("steps.2.description")}
        </p>
      </div>

      <Card>
        {step === 0 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">{t("nameLabel")}</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input-field" placeholder={t("namePlaceholder")} autoComplete="name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">{t("emailLabel")}</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder={t("emailPlaceholder")} autoComplete="email" />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <div className="space-y-2.5">
              {selectable.map((lang) => (
                <div
                  key={lang.code}
                  className="w-full text-start px-4 py-3.5 rounded-xl border border-accent-500 bg-accent-50 text-ink-950"
                >
                  <span className="font-medium">{lang.name[locale]}</span>
                  <span className="text-caption text-ink-500 ms-2">{t("pathFull")}</span>
                </div>
              ))}
            </div>
            <p className="text-caption text-ink-400 text-pretty">{t("frenchOnlyNote")}</p>
            <div>
              <p className="text-sm font-medium text-ink-700 mb-2">{t("dailyMinutes")}</p>
              <div className="flex flex-wrap gap-2">
                {MINUTES.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setDailyMinutes(m)}
                    className={`px-3 py-2 rounded-lg border text-sm ${
                      dailyMinutes === m ? "border-accent-500 bg-accent-50" : "border-ink-200"
                    }`}
                  >
                    {m} min
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-2.5">
            {OBJECTIVES.map((obj) => (
              <button key={obj.id} type="button" onClick={() => toggle(objectives, obj.id, setObjectives)}
                className={`w-full text-start px-4 py-3.5 rounded-xl border ${
                  objectives.includes(obj.id) ? "border-accent-500 bg-accent-50" : "border-ink-200"
                }`}>{obj[locale]}</button>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-2.5">
            {SITUATIONS.map((sit) => (
              <button key={sit.id} type="button" onClick={() => toggle(situations, sit.id, setSituations)}
                className={`w-full text-start px-4 py-3.5 rounded-xl border ${
                  situations.includes(sit.id) ? "border-accent-500 bg-accent-50" : "border-ink-200"
                }`}>{sit[locale]}</button>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-3">
          {step > 0 ? (
            <Button variant="ghost" onClick={() => setStep(step - 1)}>{t("back")}</Button>
          ) : (
            <div />
          )}
          {step < totalSteps - 1 ? (
            <Button onClick={() => setStep(step + 1)} disabled={step === 0 && !name.trim()}>
              {t("continue")}
            </Button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto sm:ms-auto">
              <Button variant="secondary" onClick={handleBeginner}>
                {t("skipPlacement")}
              </Button>
              <Button variant="accent" onClick={handlePlacement}>
                {t("startPlacement")}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
