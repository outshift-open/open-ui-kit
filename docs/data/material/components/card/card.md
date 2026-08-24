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

## Alerts

Pass `alert` with `"critical"` or `"warning"` to render the card as an alert.
Both severities share one translucent surface at the larger alert radius and padding; `critical` additionally draws a rainbow gradient border, and each severity carries its own accent colour.

Pair it with `CardAlertHeader`, which renders the severity label and a right-aligned timestamp.
The label picks up the accent colour from the parent card, so the severity is declared once on `Card`.

{{"demo": "AlertCard.js", "bg": true}}

Keep the label short and in the alert's own words — `CRITICAL ALERT`, `WARNING` — and put the actionable detail in the title.
The `timestamp` slot is optional; omit it when the alert has no meaningful age.

## Graph connector

Pass `connector` for the graph-connector surface.
It stacks the `Graph-Connector` fill and glow gradients over a backdrop blur and edges the card with the matching 1px gradient stroke, at a tighter 6px radius than the other treatments.

{{"demo": "ConnectorCard.js", "bg": true}}

Use it for the small cards that hang off a graph or flow diagram, where the surface should read as part of the canvas rather than as a raised panel.

## Glass

Pass `glass` for the frosted-glass surface.
It fills the card with the `Gradient/Card-Glass-BG` token over a backdrop blur, adds a white hairline, and drops a soft shadow beneath it.

{{"demo": "GlassCard.js", "bg": true}}

The fill is translucent, so the card picks up whatever sits behind it.
In the design it sits directly on the app surface, which is where it reads best.
The backdrop blur only has a visible effect when there is imagery or a pattern behind the card; over a flat colour the translucent fill alone carries the treatment.

## Image background

Pass `image` to use a photo as the card surface.
The photo is layered at half strength over the `Gradient/Welcome-Card-BG-Dark` fill, under two scrims that keep the copy legible over the picture: one runs top to bottom (`Gradient/Overlay-Black-Fade-In`), the other runs left to right and clears by the midpoint of the card, so the title and body copy land on flat colour rather than on the image.
The card also switches to the larger radius and padding the design uses for these promotional surfaces, and its text primitives inherit the light-on-photo colour.

{{"demo": "CardWithImage.js", "bg": true}}

Use it for a single hero or welcome surface, not for cards in a list.
Do not combine `image` with `glow`; the gradient ring is designed for the plain card surface.
The gradients are only design-approved in the Midnight theme — the other themes fall back to a generic dark background gradient.

## Disabled appearance

Use the `disabled` prop when a card represents unavailable content.
It applies the muted surface treatment and sets `aria-disabled` on the card so assistive technology reports the group as unavailable.

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
| `CardAlertHeader` | `CardAlertHeaderProps` | Severity label and timestamp row for alert cards. |

`Card` adds three props on top of `CardProps`:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `alert` | `"warning" \| "critical"` | — | Applies the alert treatment. `critical` adds the rainbow gradient border. |
| `connector` | `boolean` | `false` | Applies the graph-connector treatment. |
| `disabled` | `boolean` | `false` | Applies the disabled treatment and sets `aria-disabled`. |
| `glass` | `boolean` | `false` | Applies the frosted-glass treatment. |
| `glow` | `boolean` | `false` | Applies the gradient border and blue glow treatment. |
| `image` | `string` | — | Background image URL. Applies the image treatment described above. |

`alert`, `connector`, `glass`, `glow`, and `image` are decorative treatments for the same surface — use one at a time.

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
