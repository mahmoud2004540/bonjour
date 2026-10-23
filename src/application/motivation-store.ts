/**
 * Study-day tracking. Records only that the learner actually studied on a
 * given day; no points and no invented minutes.
 */

import { getStoredProfile, saveProfile } from "./learner-store";

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Call when the learner completes a real activity. */
export function recordStudyActivity(): void {
  const profile = getStoredProfile();
  if (!profile) return;

  const today = todayKey();
  if (profile.lastStudyDate === today) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yKey = yesterday.toISOString().slice(0, 10);
  profile.streakDays = profile.lastStudyDate === yKey ? (profile.streakDays ?? 0) + 1 : 1;
  profile.lastStudyDate = today;

  saveProfile(profile);
}
