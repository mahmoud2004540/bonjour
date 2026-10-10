/**
 * Supabase client stub.
 *
 * Not active until NEXT_PUBLIC_SUPABASE_URL and
 * NEXT_PUBLIC_SUPABASE_ANON_KEY are configured.
 * Do not present auth as working until this returns a real client.
 */

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export function getSupabaseConfigStatus(): {
  configured: boolean;
  message: string;
} {
  if (isSupabaseConfigured()) {
    return {
      configured: true,
      message: "Supabase environment variables are present.",
    };
  }
  return {
    configured: false,
    message:
      "Supabase is not configured. Learning data is stored locally on this device only.",
  };
}

/**
 * Future: return createBrowserClient(...) when keys exist.
 * Currently returns null — callers must handle local mode.
 */
export function getSupabaseBrowserClient(): null {
  if (!isSupabaseConfigured()) return null;
  // When keys are added, install @supabase/supabase-js and create the client here.
  return null;
}
