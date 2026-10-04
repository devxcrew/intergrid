# Labs and remix

## Lab workspace

**Open in Lab** should take a user from a library item to an editable workspace. The proposed layout has a component tree, live canvas, property inspector, save action, and desktop, tablet, and mobile preview controls.

The inspector can expose typography, colors, spacing, dimensions, radius, shadows, blur, borders, layout, alignment, images, content, motion, and responsive behavior. Editable controls must map to real interface properties.

## Progressive Lab modes

| Mode | Scope |
| --- | --- |
| Visual Lab | Font, size, weight, color, radius, spacing, blur, and shadow. |
| Layout Lab | Grid, flex, containers, gaps, alignment, and breakpoints. |
| Motion Lab | Duration, delay, easing, spring, hover, entrance, scroll, and transitions. |
| Component Lab | Decompose an interface into reusable components. |
| Code Lab | Show and edit the implementation. |
| AI Lab | Apply natural-language changes to the editable system. |

Build these modes in stages. The first Lab slice is a live preview with a component tree, visual inspector, and save operation. The later modes depend on a stable editable representation.

## Design system engine

Reusable work should expose tokens for color, typography, spacing, radius, elevation, blur, motion, and breakpoints. Example token names include `--color-background`, `--space-4`, `--radius-md`, and `--motion-fast`.

The Lab should change the underlying token or component property and reflect that change in the preview. This also provides a basis for responsive variants and export.

## Remix and lineage

An item should support **Remix**, **Fork**, **Customize**, and **Save as New**. A remix keeps an attribution link to its source and records changed areas, such as typography, spacing, animation, and colors.

For example, a creator's *Aurora Hero* v1.3 can point to *Aurora Hero* v1.0 and show what changed. The source link forms a design lineage.

## Versions

Treat versions as saved states of an item. The proposed actions are save, compare, restore, fork, inspect changes, and publish. A fork can branch from a specific version. Over time, these relationships form a design evolution graph.

The exact version numbering rules, merge behavior, and rights to publish a fork need product decisions.

## AI assistance

The proposed AI layer understands library items, component structure, and tokens. It could find a pricing section that matches a hero, create a dark remix, adjust responsive behavior, or replace typography through tokens. Natural-language edits should produce inspectable changes to the editable system.

AI Lab, semantic matching, responsive conversion, and design system extraction belong to later roadmap phases. See [Roadmap](roadmap.md).
