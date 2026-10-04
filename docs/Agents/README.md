# Five-agent implementation plan

This plan divides the [Intergrid masterplan](../README.md) into five bounded workstreams. Use agent reports and the integrated tree to determine what is built. A plan or chat message alone is not completion evidence.

Start with the [coordination rules](RULES.md) and [work procedures](PROCEDURES.md). Use the [canonical chat](chat.md) for numbered questions, decisions, and handoffs. Each agent keeps private notes in its own `discussion.md` and sends a live message when it wants a direct reply.

[Veyrezio](../../../veyrezio/README.md) is the running local supervisor for this pilot. The [Test 1 proof](../TEST-1-PROOF.md) records its five-agent batch, follow-up work, and integrated result.

## Start gate

Before each new slice, the coordinator selects the capability, writes acceptance criteria, and agrees on the public provider contracts needed by other modules. Private workspaces, publishing permissions, and creator identity wait for verified Platform Core contracts.

Each agent uses its assigned checkout under Intergrid. The table below assigns workstreams. The [rules](RULES.md) define file ownership and the [procedures](PROCEDURES.md) define the start, handoff, and integration steps.

| Agent | Workstream | Exclusive implementation ownership | Contract dependency |
| --- | --- | --- | --- |
| [Agent1](Agent1/PLAN.md) | Asset catalog | Asset module on frontend and backend. | Defines the public Asset provider contract. |
| [Agent2](Agent2/PLAN.md) | Discovery and collections | Discovery module on frontend and backend. | Consumes Agent1's public read contract. |
| [Agent3](Agent3/PLAN.md) | Visual Lab | Lab module on frontend and backend. | Consumes an approved Asset snapshot contract. |
| [Agent4](Agent4/PLAN.md) | Versions and remix | Version and remix module on frontend and backend. | Consumes approved Asset and Lab contracts. |
| [Agent5](Agent5/PLAN.md) | Experience shell and integration | Homepage, navigation, and composition root. | Registers delivered public providers and routes. |

Agent5 owns integration edits only after the relevant provider contracts are agreed. Agents 2–4 can plan and build their owner-local parts in parallel. They must not invent private imports or commit an integration that depends on an unapproved contract. If a contract is missing, record the blocker in that agent's `report.md` and continue independent work.

The individual plans describe slices of the long-term roadmap. They are not a request to implement all eight roadmap phases at once.
