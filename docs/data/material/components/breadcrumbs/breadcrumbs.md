---
productId: material-ui
title: React Breadcrumbs component
githubLabel: 'component: breadcrumbs'
githubSource: packages/open-ui-kit/src/components/breadcrumbs
---

# Breadcrumbs

<p class="description">The Open UI Kit Breadcrumbs component shows a page's location in a hierarchy and lets users move back through ancestor pages.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Breadcrumbs are useful when users move through nested product areas such as workspaces, projects, resources, and detail pages.
They provide orientation without taking over the page.

Open UI Kit Breadcrumbs render an ordered list from `items`.
Each item can include text, a route link, and an optional icon.

{{"demo": "BreadcrumbsUsage.js", "bg": true}}

## Import

```tsx
import { Breadcrumbs } from '@open-ui-kit/core';
```

## Router provider

Breadcrumb links use `react-router-dom` internally.
Render Breadcrumbs inside a router provider such as `BrowserRouter`, `MemoryRouter`, or your app's existing router.

```tsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <Breadcrumbs items={items} />
</BrowserRouter>
```

## Depth

Breadcrumbs work for shallow and deep paths.
The current page is rendered with the active pressed color treatment.

{{"demo": "BreadcrumbsDepth.js", "bg": true}}

## Collapsed items

Use `maximumNumberOfVisibleBreadcrumbs` to keep long hierarchies compact.
When the number of items exceeds the limit, the middle items collapse behind an overflow control.

{{"demo": "BreadcrumbsCollapsed.js", "bg": true}}

## Icons

Items can include an icon.
Use `iconPosition` globally or per item when the icon should sit on the left or right of the label.

{{"demo": "BreadcrumbsWithIcons.js", "bg": true}}

## Sizes

Use the medium size for most page headers.
Use small in dense toolbars, side panels, or compact cards.

{{"demo": "BreadcrumbsSizes.js", "bg": true}}

## Props

Breadcrumbs supports the underlying Material UI `Breadcrumbs` props, plus Open UI Kit item, size, icon, and collapse props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItem[]` | - | Ordered breadcrumb items. |
| `maximumNumberOfVisibleBreadcrumbs` | `number` | `4` | Maximum number of items before the middle items collapse. |
| `iconPosition` | `IconPosition` | - | Default icon position for all items. |
| `size` | `GeneralSize` | `GeneralSize.Medium` | Link text size. |
| `color` | `LinkColorEnum` | `LinkColorEnum.Secondary` | Link color family. |
| `type` | `LinkType` | `LinkType.StandaloneBold` | Link typography and underline treatment. |
| `sx` | `SxProps` | - | Style overrides for the root breadcrumb container. |

## Item shape

```tsx
interface BreadcrumbItem {
  text: string;
  link?: string;
  Icon?: LinkProps['Icon'];
  iconPosition?: IconPosition;
}
```

## Accessibility

Breadcrumbs render with `aria-label="breadcrumb"` by default.
Keep labels short and meaningful, and make sure the final item clearly names the current page.

## Usage guidance

- Use breadcrumbs for real hierarchy, not recent navigation history.
- Keep the current page as the final item.
- Collapse deep paths on narrow or dense layouts.
- Avoid icons unless they add useful context to the hierarchy.
