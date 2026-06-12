---
productId: open-ui-kit-core
title: React Anchor Link Menu component
githubLabel: 'component: anchor-link-menu'
githubSource: packages/open-ui-kit/src/components/anchor-link-menu
---

# Anchor Link Menu

<p class="description">The Open UI Kit Anchor Link Menu provides compact in-page navigation for long documentation pages, settings views, and product surfaces with multiple sections.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Anchor Link Menu lists the sections available on the current page and highlights the active item.
Use it as a quiet table of contents beside dense content, or as a floating navigation surface inside constrained product layouts.

The component is intentionally controlled: pass `selectedId` to mark the current section and `onSelect` to react when a user chooses an item.

{{"demo": "AnchorLinkMenuUsage.js", "bg": true}}

## Import

```tsx
import { AnchorLinkMenu } from '@open-ui-kit/core';
```

## Variants

Use `variant="rail"` when the menu sits in a fixed page column.
Use `variant="floating"` when the menu needs its own contained surface.

{{"demo": "AnchorLinkMenuVariants.js", "bg": true}}

## Subsections

Set `subsection` on an item to indent it under the previous section.
This keeps the hierarchy readable without adding collapsible behavior.

{{"demo": "AnchorLinkMenuSubsections.js", "bg": true}}

## Controlled selection

`AnchorLinkMenu` does not manage the active section internally.
Store the selected item in your page state, update it from scroll position or user selection, and pass it back through `selectedId`.

{{"demo": "AnchorLinkMenuControlled.js", "bg": true}}

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `AnchorLinkMenuItem[]` | - | Ordered list of sections shown in the menu. |
| `selectedId` | `string` | - | ID of the active item. |
| `title` | `string` | - | Optional heading displayed above the list. |
| `variant` | `'rail' \| 'floating'` | `'rail'` | Changes the menu container treatment. |
| `onSelect` | `(id: string) => void` | - | Called when a menu item is selected. |

## Item shape

```tsx
interface AnchorLinkMenuItem {
  id: string;
  label: string;
  subsection?: boolean;
}
```

## Usage guidance

- Keep labels short and match the destination section heading.
- Use subsections sparingly so the menu stays scannable.
- Keep `selectedId` in sync with scroll position on long pages.
- Prefer the rail variant for page-level documentation and the floating variant for dashboards, drawers, or contextual panels.
