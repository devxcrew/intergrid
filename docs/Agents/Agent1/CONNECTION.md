# Agent1 connection guide

1. Open an isolated Intergrid worktree and confirm its repository root.
2. Read `AGENTS.md` and `agent/SKILLS.md`, `TASK.md`, `PLAN.md`, `TODOS.md`, `AUDIT.md`, and `CHANGELOG.md`.
3. From that root, run `npm run mcp:connect` before repository work. Confirm a successful authenticated connection for `intergrid`.
4. If the connection fails, stop and report the error. Do not use local or cached governance instructions.
5. Keep `MCP_SERVER_SECRET` in ignored environment configuration. Do not place it in code, documentation, logs, or the report.
6. Read [Agent1's plan](PLAN.md), [checklist](CHECKLIST.md), and the [coordination rules](../README.md). Record connection status without secrets in [report.md](report.md).

The live connection supplies `governance://code-standard` and `governance://app-setup`. The checked-in docs describe product direction and work ownership; they are not a substitute for live rules.
