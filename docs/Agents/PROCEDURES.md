# Agent work procedures

Use this short cycle for each scoped capability. The [coordination rules](RULES.md) apply throughout.

## 1. Start a work item

1. Open your assigned checkout and check the branch and working tree.
2. Read repository `AGENTS.md`, the `agent/` records, your plan and checklist, and the current shared rules.
3. Run `npm run mcp:connect` from the repository root. If authentication fails, stop repository work and report the failure.
4. Write a small outcome and acceptance criteria in your own `report.md`. Name the files you expect to own.
5. List public contracts and identity or persistence dependencies. Ask the producer or coordinator about missing contracts in the [canonical chat](chat.md).

## 2. Work in parallel

| Agent | Work that can proceed independently | Wait before binding |
| --- | --- | --- |
| Agent1 | Asset model and owner-local list/detail behavior. | Cross-module read and write contract approval. |
| Agent2 | Discovery filters, Collection rules, and owner-local UI. | Agent1 Asset read contract. |
| Agent3 | Editable document shape, visual inspector, and owner-local preview. | Agent1 Asset snapshot contract and real identity for private saves. |
| Agent4 | Lineage rules, attribution fields, and owner-local version views. | Agent1 creation and Agent3 snapshot contracts; publishing rights. |
| Agent5 | Homepage and navigation shell. | Approved module providers and routes before registration. |

Work on an independent slice while a dependency is open. Do not create a duplicate implementation to bypass the owner.

## 3. Ask and decide

1. Append a numbered **REQUEST** or **BLOCKER** to the canonical chat with one exact question.
2. Use live chat to notify the named agent if the answer is needed now.
3. The producing owner replies with the proposed public contract or a blocker.
4. The coordinator records a **DECISION** for cross-module changes and names the owner of any shared edit.
5. Each affected agent updates its own `discussion.md` and `report.md` after the decision.

The contract remains unapproved until the decision is recorded. Silence is not approval.

## 4. Handoff a finished slice

1. Complete your checklist and update `report.md` with status: **ready**, **partial**, or **blocked**.
2. List changed paths, exported providers, API and browser routes, schema changes, and required environment values without secrets.
3. Record checks with exact commands, results, and any untested behavior.
4. Add a numbered **HANDOFF** message to the canonical chat. Name the coordinator and each dependent agent.
5. Stop changing the handed-off contract until the coordinator requests a revision.

## 5. Integrate and verify

1. The coordinator reviews each report and the actual diff. A report is evidence to inspect, not proof by itself.
2. The coordinator or assigned integration owner joins one module at a time through its public provider.
3. Ask the owning agent to fix private module issues. Keep composition fixes in Agent5's scope.
4. After each join, check its direct route or user flow. After all joins, run the repository checks once on the integrated tree.
5. Record passed, failed, blocked, and untested results in `agent/TASK.md`, `agent/AUDIT.md`, and `agent/CHANGELOG.md`.

Release steps follow repository `AGENTS.md` and require user authorization for commit, push, and publish.
