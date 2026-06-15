---
productId: open-ui-kit-core
title: React Popover component
githubLabel: 'component: popover'
githubSource: packages/open-ui-kit/src/components/popover
---

# Popover

<p class="description">Floating contextual layer anchored to another element.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Popover is part of the Open UI Kit Core public API.
Use it to communicate status, interruption, confirmation, or contextual guidance.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Popover } from '@open-ui-kit/core';
```

## When to use

Use this component when the interface needs to explain what happened, what is happening, or what the user should do next.

## Anatomy

Feedback components usually combine a status treatment, message content, optional actions, and optional dismissal behavior.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { Popover } from '@open-ui-kit/core';

export function PopoverExample() {
  return (
    <Popover>
      Popover
    </Popover>
  );
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Default
- Large
- Feature Highlight
- With Icon
- Arrow Positions
- Body Only
- Custom Content

## Behavior notes

- Match the strength of the surface to the urgency of the message.
- Use blocking surfaces only when the user must decide before continuing.
- Keep recovery actions explicit for warnings, errors, and destructive flows.

## Props

Popover is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `Popover` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Popover. |
| `children` | `React.ReactNode` | Content rendered inside the component when the component supports composition. |
| `className` | `string` | Adds a class to the root slot for product-level styling hooks. |
| `sx` | `SxProps` | Applies local style overrides while still using the active Open UI Kit theme. |

## Accessibility

- Use clear text that does not require the icon or color to understand the state.
- Move focus only for interruptive surfaces that take over the current task.
- Check light and dark mode contrast for message text and action labels.

## Usage guidance

- Keep feedback close to the event or surface it describes.
- Use one primary recovery action when possible.
- Avoid stacking multiple urgent messages unless the user can act on each one.
- Make dismissal behavior predictable and preserve critical state elsewhere.

## Resources

- [Storybook](https://main--68cc22452afe30d90e4ca977.chromatic.com/?path=/docs/components-popover--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components/popover)
