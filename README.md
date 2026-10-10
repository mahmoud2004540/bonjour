# Bonjour 2.0

Premium French-learning platform for adults.

> Can the learner do something in French today that they could not do before?

## Live demo

https://mahmoud2004540.github.io/bonjour/en/

## What works now

- Landing (EN / FR / AR + RTL)
- Onboarding → Placement → Profile → Dashboard
- A1 scenarios: **Faire connaissance**, **Au café**
- Deterministic next-action recommendations
- Progress page (evidence only)
- Curriculum registry (extensible)
- Speech domain types (no fake evaluation)
- Supabase schema + client stub (inactive until keys)
- Local persistence (device only)

## What is not claimed as working

- Server authentication (needs Supabase keys)
- Speech recording / automatic pronunciation scoring
- AI features
- Payments
- Human review workflow UI

## Stack

Next.js 15 · TypeScript · Tailwind · next-intl · Static export (GitHub Pages)

## Add a language

1. `src/i18n/config.ts`
2. `messages/{locale}.json`
3. RTL list if needed

## Supabase (next)

1. Create project
2. Run `src/infrastructure/supabase/schema.sql`
3. Set env vars from `.env.example`
4. Wire `@supabase/supabase-js` in `client.ts`

## Blueprint phases remaining

Auth · fuller placement · more A1 · speech assets · human review · AI where valuable · production hardening
