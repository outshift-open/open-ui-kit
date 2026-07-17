---
productId: open-ui-kit-core
title: React Box component
githubLabel: 'component: box'
githubSource: packages/open-ui-kit/src/components/index.ts
---

# Box

<p class="description">Low-level layout wrapper for spacing, sizing, and responsive style composition.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Box is part of the Open UI Kit Core public API.
Use layout primitives to compose page structure before reaching for custom CSS.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Box } from '@open-ui-kit/core';
```

## When to use

Use this primitive when you need predictable spacing, sizing, alignment, or responsive structure.

## Anatomy

Layout primitives are usually made from container props, spacing props, responsive values, and nested content.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { Box } from '@open-ui-kit/core';

export function BoxExample() {
  return (
    <Box sx={{ p: 2 }}>
      Container content
    </Box>
  );
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Dedicated Storybook coverage is still being expanded for this export.

## Behavior notes

- Start with tokenized spacing and responsive props.
- Keep layout components free of product-specific copy or behavior.
- Use them to compose sections, not to hide component complexity.

## Props

Box is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `Box` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Box. |
| `children` | `React.ReactNode` | Content rendered inside the component when the component supports composition. |
| `className` | `string` | Adds a class to the root slot for product-level styling hooks. |
| `sx` | `SxProps` | Applies local style overrides while still using the active Open UI Kit theme. |

## Accessibility

- Choose semantic elements through props when the layout wrapper carries document structure.
- Do not reorder important content visually without preserving a logical reading order.
- Keep focusable content visible at all supported breakpoints.

## Usage guidance

- Prefer these re-exports when building docs or apps from the Open UI Kit package surface.
- Keep layout decisions local to the surface that owns them.
- Avoid using layout primitives as decorative cards.
- Use responsive props before adding custom media queries.

## Resources

- [Storybook home](/storybook/)
- [Source](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/components/index.ts)
