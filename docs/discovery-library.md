# Discovery and library

## Navigation

The proposed primary navigation has five discovery destinations: **Explore**, **Library**, **Labs**, **Collections**, and **Community**. A creation group contains **Create**, **My Grid**, **Saved**, and **Projects**. Global search is available from the navigation and a keyboard shortcut.

| Destination | Purpose | Proposed views |
| --- | --- | --- |
| Explore | Browse and discover work. | Featured, trending, new, curated, experimental, minimal, motion, dark, editorial, SaaS, mobile, e-commerce. |
| Library | Study reusable interface knowledge. | Components, sections, patterns, pages, systems, interactions, assets. |
| Labs | Edit and experiment. | Featured Labs, community Labs, my Labs, templates, experiments. |
| Collections | Browse curated groups. | Brutalist interfaces, Apple-like systems, SaaS essentials, dark interfaces, portfolio systems, motion systems, mobile patterns. |

These labels are proposed information architecture. They are not a list of live routes.

## Library item

A library item should show a live preview and explain how the interface works. Its inspectable layers are:

- **Structure:** A tree of sections and nested elements, such as Header, Hero, Feature Grid, and Footer.
- **Components:** Reusable parts, such as Button, Card, Navigation, and Input.
- **Motion:** Entrance, hover, and scroll behavior.
- **Tokens:** Colors, typography, spacing, and radius.

The item should support the transition from inspection to editing with a prominent **Open in Lab** action.

## Detail page

The proposed detail page starts with the title, description, and **Open in Lab**. It then shows a live preview, followed by Overview, Components, Interactions, Responsive, Code, and Tokens. It also lists the technology and related interfaces. The page should show license and compatibility information from the item metadata.

## Search

Search should cover more than titles. The proposed facets are visual appearance, component type, technology, interaction, style, industry, responsive behavior, accessibility, author, and tags.

Examples of intended queries include “dark glass pricing card with hover animation,” “minimal SaaS hero with large typography,” and “mobile navigation with liquid animation.” A later semantic search could interpret requests such as “a calm premium fintech dashboard.”

## Collections

Collections group related work for browsing and reuse. They can be curated by Intergrid or assembled by creators. A collection should preserve links to its source items and their authors.

## Contribution flow

1. Create or upload work.
2. Add metadata.
3. Review the preview.
4. Validate the submission.
5. Submit it for review.
6. Publish an approved version.

Proposed automated checks cover responsiveness, accessibility, broken behavior, missing assets, performance, license, duplicates, and code quality. Human curation can follow where needed. The checks, thresholds, and review policy need definition before launch.
