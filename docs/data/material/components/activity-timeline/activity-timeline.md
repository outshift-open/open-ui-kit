---
productId: material-ui
title: React Activity Timeline component
githubLabel: 'component: activity-timeline'
githubSource: packages/open-ui-kit/src/components/activity-timeline
---

# Activity Timeline

<p class="description">The Open UI Kit Activity Timeline shows progress through a sequence of steps, events, or checks with product-ready status dots and expandable detail rows.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Activity Timeline is built for operational flows: setup checklists, scan progress, deployment runs, investigation trails, and multi-step jobs.
Use it when users need to understand what has happened, what is happening now, and what still needs attention.

Each step has a `status` and `title`.
Steps can also include a `subTitle` and `content`, which turns the row into an expandable Open UI Kit Accordion.

{{"demo": "ActivityTimelineUsage.js", "bg": true}}

## Import

```tsx
import { ActivityTimeline, ActivityTimelineStepStatus } from '@open-ui-kit/core';
```

## Step statuses

Use `ActivityTimelineStepStatus` to describe the state of each row.
The component supports `in-progress`, `inactive`, `neutral`, `complete`, and `error`.

{{"demo": "ActivityTimelineStatuses.js", "bg": true}}

## Expandable content

Add `content` when a step needs supporting information.
Rows with content use the Open UI Kit Accordion internally, keeping the timeline compact until details are needed.

{{"demo": "ActivityTimelineWithContent.js", "bg": true}}

## Automatic progress

Use `automaticProgress` when the timeline represents a linear flow.
The component calculates each dot's progress by position and renders the connectors as active.

{{"demo": "ActivityTimelineAutomaticProgress.js", "bg": true}}

## Size

Use `size="large"` for page-level process views.
Use `size="medium"` for side panels, drawers, and compact workflow summaries.

{{"demo": "ActivityTimelineSizes.js", "bg": true}}

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `steps` | `ActivityTimelineStep[]` | - | Ordered list of timeline steps. |
| `automaticProgress` | `boolean` | `false` | Calculates progress from step position instead of using only step status. |
| `size` | `'medium' \| 'large'` | `'large'` | Controls text sizing and spacing. |

## Step shape

```tsx
interface ActivityTimelineStep {
  status: ActivityTimelineStepStatus;
  title: string;
  subTitle?: string;
  content?: React.ReactNode;
}
```

## Accessibility

Keep titles short and descriptive so the sequence is easy to scan.
When a step includes `content`, the row is rendered as an accordion summary and detail pair, so keyboard users can expand and collapse the step with Enter or Space.

## Usage guidance

- Use `complete` for finished steps.
- Use `in-progress` for the current active step.
- Use `inactive` for future steps that are not available yet.
- Use `neutral` for informational events that do not represent success or failure.
- Use `error` when the process needs attention before it can continue.
