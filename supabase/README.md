# Accounts (Supabase)

Bonjour uses Supabase Auth for accounts and one table, `learner_state`, to keep each
learner's progress. Without configuration the site runs in local mode (progress stays in
the browser) and says so on the sign-in page.

## One-time setup

1. Create a project at <https://supabase.com> (the free plan is enough).
2. **SQL Editor → New query**: paste `migrations/0001_learner_state.sql` and run it.
   It creates the table with row-level security: each account can read and write only its
   own row.
3. **Authentication → URL Configuration**
   - Site URL: `https://mahmoud2004540.github.io/bonjour/`
   - Redirect URLs: `https://mahmoud2004540.github.io/bonjour/**`
4. **Project Settings → API**: copy the Project URL and the public `anon` / publishable key.
   Never use the `service_role` key in this site.
5. In GitHub: **Settings → Secrets and variables → Actions → Variables**, add
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

   Then re-run the deploy workflow (or push to `main`).

Email confirmation is on by default in Supabase: new learners confirm their address before
signing in. Supabase's built-in email sender is rate-limited; for real traffic, set up custom
SMTP under **Authentication → Emails**.

## Local development

```bash
NEXT_PUBLIC_SUPABASE_URL=… NEXT_PUBLIC_SUPABASE_ANON_KEY=… npm run dev
```

Browser tests never call Supabase: `e2e/helpers.ts` answers every auth and database request.
