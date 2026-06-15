---
productId: open-ui-kit-core
title: React Stack component
githubLabel: 'component: stack'
githubSource: packages/open-ui-kit/src/components/index.ts
---

# Stack

<p class="description">One-dimensional layout primitive for vertical and horizontal spacing.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Stack is part of the Open UI Kit Core public API.
Use layout primitives to compose page structure before reaching for custom CSS.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Stack } from '@open-ui-kit/core';
```

## When to use

Use this primitive when you need predictable spacing, sizing, alignment, or responsive structure.

## Anatomy

Layout primitives are usually made from container props, spacing props, responsive values, and nested content.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { Stack } from '@open-ui-kit/core';

export function StackExample() {
  return (
    <Stack sx={{ p: 2 }}>
      Stack content
    </Stack>
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

Stack is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `Stack` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Stack. |
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

- [Storybook home](https://main--68cc22452afe30d90e4ca977.chromatic.com)
- [Source](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/components/index.ts)
