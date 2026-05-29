---
productId: material-ui
title: React Card component
githubLabel: 'component: card'
githubSource: packages/open-ui-kit/src/components/card
---

# Card

<p class="description">The Open UI Kit Card groups related content and actions in a flexible surface with product-ready spacing, border radius, elevation, and typography.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Cards are useful for compact summaries, selectable objects, resource previews, and small workflows.
Open UI Kit wraps the Material UI card primitives and adds component defaults that match the rest of the system.

{{"demo": "CardUsage.js", "bg": true}}

## Import

```tsx
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardDescription,
  CardHeader,
  CardSubheader,
} from '@open-ui-kit/core';
```

## Composition

Build cards from the same primitives as Material UI: `CardHeader`, `CardContent`, and `CardActions`.
Use `CardDescription` and `CardSubheader` for Open UI Kit text styling inside custom card layouts.

{{"demo": "CardComposition.js", "bg": true}}

## Clickable cards

Wrap a card in `CardActionArea` when the whole surface should act as one action.
Keep secondary buttons out of clickable card bodies to avoid nested interactive controls.

{{"demo": "ClickableCard.js", "bg": true}}

## Dense content

Use cards for grouped product objects such as jobs, templates, workspaces, and reports.
Keep headings short and put supporting metadata in the subheader or content area.

{{"demo": "CardDenseContent.js", "bg": true}}

## Disabled appearance

Cards do not have a dedicated `disabled` prop.
When a card represents unavailable content, make that state explicit in surrounding logic and apply a muted style.

{{"demo": "DisabledCard.js", "bg": true}}

## Props

Card primitives support the underlying Material UI props.

| Component | Base props | Description |
| --- | --- | --- |
| `Card` | `MuiCardProps` | Root card surface. |
| `CardHeader` | `MuiCardHeaderProps` | Header area with title, subheader, avatar, and action slots. |
| `CardContent` | `MuiCardContentProps` | Main content area. |
| `CardActions` | `MuiCardActionsProps` | Action row for buttons and controls. |
| `CardActionArea` | `MuiCardActionAreaProps` | Makes the card surface interactive. |
| `CardDescription` | `TypographyProps` | Body text with Open UI Kit card description styling. |
| `CardSubheader` | `TypographyProps` | Compact supporting text with Open UI Kit card subheader styling. |

## Accessibility

Use `CardActionArea` only when the entire card represents a single action.
If the card includes multiple actions, use visible buttons in `CardActions` instead.
Headings should describe the card clearly so lists of cards are easy to scan.

## Usage guidance

- Keep card content focused on one object or decision.
- Use `CardActions` for explicit commands.
- Avoid nesting cards inside cards.
- Use `sx` for layout sizing, but keep visual overrides minimal.
- For unavailable cards, pair muted styling with clear text explaining the state.
