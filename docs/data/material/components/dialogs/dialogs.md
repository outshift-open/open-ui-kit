---
productId: material-ui
title: React Dialog component
githubLabel: 'component: dialog'
githubSource: packages/open-ui-kit/src/components/dialog
---

# Dialog

<p class="description">The Open UI Kit Dialog presents focused decisions, confirmations, and task flows on top of the current page.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Dialog is built on Material UI Dialog and keeps the underlying modal behavior, focus management, transitions, sizing, and accessibility props.
Open UI Kit adds product typography through `DialogTitle` and `DialogSubtitle`, so modal headers feel consistent with the rest of the system.

Use dialogs when the user must make a decision before continuing, or when a short focused workflow should temporarily sit above the page.
Because dialogs interrupt the current task, keep them direct and action-oriented.

{{"demo": "DialogUsage.js", "bg": true}}

## Import

```tsx
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogSubtitle,
  DialogTitle,
} from '@open-ui-kit/core';
```

## Anatomy

Compose a dialog from a title, optional subtitle, content, and actions.
Use `aria-labelledby` and `aria-describedby` to connect the modal surface to its visible heading and supporting content.

{{"demo": "DialogComposition.js", "bg": true}}

## Confirmation

Use confirmation dialogs for choices that are costly, destructive, or hard to undo.
Make the primary action specific, and use `color="negative"` only when the action truly carries risk.

{{"demo": "DialogConfirmation.js", "bg": true}}

## Sizes

Dialog supports the Material UI `maxWidth` presets.
Use `sm` for short confirmations, `md` for settings or form-like content, and `lg` only when the dialog needs comparison or dense supporting details.

{{"demo": "DialogSizes.js", "bg": true}}

## Props

Dialog supports Material UI `DialogProps`, including `open`, `onClose`, `maxWidth`, `fullWidth`, `fullScreen`, `scroll`, `TransitionComponent`, `aria-labelledby`, and `aria-describedby`.

| Component | Description |
| --- | --- |
| `Dialog` | Modal surface rendered above the page. |
| `DialogTitle` | Primary title with Open UI Kit typography. |
| `DialogSubtitle` | Supporting title text for the dialog header. |
| `DialogContent` | Body container for text, forms, or custom content. |
| `DialogContentText` | Accessible text wrapper for descriptive copy. |
| `DialogActions` | Footer container for dialog actions. |

## Accessibility

Every dialog needs a clear title and a predictable close path.
Connect the title and body copy with `aria-labelledby` and `aria-describedby`.
Use `role="alertdialog"` for urgent confirmation dialogs that require an immediate decision.

## Usage guidance

- Use dialogs for focused, interruptive decisions.
- Keep the body copy short and specific.
- Put the dismissive action first and the committing action last.
- Avoid stacking dialogs.
- Prefer inline panels or drawers for long workflows that do not require interruption.
