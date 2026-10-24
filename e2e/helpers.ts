import type { Page, Route } from "@playwright/test";

/**
 * Browser tests never reach a real Supabase project: every auth and
 * database request is answered here. When the site is built without
 * Supabase keys (local mode), the helpers do nothing.
 */
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const authEnabled = Boolean(SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const TEST_USER = { id: "00000000-0000-4000-8000-000000000001", email: "nour@example.com", password: "correct-horse-1" };

export type MockBackend = {
  /** learner_state rows by user id */
  rows: Map<string, unknown>;
  confirmEmail: boolean;
  requests: string[];
};

function storageKey(): string {
  return `sb-${new URL(SUPABASE_URL).hostname.split(".")[0]}-auth-token`;
}

function b64url(obj: object): string {
  return Buffer.from(JSON.stringify(obj)).toString("base64url");
}

function fakeUser(displayName = "Nour") {
  return {
    id: TEST_USER.id,
    aud: "authenticated",
    role: "authenticated",
    email: TEST_USER.email,
    email_confirmed_at: new Date().toISOString(),
    app_metadata: { provider: "email" },
    user_metadata: { display_name: displayName },
    identities: [{ id: TEST_USER.id, provider: "email" }],
    created_at: new Date().toISOString(),
  };
}

export function fakeSession(displayName?: string) {
  const exp = Math.floor(Date.now() / 1000) + 3600;
  return {
    access_token: `${b64url({ alg: "HS256", typ: "JWT" })}.${b64url({ sub: TEST_USER.id, exp, role: "authenticated" })}.sig`,
    token_type: "bearer",
    expires_in: 3600,
    expires_at: exp,
    refresh_token: "test-refresh-token",
    user: fakeUser(displayName),
  };
}

const json = (route: Route, status: number, body: unknown) =>
  route.fulfill({ status, contentType: "application/json", body: JSON.stringify(body) });

export async function mockSupabase(page: Page, init: Partial<MockBackend> = {}): Promise<MockBackend> {
  const backend: MockBackend = { rows: new Map(), confirmEmail: false, requests: [], ...init };
  if (!authEnabled) return backend;

  await page.route("**/auth/v1/**", async (route) => {
    const url = new URL(route.request().url());
    const body = route.request().postDataJSON?.() ?? {};
    backend.requests.push(`${route.request().method()} ${url.pathname}`);
    if (url.pathname.endsWith("/token")) {
      if (body.email === TEST_USER.email && body.password === TEST_USER.password) return json(route, 200, fakeSession());
      return json(route, 400, { code: "invalid_credentials", error_code: "invalid_credentials", msg: "Invalid login credentials" });
    }
    if (url.pathname.endsWith("/signup")) {
      const user = { ...fakeUser(body.data?.display_name), email: body.email };
      return json(route, 200, backend.confirmEmail ? user : { ...fakeSession(body.data?.display_name), user });
    }
    if (url.pathname.endsWith("/recover")) return json(route, 200, {});
    if (url.pathname.endsWith("/logout")) return route.fulfill({ status: 204 });
    if (url.pathname.endsWith("/user")) return json(route, 200, fakeUser());
    return json(route, 404, {});
  });

  await page.route("**/rest/v1/learner_state**", async (route) => {
    const req = route.request();
    backend.requests.push(`${req.method()} learner_state`);
    if (req.method() === "GET") {
      const row = backend.rows.get(TEST_USER.id);
      return json(route, 200, row ? [{ data: row }] : []);
    }
    if (req.method() === "POST") {
      const payload = req.postDataJSON();
      const rows = Array.isArray(payload) ? payload : [payload];
      for (const r of rows) backend.rows.set(r.user_id, r.data);
      return route.fulfill({ status: 201 });
    }
    return route.fulfill({ status: 204 });
  });

  return backend;
}

/** Start the test already signed in (no-op in local mode). */
export async function signedIn(page: Page, init: Partial<MockBackend> = {}): Promise<MockBackend> {
  const backend = await mockSupabase(page, init);
  if (authEnabled) {
    await page.addInitScript(
      ([key, value]) => {
        if (!localStorage.getItem(key)) localStorage.setItem(key, value);
      },
      [storageKey(), JSON.stringify(fakeSession())] as const
    );
  }
  return backend;
}
