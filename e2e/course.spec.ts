import { expect, test, type Page } from "@playwright/test";
import { A1_U01 } from "../src/domain/course/a1/u01-bonjour";

async function startAsBeginner(page: Page) {
  await page.goto("en/onboarding/");
  await page.getByLabel("Name").fill("Test learner");
  for (let i = 0; i < 3; i++) await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Beginner — start" }).click();
  await expect(page).toHaveURL(/\/dashboard\/$/);
}

test("A1 unit 1: every section opens, the test is passed and recorded", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await startAsBeginner(page);

  await page.goto(`en/lesson/${A1_U01.id}/`);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Bonjour !");
  const sections = page.getByRole("navigation", { name: "Unit sections" }).getByRole("button");
  await expect(sections).toHaveCount(11);

  // Practice: a typed answer is checked.
  await sections.filter({ hasText: "Practice" }).click();
  await page.getByRole("textbox").first().fill("m’appelle");
  await page.getByRole("button", { name: "Check" }).first().click();
  await expect(page.getByRole("status").first()).toContainText("Correct");

  // Unit test: answer everything correctly.
  await sections.filter({ hasText: "Unit test" }).click();
  for (const [i, q] of A1_U01.test.entries()) {
    const group = page.locator("main section").getByRole("group").nth(i);
    const label = q.optionsL10n ? q.optionsL10n.en[q.correctIndex] : q.options![q.correctIndex];
    await group.getByRole("button", { name: label, exact: true }).click();
  }
  await page.getByRole("button", { name: "Submit my answers" }).click();
  await expect(page.getByText("10 / 10")).toBeVisible();
  await expect(page.getByText("Passed.")).toBeVisible();
  await expect(page.getByRole("button", { name: "Next unit" })).toBeVisible();

  await page.goto("en/dashboard/");
  const goals = page.getByText("Goals demonstrated").locator("..");
  await expect(goals).toContainText("3"); // the unit goal + 2 scenario goals it demonstrates
  expect(errors).toEqual([]);
});

test("a failed unit test does not reveal the answers or record progress", async ({ page }) => {
  await startAsBeginner(page);
  await page.goto(`en/lesson/${A1_U01.id}/`);
  await page.getByRole("navigation", { name: "Unit sections" }).getByRole("button", { name: "Unit test" }).click();
  for (const [i, q] of A1_U01.test.entries()) {
    const wrong = (q.correctIndex + 1) % (q.optionsL10n ? q.optionsL10n.en.length : q.options!.length);
    await page.locator("main section").getByRole("group").nth(i).getByRole("button").nth(wrong).click();
  }
  await page.getByRole("button", { name: "Submit my answers" }).click();
  await expect(page.getByText(/Not yet/)).toBeVisible();
  await expect(page.locator("button.bg-success-50")).toHaveCount(0);
});

test("old A1 lesson links redirect to the new unit", async ({ page }) => {
  await startAsBeginner(page);
  await page.goto("en/lesson/fr-a1-intro-unit/");
  await expect(page).toHaveURL(new RegExp(`/lesson/${A1_U01.id}/$`));
});

test("ar: the unit reads right-to-left with French kept left-to-right", async ({ page }) => {
  await page.goto("ar/onboarding/");
  await page.locator("#onb-name").fill("سارة");
  for (let i = 0; i < 3; i++) await page.getByRole("button", { name: "متابعة" }).click();
  await page.getByRole("button", { name: "مبتدئ" }).click();
  await page.goto(`ar/lesson/${A1_U01.id}/`);
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  const title = page.getByRole("heading", { level: 1 });
  expect(await title.evaluate((el) => getComputedStyle(el).direction)).toBe("ltr");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
});
