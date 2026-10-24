/** Pages anyone can open without an account. */
export const PUBLIC_PATHS = ["/sign-in", "/sign-up", "/forgot-password", "/reset-password", "/about", "/privacy"];

/** Account pages a signed-in learner is sent away from. */
export const AUTH_ONLY_PATHS = ["/sign-in", "/sign-up", "/forgot-password"];

function matches(pathname: string, paths: string[]): boolean {
  return paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function isPublicPath(pathname: string): boolean {
  return matches(pathname, PUBLIC_PATHS);
}

export function isAuthOnlyPath(pathname: string): boolean {
  return matches(pathname, AUTH_ONLY_PATHS);
}
