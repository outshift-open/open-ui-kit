---
productId: material-ui
title: React Copy Button component
githubLabel: 'component: copy-button'
githubSource: packages/open-ui-kit/src/components/copy-button
---

# Copy Button

<p class="description">The Open UI Kit Copy Button copies text to the clipboard and gives users immediate visual feedback.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Use Copy Button for values that users often need to move into another tool: IDs, tokens, URLs, commands, and generated configuration.
It is icon-only by design, so provide an accessible label for the specific value being copied.

{{"demo": "CopyButtonUsage.js", "bg": true}}

## Import

```tsx
import { CopyButton } from '@open-ui-kit/core';
```

## Sizes

Use `large` when the button stands alone or appears beside a field.
Use `medium` or `small` inside dense layouts, tables, and inline metadata.

{{"demo": "CopyButtonSizes.js", "bg": true}}

## Feedback

After copying, the button swaps to a success icon and tooltip for two seconds.
Use `onCopy` when the page needs to show additional confirmation or analytics.

{{"demo": "CopyButtonFeedback.js", "bg": true}}

## Tooltip labels

Customize `copyLabel`, `copiedLabel`, and `tooltipPlacement` when the default tooltip would be ambiguous.

{{"demo": "CopyButtonLabels.js", "bg": true}}

## Positioned buttons

Use `position`, `top`, `left`, and `right` when the button needs to sit inside a relative container such as a code panel or read-only value box.

{{"demo": "CopyButtonPositioned.js", "bg": true}}

## Props

`CopyButton` extends icon button props and adds copy-specific options.

| Prop | Type | Description |
| --- | --- | --- |
| `text` | `string` | Text copied to the clipboard. |
| `size` | `'small' \| 'medium' \| 'large'` | Visual size. Defaults to `large`. |
| `position` | `'left' \| 'right'` | Absolutely positions the button inside a relative parent. |
| `top` | `string` | Top offset for positioned usage. Defaults to `16px`. |
| `left` | `string` | Left offset when `position="left"`. |
| `right` | `string` | Right offset when `position="right"`. |
| `disableMargin` | `boolean` | Removes the default outer margin. |
| `tooltipPlacement` | `TooltipProps['placement']` | Tooltip placement. Defaults to `top`. |
| `copyLabel` | `string` | Tooltip text before copying. Defaults to `Copy`. |
| `copiedLabel` | `string` | Tooltip text after copying. Defaults to `Copied`. |
| `onCopy` | `() => void` | Callback fired after the text is copied. |

## Accessibility

Copy Button is an icon button, so always provide `aria-label`.
Make the label specific to the copied value, for example `aria-label="Copy workspace ID"`.
Avoid using only `aria-label="Copy"` when several copy actions appear near each other.

## Usage guidance

- Use Copy Button for exact values users should not retype.
- Place it close to the value it copies.
- Prefer `large` for standalone actions and smaller sizes in dense UIs.
- Keep copied text free of invisible characters.
- Pair destructive or sensitive copied values with clear surrounding text.
