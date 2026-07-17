---
productId: open-ui-kit-core
title: React Table component
githubLabel: 'component: table'
githubSource: packages/open-ui-kit/src/components/table
---

# Table

<p class="description">Tabular data display with product-ready table patterns.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Table is part of the Open UI Kit Core public API.
Use it to make status, metadata, repeated content, or supporting information easier to scan.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Table } from '@open-ui-kit/core';
```

## When to use

Use Table when users need to compare rows of structured data, sort or select items, and scan repeated fields.

## Anatomy

A table includes columns, rows, header cells, body cells, optional title, selection state, pagination, and actions.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { Table } from '@open-ui-kit/core';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'owner', header: 'Owner' },
  { accessorKey: 'status', header: 'Status' },
];

const rows = [
  { name: 'Production API', owner: 'Platform', status: 'Healthy' },
  { name: 'Billing worker', owner: 'Finance', status: 'Needs review' },
];

export function TableExample() {
  return <Table columns={columns} data={rows} />;
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Default
- Loading
- Compact
- Empty
- Nested Rows
- Row Actions
- Row Actions With Link
- Column Pinning
- Reload Action
- Title Variant
- Custom Toolbar Action
- Path Display Cells
- Row Link
- Clickable Rows

## Behavior notes

- Keep values and labels stable so repeated content is easy to compare.
- Handle long content, empty content, and loading content before shipping a dense view.
- Choose the smallest visual treatment that still communicates the state.

## Props

Table is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `Table` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Table. |
| `children` | `React.ReactNode` | Content rendered inside the component when the component supports composition. |
| `className` | `string` | Adds a class to the root slot for product-level styling hooks. |
| `sx` | `SxProps` | Applies local style overrides while still using the active Open UI Kit theme. |

## Accessibility

- Pair visual status with readable text when the meaning is not obvious.
- Keep semantic structure intact for lists, tables, headings, and descriptions.
- Check contrast for low-emphasis labels and status colors in both themes.

## Usage guidance

- Pair values with labels when the meaning is not self-evident.
- Use tooltip or overflow behavior only when truncation is unavoidable.
- Keep repeated rows visually consistent.
- Avoid using decorative emphasis for data that users need to compare precisely.

## Resources

- [Storybook](/storybook/?path=/docs/components-table--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components/table)
