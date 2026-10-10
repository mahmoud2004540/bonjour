# Domain Layer

Pure business logic lives here.

This layer must **never** import from:
- React / Next.js
- UI components
- Database clients
- External APIs

It only contains pure TypeScript types, entities, value objects, and domain services.

## Planned domains

- `assessment/` — Placement, evidence, observations, results
- `curriculum/` — Levels, scenarios, goals, skills, concepts, tasks
- `learning/` — Plans, recommendations, next-action logic
- `progress/` — Demonstrated abilities, trajectory
- `speech/` — Pronunciation targets, evaluation models
