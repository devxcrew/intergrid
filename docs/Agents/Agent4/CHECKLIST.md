# Agent4 checklist

## Before implementation

- [x] Connect to live governance using [CONNECTION.md](CONNECTION.md).
- [x] Read repository instructions, records, and the [remix plan](../../labs-remix.md).
- [ ] Confirm version and remix acceptance criteria with the coordinator.
- [ ] Receive approved public Asset and Lab contracts.
- [ ] Resolve attribution, license, and permission rules for the selected slice.

## Build

- [x] Keep version, fork, lineage, schema, persistence, UI, and tests in the owner module.
- [ ] Validate version and remix payloads with Zod before services run.
- [x] Use resource API routes for owned resources.
- [x] Preserve the exact source item and source version for a fork.
- [x] Show attribution and a clear summary of changes.
- [ ] Gate user-owned and published versions on verified identity and permissions.

## Handoff

- [ ] Run relevant owner-local checks and record commands and results.
- [x] Record legal, identity, and contract blockers in [report.md](report.md).
- [x] Hand off the public provider and route contract to the coordinator.
