---
productId: open-ui-kit-core
title: React Select component
githubLabel: 'component: select'
githubSource: packages/open-ui-kit/src/components/select
---

# Select

<p class="description">Select control for choosing from a menu of options.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Select is part of the Open UI Kit Core public API.
Use it when the user needs to provide input, make a choice, or trigger a clear action.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Select } from '@open-ui-kit/core';
```

## When to use

Use Select when users need to choose one value from a known set of options.

## Anatomy

A select includes a trigger, selected value, option menu, optional clear action, and empty or placeholder state.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import * as React from 'react';
import { MenuItem, Select } from '@open-ui-kit/core';

export function SelectExample() {
  const [value, setValue] = React.useState('');

  return (
    <Select
      clearable
      displayEmpty
      value={value}
      onChange={(event) => setValue(event.target.value)}
      renderValue={(selected) => selected || 'Choose provider'}
    >
      <MenuItem value="aws">AWS</MenuItem>
      <MenuItem value="azure">Azure</MenuItem>
      <MenuItem value="gcp">GCP</MenuItem>
    </Select>
  );
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Default
- Hover
- Focused
- Activated
- Error State
- Disabled
- Multiple
- Sizes

## Behavior notes

- Keep controlled state in the feature or form that owns the interaction.
- Show disabled, error, loading, and selected states only when they reflect real product state.
- Keep dense controls close to the object or result set they affect.

## Props

Select is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `Select` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Select. |
| `children` | `React.ReactNode` | Content rendered inside the component when the component supports composition. |
| `className` | `string` | Adds a class to the root slot for product-level styling hooks. |
| `sx` | `SxProps` | Applies local style overrides while still using the active Open UI Kit theme. |

## Accessibility

- Provide a visible label or an `aria-label` when the control has no text label.
- Make focus visible and keep keyboard behavior consistent with the underlying HTML control.
- Do not rely on color alone to communicate selected, error, or disabled state.

## Usage guidance

- Prefer the Open UI Kit wrapper when one exists so spacing, state, and focus styles stay consistent.
- Keep labels short and action-led.
- Pair helper text with validation or state changes when users need more context.
- Avoid placing several high-emphasis controls in the same small surface.

## Resources

- [Storybook](https://main--68cc22452afe30d90e4ca977.chromatic.com/?path=/docs/components-select--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components/select)
