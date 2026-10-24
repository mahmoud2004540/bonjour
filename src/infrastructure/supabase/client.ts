/**
 * Supabase browser client.
 *
 * Configured at build time with NEXT_PUBLIC_SUPABASE_URL and
 * NEXT_PUBLIC_SUPABASE_ANON_KEY (the public anon / publishable key — safe
 * to ship; data is protected by row-level security). Without them the app
 * runs in local mode and never presents accounts as working.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export function isSupabaseConfigured(): boolean {
  return Boolean(URL && ANON_KEY);
}

let client: SupabaseClient | null = null;

export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (!isSupabaseConfigured() || typeof window === "undefined") return null;
  if (!client) {
    client = createClient(URL, ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        // Email confirmation and password-reset links carry the session in the URL.
        detectSessionInUrl: true,
        flowType: "implicit",
      },
    });
  }
  return client;
}
