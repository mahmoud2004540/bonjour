import { defineConfig, devices } from "@playwright/test";

/** Browser tests run against the static export (`npm run build` first). */
export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://localhost:4173/bonjour/",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "mobile", use: { ...devices["Pixel 7"], viewport: { width: 390, height: 844 } } },
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 900 } } },
  ],
  webServer: {
    command: "node scripts/serve-out.mjs",
    url: "http://localhost:4173/bonjour/en/",
    reuseExistingServer: !process.env.CI,
  },
});
