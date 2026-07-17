---
productId: open-ui-kit-core
title: React Slider component
githubLabel: 'component: slider'
githubSource: packages/open-ui-kit/src/components/slider
---

# Slider

<p class="description">Range control for continuous numeric values.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Slider is part of the Open UI Kit Core public API.
Use it when the user needs to provide input, make a choice, or trigger a clear action.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Slider } from '@open-ui-kit/core';
```

## When to use

Use Slider for continuous numeric values where users benefit from dragging through a range.

## Anatomy

A slider includes a track, thumb, value range, optional marks, and optional visible value label.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { Slider } from '@open-ui-kit/core';

export function SliderExample() {
  return (
    <Slider>
      Slider
    </Slider>
  );
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Default
- With Value
- With Marks
- With Mark Labels
- Range
- Disabled
- Vertical
- Variants

## Behavior notes

- Keep controlled state in the feature or form that owns the interaction.
- Show disabled, error, loading, and selected states only when they reflect real product state.
- Keep dense controls close to the object or result set they affect.

## Props

Slider is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `Slider` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Slider. |
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

- [Storybook](/storybook/?path=/docs/components-slider--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components/slider)
