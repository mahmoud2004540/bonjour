import { expect, test, type Page } from "@playwright/test";
import { signedIn } from "./helpers";

const LOCALES = [
  { code: "en", dir: "ltr" },
  { code: "fr", dir: "ltr" },
  { code: "ar", dir: "rtl" },
] as const;

/** Message namespaces; a rendered "namespace.key" means a missing translation. */
const RAW_KEY = /\b(nav|common|dashboard|path|exam|teacher|academic|profile|settings|speech|listening|vocabulary|placement|onboarding)\.[a-zA-Z_]+/;

async function expectHealthyPage(page: Page, dir: string) {
  await expect(page.locator("html")).toHaveAttribute("dir", dir);
  await expect(page.locator("main")).toHaveCount(1);
  expect(await page.locator("body").innerText()).not.toMatch(RAW_KEY);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth
  );
  expect(overflow, "no horizontal scroll").toBe(false);
}

for (const { code, dir } of LOCALES) {
  test(`${code}: landing renders in the right language and direction`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`${code}/`);
    await expect(page.locator("html")).toHaveAttribute("lang", code);
    await expectHealthyPage(page, dir);
    expect(errors).toEqual([]);
  });
}

test("keyboard: first Tab reaches a visible skip link", async ({ page, isMobile }) => {
  test.skip(isMobile, "keyboard flow is checked on desktop");
  await page.goto("en/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  const outline = await skip.evaluate((el) => getComputedStyle(el).outlineStyle);
  expect(outline).not.toBe("none");
});

test("new learner: onboarding → placement → honest profile → dashboard", async ({ page }) => {
  await signedIn(page);
  await page.goto("en/onboarding/");
  await page.getByLabel("Name").fill("Sara");
  for (let i = 0; i < 3; i++) await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Placement" }).click();
  await expect(page).toHaveURL(/\/placement\/$/);

  // Answer every item: first option for choices, a sentence for open items.
  for (;;) {
    const box = page.getByRole("textbox");
    if (await box.count()) await box.fill("Je m'appelle Sara.");
    else await page.locator("main button[aria-pressed]").first().click();
    const finish = page.getByRole("button", { name: "Profile" });
    if (await finish.count()) {
      await finish.click();
      break;
    }
    await page.getByRole("button", { name: "Next" }).click();
  }

  await expect(page).toHaveURL(/\/profile\/$/);
  // Written answers are held for review and speaking is never claimed.
  await expect(page.getByText("needs review")).toBeVisible();
  await expect(page.getByText("Speaking is not assessed yet")).toBeVisible();
  await expect(page.getByText("not a certified CEFR level")).toBeVisible();

  await page.getByRole("link", { name: "Go to dashboard" }).click();
  await expect(page).toHaveURL(/\/dashboard\/$/);
  await expect(page.getByText("Goals demonstrated")).toBeVisible();
  await expectHealthyPage(page, "ltr");
});

test("a learner who finished placement cannot retake it", async ({ page }) => {
  await signedIn(page);
  await page.goto("en/onboarding/");
  await page.getByLabel("Name").fill("Sam");
  for (let i = 0; i < 3; i++) await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Placement" }).click();
  await page.getByRole("button", { name: "Skip — A1" }).click();
  await expect(page).toHaveURL(/\/dashboard\/$/);
  await page.goto("en/placement/");
  await expect(page).toHaveURL(/\/dashboard\/$/);
});

test("theme: choosing dark in Settings persists across pages", async ({ page }) => {
  await signedIn(page);
  await page.goto("fr/settings/");
  await page.getByRole("radio", { name: "Sombre" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.goto("fr/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(bg).toBe("rgb(22, 21, 19)");
  await page.goto("fr/settings/");
  await page.getByRole("radio", { name: "Comme l’appareil" }).click();
  await expect(page.locator("html")).not.toHaveAttribute("data-theme", /.+/);
});

test("ar: dashboard is fully Arabic and right-to-left", async ({ page }) => {
  await signedIn(page);
  await page.goto("ar/onboarding/");
  await page.locator("#onb-name").fill("سارة");
  for (let i = 0; i < 3; i++) await page.getByRole("button", { name: "متابعة" }).click();
  await page.getByRole("button", { name: "مبتدئ" }).click();
  await expect(page).toHaveURL(/\/ar\/dashboard\/$/);
  await expect(page.getByText("أهداف مُثبتة")).toBeVisible();
  await expectHealthyPage(page, "rtl");
});
