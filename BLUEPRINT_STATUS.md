# Bonjour 2.0 — Blueprint status

Live: https://mahmoud2004540.github.io/bonjour/ar/

## Curriculum scenarios (published)

| Level | Scenarios |
|-------|-----------|
| A1 | Intro, **café (full task chain)**, shopping, transport, housing, health |
| A2 | Restaurant, hotel, phone, appointments |
| B1 | Work, service problem |
| B2 | Opinion + justification |
| C1 | Structured argument |
| C2 | **Register & nuance** |

## Shipped without keys

Vertical slice, i18n+RTL, materials on-site, placement v1.2, preference recommendations,
practice, real-life log, settings, privacy, domain checks, architecture notes.

### Blueprint alignment pass (Oct 2026)

- **Quality gates** — `npm run check` = typecheck + ESLint + Vitest + domain checks; CI runs it
  before every deploy, and the build no longer ignores type/lint errors.
- **Placement** — `domain/placement/scoring.ts` recomputes correctness from the versioned question
  bank (UI values are never trusted). Attempts are stored per learner + version and frozen at
  finalization; finalizing twice returns the same result. Written answers count as *writing*
  evidence awaiting review, and speaking is shown as not assessed.
- **No fabricated data** — removed invented study minutes and XP points. Dashboard, path and
  achievements show only real evidence (goals demonstrated, lessons completed, study days).
- **i18n** — UI strings moved out of `locale === "ar" ? … : …` ternaries into `messages/*`;
  placeholder copy ("—") replaced. A test enforces identical keys across en/fr/ar.
- **Accessibility** — visible focus ring everywhere, single `<main>` landmark, localized skip
  link, real `lang`/`dir` on `<html>`, WCAG AA contrast for secondary text.
- **Design system** — colors are CSS-variable tokens; light + dark themes (follows the device,
  or choose in Settings).

- **Materials in French** — every on-site material has a French note and every term a French
  gloss (`domain/resources/materials-fr.ts`, enforced by a test).
- **Motion** — hover lifts of 1–2px at ~150–200ms, no idle 3D tilt, no infinite decorative
  animation; loading skeletons and progress transitions kept; reduced-motion respected.
- **Browser tests** — Playwright (`npm run test:e2e`, mobile + desktop) runs in CI before deploy:
  EN/FR/AR direction and language, no raw keys, no horizontal scroll, single landmark, skip
  link, onboarding → placement → honest profile → dashboard, no placement retake, theme choice.

## A1 syllabus (Oct 2026)

A complete A1 curriculum replaces the earlier A1 lessons (`src/domain/course/a1/`), 13 units:

| # | Unit | Grammar focus |
|---|------|---------------|
| 1 | Bonjour ! | s'appeler, tu / vous, alphabet |
| 2 | Qui êtes-vous ? | être, avoir, nationalities, numbers 0–69 |
| 3 | Ma famille | possessives, articles, ne… pas / pas de |
| 4 | Une journée ordinaire | present -er, reflexive verbs, telling the time |
| 5 | En ville | il y a, au / du, imperative for directions |
| 6 | Au café et au restaurant | je voudrais, questions, partitives, 70–100 |
| 7 | Faire les courses | quantities + de, ce / cette / ces, vouloir, acheter |
| 8 | Se déplacer | aller, venir, prendre, prepositions with places, question words |
| 9 | Chez moi | prepositions of place, adjective position, ordinals, 100+ |
| 10 | La santé | avoir mal à, il faut / devoir, depuis / pendant |
| 11 | Loisirs et météo | aimer + article, faire de / jouer à / jouer de, weather |
| 12 | Week-end et projets | futur proche, passé composé with avoir and être |
| 13 | Bilan A1 | DELF A1 format review (four skills) |

Each unit: can-do goals → context → dialogue (browser TTS, labelled) → comprehension →
vocabulary → grammar (tables, examples, common errors) → pronunciation → culture → practice
(typed, multiple choice, word order; accent-aware checking) → guided writing with a model and
self-check → real-life task (self-assessed) → unit test (70% to pass; answers revealed only after a
pass). Explanations in English, French and Arabic.

- Old A1 and A2 lesson links redirect to the replacing unit; completed old lessons carry over.
- Content tests (`tests/course.test.ts`) check translations, item validity and a list of common
  French errors in all model French.

## A2 syllabus (Oct 2026)

A complete A2 curriculum in the same format replaces the earlier A2 lessons
(`src/domain/course/a2/`), 13 units:

| # | Unit | Grammar focus |
|---|------|---------------|
| 1 | Retrouvailles | passé composé (avoir / être, agreement), déjà / jamais, il y a / depuis |
| 2 | Souvenirs d'enfance | imparfait, avant / maintenant |
| 3 | Le monde du travail | direct object pronouns, formal questions, savoir / connaître |
| 4 | Shopping et mode | comparatives and superlatives, lui / leur |
| 5 | En cuisine | pronoun en, imperative with pronouns |
| 6 | En voyage | futur simple, pronoun y |
| 7 | Au téléphone | polite conditional, proposing / accepting / refusing |
| 8 | Un dîner au restaurant | relative pronouns qui / que / où, polite complaints, trop / assez |
| 9 | Ville ou campagne ? | giving an opinion, ne… que, connectors |
| 10 | Films, livres et écrans | adverbs in -ment, telling a story, double pronouns |
| 11 | Démarches et imprévus | venir de, être en train de, formal email |
| 12 | Projets et rêves | conditional for wishes, si + présent, pour + infinitive |
| 13 | Bilan A2 | DELF A2 format review (four skills) |

- Multiple-choice options are shown in a stable shuffled order per question, so the right
  answer is not always in the same place.

## Accounts (Oct 2026)

- The first screen is sign-in. With Supabase configured, every page except sign-in, sign-up,
  password reset, About and Privacy requires an account; progress syncs to the account
  (`learner_state`, row-level security) and follows the learner across devices.
- Sign-up with email confirmation, sign-in, forgot / reset password, sign-out (clears the
  device). Errors are translated, never raw.
- Without keys the site stays in local mode and the sign-in page says so.
- Setup: `supabase/README.md`.

## Remaining

- B1–C2 syllabus in the same format (earlier lessons stay in place until then)
- Native-speaker recordings for dialogues (currently browser speech synthesis)
- Visual regression snapshots (screenshot diffs) once the design stabilises

## Blocked on keys/assets

server-authoritative placement scoring (needs a server function) · real audio · speech scoring · Stripe · AI ·
admin CMS / human review queue
