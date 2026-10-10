"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { createLearner, updatePreferences } from "@/application/learner-store";
import type { Locale } from "@/domain/types";

const OBJECTIVES = [
  { id: "daily", en: "Daily life", fr: "Vie quotidienne", ar: "الحياة اليومية" },
  { id: "work", en: "Work", fr: "Travail", ar: "العمل" },
  { id: "travel", en: "Travel", fr: "Voyage", ar: "السفر" },
  { id: "admin", en: "Administration", fr: "Démarches administratives", ar: "الإجراءات الإدارية" },
  { id: "social", en: "Social situations", fr: "Situations sociales", ar: "المواقف الاجتماعية" },
  { id: "integration", en: "Living in a French-speaking country", fr: "Vivre dans un pays francophone", ar: "العيش في بلد ناطق بالفرنسية" },
];

const SITUATIONS = [
  { id: "shopping", en: "Shopping", fr: "Courses", ar: "التسوق" },
  { id: "healthcare", en: "Healthcare", fr: "Santé", ar: "الرعاية الصحية" },
  { id: "housing", en: "Housing", fr: "Logement", ar: "السكن" },
  { id: "meeting", en: "Meeting people", fr: "Rencontrer des gens", ar: "مقابلة الناس" },
];

export default function OnboardingPage() {
  const t = useTranslations("onboarding");
  const locale = useLocale() as Locale;
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [objectives, setObjectives] = useState<string[]>([]);
  const [situations, setSituations] = useState<string[]>([]);

  function toggle(list: string[], id: string, setter: (v: string[]) => void) {
    setter(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  }

  function handleFinish() {
    createLearner(name || "Learner", email || "learner@example.com", locale);
    updatePreferences({
      objectives,
      situations,
      availability: "",
      preferredStyle: "",
    });
    router.push("/placement");
  }

  return (
    <div className="max-w-lg mx-auto px-6 py-16">
      <div className="mb-10">
        <p className="text-caption text-ink-500 mb-2">
          {t("step", { current: step + 1, total: 3 })}
        </p>
        <h1 className="text-title font-serif text-ink-950">{t(`steps.${step}.title`)}</h1>
        <p className="text-body text-ink-600 mt-2">{t(`steps.${step}.description`)}</p>
      </div>

      <Card>
        {step === 0 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">{t("nameLabel")}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-11 px-4 rounded-xl border border-ink-200 bg-surface focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder={t("namePlaceholder")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">{t("emailLabel")}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 rounded-xl border border-ink-200 bg-surface focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder={t("emailPlaceholder")}
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-3">
            {OBJECTIVES.map((obj) => (
              <button
                key={obj.id}
                onClick={() => toggle(objectives, obj.id, setObjectives)}
                className={`w-full text-start px-4 py-3 rounded-xl border transition-all ${
                  objectives.includes(obj.id)
                    ? "border-accent-500 bg-accent-50 text-ink-950"
                    : "border-ink-200 hover:border-ink-300 text-ink-700"
                }`}
              >
                {obj[locale]}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            {SITUATIONS.map((sit) => (
              <button
                key={sit.id}
                onClick={() => toggle(situations, sit.id, setSituations)}
                className={`w-full text-start px-4 py-3 rounded-xl border transition-all ${
                  situations.includes(sit.id)
                    ? "border-accent-500 bg-accent-50 text-ink-950"
                    : "border-ink-200 hover:border-ink-300 text-ink-700"
                }`}
              >
                {sit[locale]}
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 0 ? (
            <Button variant="ghost" onClick={() => setStep(step - 1)}>
              {t("back")}
            </Button>
          ) : (
            <div />
          )}

          {step < 2 ? (
            <Button onClick={() => setStep(step + 1)} disabled={step === 0 && !name.trim()}>
              {t("continue")}
            </Button>
          ) : (
            <Button variant="accent" onClick={handleFinish}>
              {t("startPlacement")}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
