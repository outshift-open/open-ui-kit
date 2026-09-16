---
productId: open-ui-kit-core
title: React Graphics
githubLabel: 'foundation: graphics'
githubSource: packages/open-ui-kit/src/graphics
---

# Graphics

<p class="description">Larger product visuals, navigation marks, provider logos, AI symbols, and brand wordmarks.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Graphics use a dedicated wrapper around MUI `SvgIcon`. This preserves standard
SVG props while keeping graphic sizes independent from the shared icon theme.
The same `fontSize` category can therefore have an icon value and a different
graphic value.

## Import

```tsx
import { Graphics } from '@open-ui-kit/core';
```

## Sizes

Set a predefined size with the `fontSize` prop.

| Category | Graphic size |
| --- | --- |
| `base` | 20 × 20 px |
| `small` | 24 × 24 px |
| `medium` | 32 × 32 px (default) |
| `large` | 48 × 48 px |
| `xlarge` | 64 × 64 px |

The graphic `fontSize` type is separate from MUI `SvgIconProps['fontSize']`.
Adding `xlarge` to graphics does not add it to icons, and the graphics mapping
does not modify `MuiSvgIcon` theme sizes.

## Basic example

```tsx
import { Graphics } from '@open-ui-kit/core';

export function GraphicExample() {
  return (
    <Graphics.ApiSecurityGraphicActive
      fontSize="large"
      aria-label="API security"
    />
  );
}
```

## Choosing icons or graphics

- Use icons for compact actions, controls, statuses, and interface concepts.
- Use graphics for larger product visuals, navigation illustrations, provider
  logos, AI states, and brand marks.
- The same category name describes relative emphasis within each family. It
  does not promise the same pixel size across icons and graphics.

## Props

| Prop | Type | Description |
| --- | --- | --- |
| `fontSize` | `'base' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | Selects the graphic size category. |
| `color` | `SvgIconProps['color']` | Selects a supported theme color where the artwork uses `currentColor`. |
| `className` | `string` | Adds a class to the SVG root. |
| `sx` | `SxProps` | Applies a narrow local style override. |

## Accessibility

- Give meaningful standalone graphics an accessible name.
- Mark decorative graphics with `aria-hidden`.
- Do not rely on color alone to communicate a graphic state.

## Resources

- [Storybook](/storybook/?path=/docs/foundations-graphics--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/graphics)
