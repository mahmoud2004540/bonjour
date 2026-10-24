"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { AuthError, AuthShell, Field } from "@/components/auth/AuthShell";
import { useAuth } from "@/components/auth/AuthGate";
import { sendPasswordReset, type AuthErrorCode } from "@/application/auth";

export default function ForgotPasswordPage() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const { configured } = useAuth();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<AuthErrorCode | null>(null);
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const result = await sendPasswordReset(email, locale);
    setBusy(false);
    if (result.ok) setSent(true);
    else setError(result.error);
  }

  return (
    <AuthShell
      title={t("forgotTitle")}
      subtitle={configured ? t("forgotSubtitle") : t("localModeTitle")}
      footer={
        <Link href="/sign-in" className="font-semibold text-accent-700 hover:underline">
          {t("backToSignIn")}
        </Link>
      }
    >
      {!configured ? (
        <p className="text-body text-ink-700">{t("localMode")}</p>
      ) : sent ? (
        // Same message whether or not the address has an account (no account discovery).
        <p className="text-body text-ink-700 text-pretty" role="status">
          {t("resetSent", { email: email.trim() })}
        </p>
      ) : (
        <form onSubmit={submit} noValidate>
          <AuthError code={error} />
          <Field id="email" label={t("email")} type="email" value={email} onChange={setEmail} autoComplete="email" />
          <Button type="submit" variant="accent" className="w-full" disabled={busy || !email}>
            {busy ? t("sending") : t("sendResetLink")}
          </Button>
        </form>
      )}
    </AuthShell>
  );
}
