/**
 * Local motivation (XP, streak, daily goal).
 * Respectful — no punishment UI; streak only tracks consecutive study days.
 */

import { getStoredProfile, saveProfile } from "./learner-store";

const GOAL_KEY = "bonjour_daily_goal_v1";

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function recordStudyActivity(xpGain = 10): void {
  const profile = getStoredProfile();
  if (!profile) return;

  const today = todayKey();
  profile.xp = (profile.xp ?? 0) + xpGain;

  if (profile.lastStudyDate === today) {
    // already counted streak today
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().slice(0, 10);
    if (profile.lastStudyDate === yKey) {
      profile.streakDays = (profile.streakDays ?? 0) + 1;
    } else {
      profile.streakDays = 1;
    }
    profile.lastStudyDate = today;
  }

  saveProfile(profile);

  try {
    const raw = localStorage.getItem(GOAL_KEY);
    const data = raw ? JSON.parse(raw) : { date: today, minutes: 0 };
    if (data.date !== today) {
      data.date = today;
      data.minutes = 0;
    }
    data.minutes = (data.minutes ?? 0) + 2;
    localStorage.setItem(GOAL_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

export function getDailyProgress(): { date: string; minutes: number; goal: number } {
  const profile = getStoredProfile();
  const goal = profile?.preferences.dailyMinutes ?? 15;
  if (typeof window === "undefined") {
    return { date: todayKey(), minutes: 0, goal };
  }
  try {
    const raw = localStorage.getItem(GOAL_KEY);
    const data = raw ? JSON.parse(raw) : { date: todayKey(), minutes: 0 };
    if (data.date !== todayKey()) return { date: todayKey(), minutes: 0, goal };
    return { date: data.date, minutes: data.minutes ?? 0, goal };
  } catch {
    return { date: todayKey(), minutes: 0, goal };
  }
}
