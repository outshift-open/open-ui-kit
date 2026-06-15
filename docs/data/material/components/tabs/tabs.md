---
productId: open-ui-kit-core
title: React Tabs component
githubLabel: 'component: tabs'
githubSource: packages/open-ui-kit/src/components/tabs
---

# Tabs

<p class="description">Tabs for switching between peer views inside one context.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Tabs is part of the Open UI Kit Core public API.
Use navigation components to show location, hierarchy, movement, or view changes.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Tabs } from '@open-ui-kit/core';
```

## When to use

Use this component when users need to understand where they are, move through a hierarchy, or switch related views.

## Anatomy

Navigation components combine labels, active state, destinations or values, and predictable keyboard behavior.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { Tabs } from '@open-ui-kit/core';

export function TabsExample() {
  return (
    <Tabs>
      Tabs
    </Tabs>
  );
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Default
- Main Tab
- Subtab
- Toggle Tab
- States
- With Icon
- Tabs With Subtabs
- Vertical

## Behavior notes

- Keep active state, labels, and ordering stable across routes.
- Use compact patterns only when surrounding layout already provides context.
- Check keyboard movement and focus visibility in Storybook before shipping.

## Props

Tabs is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `Tabs` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Tabs. |
| `children` | `React.ReactNode` | Content rendered inside the component when the component supports composition. |
| `className` | `string` | Adds a class to the root slot for product-level styling hooks. |
| `sx` | `SxProps` | Applies local style overrides while still using the active Open UI Kit theme. |

## Accessibility

- Make the current item or selected value available to assistive technologies.
- Keep labels stable and descriptive.
- Use semantic navigation landmarks or list structures where appropriate.

## Usage guidance

- Use navigation patterns for movement or view changes, not for arbitrary actions.
- Keep current state visible.
- Avoid changing item order based on transient state.
- Use route links for navigation and buttons for actions.

## Resources

- [Storybook](https://main--68cc22452afe30d90e4ca977.chromatic.com/?path=/docs/components-tabs--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components/tabs)
