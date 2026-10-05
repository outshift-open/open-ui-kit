---
productId: open-ui-kit-core
title: React Badge component
githubLabel: 'component: badge'
githubSource: packages/open-ui-kit/src/components/badge
---

# Badge

<p class="description">The Open UI Kit Badge displays compact counts, labels, and status indicators with the product color system.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Badge is for small pieces of information that need to sit close to another element: counts, statuses, severity markers, and notification indicators.
Use it when the value is short and useful at a glance.

{{"demo": "BadgeUsage.js", "bg": true}}

## Import

```tsx
import { Badge } from '@open-ui-kit/core';
```

## When to use

Use Badge for compact counts, notification dots, and small state markers attached to another element.
It works best when the badge changes how the user understands or prioritizes the anchor element.

Use text, chips, or status rows instead when the state needs explanation.

## Anatomy

A badge has an anchor element and a marker.
The marker can be numeric, dot-only, or status-like depending on the use case.
Keep badge content short so it does not compete with the element it annotates.

## Types

Use `type` to map the badge to a product meaning.
Open UI Kit includes neutral, success, error, warning, severity, and inactive treatments.

{{"demo": "BadgeTypes.js", "bg": true}}

## Shapes

Set `shape` to render the badge as a bare geometric marker instead of a content pill.
Use it for status legends and dense rows where a word would crowd the layout.
A shape badge is never filled, so `notificationContent` is ignored when `shape` is set.

Pair `shape` with `size` to pick the footprint.
`small` (6px) and `medium` (8px) match the library's marker sizes; `large` (12px) is an
additional step for denser layouts. `dash` stays a 2px rule with rounded caps at every size,
so it scales in width only.

{{"demo": "BadgeShapes.js", "bg": true}}

A bare marker carries meaning through color alone, so always give it a label.
Pass `content` to render one beside the marker, or reserve shapes for cases where the nearby
copy already names the state.

## Optional behaviors

Pass `icon` to place a glyph before the badge content.
The slot is pinned to the 16px badge height so a leading icon cannot change the pill's size.

An icon badge renders its glyph and content in white in both light and dark mode, so an icon drawn
with `currentColor` needs no per-type handling. Because the white is fixed rather than derived from
`type`, check contrast before pairing `icon` with the light-background types — `warning`, `moderate`,
and `inactive` in particular.

Pass `content` alongside `shape` to label a marker. The label sits 8px after the marker in
caption semibold, and takes the standard text color rather than a per-type one, so it reads as
copy next to the marker rather than text inside a pill. Omit `content` for a bare marker.

{{"demo": "BadgeOptionalBehaviors.js", "bg": true}}

The icon applies to the standalone badge only. It is ignored in notification mode, where `content`
is the wrapped child, and in shape mode, where `content` becomes the marker's label.

## Notification badge

Pass `notificationContent` when the badge should sit on top of another element.
The original `content` becomes the wrapped child, and `notificationContent` becomes the small badge value.

{{"demo": "BadgeNotification.js", "bg": true}}

## Custom styles

Use `styleBadge` for the badge container and `styleContent` for the text inside it.
Keep overrides small so the badge stays aligned with the design system.

{{"demo": "BadgeCustomStyles.js", "bg": true}}

## Behavior notes

Use counts when the number itself matters, such as unread items or pending tasks.
Use a dot when the presence of new activity is enough.
Cap or format large counts in the page logic before passing the value to the badge.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `React.ReactNode` | - | Badge text/content, the wrapped child when using `notificationContent`, or the label beside the marker when `shape` is set. |
| `type` | `BadgeType` | `'default'` | Visual treatment for the badge. |
| `shape` | `BadgeShape` | - | Renders the badge as a geometric marker, optionally labelled with `content`. |
| `size` | `BadgeSize` | `'medium'` | Marker footprint. Ignored unless `shape` is set. |
| `icon` | `React.ReactNode` | - | Icon shown before the content. Forces white text. Standalone mode only. |
| `notificationContent` | `React.ReactNode` | - | Value rendered in the notification bubble. |
| `styleBadge` | `SxProps` | - | Style overrides for the badge container, or for the marker itself in shape mode. |
| `styleContent` | `SxProps` | - | Style overrides for the badge text, including a shape label. |

## Badge types

```tsx
type BadgeType =
  | 'default'
  | 'excellent'
  | 'neutral'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'inactive'
  | 'moderate'
  | 'severe';
```

## Badge shapes and sizes

```tsx
type BadgeShape = 'circle' | 'triangleUp' | 'triangleDown' | 'dash';
type BadgeSize = 'small' | 'medium' | 'large';
```

## Accessibility

Badges are compact visual hints, so avoid relying on color alone for critical information.
When a badge represents a status, pair it with nearby text that names the state.
For notification badges on icons, make sure the icon or surrounding control has an accessible label.

## Usage guidance

- Keep badge content short: one word, a number, or a compact code.
- Use notification mode for icon counters and standalone mode for status pills.
- Use `inactive` for disabled, muted, or unavailable states.
- Use `warning`, `moderate`, and `severe` only when the distinction matters to the user.
- Use `shape` for status legends and dense rows, and always pair the marker with a text label — pass `content` to render one.
- Use `icon` when the glyph adds meaning the number alone does not carry.
