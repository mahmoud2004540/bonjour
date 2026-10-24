"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { usePathname, useRouter } from "@/i18n/routing";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/infrastructure/supabase/client";
import { pullAccountState, pushAccountState, resetSyncState, startAutoSync } from "@/application/cloud-sync";
import { clearAllLocalData, getStoredProfile } from "@/application/learner-store";
import { signOut as authSignOut } from "@/application/auth";
import { isAuthOnlyPath, isPublicPath } from "@/lib/routes";

type AuthState = {
  configured: boolean;
  ready: boolean;
  session: Session | null;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState>({
  configured: false,
  ready: false,
  session: null,
  signOut: async () => {},
});

export function useAuth(): AuthState {
  return useContext(AuthContext);
}

/** Where a signed-in learner (or a local-mode learner) should land. */
function homeFor(): string {
  return getStoredProfile() ? "/dashboard" : "/onboarding";
}

/**
 * Account state for the whole app. The first screen is sign-in. With accounts configured, every page except
 * the public ones requires a session, and progress syncs with the account.
 * Without configuration (local mode), the sign-in page explains that and
 * offers to continue on this device.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const configured = isSupabaseConfigured();
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const syncedFor = useRef<string | null>(null);
  const stopSync = useRef<(() => void) | null>(null);
  // The router's identity can change between renders; the session effect must run only once.
  const routerRef = useRef(router);
  routerRef.current = router;

  // Session lifecycle
  useEffect(() => {
    const sb = getSupabaseBrowserClient();
    if (!sb) {
      setReady(true);
      return;
    }
    let active = true;

    async function adopt(next: Session | null) {
      if (!active) return;
      if (next && syncedFor.current !== next.user.id) {
        syncedFor.current = next.user.id;
        await pullAccountState(next.user.id);
        stopSync.current?.();
        stopSync.current = startAutoSync(next.user.id);
      }
      if (!next) {
        syncedFor.current = null;
        stopSync.current?.();
        stopSync.current = null;
      }
      if (active) {
        setSession(next);
        setReady(true);
      }
    }

    sb.auth.getSession().then(({ data }) => adopt(data.session));
    const { data: sub } = sb.auth.onAuthStateChange((event, next) => {
      if (event === "PASSWORD_RECOVERY") routerRef.current.replace("/reset-password");
      // Defer: Supabase recommends not awaiting other calls inside this callback.
      setTimeout(() => adopt(next), 0);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
      stopSync.current?.();
      stopSync.current = null;
      syncedFor.current = null;
    };
  }, []);

  // Routing rules
  useEffect(() => {
    if (!ready) return;
    const isPublic = isPublicPath(pathname);
    if (!configured) {
      if (pathname === "/") router.replace(getStoredProfile() ? "/dashboard" : "/sign-in");
      return;
    }
    if (!session) {
      if (!isPublic) router.replace("/sign-in");
      return;
    }
    if (pathname === "/" || isAuthOnlyPath(pathname)) {
      router.replace(homeFor());
    }
  }, [ready, configured, session, pathname, router]);

  async function signOut() {
    if (session) await pushAccountState(session.user.id);
    stopSync.current?.();
    stopSync.current = null;
    syncedFor.current = null;
    await authSignOut();
    clearAllLocalData();
    resetSyncState();
    setSession(null);
    router.replace("/sign-in");
  }

  return (
    <AuthContext.Provider value={{ configured, ready, session, signOut }}>{children}</AuthContext.Provider>
  );
}

/** Renders page content only once access is settled, so protected pages never flash. */
export function RouteGuard({ children }: { children: React.ReactNode }) {
  const { configured, ready, session } = useAuth();
  const pathname = usePathname();
  const mustWait = pathname === "/" || (configured && !isPublicPath(pathname) && (!ready || !session));
  if (mustWait) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20" aria-busy="true">
        <div className="h-2 w-full bg-ink-100 rounded-full animate-pulse" />
      </div>
    );
  }
  return <>{children}</>;
}
