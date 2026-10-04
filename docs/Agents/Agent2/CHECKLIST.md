# Agent2 checklist

## Before implementation

- [ ] Connect to live governance using [CONNECTION.md](CONNECTION.md).
- [ ] Read repository instructions, records, and the [discovery plan](../../discovery-library.md).
- [ ] Confirm search and Collection acceptance criteria with the coordinator.
- [ ] Receive Agent1's approved public Asset read contract.

## Build

- [ ] Keep Discovery code, schema, persistence, UI, and tests in its module.
- [ ] Validate filters and writes with Zod at the server boundary.
- [ ] Use resource API routes for Collections and other owned resources.
- [ ] Preserve filters, pagination, sorting, breadcrumbs, and Back/Forward behavior.
- [ ] Use only the public Asset provider for Asset reads.
- [ ] Keep search results and Collections linked to their source Assets.

## Handoff

- [ ] Run relevant owner-local checks and record commands and results.
- [ ] Record blocked contract needs and changed paths in [report.md](report.md).
- [ ] Hand off public routes and provider contracts to the coordinator.
