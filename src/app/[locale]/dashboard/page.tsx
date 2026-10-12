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
      <div className="max-w-content mx-auto px-6 py-20">
        <div className="h-8 w-48 bg-ink-100 rounded-lg animate-pulse" />
      </div>
    );
  }

  const nextUnit = getNextUnit(profile);
  const allUnits = getAllUnits();
  const doneCount = allUnits.filter((u) => isUnitComplete(u, profile)).length;
  const overall = getOverallReadiness(profile);
  const a1 = getLevelReadiness(profile, "A1");

  return (
    <div className="max-w-content mx-auto px-6 py-16 scene-3d">
      <div className="mb-8">
        <p className="text-caption text-ink-400 mb-1">
          {t("greeting", { name: profile.displayName })}
        </p>
        <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
        <p className="text-body-sm text-ink-500">
          {locale === "ar"
            ? "مسار أعمق + استماع أطول + ممارسة مكثفة + محاكاة امتحان."
            : t("encourage")}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <Card depth={false}>
          <p className="text-caption text-ink-400">{t("xp")}</p>
          <p className="text-title-sm font-serif">{profile.xp ?? 0}</p>
        </Card>
        <Card depth={false}>
          <p className="text-caption text-ink-400">{t("streak")}</p>
          <p className="text-title-sm font-serif">{profile.streakDays ?? 0}</p>
        </Card>
        <Card depth={false}>
          <p className="text-caption text-ink-400">{t("unitsProgress")}</p>
          <p className="text-title-sm font-serif">
            {doneCount}/{allUnits.length}
          </p>
        </Card>
        <Card depth={false}>
          <p className="text-caption text-ink-400">
            {locale === "ar" ? "الجاهزية" : "Readiness"}
          </p>
          <p className="text-title-sm font-serif">{overall}%</p>
        </Card>
      </div>

      <Card className="mb-4 border-accent-200">
        <h3 className="text-title-sm font-serif mb-2">
          {locale === "ar" ? "استماع أطول" : "Longer listening"}
        </h3>
        <p className="text-body-sm text-ink-600 mb-4">
          {locale === "ar"
            ? "مقاطع كاملة من A1 إلى C2 على الموقع — تشغيل، إخفاء النص، تركيز على جمل مفتاحية."
            : "Full passages A1–C2 on-site — play, hide text, focus lines."}
        </p>
        <Link href="/listening">
          <Button variant="accent">
            {locale === "ar" ? "افتح الاستماع" : "Open listening"}
          </Button>
        </Link>
      </Card>

      <Card className="mb-4 border-accent-100">
        <h3 className="text-title-sm font-serif mb-2">
          {locale === "ar" ? "ساعات ممارسة" : "Practice hours"}
        </h3>
        <p className="text-body-sm text-ink-600 mb-2">
          {locale === "ar"
            ? "جولات كتابة واستماع واختيار من دروسك."
            : "Writing, listening, quiz drills from your lessons."}
        </p>
        <p className="text-caption text-ink-500 mb-4">
          {locale === "ar"
            ? `جاهزية A1: ${a1.percent}%`
            : `A1 readiness: ${a1.percent}%`}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/practice-lab">
            <Button variant="secondary">
              {locale === "ar" ? "معمل الممارسة" : "Practice lab"}
            </Button>
          </Link>
          <Link href="/path">
            <Button variant="secondary">
              {locale === "ar" ? "المسار" : "Path"}
            </Button>
          </Link>
        </div>
      </Card>

      <Card className="mb-4">
        <h3 className="text-title-sm font-serif mb-2">
          {locale === "ar" ? "مع المدرس (مهارات)" : "Teacher skills"}
        </h3>
        <p className="text-body-sm text-ink-600 mb-4">
          {locale === "ar"
            ? "قراءة، كتابة، استماع، حفظ كلمات."
            : "Reading, writing, listening, vocab."}
        </p>
        <Link href="/teacher">
          <Button variant="secondary">
            {locale === "ar" ? "افتح المهارات" : "Open skills"}
          </Button>
        </Link>
      </Card>

      <Card className="mb-6">
        <h3 className="text-title-sm font-serif mb-2">
          {locale === "ar" ? "محاكاة الامتحان" : "Mock exam"}
        </h3>
        <p className="text-body-sm text-ink-600 mb-4">
          {locale === "ar"
            ? "استعداد DELF/DALF — الشهادة الرسمية من مركز معتمد."
            : "DELF/DALF readiness — official certificate from an accredited centre."}
        </p>
        <Link href="/exam">
          <Button variant="secondary">
            {locale === "ar" ? "الاستعداد" : "Exam prep"}
          </Button>
        </Link>
      </Card>

      {nextUnit && (
        <Card className="mb-6">
          <p className="text-overline text-accent-700 mb-2">
            {t("todayLesson")} · {nextUnit.level}
          </p>
          <h2 className="text-title-sm font-serif mb-2">
            {nextUnit.title[locale]}
          </h2>
          <p className="text-body-sm text-ink-500 mb-4">{t("lessonFlowHint")}</p>
          <Link href={`/lesson/${nextUnit.id}`}>
            <Button variant="secondary">{t("startLesson")}</Button>
          </Link>
        </Card>
      )}

      {dueCount > 0 && (
        <Card className="mb-6">
          <p className="text-body mb-3">{t("vocabDue", { count: dueCount })}</p>
          <Link href="/vocabulary">
            <Button variant="secondary" size="sm">
              {t("reviewVocab")}
            </Button>
          </Link>
        </Card>
      )}

      <button
        type="button"
        onClick={() => {
          clearLearner();
          router.push("/");
        }}
        className="text-caption text-ink-300"
      >
        {t("reset")}
      </button>
    </div>
  );
}
