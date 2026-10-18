"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  clearLearner,
  getStoredProfile,
  downloadBackupFile,
  importBackup,
} from "@/application/learner-store";
import type { Locale } from "@/i18n/config";

export default function SettingsPage() {
  const t = useTranslations("settings");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [cleared, setCleared] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const [importMsg, setImportMsg] = useState<string | null>(null);

  useEffect(() => {
    setHasProfile(!!getStoredProfile());
  }, []);

  function handleClear() {
    if (!window.confirm(t("confirm"))) return;
    clearLearner();
    try {
      localStorage.removeItem("bonjour_real_life_v1");
      localStorage.removeItem("bonjour_events_v1");
      localStorage.removeItem("bonjour_vocab_v2");
      localStorage.removeItem("bonjour_motivation_v1");
    } catch {
      /* ignore */
    }
    setCleared(true);
    setHasProfile(false);
  }

  function handleExport() {
    downloadBackupFile();
  }

  function handleImportFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result ?? "");
      const result = importBackup(text);
      if (result.ok) {
        setImportMsg(
          locale === "ar"
            ? "تم استيراد النسخة — حدّث الصفحة."
            : "Backup restored — refresh the page."
        );
        setHasProfile(!!getStoredProfile());
        setTimeout(() => router.push("/dashboard"), 800);
      } else {
        setImportMsg(
          locale === "ar"
            ? "الملف غير صالح. جرّب نسخة احتياطية من Bonjour."
            : "Invalid file. Use a Bonjour backup export."
        );
      }
    };
    reader.readAsText(file);
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-8 text-pretty">{t("subtitle")}</p>

      {/* Backup — closes the “no cloud account” gap honestly */}
      <Card className="mb-6">
        <h2 className="text-body font-bold text-ink-900 mb-2">
          {locale === "ar"
            ? "نسخ احتياطي للتقدّم"
            : "Progress backup"}
        </h2>
        <p className="text-body-sm text-ink-600 mb-4">
          {locale === "ar"
            ? "التقدّم محفوظ على جهازك. حمّل نسخة JSON عشان ما تضيعش لو مسحت المتصفح أو غيّرت الجهاز. مفيش حساب سحابي حاليًا — ده بديل صريح."
            : "Progress is stored on this device. Download a JSON backup so you don’t lose it if you clear the browser or switch devices. No cloud account yet — this is the honest workaround."}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="accent" onClick={handleExport} disabled={!hasProfile}>
            {locale === "ar" ? "تحميل نسخة احتياطية" : "Download backup"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => fileRef.current?.click()}
          >
            {locale === "ar" ? "استيراد نسخة" : "Import backup"}
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleImportFile(f);
            }}
          />
        </div>
        {importMsg && (
          <p className="text-body-sm text-ink-700 mt-3">{importMsg}</p>
        )}
      </Card>

      <Card className="mb-8">
        <h2 className="text-body font-medium text-ink-900 mb-2">
          {t("localTitle")}
        </h2>
        <p className="text-body-sm text-ink-600 mb-5">{t("localBody")}</p>
        {cleared ? (
          <p className="text-body-sm text-success-700 mb-4">{t("cleared")}</p>
        ) : (
          <Button
            variant="secondary"
            onClick={handleClear}
            disabled={!hasProfile}
          >
            {t("clear")}
          </Button>
        )}
      </Card>

      <div className="flex flex-wrap gap-3">
        <Link href="/dashboard">
          <Button variant="ghost">{t("dashboard")}</Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">{t("home")}</Button>
        </Link>
        {cleared && (
          <Button variant="accent" onClick={() => router.push("/onboarding")}>
            {t("restart")}
          </Button>
        )}
      </div>
    </div>
  );
}
