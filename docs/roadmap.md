# Proposed roadmap

This roadmap organizes the source masterplan. Test 1 completed a local preview of Asset discovery and inspection. All other phase items remain proposals until separately verified. See the [Test 1 proof](TEST-1-PROOF.md).

| Phase | Goal | Proposed scope |
| --- | --- | --- |
| 01 — Foundation | Establish product basics. | Brand, design system, database, authentication, Asset model, categories, search. |
| 02 — Gallery | Make work discoverable. | Explore, Library, detail pages, Collections, save, tags, filters. |
| 03 — Labs | Make work editable. | Open in Lab, live preview, component tree, inspector, visual editing, save. |
| 04 — Remix | Preserve derivation. | Fork, versioning, publish, share, attribution. |
| 05 — Community | Support contributions. | Profiles, upload, publish, comments, Collections, creator pages. |
| 06 — Advanced Labs | Expand editing and output. | Code, responsive, motion, and token editors; export. |
| 07 — Intelligence | Help people find and adapt work. | Semantic search, AI remix, component matching, responsive conversion, design system extraction. |
| 08 — Ecosystem | Distribute reusable work. | Marketplace, CLI, npm packages, team libraries, public API. |

## First product slice

The first scoped slice makes seeded Assets discoverable in Explore and inspectable on a detail page. The integrated app serves Asset list and detail resources. Discovery keeps supported filters in the browser URL. A real browser completed Explore to detail after development preview sign-in.

This is a local preview with in-memory data. Asset ownership, persistence, real identity, and **Open in Lab** still need separate acceptance criteria and implementation.

## Decisions before implementation

- Define the first Asset types and required metadata.
- Decide who can create, edit, review, and publish each type.
- Define licensing and attribution for imported work and remixes.
- Choose the editable representation needed by the first Lab.
- Specify quality checks and human review rules.
- Verify identity, tenancy, and permission contracts before private or team workspaces.
