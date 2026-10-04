# Platform and ecosystem

## Conceptual architecture

The masterplan describes two product paths. **Discovery** contains the Library, Search, and Collections. **Creation** contains Labs, the editor, and a rendering runtime. Both paths use an engine for Assets, tokens, and versions, then connect to publishing.

This is a product model. Implementation must follow this repository's module ownership and public provider contracts. The diagram does not prescribe a shared business layer.

## Data relationships

The proposed entity inventory includes:

| Area | Candidate entities |
| --- | --- |
| Identity and work | User, Workspace. |
| Interface content | Asset, Component, Section, Experience, Lab. |
| Discovery | Collection, Tag, Category. |
| Evolution | Version, Fork, Remix. |
| Construction | Token, Interaction, Dependency. |
| Community | Comment, Like, Save, View. |
| Publishing | Publication, License. |

An Asset may link to versions, components, tokens, interactions, forks, and Labs. This is a conceptual relationship, not a database schema. Each implemented capability must define its owner, persistence, validation, and public contract.

## Technology direction

The source masterplan suggests Next.js, React, TypeScript, Tailwind, Framer Motion, GSAP, and Vercel. These are candidate tools for later work. The current repository uses its own Vite application foundation and public Framework, UI, and Tools packages. Technology changes need a separate decision based on the capability being built.

## Developer distribution

A later CLI could find and add items:

```bash
intergrid search "glass dashboard"
intergrid add button
intergrid add hero/aurora
intergrid install aurora-dashboard
```

A later package system could publish installable components such as `@intergrid/button`, `@intergrid/hero`, and `@intergrid/dashboard`. A public API could let products consume the same library. Package names, distribution rights, and compatibility rules remain proposals.

## The Grid

The long-term ecosystem connects the Library, Labs, and Community through Search, AI, and a graph of sources and remixes. An interface can point to its components. A remix can point to its source version. An experiment can become a reusable system, then a production component.

The intended outcome is a living graph of interface knowledge that supports creators, developers, and products.
