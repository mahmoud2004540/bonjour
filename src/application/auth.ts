/**
 * Account operations (Supabase Auth). Every function reports a stable
 * error code that the UI translates; Supabase messages are never shown raw.
 */

import type { Session } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/infrastructure/supabase/client";
import { siteUrl } from "@/lib/site";

export type AuthErrorCode =
  | "not_configured"
  | "invalid_credentials"
  | "email_not_confirmed"
  | "user_exists"
  | "weak_password"
  | "invalid_email"
  | "rate_limited"
  | "network"
  | "unknown";

export type AuthResult<T = void> = { ok: true; value: T } | { ok: false; error: AuthErrorCode };

export const MIN_PASSWORD_LENGTH = 8;

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

/** Map a Supabase error to a code the UI can translate. */
export function toAuthErrorCode(err: { code?: string; status?: number; message?: string } | null): AuthErrorCode {
  if (!err) return "unknown";
  const code = err.code ?? "";
  const msg = (err.message ?? "").toLowerCase();
  if (code === "invalid_credentials" || msg.includes("invalid login")) return "invalid_credentials";
  if (code === "email_not_confirmed" || msg.includes("not confirmed")) return "email_not_confirmed";
  if (code === "user_already_exists" || code === "email_exists" || msg.includes("already registered")) return "user_exists";
  if (code === "weak_password" || msg.includes("password should")) return "weak_password";
  if (code === "email_address_invalid" || code === "validation_failed") return "invalid_email";
  if (code.startsWith("over_") || err.status === 429) return "rate_limited";
  if (msg.includes("fetch") || msg.includes("network")) return "network";
  return "unknown";
}

function client() {
  return getSupabaseBrowserClient();
}

export async function getSession(): Promise<Session | null> {
  const sb = client();
  if (!sb) return null;
  const { data } = await sb.auth.getSession();
  return data.session;
}

export async function signIn(email: string, password: string): Promise<AuthResult<Session>> {
  const sb = client();
  if (!sb) return { ok: false, error: "not_configured" };
  if (!isValidEmail(email)) return { ok: false, error: "invalid_email" };
  try {
    const { data, error } = await sb.auth.signInWithPassword({ email: email.trim(), password });
    if (error || !data.session) return { ok: false, error: toAuthErrorCode(error) };
    return { ok: true, value: data.session };
  } catch {
    return { ok: false, error: "network" };
  }
}

/** Returns whether the new account is signed in immediately (false = confirm the email first). */
export async function signUp(
  email: string,
  password: string,
  displayName: string,
  locale: string
): Promise<AuthResult<{ signedIn: boolean }>> {
  const sb = client();
  if (!sb) return { ok: false, error: "not_configured" };
  if (!isValidEmail(email)) return { ok: false, error: "invalid_email" };
  if (password.length < MIN_PASSWORD_LENGTH) return { ok: false, error: "weak_password" };
  try {
    const { data, error } = await sb.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { display_name: displayName.trim(), locale },
        emailRedirectTo: siteUrl(locale, "/"),
      },
    });
    if (error) return { ok: false, error: toAuthErrorCode(error) };
    // With email confirmation on, Supabase returns a user with no identities for an existing address.
    if (data.user && data.user.identities?.length === 0) return { ok: false, error: "user_exists" };
    return { ok: true, value: { signedIn: Boolean(data.session) } };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function sendPasswordReset(email: string, locale: string): Promise<AuthResult> {
  const sb = client();
  if (!sb) return { ok: false, error: "not_configured" };
  if (!isValidEmail(email)) return { ok: false, error: "invalid_email" };
  try {
    const { error } = await sb.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: siteUrl(locale, "/reset-password/"),
    });
    if (error) return { ok: false, error: toAuthErrorCode(error) };
    return { ok: true, value: undefined };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function updatePassword(password: string): Promise<AuthResult> {
  const sb = client();
  if (!sb) return { ok: false, error: "not_configured" };
  if (password.length < MIN_PASSWORD_LENGTH) return { ok: false, error: "weak_password" };
  try {
    const { error } = await sb.auth.updateUser({ password });
    if (error) return { ok: false, error: toAuthErrorCode(error) };
    return { ok: true, value: undefined };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function signOut(): Promise<void> {
  const sb = client();
  if (!sb) return;
  await sb.auth.signOut();
}
