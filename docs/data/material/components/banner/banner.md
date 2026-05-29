---
productId: material-ui
title: React Banner component
githubLabel: 'component: banner'
githubSource: packages/open-ui-kit/src/components/banner
---

# Banner

<p class="description">The Open UI Kit Banner displays a short, important message across a page or section without taking users out of their workflow.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Banner is a page-level message for system states, scheduled maintenance, success confirmations, warnings, and important product notices.
It is built on top of Material UI Alert, but it uses Open UI Kit status colors, icons, spacing, and typography.

{{"demo": "BannerUsage.js", "bg": true}}

## Import

```tsx
import { Banner } from '@open-ui-kit/core';
```

## Statuses

Use `status` to communicate the type of message.
The default status is `info`.

{{"demo": "BannerStatuses.js", "bg": true}}

## Close behavior

Banners render a close button by default.
Use `showCloseButton={false}` for persistent messages, or pass `onClose` to respond when the user dismisses the banner.

{{"demo": "BannerCloseButton.js", "bg": true}}

## Custom icon

Pass `icon` when the message needs a product-specific visual cue.
Use this sparingly so status icons remain predictable.

{{"demo": "BannerCustomIcon.js", "bg": true}}

## Props

Banner supports most Material UI `Alert` props, except `variant`, `severity`, `children`, `iconMapping`, and `action`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `React.ReactNode` | - | Message content shown in the banner. |
| `status` | `StatusBanner` | `'info'` | Visual status treatment. |
| `showCloseButton` | `boolean` | `true` | Controls whether the close button is shown. |
| `icon` | `React.ReactNode` | - | Custom icon shown before the message. |
| `onClose` | `AlertProps['onClose']` | - | Called after the close button is clicked. |

## Status type

```tsx
type StatusBanner =
  | 'negative'
  | 'warning'
  | 'success'
  | 'info'
  | 'excellent';
```

## Accessibility

Keep banner copy concise and specific.
Do not rely on color alone to communicate the state: the text should make the meaning clear.
If a banner is critical or appears dynamically, make sure the surrounding workflow announces the state change appropriately.

## Usage guidance

- Use `info` for neutral product notices.
- Use `success` for completed actions that still need visibility.
- Use `warning` for upcoming impact or caution.
- Use `negative` for failures or blocking issues.
- Use `excellent` for positive product or performance signals.
- Avoid stacking multiple banners at once; combine messages when possible.
