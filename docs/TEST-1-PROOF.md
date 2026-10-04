# Test 1 proof: parallel agents and the first Asset slice

**Date:** 2026-10-03  
**Result:** Passed for the scoped discover and inspect flow in the local preview.

## Acceptance boundary

One seeded Asset must appear in Explore and open an inspectable detail page. The five mapped Antigravity agents must receive one scoped task in the same Veyrezio batch and return results. The integrated checkout must pass governance, project checks, and build.

This result does not certify authentication, persistent data, editing, publishing, or the full product roadmap.

## Parallel dispatch evidence

Veyrezio batch `5308b949-e53f-41cc-9b3f-f079150385d6` queued five agent messages from `11:42:43.144Z` to `11:42:44.825Z`. The sidecar marked all five messages `sent` by `11:42:45.918Z`. All five existing chats were mapped. Veyrezio recorded a result and completion marker for each run.

| Agent | First run | Recorded result |
| --- | --- | --- |
| Agent1, Asset | `26c84ab1-2347-4d05-8482-1d73a3b33927` | Asset API envelope and mock component tree. |
| Agent2, Discovery | `08a61223-0567-43c9-b343-c18c18f5e054` | URL query state, category filter, and result links. |
| Agent3, Lab | `08b4609e-73f4-4fee-b800-2e652bc566f8` | Checked the Asset handoff shape. No editing claim. |
| Agent4, Remix | `a0b86d16-fd81-418f-b771-dd5ddbc761b5` | Corrected an Asset provider signature in its contract. |
| Agent5, integration | `874be509-630a-4a89-977f-376e759eb303` | Found the Fastify startup blocker. |

The first batch exposed real failures. A `COMPLETE` run marker records that an agent finished its assigned turn; it does not prove the product flow passed.

Follow-up batch `41281b49-a6d5-48fb-b157-b1c77005e0f7` asked Agent1 to fix Asset route validation and Agent2 to align categories and detail links. Agent5 then integrated their owner files. Follow-up batch `3dbff174-7bfe-4164-bd52-32eb6ffc8877` asked Agent1 to remove stale TypeScript suppressions and Agent5 to render the Desk child route. The integrated checkout received both owner fixes.

## Independent acceptance evidence

| Check | Observed result |
| --- | --- |
| `npm run mcp:connect` | Succeeded with authenticated Intergrid guidance before repository work. |
| `GET /api/v1/assets` | HTTP 200. Response included seeded Hero Section with Video and Primary Button Assets. |
| `GET /api/v1/assets/7310c221-30e0-41c6-806c-5d38aecbda13` | HTTP 200 with the Hero Section title, description, category, tags, technology, and compatibility. |
| Browser flow | Opened `/explore`, selected Primary Button, used development preview sign-in, and saw its title, description, category, tags, technology, and compatibility at `/desk/assets/<id>`. |
| `npm run check` | Passed dependency, version, line-ending, lint, frontend and server type checks, plus three foundation tests. |
| `npm run build` | Passed and produced the frontend bundle. |
| Veyrezio project check `eab4156b-e628-43d8-8ea3-67b64016bc87` | Passed `npm run check` with exit code 0 after documentation and line-ending cleanup. The prior failed check remains in history. |

The browser check was performed against the running local Intergrid app, not inferred from an agent report. Veyrezio's dashboard and MCP brief preserve the batch IDs, delivery state, run markers, and earlier failed check. The repository audit records the integrated checks.

## Limits and next work

- Asset data uses an in-memory repository. A restart does not preserve new data.
- Preview sign-in is a frontend gate, not Platform Core authentication.
- At the time of Test 1, the integrated `npm test` script ran three foundation tests and did not scan module-local files. Test 2 added module-local discovery and two Asset schema tests. The Lab owner's reported test file was not present in the integrated checkout.
- Open in Lab, saving edits, publishing, rights, and remix acceptance are outside this Test 1 result.
- Veyrezio dispatch is paused and desktop access is disabled after the pilot. The initial batch and follow-ups remain in its local event store.

Read the [agent reports](Agents/README.md), [repository audit](../agent/AUDIT.md), and [Veyrezio delivery status](../../veyrezio/REQUIREMENTS.md) with this proof. Earlier blocker entries in those records describe intermediate states unless a later verification confirms them.
