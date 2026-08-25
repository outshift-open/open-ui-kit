---
productId: open-ui-kit-core
title: React Typography component
githubLabel: 'component: typography'
githubSource: packages/open-ui-kit/src/components/index.ts
---

# Typography

<p class="description">Text primitive for headings, body copy, captions, and semantic text scales.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Typography is part of the Open UI Kit Core public API.
Use it to make status, metadata, repeated content, or supporting information easier to scan.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Typography } from '@open-ui-kit/core';
```

## When to use

Use this component when the page needs to communicate product information without introducing a new workflow.

## Anatomy

Data-display components usually combine a value, label, state treatment, and optional supporting content.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { Typography } from '@open-ui-kit/core';

export function TypographyExample() {
  return (
    <Typography>
      Text
    </Typography>
  );
}
```

## Gradient text

Set the `gradient` prop to fill the text with a gradient instead of a flat color.
It is a boolean, so it composes with any `variant`.

```tsx
import { Typography } from '@open-ui-kit/core';

export function GradientTextExample() {
  return (
    <Typography variant="h1" gradient>
      Welcome Amy!
    </Typography>
  );
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Dedicated Storybook coverage is still being expanded for this export.

## Behavior notes

- Keep values and labels stable so repeated content is easy to compare.
- Handle long content, empty content, and loading content before shipping a dense view.
- Choose the smallest visual treatment that still communicates the state.

## Props

Typography is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `Typography` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Typography. |
| `gradient` | `boolean` | Fills the text with a gradient (via `background-clip: text`) instead of a flat color. Composes with any `variant`. |
| `children` | `React.ReactNode` | Content rendered inside the component when the component supports composition. |
| `className` | `string` | Adds a class to the root slot for product-level styling hooks. |
| `sx` | `SxProps` | Applies local style overrides while still using the active Open UI Kit theme. |

## Accessibility

- Pair visual status with readable text when the meaning is not obvious.
- Keep semantic structure intact for lists, tables, headings, and descriptions.
- Check contrast for low-emphasis labels and status colors in both themes.

## Usage guidance

- Pair values with labels when the meaning is not self-evident.
- Use tooltip or overflow behavior only when truncation is unavoidable.
- Keep repeated rows visually consistent.
- Avoid using decorative emphasis for data that users need to compare precisely.

## Resources

- [Storybook home](/storybook/)
- [Source](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/components/index.ts)
