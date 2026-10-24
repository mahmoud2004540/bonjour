"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { AuthError, AuthShell, Field } from "@/components/auth/AuthShell";
import { useAuth } from "@/components/auth/AuthGate";
import { MIN_PASSWORD_LENGTH, updatePassword, type AuthErrorCode } from "@/application/auth";
import { getStoredProfile } from "@/application/learner-store";

export default function ResetPasswordPage() {
  const t = useTranslations("auth");
  const router = useRouter();
  const { configured, ready, session } = useAuth();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<AuthErrorCode | "mismatch" | null>(null);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError("mismatch");
      return;
    }
    setBusy(true);
    const result = await updatePassword(password);
    setBusy(false);
    if (result.ok) setDone(true);
    else setError(result.error);
  }

  const back = (
    <Link href="/sign-in" className="font-semibold text-accent-700 hover:underline">
      {t("backToSignIn")}
    </Link>
  );

  if (!configured || (ready && !session)) {
    // The reset link signs the learner in; without a session the link is missing or expired.
    return (
      <AuthShell title={t("resetTitle")} footer={back}>
        <p className="text-body text-ink-700 mb-4">{configured ? t("resetLinkInvalid") : t("localMode")}</p>
        {configured && (
          <Link href="/forgot-password">
            <Button variant="secondary" className="w-full">
              {t("sendResetLink")}
            </Button>
          </Link>
        )}
      </AuthShell>
    );
  }

  if (done) {
    return (
      <AuthShell title={t("resetTitle")}>
        <p className="text-body text-ink-700 mb-6" role="status">
          {t("resetDone")}
        </p>
        <Button variant="accent" className="w-full" onClick={() => router.replace(getStoredProfile() ? "/dashboard" : "/onboarding")}>
          {t("continue")}
        </Button>
      </AuthShell>
    );
  }

  return (
    <AuthShell title={t("resetTitle")} subtitle={t("resetSubtitle")} footer={back}>
      <form onSubmit={submit} noValidate>
        <AuthError code={error} />
        <Field
          id="password"
          label={t("newPassword")}
          type="password"
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
          hint={t("passwordHint", { min: MIN_PASSWORD_LENGTH })}
        />
        <Field id="confirm" label={t("confirmPassword")} type="password" value={confirm} onChange={setConfirm} autoComplete="new-password" />
        <Button type="submit" variant="accent" className="w-full" disabled={busy || !password || !confirm}>
          {busy ? t("saving") : t("savePassword")}
        </Button>
      </form>
    </AuthShell>
  );
}
