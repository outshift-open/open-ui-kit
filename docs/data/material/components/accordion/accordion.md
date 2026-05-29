---
productId: material-ui
title: React Accordion component
githubLabel: 'component: accordion'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
githubSource: packages/open-ui-kit/src/components/accordion
---

# Accordion

<p class="description">The Open UI Kit Accordion lets users expand and collapse sections of related content with product-ready spacing, typography, and theme behavior.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Accordion is a disclosure surface for content that should stay available without taking over the page.
Use it for grouped settings, page sections, filters, summaries, and optional details that users can scan before opening.

Open UI Kit keeps the expected accordion behavior and adds a simpler header contract:

- `title` renders the main summary label.
- `subTitle` renders supporting summary text.
- `children` renders the expandable content.
- Standard accordion props such as `defaultExpanded`, `expanded`, `onChange`, and `disabled` still work.

{{"demo": "AccordionUsage.js", "bg": true}}

## Import

```tsx
import { Accordion } from '@open-ui-kit/core';
```

## Arrow position

Use `arrowPosition` to place the disclosure icon on the left or right side of the summary.
Left is the default and works well for dense lists.
Right keeps the label aligned with surrounding content.

{{"demo": "AccordionArrowPosition.js", "bg": true}}

## Size

Use `size="large"` for page-level sections and `size="medium"` for compact lists, drawers, and settings panels.

{{"demo": "AccordionSizes.js", "bg": true}}

## Contained

Use `contained` when each item needs a visible surface.
This is useful inside cards, side panels, and stacked configuration blocks.

{{"demo": "AccordionContained.js", "bg": true}}

## Dividers

Medium uncontained accordions show a divider between the title and subtitle by default.
Use `showDivider` when a large accordion also needs that separation, or set it to `false` to keep compact summaries visually lighter.

{{"demo": "AccordionDividers.js", "bg": true}}

## Summary content

The summary can include icons, custom slots, actions, and an end slot.
Use these extras for short metadata or contextual actions that help users decide whether to open the panel.

{{"demo": "AccordionSummaryContent.js", "bg": true}}

## Disabled

Use the `disabled` prop on the Accordion component to disable interaction and focus.

{{"demo": "DisabledAccordion.js", "bg": true}}

## Controlled Accordion

The Accordion component can be controlled or uncontrolled.

{{"demo": "ControlledAccordions.js", "bg": true}}

:::info

- A component is **controlled** when it's managed by its parent using props.
- A component is **uncontrolled** when it's managed by its own local state.

Learn more about controlled and uncontrolled components in the [React documentation](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components).
:::

## Props

The Open UI Kit Accordion keeps familiar disclosure behavior and adds a small set of product defaults:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | - | Required summary label. |
| `subTitle` | `string` | - | Optional supporting text in the summary row. |
| `titleStartIcon` | `ReactNode` | - | Optional icon rendered before the title. |
| `titleEndIcon` | `ReactNode` | - | Optional icon rendered after the title. |
| `titleSlot` | `ReactNode` | - | Optional inline content rendered after the title. |
| `subTitleStartIcon` | `ReactNode` | - | Optional icon rendered before the subtitle. |
| `subTitleEndIcon` | `ReactNode` | - | Optional icon rendered after the subtitle. |
| `subTitleSlot` | `ReactNode` | - | Optional inline content rendered after the subtitle. |
| `action` | `ReactNode` | - | Optional right-side summary action, such as a link label. |
| `endSlot` | `ReactNode` | - | Optional final summary content after the action. |
| `size` | `'medium' \| 'large'` | `'large'` | Controls summary typography and spacing. |
| `arrowPosition` | `'left' \| 'right'` | `'left'` | Places the expand indicator before or after the content. |
| `contained` | `boolean` | `false` | Renders the item as a bordered surface. |
| `showDivider` | `boolean` | `size === 'medium' && !contained` | Controls the summary divider between title and subtitle. |
| `useDotsStyle` | `boolean` | `false` | Applies a dotted outline to the details content box. |
| `accordionSummaryProps` | `AccordionSummaryProps` | - | Passes props to the internal summary button. |
| `detailsContentBoxProps` | `BoxProps` | - | Passes props to the inner content wrapper. |

## Accessibility

Accordion uses standard disclosure semantics, including keyboard support for Enter and Space.
Add stable `id` and `aria-controls` values through `accordionSummaryProps` when the accordion needs explicit labels.

```tsx
<Accordion
  title="Billing settings"
  subTitle="Payment method and invoice recipients"
  accordionSummaryProps={{
    id: 'billing-settings-header',
    'aria-controls': 'billing-settings-content',
  }}
>
  Billing content
</Accordion>
```

## Performance

The Accordion content is mounted by default even if it's not expanded.
This default behavior has server-side rendering and SEO in mind.

If you render the Accordion Details with a big component tree nested inside, or if you have many Accordions, you may want to change this behavior by setting `unmountOnExit` to `true` inside the `slotProps.transition` prop to improve performance:

```tsx
<Accordion
  title="Audit log"
  slotProps={{ transition: { unmountOnExit: true } }}
/>
```
