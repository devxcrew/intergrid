# Plan

## Current package migration

Use @devxcrew/framework 0.1.8 and @devxcrew/ui 0.2.0 through public exports.
Verify each existing consumer and fresh generated apps before release acceptance.
Keep browser, real SMTP and production deployment gates separate.


1. Completed: standalone foundation, prerequisites, live MCP, version 0.1.1, GitHub push, and green CI.
2. Completed for the local preview: discover and inspect seeded Assets. See [Test 1 proof](../docs/TEST-1-PROOF.md).
3. Completed: discover and run module-local tests. Add broader owner tests, persistence, and ownership rules for the next approved slice.
4. Verify Lab and Remix behavior against their own acceptance criteria before calling them complete.
5. Connect Platform Core identity, RBAC, and tenancy when available.
