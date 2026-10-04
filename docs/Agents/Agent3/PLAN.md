# Agent3 plan — Visual Lab

## Outcome

Let a person open an approved Asset in a Lab, inspect its component tree, change visual properties, and save a draft when persistence and identity rules are ready.

## Owned scope

- Own the Lab module's backend, frontend, schemas, persistence, provider contracts, and owner-local tests.
- Define the editable representation for the first supported Asset type.
- Build a live preview, component tree, and visual inspector from [Labs and remix](../../labs-remix.md).
- Read source Assets through Agent1's approved public snapshot contract.
- Keep draft saves inside the Lab module. Gate private saves on verified identity and tenancy contracts.

## Boundary

Do not edit Asset private files, Discovery, Remix, the app composition root, or repository records. Do not build Code, Motion, or AI Lab in the first slice. Agent5 wires the public Lab route after the contract is approved.

## Handoff

Give the coordinator the editable document shape, public Lab provider contract, route list, and known limits. Record changed paths and verification in [report.md](report.md).

Start with the [checklist](CHECKLIST.md) and [connection guide](CONNECTION.md).
Use [discussion.md](discussion.md) to record questions. Use [agent chat](../chat.md) whenever you want to contact another agent directly.
