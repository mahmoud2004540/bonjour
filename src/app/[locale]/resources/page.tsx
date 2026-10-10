"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  RESOURCES,
  CEFR_LEVELS,
  type LearningResource,
} from "@/domain/resources/catalog";
import type { CefrLevel } from "@/domain/types";
import type { Locale } from "@/i18n/config";

export default function ResourcesPage() {
  const t = useTranslations("resources");
  const locale = useLocale() as Locale;
  const [level, setLevel] = useState<CefrLevel | "all">("all");
  const [audioOnly, setAudioOnly] = useState(false);

  const filtered = RESOURCES.filter((r) => {
    if (level !== "all" && !r.levels.includes(level)) return false;
    if (audioOnly && !r.hasAudio) return false;
    return true;
  });

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-4 text-pretty">{t("subtitle")}</p>
      <p className="text-caption text-ink-400 mb-10">{t("disclaimer")}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <FilterChip
          active={level === "all"}
          onClick={() => setLevel("all")}
          label={t("allLevels")}
        />
        {CEFR_LEVELS.map((l) => (
          <FilterChip
            key={l}
            active={level === l}
            onClick={() => setLevel(l)}
            label={l}
          />
        ))}
      </div>

      <label className="inline-flex items-center gap-2 text-body-sm text-ink-600 mb-10 cursor-pointer">
        <input
          type="checkbox"
          checked={audioOnly}
          onChange={(e) => setAudioOnly(e.target.checked)}
          className="rounded border-ink-300"
        />
        {t("audioOnly")}
      </label>

      <div className="space-y-4 mb-12">
        {filtered.map((r) => (
          <ResourceCard key={r.id} resource={r} locale={locale} t={t} />
        ))}
        {filtered.length === 0 && (
          <p className="text-body text-ink-500">{t("empty")}</p>
        )}
      </div>

      <Link href="/dashboard">
        <Button variant="secondary">{t("back")}</Button>
      </Link>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-caption transition-colors duration-200 ${
        active
          ? "bg-ink-950 text-white"
          : "bg-ink-100 text-ink-600 hover:bg-ink-200"
      }`}
    >
      {label}
    </button>
  );
}

function ResourceCard({
  resource,
  locale,
  t,
}: {
  resource: LearningResource;
  locale: Locale;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
        <h2 className="text-body-lg font-medium text-ink-950">
          {resource.title[locale]}
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {resource.levels.map((l) => (
            <span
              key={l}
              className="text-caption px-2 py-0.5 rounded-md bg-ink-50 text-ink-500"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
      <p className="text-body-sm text-ink-600 mb-3 text-pretty">
        {resource.description[locale]}
      </p>
      <div className="flex flex-wrap items-center gap-3 text-caption text-ink-400 mb-4">
        <span>{resource.provider}</span>
        {resource.hasAudio && <span>· {t("includesAudio")}</span>}
        {resource.free && <span>· {t("free")}</span>}
      </div>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex"
      >
        <Button variant="accent" size="sm">
          {t("open")}
        </Button>
      </a>
    </Card>
  );
}
