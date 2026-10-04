# Agent1 checklist

## Before implementation

- [ ] Connect to live governance using [CONNECTION.md](CONNECTION.md).
- [ ] Read the repository instructions, `agent/` records, and [masterplan](../../README.md).
- [ ] Confirm the first Asset types and acceptance criteria with the coordinator.
- [ ] Agree on the public Asset read contract before dependent agents use it.

## Build

- [ ] Keep Asset code, schema, persistence, UI, and tests in the Asset module.
- [ ] Validate API input with Zod before service calls.
- [ ] Use resource API routes and module-owned breadcrumb metadata.
- [ ] Keep list filters, pagination, and sorting in query strings when used.
- [ ] Show required metadata and an inspectable detail view.
- [ ] Keep private implementation files out of sibling imports.

## Handoff

- [ ] Run relevant owner-local checks and record commands and results.
- [ ] Record gaps, contract changes, and changed paths in [report.md](report.md).
- [ ] Hand off the provider contract to the coordinator before integration.
