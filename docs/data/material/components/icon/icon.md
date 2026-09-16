---
productId: open-ui-kit-core
title: React Icon component
githubLabel: 'component: icon'
githubSource: packages/open-ui-kit/src/components/icon
---

# Icon

<p class="description">Small SVG glyphs for actions, status, objects, and product concepts.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Open UI Kit icons use the shared `MuiSvgIcon` size scale. The scale is intended
for compact interface glyphs. Graphics use a separate scale even where the
`fontSize` category names overlap.

## Import

```tsx
import { Icons } from '@open-ui-kit/core';
```

## When to use

Use an icon for compact controls, actions, status, and supporting interface
information. Use a graphic for a larger product visual, provider logo, or
navigation illustration.

## Sizes

Set a predefined size with the `fontSize` prop.

| Category | Icon size |
| --- | --- |
| `base` | 16 × 16 px |
| `small` | 20 × 20 px |
| `medium` | 24 × 24 px (default) |
| `large` | 32 × 32 px |

Graphics intentionally resolve the shared category names differently. For
example, `fontSize="large"` is 32 × 32 px on an icon and 48 × 48 px on a
graphic. TypeScript exposes the appropriate categories for each component.

## Basic example

```tsx
import { Icons } from '@open-ui-kit/core';

export function IconExample() {
  return <Icons.Settings fontSize="small" aria-label="Settings" />;
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Default
- Color Prop
- Sx Color
- Sizes
- Custom Icons

## Behavior notes

- `medium` is the default when `fontSize` is omitted.
- `inherit` remains available for icons that must follow a parent font size.
- Use `sx={{ fontSize: ... }}` only when a predefined category cannot represent
  the required size.
- The size controls the square SVG viewport; the source `viewBox` keeps the
  artwork proportional.

## Props

Icons are exported from the `Icons` namespace in `@open-ui-kit/core`.

| Prop | Type | Description |
| --- | --- | --- |
| `fontSize` | `'inherit' \| 'base' \| 'small' \| 'medium' \| 'large'` | Selects the icon size category. |
| `color` | `SvgIconProps['color']` | Selects a supported theme color. |
| `className` | `string` | Adds a class to the SVG root. |
| `sx` | `SxProps` | Applies a narrow local style override. |

## Accessibility

- Give standalone actionable icons an accessible name.
- Mark decorative icons with `aria-hidden`.
- Do not rely on an icon alone when its meaning is unfamiliar or ambiguous.

## Usage guidance

- Use one size consistently for icons serving the same role.
- Prefer predefined categories over one-off pixel values.
- Do not use the graphics scale to size icons.

## Resources

- [Storybook](/storybook/?path=/docs/components-icon--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components/icon)
