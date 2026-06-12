---
productId: open-ui-kit-core
title: React Avatar component
githubLabel: 'component: avatar'
githubSource: packages/open-ui-kit/src/components/avatar
---

# Avatar

<p class="description">The Open UI Kit Avatar represents a person, team, workspace, or entity with an image, initials, or icon.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Avatar keeps identity cues compact and consistent across navigation, tables, cards, comments, and ownership surfaces.
Use an image when a recognizable profile photo or entity image is available.
Use initials or an icon when the image is missing, private, or not useful.

{{"demo": "AvatarUsage.js", "bg": true}}

## Import

```tsx
import { Avatar, AvatarGroup } from '@open-ui-kit/core';
```

## Content

Avatar supports three content modes: `src`, `initials`, and `icon`.
Images render with an overlay treatment on hover, while initials and icons use Open UI Kit brand colors.

{{"demo": "AvatarContent.js", "bg": true}}

## Sizes

Use `size="L"` for primary identity moments and `size="M"` for dense surfaces such as tables, sidebars, and compact lists.

{{"demo": "AvatarSizes.js", "bg": true}}

## Groups

Use `AvatarGroup` to show a small set of related people or entities.
The group passes its `size` to child avatars so the stack stays visually consistent.

{{"demo": "AvatarGroups.js", "bg": true}}

## Props

### Avatar

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `'L' \| 'M'` | `'L'` | Controls the avatar diameter and content scale. |
| `src` | `string` | - | Image URL for the avatar. |
| `alt` | `string` | - | Alternative text for image avatars. |
| `initials` | `string` | - | Text fallback shown when no image or icon is provided. |
| `icon` | `React.ReactNode` | - | Icon fallback shown when no image is provided. |

### AvatarGroup

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `'L' \| 'M'` | `'L'` | Size applied to every child avatar. |
| `children` | `React.ReactNode` | - | Avatar children rendered in the overlapping group. |

## Accessibility

Provide `alt` text for image avatars when the image communicates identity.
If the surrounding UI already names the person or entity, use concise alt text to avoid repeating too much information for assistive technology.

## Usage guidance

- Prefer real images for recognizable people and organizations.
- Use two-letter initials for people and short entity names.
- Use icons for generic users, system actors, or unknown identities.
- Keep avatar groups small so the overlap remains readable.
