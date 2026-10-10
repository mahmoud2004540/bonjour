# Bonjour 2.0

A modern, premium French-learning platform for adults.

> Can the learner do something in French today that they could not do before?

## Core Philosophy

Action-oriented learning:

**Can-Do Goal → Concept → Skill → Task → Evidence → Next Learning Action**

## Design Direction

**Premium Editorial** — calm, intelligent, trustworthy, human.

Not a children’s game. Not Duolingo. Not generic SaaS.

### Design System
- Editorial color palette (ink + accent)
- Serif display + clean sans body
- Purposeful motion (respects `prefers-reduced-motion`)
- Light mode (dark mode foundation ready)
- Full RTL support for Arabic
- Responsive: mobile → tablet → desktop

## Internationalization

Currently supported:

| Code | Language | Direction |
|------|----------|-----------|
| `en` | English  | LTR       |
| `fr` | French   | LTR       |
| `ar` | Arabic   | RTL       |

### Adding a new language later

1. Add the locale code in `src/i18n/config.ts`
2. Create `messages/{locale}.json`
3. If RTL → add it to `rtlLocales`
4. Add display labels in `localeNames` / `localeShortNames`

Routing and middleware pick it up automatically.

## Vertical Slice (Working)

1. Landing
2. Onboarding
3. Placement (evidence collection — no fake scores)
4. Learning Profile (only observed evidence)
5. Dashboard (“What should I do now?”)
6. A1 Scenario — *Faire connaissance*
7. Practice + Evidence (self-review clearly labelled)
8. Deterministic next-action recommendations

## Architecture

```
src/
  domain/          ← pure business logic (no UI imports)
  application/     ← use-cases + persistence
  components/      ← UI
  i18n/            ← locale config (extensible)
  app/             ← Next.js routes
```

## Run locally

```bash
git clone https://github.com/mahmoud2004540/bonjour.git
cd bonjour
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Next phases

- Real authentication (Supabase)
- Database + RLS
- Expanded A1 curriculum
- Speech subsystem
- Human review workflow
- AI where it adds real educational value

## License

Private — All rights reserved.
