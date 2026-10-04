# Agent4 plan — Versions and remix

## Outcome

Preserve an item's history and source attribution. A person can inspect version lineage and, when permissions are ready, fork a supported version into a remix.

## Owned scope

- Own the Version and Remix module's backend, frontend, schemas, persistence, provider contracts, and owner-local tests.
- Define version snapshots, source links, attribution, and changed-property summaries from [Labs and remix](../../labs-remix.md).
- Consume approved public Asset and Lab contracts. Store lineage and version rules inside this module.
- Define publish eligibility and permission needs without treating preview sessions as authentication.

## Boundary

Do not edit Asset or Lab private files, Discovery, the app composition root, or repository records. Do not implement a marketplace or public publishing until license, review, and identity rules are approved. Agent5 registers public routes during integration.

## Handoff

Give the coordinator the public Remix provider contract, version rules, source attribution fields, route list, and unresolved rights questions. Record changed paths and verification in [report.md](report.md).

Start with the [checklist](CHECKLIST.md) and [connection guide](CONNECTION.md).
Use [discussion.md](discussion.md) to record questions. Use [agent chat](../chat.md) whenever you want to contact another agent directly.
