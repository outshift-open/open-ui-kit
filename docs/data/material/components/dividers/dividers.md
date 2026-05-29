---
productId: material-ui
title: React Divider component
githubLabel: 'component: divider'
githubSource: packages/open-ui-kit/src/components/divider
---

# Divider

<p class="description">The Open UI Kit Divider separates related content with quiet, theme-aware lines for lists, panels, and dense product layouts.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Divider is styled by the Open UI Kit theme and keeps familiar divider behavior.
It applies the Open UI Kit divider color, radius, horizontal thickness, vertical thickness, and the `bold` variant.

Use it to create structure without adding visual weight.
Dividers work best between groups that are already related, such as form sections, metadata rows, toolbar actions, or list items.

{{"demo": "DividerUsage.js", "bg": true}}

## Import

```tsx
import { Divider } from '@open-ui-kit/core';
```

## Variants

Use the default divider for subtle grouping.
Use `variant="bold"` when the boundary needs stronger hierarchy, such as between major panel sections.

{{"demo": "DividerVariantsOpen.js", "bg": true}}

## Orientation

Horizontal dividers separate stacked content.
Vertical dividers separate inline controls or columns; pair vertical orientation with `flexItem` when the divider lives in a flex container.

{{"demo": "DividerOrientation.js", "bg": true}}

## With Text

Divider can wrap a small label when the label explains a transition in the content.
Keep divider labels short and avoid using them as section headings.

{{"demo": "DividerWithText.js", "bg": true}}

## Layout Patterns

Use dividers inside cards, panels, and settings surfaces to group fields without creating extra containers.

{{"demo": "DividerLayout.js", "bg": true}}

## Props

Divider supports standard divider props, including `orientation`, `variant`, `flexItem`, `textAlign`, `component`, `role`, and `aria-hidden`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction of the separator. |
| `variant` | `'fullWidth' \| 'inset' \| 'middle' \| 'bold'` | `'fullWidth'` | Visual style and spacing. `bold` is added by Open UI Kit. |
| `flexItem` | `boolean` | `false` | Makes a vertical divider stretch correctly in flex layouts. |
| `textAlign` | `'center' \| 'left' \| 'right'` | `'center'` | Alignment for divider text. |

## Accessibility

A plain Divider renders as a separator.
When the divider is purely decorative, set `aria-hidden="true"`.
When the divider wraps text, use `component="div"` and `role="presentation"` so assistive technology reads the label as regular content.

## Usage guidance

- Use dividers to clarify relationships, not to decorate empty space.
- Prefer whitespace before adding a divider.
- Use `bold` sparingly for major breaks.
- Use vertical dividers only where inline items are otherwise difficult to scan.
- Do not use dividers as a replacement for headings.
