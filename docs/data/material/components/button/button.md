---
productId: material-ui
title: React Button component
githubLabel: 'component: button'
githubSource: packages/open-ui-kit/src/components/button
---

# Button

<p class="description">The Open UI Kit Button lets users trigger actions, submit forms, and make choices with predictable product styling.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Button is built on Material UI Button and keeps the underlying button API, while applying Open UI Kit sizing, spacing, focus, disabled, loading, and color treatments.
Use it for clear actions in toolbars, dialogs, forms, cards, and page headers.

{{"demo": "ButtonUsage.js", "bg": true}}

## Import

```tsx
import { Button } from '@open-ui-kit/core';
```

## Variants

Use `primary` for the main action, `secondary` for supporting actions, `outlined` for lower emphasis, and `tertariary` for text-like actions.

{{"demo": "ButtonVariants.js", "bg": true}}

## Sizes

Button supports `small`, `medium`, and `large`.
Use medium for most product UI, small for dense toolbars, and large for high-emphasis page or modal actions.

{{"demo": "ButtonSizes.js", "bg": true}}

## Destructive actions

Use `color="negative"` for destructive or high-risk actions.
Negative styling is supported for `primary`, `outlined`, and `tertariary` variants.

{{"demo": "ButtonDestructive.js", "bg": true}}

## Icons

Use `startIcon` or `endIcon` when an icon clarifies the action.
For icon-only buttons, pass the icon as the only child and provide an accessible label.

{{"demo": "ButtonIcons.js", "bg": true}}

## States

Buttons support disabled and loading states through the MUI Button API.
Use loading when the action has been accepted and is still processing.

{{"demo": "ButtonStates.js", "bg": true}}

## Props

Button supports Material UI `ButtonProps`, including `variant`, `size`, `color`, `disabled`, `loading`, `startIcon`, `endIcon`, `onClick`, `href`, and `type`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'outlined' \| 'tertariary'` | - | Visual priority of the button. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button height, padding, and icon sizing. |
| `color` | `'negative' \| ButtonProps['color']` | - | Use `negative` for destructive actions. |
| `disabled` | `boolean` | `false` | Prevents interaction and applies disabled styling. |
| `loading` | `boolean` | `false` | Shows the loading indicator and loading styling. |
| `startIcon` | `React.ReactNode` | - | Icon shown before the label. |
| `endIcon` | `React.ReactNode` | - | Icon shown after the label. |

## Accessibility

Use concise action labels.
Icon-only buttons must include an accessible label with `aria-label`.
Avoid using color alone to communicate destructive actions; the label should make the action clear.

## Usage guidance

- Use one primary action per surface when possible.
- Use secondary or outlined buttons for supporting actions.
- Use `tertariary` for quiet actions that should not compete with the main flow.
- Use `color="negative"` only for destructive or risky actions.
- Keep labels short and verb-led, such as "Save", "Invite", or "Delete".
