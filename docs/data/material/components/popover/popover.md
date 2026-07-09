---
productId: open-ui-kit-core
title: React Popover component
githubLabel: 'component: popover'
githubSource: packages/open-ui-kit/src/components/popover
---

# Popover

<p class="description">Floating contextual layer anchored to another element.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Popover is part of the Open UI Kit Core public API.
Use it for lightweight, anchored panels with optional title, body, actions, and a directional arrow.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Popover } from '@open-ui-kit/core';
```

## When to use

Use Popover when you need contextual information or a small decision surface next to a trigger, without taking over the full page like a dialog.

## Anatomy

A popover combines an anchor trigger, a floating panel, optional title and body copy, optional action buttons, an optional leading icon, and an optional arrow that points at the anchor.

Keep each part purposeful: the title should explain the task, the body should add only the detail needed to decide, and actions should make the next step obvious.

## Basic example

```tsx
import * as React from 'react';
import { Button, Popover } from '@open-ui-kit/core';

export function PopoverExample() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
        Open popover
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        title="Review change"
        body="Check the details before continuing."
        placement="bottom"
      />
    </>
  );
}
```

## Placement

Set `placement` to position the panel and arrow relative to the anchor. Values follow the same convention as MUI Tooltip `placement` (without `auto` variants):

- `top`, `top-start`, `top-end`
- `bottom`, `bottom-start`, `bottom-end`
- `left`, `left-start`, `left-end`
- `right`, `right-start`, `right-end`

Omit `placement` for a plain panel with no arrow. When `placement` is set, the component resolves `anchorOrigin` and `transformOrigin` internally and may flip the panel when there is not enough viewport space.

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Default
- Flips near viewport edge
- Without arrow
- Large
- Feature Highlight
- With Icon
- Placement
- Body Only
- Custom Content

## Behavior notes

- `placement` controls both panel position and arrow direction.
- The popover can flip to stay inside the viewport when space is limited.
- `disableScrollLock` defaults to `true` so opening a popover does not lock page scroll.
- Use `size="large"` for wider confirmation or content-heavy panels.
- Pass `children` instead of `title` / `body` / `actions` when you need fully custom panel content.

## Props

Popover is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `open` | `boolean` | Controls whether the popover is visible. |
| `anchorEl` | `Element \| (() => Element) \| null` | Element the popover is positioned against. |
| `onClose` | `function` | Called when the popover should close. |
| `title` | `React.ReactNode` | Bold heading above the body. |
| `body` | `React.ReactNode` | Supporting text below the title. |
| `actions` | `React.ReactNode` | Action elements rendered at the bottom-right of the panel. |
| `icon` | `React.ReactNode` | Optional icon rendered before the title/body column. |
| `placement` | `PopoverPlacement` | MUI Tooltip-style placement. Enables the arrow. Omit for no arrow. |
| `size` | `'medium' \| 'large'` | Panel width. Defaults to `medium`. |
| `featureHighlight` | `boolean` | Applies active feature-highlight border and arrow styling. |
| `showCloseButton` | `boolean` | Shows a close button in the top-right corner. |
| `paperSx` | `SxProps` | Additional styles merged onto the Paper element. |
| `children` | `React.ReactNode` | Custom panel content. Replaces the built-in title/body/actions layout. |
| `disableScrollLock` | `boolean` | When `true`, page scroll is not locked while open. Defaults to `true`. |

## Accessibility

- Keep title and body text understandable without relying on icon or border color alone.
- Ensure action labels describe the outcome, especially for destructive or irreversible flows.
- Check light and dark mode contrast for message text and action labels.

## Usage guidance

- Anchor the popover to the control it describes.
- Prefer one primary action when the user must choose how to continue.
- Use `showCloseButton` when dismissal should be obvious without clicking away.
- Avoid stacking multiple open popovers over the same trigger region.

## Resources

- [Storybook](https://main--68cc22452afe30d90e4ca977.chromatic.com/?path=/docs/components-popover--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components/popover)
