---
productId: open-ui-kit-core
title: React Empty State component
githubLabel: 'component: empty-state'
githubSource: packages/open-ui-kit/src/components/empty-state
---

# Empty State

<p class="description">The Open UI Kit Empty State gives users a clear, calm explanation when a page, list, search, or panel has no content to show.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Empty State combines an illustration, title, description, and optional action into a reusable empty-content pattern.
It supports `info`, `positive`, `warning`, and `negative` variants, plus large, medium, and small sizes.

Use it when the interface is valid but has nothing meaningful to render yet: no search results, no configured resources, no alerts, or a successful cleanup that leaves the view empty.

{{"demo": "EmptyStateUsage.js", "bg": true}}

## Import

```tsx
import { EmptyState, GeneralSize } from '@open-ui-kit/core';
```

## Variants

Use the variant to match the emotional meaning of the empty view.
Most empty views should use `info`; reserve `positive`, `warning`, and `negative` for states with a clear status meaning.

{{"demo": "EmptyStateVariants.js", "bg": true}}

## Sizes

Use large for full-page empty states, medium for panels and cards, and small for compact inline results.
Small empty states intentionally hide the title and action to keep dense layouts quiet.

{{"demo": "EmptyStateSizes.js", "bg": true}}

## Direction

Use column layout for centered surfaces.
Use row layout when the empty state sits inside a wide panel or next to surrounding content.

{{"demo": "EmptyStateDirection.js", "bg": true}}

## Without Action

Actions are optional.
Skip the action when the state is informational, automatically resolved, or already paired with nearby controls.

{{"demo": "EmptyStateNoAction.js", "bg": true}}

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'info' \| 'positive' \| 'warning' \| 'negative'` | `'info'` | Illustration and status tone. |
| `direction` | `'column' \| 'row'` | `'column'` | Layout direction for illustration and text. |
| `size` | `GeneralSize.Large \| GeneralSize.Medium \| GeneralSize.Small` | `GeneralSize.Large` | Illustration scale, spacing, typography, and action size. |
| `title` | `string` | `''` | Main empty state heading. Hidden for small size. |
| `description` | `string` | `'No matches found'` | Supporting explanation. |
| `actionCallback` | `() => void` | - | Enables the action button when paired with `actionTitle`. |
| `actionTitle` | `string` | - | Action button label. Hidden for small size. |
| `actionButtonProps` | `ButtonProps` | - | Props passed to the internal action button. |
| `containerProps` | `StackProps` | - | Props passed to the root container. |

## Accessibility

Write a description that explains why the content is missing and what the user can do next.
When an action is present, make the label specific, such as "Create project" or "Clear filters".
Do not rely on the illustration or variant color alone to communicate meaning.

## Usage guidance

- Use `info` for neutral empty content and zero-result states.
- Use `positive` for successful cleanup or complete states.
- Use `warning` when the empty view needs attention but is not destructive.
- Use `negative` when content is missing because of an error or blocked condition.
- Keep titles short and descriptions practical.
