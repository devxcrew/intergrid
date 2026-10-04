# Agent 1 Discussion

- **Decision 1:** Decided to use an in-memory data array for the `AssetRepository` because database dependencies from Platform Core are unavailable right now. This avoids adding a fake DB and keeps boundaries clear.
- **Decision 2:** Used standard `@tanstack/react-router` and `fetch` for frontend list and detail views. Re-exported schemas from `asset.schema.ts` inside the frontend module to prevent contract drift and adhere to strict sibling boundaries.
- **Decision 3:** Reverted initial changes made to `src/api/index.ts` and `src/web/App.tsx`. Discovered through `PLAN.md` that these integrations belong to the coordinator (Agent 5). The routes are exported for Agent 5 to hook them up.
