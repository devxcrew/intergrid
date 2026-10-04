# Changelog

## Version State

Current version: 0.1.2

Release tag: v-0.1.2

Changelog label: v 0.1.2

## v-0.1.2

### [v 0.1.2] 2026-10-04 5:00 pm - Record Intergrid module integration

#### Database Changes

- Database update: No (manual).

#### App Codebase Changes

- Record Discovery, Lab and Remix module integration, test discovery and owner evidence. Asset persistence and Platform identity remain separate acceptance work.

## v-0.1.1

### [v 0.1.1] 2026-10-03 - Verify automatic handoff pilot

#### Database Changes

- Database update: No. Asset data remains in memory.

#### App Codebase Changes

- Discover module-local tests in `npm test` and add Asset schema checks.
- Record the bounded Veyrezio Test 2 handoff, one owner repair, and final project check.

#### Verification

- Five Intergrid tests passed. Veyrezio's Test 2 batch and final project check passed.


### [v 0.1.1] 2026-10-03 - Verify first Asset discovery slice

#### Database Changes

- Database update: No. Asset data remains in memory.

#### App Codebase Changes

- Integrate owner fixes for Asset route validation, Discovery filters and links, and the Desk child route.
- Make one seeded Asset discoverable in Explore and inspectable on its detail page.

#### Verification

- Veyrezio delivered parallel Test 1 work to all five mapped agents and collected five results.
- Confirm live Asset list and detail API responses, the browser Explore-to-detail flow, `npm run check`, and `npm run build`.
- Add a dedicated Test 1 proof record and update the product, agent, Veyrezio, and repository status documents.
- Correct older planning-only claims and keep intermediate blocker entries as history.


### [v 0.1.1] 2026-10-03 - Add Codex to Veyrezio plan

#### Database Changes

- Database update: No.

#### App Codebase Changes

- Define Codex as an interactive supervisor through Veyrezio MCP tools and as an optional managed worker through app-server.
- Add Codex pilot evidence and keep existing desktop chats distinct from app-server threads.

#### Verification

- Confirm live MCP connection, official Codex integration sources, documentation links, line endings, and version alignment.

### [v 0.1.1] 2026-10-03 - Plan Veyrezio agent supervision

#### Database Changes

- Database update: No.

#### App Codebase Changes

- Add the Veyrezio masterplan under `docs/Veyrezio/` and link it from the docs index and five-agent plan.
- Define the Intergrid pilot, integration boundaries, phases, controls, and acceptance criteria. No runtime code is added.

#### Verification

- Confirm live MCP connection, documentation links, line endings, and version alignment.

### [v 0.1.1] 2026-10-03 - Define efficient agent rules and procedures

#### Database Changes

- Database update: No.

#### App Codebase Changes

- Add central rules and a short work cycle for parallel agents under `docs/Agents/`.
- Link the canonical guidance from worktree copies without changing module implementations.

#### Verification

- Review relative links, line endings, version alignment, and the changed paths.

### [v 0.1.1] 2026-10-03 - Keep agent worktrees inside Intergrid

#### Database Changes

- Database update: No.

#### App Codebase Changes

- Ignore `.worktrees/` and move the parallel checkouts beneath the Intergrid directory.
- Set the root `docs/Agents/chat.md` as the shared coordination log and link the docs from the README.

#### Verification

- Confirm Git recognizes each moved worktree and preserves its changes. Documentation links, `lines:check`, and `check:versions` passed.

### [v 0.1.1] 2026-10-03 11:27 am - Record Intergrid release verification

#### Database Changes

- Database update: No (manual).

#### App Codebase Changes

- Record the initial release commit, clean GitHub CI, successful restart, live MCP version 0.1.1, and the next module plan.

### [v 0.1.1] 2026-10-03 11:20 am - Prepare Intergrid standalone foundation

#### Database Changes

- Database update: No (manual).

#### App Codebase Changes

- Wire npm Framework, UI, Tools, environment setup, live MCP, isolated CI, and verified preview flow for the next module.

#### Verification

- Passed setup, full verification, direct package checks, live MCP, production HTTP smoke, and browser preview flows.
- Verified occupied-port rejection and configured-secret exclusion from Git candidates.
- Created the public repository and prepared the authorized Tools commit and push.
- Preserved installation evidence and next work in TASK.md, AUDIT.md, PLAN.md, and TODOS.md.

## v-0.1.0

### [v 0.1.0] 2026-10-03 11:20 am - Create Intergrid foundation

#### Database Changes

- Database update: No (manual).

#### App Codebase Changes

- Initialize the isolated Intergrid foundation with published Framework, UI, and Tools packages.

## Unreleased - Scoped A1-A5 Workstream Integration

- Integrated Asset, Discovery, Lab, and Remix modules.
- Wired API and browser routes in shell.
- Resolved TypeScript and routing integration errors.
- Passed full repository checks.
