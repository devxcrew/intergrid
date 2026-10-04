# Agent coordination rules

These rules organize parallel work on Intergrid. Repository `AGENTS.md` and authenticated live governance remain the source for code, validation, and release requirements. If a rule here conflicts with either source, follow the higher-priority instruction and tell the coordinator.

## 1. Use the right checkout

- Use `git worktree list` to find the checkout assigned to your branch. The parallel checkouts live under `D:\codexsun\projects\intergrid\.worktrees\` when they are not the primary checkout.
- Agent5 must use its own checkout before changing shared application files.
- Each agent checks its current branch and `git status --short` before editing. Do not reset, clean, move, or overwrite another agent's work.
- `.worktrees/` is ignored by the main checkout. Do not add nested checkout files to a commit from the main checkout.

## 2. Keep one owner per file

- An agent edits its own module and its own `docs/Agents/AgentN/` records. The [ownership table](README.md#start-gate) names the workstreams.
- Agent5 owns shared application composition and navigation during integration. The coordinator owns repository `agent/` records, package files, this guide, and final integration decisions.
- Before touching a shared file, an agent asks its owner through the [canonical chat](chat.md). A request does not transfer ownership.
- Do not import a sibling's private files. Exchange data through approved public provider contracts.

## 3. Agree on contracts before binding modules

- The producing owner states the public method, input, output, error shape, and route when applicable.
- The consuming owner confirms the contract in chat before writing dependent integration code.
- The coordinator approves changes that affect more than one module. Keep unresolved proposals marked **open**.
- An agent may continue owner-local work while a contract is open. Do not claim the dependent flow works until the approved contract is integrated.

## 4. Communicate through one record

- Use `D:\codexsun\projects\intergrid\docs\Agents\chat.md` for numbered, addressed messages. Worktree copies of `chat.md` do not sync.
- Use live chat when you want a timely reply. A file entry alone does not notify its recipient.
- Keep one request per log entry. Cite its log ID in replies and record the final decision.
- The coordinator maintains the open-discussions table. Agents append messages and ask the coordinator to close resolved rows.
- Keep private notes in your own `discussion.md`. Put deliverables and evidence in your own `report.md`.

## 5. Keep claims and actions accurate

- Preview sessions are not authentication. Do not claim identity, permissions, tenancy, persistence, or publishing until the relevant flow is verified.
- Run only the checks relevant to your change. Record the exact command and result. Do not label an unrun check as passed.
- Use a separate app port if another agent has a server running. Do not stop another agent's process.
- Keep secrets out of source, docs, chat, logs, and Git.
- Do not commit, push, publish, or bump a release version without user authorization.

## 6. Resolve overlap early

If two agents need the same file, stop edits to that file and post a **BLOCKER** in the canonical chat. The coordinator assigns one owner or schedules the shared edit during integration. Keep working on files that do not overlap.
