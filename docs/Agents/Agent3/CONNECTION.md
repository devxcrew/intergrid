# Agent3 connection guide

1. Open an isolated Intergrid worktree and confirm its repository root.
2. Read `AGENTS.md` and `agent/SKILLS.md`, `TASK.md`, `PLAN.md`, `TODOS.md`, `AUDIT.md`, and `CHANGELOG.md`.
3. From that root, run `npm run mcp:connect` before repository work. Confirm a successful authenticated connection for `intergrid`.
4. If the connection fails, stop and report the error. Do not use local or cached governance instructions.
5. Keep `MCP_SERVER_SECRET` in ignored environment configuration. Do not place it in code, documentation, logs, or the report.
6. Read [Agent3's plan](PLAN.md), [checklist](CHECKLIST.md), and the [coordination rules](../README.md). Get the approved Asset snapshot and identity contracts before dependent work.

Record connection status without secrets in [report.md](report.md). If a contract is unavailable, report the blocker and continue independent Lab design work.
