"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getStoredProfile, clearLearner } from "@/application/learner-store";
import { trackEvent } from "@/application/local-events";
import { getDueVocab } from "@/application/vocab-store";
import {
  getAllUnits,
  getNextUnit,
  isUnitComplete,
} from "@/domain/lessons/registry";
import {
  getOverallReadiness,
  getLevelReadiness,
} from "@/domain/learning/readiness";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";

export default function DashboardPage() {
  const t = useTranslations("dashboard");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  const [dueCount, setDueCount] = useState(0);

  useEffect(() => {
    const p = getStoredProfile();
    if (!p) {
      router.replace("/onboarding");
      return;
    }
    if (!p.placementCompleted) {
      router.replace("/placement");
      return;
    }
    setProfile(p);
    setDueCount(getDueVocab(50).length);
    trackEvent("dashboard_view");
  }, [router]);

  if (!profile) {
    return (
      <div className="max-w-content mx-auto px-5 py-20">
        <div className="h-10 w-48 bg-ink-100 rounded-2xl animate-pulse" />
      </div>
    );
  }

  const nextUnit = getNextUnit(profile);
  const allUnits = getAllUnits();
  const doneCount = allUnits.filter((u) => isUnitComplete(u, profile)).length;
  const overall = getOverallReadiness(profile);
  const a1 = getLevelReadiness(profile, "A1");

  const hub = [
    {
      href: "/path",
      title: locale === "ar" ? "مسار الدروس" : "Learning path",
      body:
        locale === "ar"
          ? "درس بعد درس — متسلسل من A1 إلى C2"
          : "Lesson by lesson — A1 to C2",
      cta: locale === "ar" ? "افتح المسار" : "Open path",
      primary: true,
    },
    {
      href: "/practice-lab",
      title: locale === "ar" ? "تدريب مكثف" : "Practice lab",
      body:
        locale === "ar"
          ? "كتابة + استماع + أسئلة — ساعات ممارسة"
          : "Writing, listening, quiz drills",
      cta: locale === "ar" ? "ابدأ تدريب" : "Start practice",
      primary: false,
    },
    {
      href: "/vocabulary",
      title: locale === "ar" ? "حفظ الكلمات" : "Vocabulary",
      body:
        locale === "ar"
          ? dueCount > 0
            ? `${dueCount} كلمة للمراجعة`
            : "بنك كلمات كبير حسب المستوى"
          : dueCount > 0
            ? `${dueCount} due for review`
            : "Large word bank by level",
      cta: locale === "ar" ? "راجع الكلمات" : "Review words",
      primary: false,
    },
    {
      href: "/speech",
      title: locale === "ar" ? "النطق" : "Pronunciation",
      body:
        locale === "ar"
          ? "سجّل وقارن — تقييم تقريبي من المتصفح"
          : "Speak & match — browser estimate",
      cta: locale === "ar" ? "تمرين نطق" : "Practice speech",
      primary: false,
    },
    {
      href: "/listening",
      title: locale === "ar" ? "استماع أطول" : "Listening",
      body:
        locale === "ar"
          ? "مقاطع كاملة من A1 إلى C2"
          : "Full passages A1–C2",
      cta: locale === "ar" ? "اسمع" : "Listen",
      primary: false,
    },
    {
      href: "/exam",
      title: locale === "ar" ? "محاكاة امتحان" : "Mock exam",
      body:
        locale === "ar"
          ? "استعداد DELF/DALF — الشهادة من مركز معتمد"
          : "DELF/DALF prep — certificate from a centre",
      cta: locale === "ar" ? "الاستعداد" : "Exam prep",
      primary: false,
    },
  ];

  return (
    <div className="max-w-content mx-auto px-5 sm:px-6 py-10 sm:py-14 scene-3d">
      {/* Header block */}
      <div className="mb-8">
        <p className="text-caption font-semibold text-accent-700 mb-1">
          {t("greeting", { name: profile.displayName })}
        </p>
        <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
        <p className="text-body-sm text-ink-500 max-w-xl">
          {locale === "ar"
            ? "كل حاجة في مكانها: مسار → تدريب → كلمات → نطق → امتحان."
            : "Everything in place: path → practice → words → speech → exam."}
        </p>
      </div>

      {/* Stats — thick chips */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: t("xp"), value: profile.xp ?? 0 },
          { label: t("streak"), value: profile.streakDays ?? 0 },
          {
            label: locale === "ar" ? "دروس" : "Units",
            value: `${doneCount}/${allUnits.length}`,
          },
          {
            label: locale === "ar" ? "جاهزية" : "Ready",
            value: `${overall}%`,
          },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border-2 border-ink-100 bg-white px-4 py-4 shadow-[0_4px_0_#e8e4dc]"
          >
            <p className="text-caption font-semibold text-ink-400 mb-1">
              {s.label}
            </p>
            <p className="text-title-sm font-serif text-ink-950">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Continue lesson — primary action */}
      {nextUnit && (
        <Card className="mb-8 border-accent-300 bg-gradient-to-br from-white to-accent-50/40">
          <p className="text-overline text-accent-700 mb-2 font-bold">
            {t("todayLesson")} · {nextUnit.level}
          </p>
          <h2 className="text-title-sm font-serif mb-2 text-ink-950">
            {nextUnit.title[locale]}
          </h2>
          <p className="text-body-sm text-ink-500 mb-5">{t("lessonFlowHint")}</p>
          <Link href={`/lesson/${nextUnit.id}`}>
            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              {t("startLesson")}
            </Button>
          </Link>
        </Card>
      )}

      {/* Organized hub grid */}
      <h2 className="text-body font-bold text-ink-800 mb-3">
        {locale === "ar" ? "أقسام التعلم" : "Learning sections"}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {hub.map((item) => (
          <Card
            key={item.href}
            className={item.primary ? "border-ink-900 sm:col-span-2" : ""}
          >
            <h3 className="text-title-sm font-serif text-ink-950 mb-1.5">
              {item.title}
            </h3>
            <p className="text-body-sm text-ink-500 mb-4 text-pretty">
              {item.body}
            </p>
            <Link href={item.href}>
              <Button
                variant={item.primary ? "primary" : "secondary"}
                size="sm"
              >
                {item.cta}
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      <p className="text-caption text-ink-400 mb-6">
        {locale === "ar"
          ? `جاهزية A1: ${a1.percent}% · كلمات للمراجعة: ${dueCount}`
          : `A1 readiness: ${a1.percent}% · Words due: ${dueCount}`}
      </p>

      <button
        type="button"
        onClick={() => {
          clearLearner();
          router.push("/");
        }}
        className="text-caption text-ink-300 hover:text-ink-500"
      >
        {t("reset")}
      </button>
    </div>
  );
}
