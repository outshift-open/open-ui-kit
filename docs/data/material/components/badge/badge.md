---
productId: material-ui
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

## Types

Use `type` to map the badge to a product meaning.
Open UI Kit includes neutral, success, error, warning, severity, and inactive treatments.

{{"demo": "BadgeTypes.js", "bg": true}}

## Notification badge

Pass `notificationContent` when the badge should sit on top of another element.
The original `content` becomes the wrapped child, and `notificationContent` becomes the small badge value.

{{"demo": "BadgeNotification.js", "bg": true}}

## Custom styles

Use `styleBadge` for the badge container and `styleContent` for the text inside it.
Keep overrides small so the badge stays aligned with the design system.

{{"demo": "BadgeCustomStyles.js", "bg": true}}

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `React.ReactNode` | - | Badge text/content, or the wrapped child when using `notificationContent`. |
| `type` | `BadgeType` | `'default'` | Visual treatment for the badge. |
| `notificationContent` | `React.ReactNode` | - | Value rendered in the notification bubble. |
| `styleBadge` | `SxProps` | - | Style overrides for the badge container. |
| `styleContent` | `SxProps` | - | Style overrides for the badge text. |

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

## Accessibility

Badges are compact visual hints, so avoid relying on color alone for critical information.
When a badge represents a status, pair it with nearby text that names the state.
For notification badges on icons, make sure the icon or surrounding control has an accessible label.

## Usage guidance

- Keep badge content short: one word, a number, or a compact code.
- Use notification mode for icon counters and standalone mode for status pills.
- Use `inactive` for disabled, muted, or unavailable states.
- Use `warning`, `moderate`, and `severe` only when the distinction matters to the user.
