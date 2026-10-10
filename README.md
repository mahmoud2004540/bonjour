# Bonjour 2.0

A modern, premium French-learning platform for adults.

> Can the learner do something in French today that they could not do before?

## Core Philosophy

Action-oriented learning:

**Can-Do Goal → Concept → Skill → Task → Evidence → Next Learning Action**

## Current Status — Vertical Slice Complete

The first end-to-end learning path is working:

1. **Landing** → clear value proposition
2. **Onboarding** → name, goals, situations
3. **Placement** → evidence collection across skills (no fake scores)
4. **Learning Profile** → only shows observed evidence
5. **Dashboard** → answers “What should I do now?”
6. **A1 Scenario** — *Faire connaissance*
7. **Practice + Evidence** → self-assessment clearly labelled
8. **Deterministic recommendations** → explainable next actions

### Locales
- English
- French
- Arabic (full RTL)

### Architecture
- Domain logic is pure TypeScript (no UI imports)
- Application layer handles persistence (currently localStorage, ready for Supabase)
- No invented mastery, streaks, or CEFR claims beyond observed evidence

## Tech Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS + Design Tokens
- next-intl (en / fr / ar)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Next phases (from blueprint)

- Real authentication (Supabase)
- Database + Row-level security
- Expanded A1 curriculum
- Speech / pronunciation subsystem
- Human review workflow
- AI features where they add real educational value

## License

Private — All rights reserved.
