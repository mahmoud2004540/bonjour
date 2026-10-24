import { describe, expect, it } from "vitest";
import { isValidEmail, toAuthErrorCode } from "@/application/auth";
import { isAuthOnlyPath, isPublicPath } from "@/lib/routes";

describe("auth error mapping", () => {
  it("maps Supabase error codes to stable UI codes", () => {
    expect(toAuthErrorCode({ code: "invalid_credentials" })).toBe("invalid_credentials");
    expect(toAuthErrorCode({ code: "email_not_confirmed" })).toBe("email_not_confirmed");
    expect(toAuthErrorCode({ code: "user_already_exists" })).toBe("user_exists");
    expect(toAuthErrorCode({ code: "weak_password" })).toBe("weak_password");
    expect(toAuthErrorCode({ code: "over_email_send_rate_limit" })).toBe("rate_limited");
    expect(toAuthErrorCode({ status: 429 })).toBe("rate_limited");
    expect(toAuthErrorCode({ message: "Failed to fetch" })).toBe("network");
    expect(toAuthErrorCode({ code: "something_new" })).toBe("unknown");
  });

  it("validates email shape before calling the server", () => {
    expect(isValidEmail("nour@example.com")).toBe(true);
    expect(isValidEmail(" nour@example.com ")).toBe(true);
    expect(isValidEmail("nour@example")).toBe(false);
    expect(isValidEmail("not an email")).toBe(false);
  });
});

describe("route access", () => {
  it("keeps account and information pages public, everything else protected", () => {
    for (const p of ["/sign-in", "/sign-up", "/forgot-password", "/reset-password", "/about", "/privacy"]) {
      expect(isPublicPath(p), p).toBe(true);
    }
    for (const p of ["/", "/dashboard", "/lesson/fr-a1-u01-bonjour", "/onboarding", "/settings", "/sign-inx"]) {
      expect(isPublicPath(p), p).toBe(false);
    }
  });

  it("sends signed-in learners away from sign-in pages but not from reset-password", () => {
    expect(isAuthOnlyPath("/sign-in")).toBe(true);
    expect(isAuthOnlyPath("/reset-password")).toBe(false);
  });
});
