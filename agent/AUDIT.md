# Verification evidence

## Passed — 2026-10-03

- Installed registry Framework/UI packages and @devxcrew/tools@0.1.7. All 45 direct packages resolved.
- Reused the previously clean-installed identical dependency graph as an independent owned node_modules directory. npm install completed in Intergrid. No dependency directories are linked.
- Authenticated live MCP connection with APP_ID=intergrid and the new server allowlist entry.
- npm run setup, npm run verify, and npm run packages:check passed.
- Full verification covered dependency ownership, version alignment, LF, lint, frontend/server types, three tests, build, and production HTTP smoke.
- Development startup on http://127.0.0.1:5178 through Tools port preflight and live guidance retrieval.
- Browser home, preview login, desk, refresh, logout, and direct desk redirect after logout. Captured console errors were empty.
- Second startup rejected the occupied port and preserved the running app.
- Configured-secret scan of Git candidates passed. The environment file remains ignored.
- Public GitHub repository created. github:now dry run selected the correct #1 release subject.

## Limitations

- A separate local npm ci was not performed for Intergrid. GitHub CI will perform a clean registry installation.
- Real authentication, RBAC, tenancy, persistence, and three identity desks need Platform Core.
- Business capabilities are not implemented. These are next-phase module work.
- Valid cloud credentials and network access remain required for development.

## Evidence

Ignored .cache logs: install.log, setup.log, mcp-connect.log, verify.log, and port-conflict.log.
GitHub: https://github.com/devxcrew/intergrid.

## Release completion — 2026-10-03

- github:now committed and pushed #1 - Prepare Intergrid standalone foundation.
- Initial commit: 91dc9e1a5bba8ae2385a661783642f3192532937. Remote main matched the local commit.
- GitHub CI passed clean npm ci, environment creation, full verification, and direct package checks.
- Evidence: https://github.com/devxcrew/intergrid/actions/runs/37101360519.
- Development process stopped successfully and restarted on port 5178.
- Live MCP repository metadata returned Intergrid version 0.1.1.
- Ready for scoped module work. No business capabilities or real authentication are claimed.
