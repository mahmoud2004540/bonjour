"use client";

import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import type { AuthErrorCode } from "@/application/auth";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-12 md:py-16">
      <p className="text-overline text-accent-700 mb-2">Bonjour</p>
      <h1 className="text-title font-serif text-ink-950 mb-2">{title}</h1>
      {subtitle && <p className="text-body text-ink-600 mb-8 text-pretty">{subtitle}</p>}
      <Card>{children}</Card>
      {footer && <div className="mt-6 space-y-2 text-body-sm text-ink-600">{footer}</div>}
    </div>
  );
}

export function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  autoComplete,
  hint,
  disabled,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  hint?: string;
  disabled?: boolean;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-semibold text-ink-800 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className="input-field"
        dir={type === "email" || type === "password" ? "ltr" : undefined}
        required
      />
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-caption text-ink-500">
          {hint}
        </p>
      )}
    </div>
  );
}

export function AuthError({ code }: { code: AuthErrorCode | "mismatch" | null }) {
  const t = useTranslations("auth");
  if (!code) return null;
  return (
    <p role="alert" className="mb-4 rounded-xl border border-accent-300 bg-accent-50 px-4 py-3 text-body-sm text-accent-800">
      {t(`error_${code}`)}
    </p>
  );
}
