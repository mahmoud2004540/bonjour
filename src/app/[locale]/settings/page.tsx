"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  clearLearner,
  getStoredProfile,
  downloadBackupFile,
  importBackup,
} from "@/application/learner-store";
import {
  getThemePreference,
  setThemePreference,
  type ThemePreference,
} from "@/application/theme";

const THEMES: ThemePreference[] = ["system", "light", "dark"];

export default function SettingsPage() {
  const t = useTranslations("settings");
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [cleared, setCleared] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const [importMsg, setImportMsg] = useState<string | null>(null);
  const [theme, setTheme] = useState<ThemePreference>("system");

  useEffect(() => {
    setHasProfile(!!getStoredProfile());
    setTheme(getThemePreference());
  }, []);

  function chooseTheme(pref: ThemePreference) {
    setThemePreference(pref);
    setTheme(pref);
  }

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
        setImportMsg(t("importOk"));
        setHasProfile(!!getStoredProfile());
        setTimeout(() => router.push("/dashboard"), 800);
      } else {
        setImportMsg(t("importBad"));
      }
    };
    reader.readAsText(file);
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-8 text-pretty">{t("subtitle")}</p>

      <Card className="mb-6">
        <h2 id="theme-heading" className="text-body font-bold text-ink-900 mb-3">
          {t("themeTitle")}
        </h2>
        <div role="radiogroup" aria-labelledby="theme-heading" className="flex flex-wrap gap-2">
          {THEMES.map((pref) => (
            <button
              key={pref}
              type="button"
              role="radio"
              aria-checked={theme === pref}
              onClick={() => chooseTheme(pref)}
              className={`min-h-11 px-4 rounded-xl border-2 text-body-sm font-semibold transition-colors ${
                theme === pref
                  ? "border-ink-950 bg-ink-950 text-surface"
                  : "border-ink-200 text-ink-800 hover:border-ink-400"
              }`}
            >
              {t(`theme_${pref}`)}
            </button>
          ))}
        </div>
      </Card>

      {/* Backup — closes the “no cloud account” gap honestly */}
      <Card className="mb-6">
        <h2 className="text-body font-bold text-ink-900 mb-2">
          {t("backupTitle")}
        </h2>
        <p className="text-body-sm text-ink-600 mb-4">
          {t("backupBody")}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="accent" onClick={handleExport} disabled={!hasProfile}>
            {t("downloadBackup")}
          </Button>
          <Button
            variant="secondary"
            onClick={() => fileRef.current?.click()}
          >
            {t("importBackup")}
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
