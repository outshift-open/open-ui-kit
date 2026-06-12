---
productId: open-ui-kit-core
title: React Floating Button component
githubLabel: 'component: floating-button'
githubSource: packages/open-ui-kit/src/components/floating-button
---

# Floating Button

<p class="description">The Open UI Kit Floating Button is a raised, pill-shaped action button for important page actions that need to stay visually available.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Floating Button wraps the Open UI Kit button treatment with a rounded shape, stronger elevation, and primary or secondary outlines.
Use it for prominent contextual actions such as create, configure, apply, or open tools.

It is intentionally less dominant than a full-width call to action and more explicit than an icon-only control.
Use one primary floating action per surface whenever possible.

{{"demo": "FloatingButtonUsage.js", "bg": true}}

## Import

```tsx
import { FloatingButton } from '@open-ui-kit/core';
```

## Variants

Use `primary` when the button represents the main action in the current surface.
Use `secondary` when the action is important but should sit behind the main flow.

{{"demo": "FloatingButtonVariants.js", "bg": true}}

## Sizes

Use `medium` for most floating actions.
Use `small` in denser toolbars, overlays, or compact side panels.

{{"demo": "FloatingButtonSizes.js", "bg": true}}

## Icons

Floating Button supports `startIcon`, `endIcon`, and icon-only children through the underlying button API.
Icon-only buttons should have an accessible label supplied with `aria-label`.

{{"demo": "FloatingButtonIcons.js", "bg": true}}

## Disabled

Use the disabled state when the action is visible but temporarily unavailable.
Pair it with nearby context that explains what needs to change.

{{"demo": "FloatingButtonDisabled.js", "bg": true}}

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual priority of the floating button. |
| `size` | `'medium' \| 'small'` | `'medium'` | Component size. Maps to the Open UI Kit button sizing internally. |
| `children` | `React.ReactNode` | - | Button label or icon-only content. |
| `startIcon` | `React.ReactNode` | - | Icon rendered before the label. |
| `endIcon` | `React.ReactNode` | - | Icon rendered after the label. |
| `disabled` | `boolean` | `false` | Disables interaction and lowers emphasis. |
| `sx` | `SxProps` | - | Additional style overrides. |

Floating Button also accepts standard button props, except that `variant` and `size` are narrowed to the Open UI Kit floating button values.

## Accessibility

Use action-led labels such as "Create", "Apply filters", or "Open tools".
For icon-only floating buttons, provide an `aria-label` so assistive technologies can announce the action clearly.

## Usage guidance

- Use one primary floating button per surface.
- Prefer short labels; the pill shape is not meant for long sentences.
- Keep it close to the content it affects.
- Use icon-only buttons only when the icon is familiar or paired with a tooltip.
- Avoid using floating buttons for destructive actions.
