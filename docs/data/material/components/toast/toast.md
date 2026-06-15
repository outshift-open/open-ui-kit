---
productId: open-ui-kit-core
title: React Toast component
githubLabel: 'component: toast'
githubSource: packages/open-ui-kit/src/components/toast
---

# Toast

<p class="description">Temporary notification for background outcomes and updates.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Toast is part of the Open UI Kit Core public API.
Use it to communicate status, interruption, confirmation, or contextual guidance.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Toast } from '@open-ui-kit/core';
```

## When to use

Use Toast for temporary confirmation or background outcomes that should not interrupt the current task.

## Anatomy

A toast includes a status, title, description, optional action, and automatic or explicit dismissal.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { Toast } from '@open-ui-kit/core';

export function ToastExample() {
  return (
    <Toast>
      Toast
    </Toast>
  );
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Default
- Without Title
- Success
- Error
- Warning
- Info
- Without Close Button
- Without Action
- All Types
- All Types Without Title

## Behavior notes

- Match the strength of the surface to the urgency of the message.
- Use blocking surfaces only when the user must decide before continuing.
- Keep recovery actions explicit for warnings, errors, and destructive flows.

## Props

Toast is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `Toast` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Toast. |
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

- [Storybook](https://main--68cc22452afe30d90e4ca977.chromatic.com/?path=/docs/components-toast-toast--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components/toast)
