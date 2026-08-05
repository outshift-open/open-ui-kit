---
productId: open-ui-kit-core
title: React Spider Chart component
githubLabel: 'component: spider-chart'
githubSource: packages/open-ui-kit/src/components/index.ts
---

# Spider Chart

<p class="description">Spider chart for comparing multi-axis scores across entities or categories.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Spider Chart is part of the Open UI Kit Core public API.
Use charts for comparison, trend, proportion, and score visualization inside product workflows.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { SpiderChart } from '@open-ui-kit/core';
```

## When to use

Use this component when a visual pattern will help users understand a dataset faster than a table or list.

## Anatomy

Chart components combine a data shape, visual marks, labels, legends, tooltips, and surrounding layout.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { SpiderChart } from '@open-ui-kit/core';

const data = [
  { name: 'Critical', value: 12 },
  { name: 'High', value: 24 },
  { name: 'Medium', value: 36 },
];

export function SpiderChartExample() {
  return <SpiderChart data={data} />;
}
```

## Gradient variant

Set `gradient` on a radar series to use one of the four design-approved data-viz ramps.
The ramp fills the radar area, its paired accent draws the outline, and every data vertex gets a ring in the same accent.

```tsx
<SpiderChart
  data={data}
  radars={[{ name: 'Concierge Agent', dataKey: 'variableA', gradient: 'pinkPurple' }]}
/>
```

| `gradient` | Gradient token |
| --- | --- |
| `pinkPurple` | `Gradient/Data-Viz-Pink-Purple` |
| `cyanBlue` | `Gradient/Data-Viz-Cyan-Blue` |
| `orangeGold` | `Gradient/Data-Viz-Orange-Gold` |
| `blueDark` | `Gradient/Data-Viz-Blue-Dark` |

The ramps are design-approved in the Midnight theme; the other themes fall back to the closest gradient the library already ships.
Use one ramp per series, and pass `background`, `stroke`, or `dot` on the series to override any part of the treatment.

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- `Gradient` — the four data-viz ramps, one agent per ramp.
- Dedicated Storybook coverage is still being expanded for this export.

## Behavior notes

- Validate the expected data shape against the Storybook examples before wiring live data.
- Keep labels and legends close to the marks they describe.
- Use empty and loading states around the chart when data is not ready.

## Props

Spider Chart is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `SpiderChart` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Spider Chart. |
| `children` | `React.ReactNode` | Content rendered inside the component when the component supports composition. |
| `className` | `string` | Adds a class to the root slot for product-level styling hooks. |
| `sx` | `SxProps` | Applies local style overrides while still using the active Open UI Kit theme. |

## Accessibility

- Do not rely on color alone for status, severity, or category meaning.
- Provide a nearby title, summary, or table when users need exact values.
- Make tooltip-only information available elsewhere when it is required for decisions.

## Usage guidance

- Choose the chart that matches the question: comparison, trend, proportion, ranking, or score.
- Keep color assignments stable across related charts.
- Avoid adding a chart when a small table or metric communicates the answer more clearly.
- Use Storybook examples as the source of truth for supported data shapes while chart docs mature.

## Resources

- [Storybook](/storybook/?path=/docs/charts-spider-chart--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/components/index.ts)
