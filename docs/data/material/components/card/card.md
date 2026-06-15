---
productId: open-ui-kit-core
title: React Card component
githubLabel: 'component: card'
githubSource: packages/open-ui-kit/src/components/card
---

# Card

<p class="description">The Open UI Kit Card groups related content and actions in a flexible surface with product-ready spacing, border radius, elevation, and typography.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Cards are useful for compact summaries, selectable objects, resource previews, and small workflows.
Open UI Kit provides flexible card primitives with component defaults that match the rest of the system.

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

## When to use

Use Card when a set of content and actions should be perceived as one object.
Cards work well for dashboards, summaries, resource previews, templates, reports, and selectable entities.

Avoid using cards as general page decoration or nesting cards inside other cards.

## Anatomy

A card usually has a header, content area, and action row.
The header identifies the object, the content explains its useful state, and actions expose the next available commands.
Use `CardActionArea` only when the whole surface has one destination or action.

## Composition

Build cards from familiar primitives: `CardHeader`, `CardContent`, and `CardActions`.
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

## Behavior notes

If the whole card is clickable, make it behave like a single link or button and avoid nested interactive controls.
When a card has multiple actions, keep them visible in `CardActions` rather than hiding them in the body.
Use spacing and typography first; add borders, shadows, or custom backgrounds only when the card needs stronger grouping.

## Props

Card primitives support the underlying card props.

| Component | Base props | Description |
| --- | --- | --- |
| `Card` | `CardProps` | Root card surface. |
| `CardHeader` | `CardHeaderProps` | Header area with title, subheader, avatar, and action slots. |
| `CardContent` | `CardContentProps` | Main content area. |
| `CardActions` | `CardActionsProps` | Action row for buttons and controls. |
| `CardActionArea` | `CardActionAreaProps` | Makes the card surface interactive. |
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
