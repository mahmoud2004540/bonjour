import { expect, test } from "@playwright/test";
import { TEST_USER, authEnabled, mockSupabase, signedIn } from "./helpers";

test.describe("with accounts switched on", () => {
  test.skip(!authEnabled, "site built without Supabase keys");

  test("the first screen is sign-in, and protected pages redirect to it", async ({ page }) => {
    await mockSupabase(page);
    await page.goto("en/");
    await expect(page).toHaveURL(/\/en\/sign-in\/$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Sign in");
    await page.goto("en/dashboard/");
    await expect(page).toHaveURL(/\/en\/sign-in\/$/);
    // Information pages stay open.
    await page.goto("en/privacy/");
    await expect(page).toHaveURL(/\/en\/privacy\/$/);
  });

  test("wrong password shows an error; right password signs in and uploads new progress", async ({ page }) => {
    const backend = await mockSupabase(page);
    await page.goto("en/sign-in/");
    await page.getByLabel("Email").fill(TEST_USER.email);
    await page.getByLabel("Password").fill("wrong-password");
    await page.getByRole("button", { name: "Sign in" }).last().click();
    await expect(page.locator("main").getByRole("alert")).toHaveText("Wrong email or password.");

    await page.getByLabel("Password").fill(TEST_USER.password);
    await page.getByRole("button", { name: "Sign in" }).last().click();
    await expect(page).toHaveURL(/\/en\/onboarding\/$/);
    // Name and email come from the account.
    await expect(page.getByLabel("Email")).toHaveValue(TEST_USER.email);
    await expect(page.getByLabel("Name")).toHaveValue("Nour");

    for (let i = 0; i < 3; i++) await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Beginner — start" }).click();
    await expect(page).toHaveURL(/\/en\/dashboard\/$/);

    // Leaving the page pushes progress to the account.
    await page.evaluate(() => window.dispatchEvent(new Event("pagehide")));
    await expect.poll(() => backend.rows.has(TEST_USER.id)).toBe(true);
    const saved = backend.rows.get(TEST_USER.id) as { learner: string };
    expect(JSON.parse(saved.learner).displayName).toBe("Nour");
  });

  test("a returning learner gets their progress from the account", async ({ page }) => {
    const learner = {
      id: "remote",
      displayName: "Nour from the cloud",
      email: TEST_USER.email,
      createdAt: "2026-01-01T00:00:00.000Z",
      locale: "en",
      preferences: { objectives: [], situations: [], availability: "", preferredStyle: "" },
      placementCompleted: true,
      estimatedStartingLevel: "A1",
      skillEvidence: [],
      completedGoals: ["goal-fr-a1-u01-bonjour"],
      currentPriorities: [],
    };
    await mockSupabase(page, {
      rows: new Map([[TEST_USER.id, { version: 1, exportedAt: "", learner: JSON.stringify(learner), vocab: null, events: null, motivation: null }]]),
    });
    await page.goto("en/sign-in/");
    await page.getByLabel("Email").fill(TEST_USER.email);
    await page.getByLabel("Password").fill(TEST_USER.password);
    await page.getByRole("button", { name: "Sign in" }).last().click();
    await expect(page).toHaveURL(/\/en\/dashboard\/$/);
    await expect(page.getByText("Nour from the cloud")).toBeVisible();
  });

  test("sign-up with email confirmation asks the learner to check their inbox", async ({ page }) => {
    await mockSupabase(page, { confirmEmail: true });
    await page.goto("fr/sign-up/");
    await page.getByLabel("Votre nom").fill("Karim");
    await page.getByLabel("E-mail").fill("karim@example.com");
    await page.getByLabel("Mot de passe", { exact: true }).fill("short");
    await page.getByLabel("Confirmez le mot de passe").fill("short");
    await page.getByRole("button", { name: "Créer un compte" }).click();
    await expect(page.locator("main").getByRole("alert")).toContainText("au moins 8 caractères");

    await page.getByLabel("Mot de passe", { exact: true }).fill("long-enough-1");
    await page.getByLabel("Confirmez le mot de passe").fill("different-1");
    await page.getByRole("button", { name: "Créer un compte" }).click();
    await expect(page.locator("main").getByRole("alert")).toHaveText("Les deux mots de passe sont différents.");

    await page.getByLabel("Confirmez le mot de passe").fill("long-enough-1");
    await page.getByRole("button", { name: "Créer un compte" }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Confirmez votre e-mail");
    await expect(page.locator("main").getByRole("status")).toContainText("karim@example.com");
  });

  test("forgot password gives the same answer whether or not the account exists", async ({ page }) => {
    await mockSupabase(page);
    await page.goto("ar/forgot-password/");
    await page.getByLabel("البريد الإلكتروني").fill("someone@example.com");
    await page.getByRole("button", { name: "أرسل رابط إعادة التعيين" }).click();
    await expect(page.locator("main").getByRole("status")).toContainText("إذا كان هناك حساب");
  });

  test("signing out returns to sign-in and removes progress from the device", async ({ page }) => {
    await signedIn(page);
    await page.goto("en/onboarding/");
    for (let i = 0; i < 3; i++) await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Beginner — start" }).click();
    await expect(page).toHaveURL(/\/en\/dashboard\/$/);
    const desktopSignOut = page.locator("header").getByRole("button", { name: "Sign out" });
    if (!(await desktopSignOut.first().isVisible())) await page.getByRole("button", { name: "Menu" }).click();
    await page.locator("header").getByRole("button", { name: "Sign out" }).locator("visible=true").click();
    await expect(page).toHaveURL(/\/en\/sign-in\/$/);
    expect(await page.evaluate(() => localStorage.getItem("bonjour_learner_v1"))).toBeNull();
  });
});

test.describe("without accounts (local mode)", () => {
  test.skip(authEnabled, "site built with Supabase keys");

  test("the first screen is sign-in, explaining progress stays on this device", async ({ page }) => {
    await page.goto("en/");
    await expect(page).toHaveURL(/\/en\/sign-in\/$/);
    await expect(page.getByText("Accounts are not switched on yet")).toBeVisible();
    await page.getByRole("button", { name: "Continue on this device" }).click();
    await expect(page).toHaveURL(/\/en\/onboarding\/$/);
  });
});
