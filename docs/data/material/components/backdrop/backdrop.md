---
productId: open-ui-kit-core
title: React Backdrop component
githubLabel: 'component: backdrop'
githubSource: packages/open-ui-kit/src/components/backdrop
---

# Backdrop

<p class="description">The Open UI Kit Backdrop places a blocking layer over the interface so users can focus on a loading state, dialog, or temporary task.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Backdrop narrows attention to a single moment in the interface.
Use it when the page is waiting for an operation, when a modal surface needs focus, or when clicks outside a temporary surface should dismiss it.

Open UI Kit exposes the expected backdrop API, so props such as `open`, `invisible`, `onClick`, `sx`, and transition props still work.

{{"demo": "BackdropUsage.js", "bg": true}}

## Import

```tsx
import { Backdrop } from '@open-ui-kit/core';
```

## When to use

Use Backdrop when the rest of the interface is temporarily unavailable.
It is appropriate for blocking loading states, modal work, route transitions, and flows where interaction must pause.

Use inline progress or a skeleton instead when the user can keep working.

## Anatomy

A backdrop is a scrim with optional progress and optional message content.
The message should describe what is happening, not simply repeat "loading".
Use invisible backdrops only when another visible surface already communicates the blocking state.

## Loading state

Pair Backdrop with `Spinner` when users need to wait for a blocking operation.
Set the `zIndex` above drawers, dialogs, or any page surface that the backdrop should cover.

{{"demo": "BackdropLoading.js", "bg": true}}

## Message

For longer operations, add a short message so users know what is happening.
Keep the copy brief and avoid technical implementation details.

{{"demo": "BackdropWithMessage.js", "bg": true}}

## Invisible

Use `invisible` when another component provides the visual context, but you still need a click-away layer.
This is useful for contextual surfaces such as popovers, menus, or custom panels.

{{"demo": "InvisibleBackdrop.js", "bg": true}}

## Behavior notes

Drive the open state from page, route, or mutation state and clear it as soon as the blocking work finishes.
If the backdrop appears above a dialog, focus management should remain with the active dialog or task surface.
Avoid long-running backdrops without a recovery path.

## Props

Backdrop supports the underlying backdrop props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | - | Controls whether the backdrop is shown. |
| `children` | `React.ReactNode` | - | Content rendered on top of the backdrop. |
| `invisible` | `boolean` | `false` | Removes the visible overlay while keeping the backdrop behavior. |
| `onClick` | `React.MouseEventHandler` | - | Called when the backdrop is clicked. Commonly used to close it. |
| `sx` | `SxProps` | - | Style overrides, often used for `zIndex`. |

## Accessibility

Backdrop usually appears as part of a larger interaction.
Make sure the component that triggered it communicates state changes clearly, especially for long-running operations.
If the backdrop contains text, keep it visible and concise.

## Usage guidance

- Use Backdrop for blocking moments, not as decoration.
- Provide a clear path to dismiss it when the operation can be cancelled.
- Pair it with progress or status copy when the wait may take more than a moment.
- Keep the backdrop above the surfaces it should block by setting `sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}` when needed.
