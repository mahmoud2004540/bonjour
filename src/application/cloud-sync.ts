/**
 * Keeps this device's learner data in step with the signed-in account.
 *
 * Model: one JSON document per account (table learner_state, protected by
 * row-level security). On sign-in the account copy wins; if the account has
 * nothing yet, this device's progress is uploaded. Afterwards, local changes
 * are pushed in the background.
 */

import { getSupabaseBrowserClient } from "@/infrastructure/supabase/client";
import { exportBackup, hasLocalData, importBackup, type BonjourBackup } from "./learner-store";

const TABLE = "learner_state";
const PUSH_INTERVAL_MS = 15_000;

/** Serialized state without the export timestamp, to detect real changes. */
function snapshot(): { data: BonjourBackup; key: string } {
  const data = exportBackup();
  const { exportedAt: _ignored, ...rest } = data;
  void _ignored;
  return { data, key: JSON.stringify(rest) };
}

let lastPushed = "";

export async function pullAccountState(userId: string): Promise<"restored" | "uploaded" | "empty" | "error"> {
  const sb = getSupabaseBrowserClient();
  if (!sb) return "error";
  const { data, error } = await sb.from(TABLE).select("data").eq("user_id", userId).maybeSingle();
  if (error) return "error";
  if (data?.data) {
    const result = importBackup(JSON.stringify(data.data));
    lastPushed = snapshot().key;
    return result.ok ? "restored" : "error";
  }
  if (hasLocalData()) {
    return (await pushAccountState(userId)) ? "uploaded" : "error";
  }
  return "empty";
}

export async function pushAccountState(userId: string): Promise<boolean> {
  const sb = getSupabaseBrowserClient();
  if (!sb || !hasLocalData()) return false;
  const { data, key } = snapshot();
  if (key === lastPushed) return true;
  const { error } = await sb
    .from(TABLE)
    .upsert({ user_id: userId, data, updated_at: new Date().toISOString() });
  if (error) return false;
  lastPushed = key;
  return true;
}

/** Start background pushes; returns a stop function. */
export function startAutoSync(userId: string): () => void {
  const push = () => void pushAccountState(userId);
  const timer = window.setInterval(push, PUSH_INTERVAL_MS);
  const onHide = () => {
    if (document.visibilityState === "hidden") push();
  };
  document.addEventListener("visibilitychange", onHide);
  window.addEventListener("pagehide", push);
  return () => {
    window.clearInterval(timer);
    document.removeEventListener("visibilitychange", onHide);
    window.removeEventListener("pagehide", push);
  };
}

export function resetSyncState(): void {
  lastPushed = "";
}
