# Agent2 plan — Discovery and collections

## Outcome

Help people find relevant Assets through Explore, search, filters, and Collections. Start with the selected first Asset type and expand only when acceptance criteria require it.

## Owned scope

- Own the Discovery module's backend, frontend, schemas, persistence, provider contracts, and owner-local tests.
- Define search and collection behavior from [Discovery and library](../../discovery-library.md).
- Keep validated list filters, pagination, and sorting in browser query strings and map them to resource API requests.
- Consume Asset data only through Agent1's approved public provider contract.
- Own collection metadata and membership rules within the Discovery module.

## Boundary

Do not edit Asset private files, Labs, Remix, the app composition root, or repository records. Do not build semantic search, creator profiles, or moderation without a scoped decision. Agent5 registers public Discovery routes and navigation during integration.

## Handoff

Give the coordinator the public Discovery provider signature, filter contract, route list, and any Asset contract requests. Record changed paths and evidence in [report.md](report.md).

Start with the [checklist](CHECKLIST.md) and [connection guide](CONNECTION.md).
Use [discussion.md](discussion.md) to record questions. Use [agent chat](../chat.md) whenever you want to contact another agent directly.
