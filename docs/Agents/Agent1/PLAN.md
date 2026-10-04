# Agent1 plan — Asset catalog

## Outcome

Define the first Asset capability. A person can browse an Asset and inspect its metadata and structure. Editing and publishing are later work.

## Owned scope

- Own the Asset module's backend, frontend, schemas, persistence, provider contracts, and owner-local tests.
- Define Asset types and required metadata from the [product model](../../product-model.md).
- Add resource API methods and library list and detail views for the selected Asset types.
- Expose a public read contract for Agent2, Agent3, and Agent4. Keep private storage and service files inside the Asset module.

## Boundary

Do not edit Discovery, Lab, Remix, the app composition root, package manifests, or repository `agent/` records. Agent5 registers the public Asset provider and routes during integration. Do not add identity behavior beyond verified Platform Core contracts.

## Handoff

Give the coordinator the public provider signature, resource route list, metadata schema, migration needs, and example responses. Record the exact changed paths and verification in [report.md](report.md).

Start with the [checklist](CHECKLIST.md) and [connection guide](CONNECTION.md).
Use [discussion.md](discussion.md) to record questions. Use [agent chat](../chat.md) whenever you want to contact another agent directly.
