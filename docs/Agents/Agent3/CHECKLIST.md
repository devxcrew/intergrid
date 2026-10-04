# Agent3 checklist

## Before implementation

- [x] Connect to live governance using [CONNECTION.md](CONNECTION.md).
- [x] Read repository instructions, records, and the [Lab plan](../../labs-remix.md).
- [ ] Confirm the first editable Asset type and acceptance criteria.
- [ ] Agree on the Asset snapshot contract and editable document shape.

## Build

- [x] Keep Lab code, schema, persistence, UI, and tests in its module.
- [x] Render a live preview from the editable document.
- [x] Show a component tree and visual inspector for the supported properties.
- [x] Validate edits and saved payloads with Zod on the server.
- [ ] Use public Asset data without importing Asset private files.
- [ ] Gate user-owned drafts on real identity and tenancy, when available.

## Handoff

- [x] Run relevant owner-local checks and record commands and results.
- [x] Record unsupported properties and blocked identity work in [report.md](report.md).
- [x] Hand off the Lab provider and route contract to the coordinator.
