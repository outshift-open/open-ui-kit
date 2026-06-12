---
productId: open-ui-kit-core
title: React Checkbox component
githubLabel: 'component: checkbox'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
githubSource: packages/open-ui-kit/src/components/checkbox
---

# Checkbox

<p class="description">The Open UI Kit Checkbox lets users select one or more options from a set, with token-based colors for unchecked, checked, mixed, disabled, and focus states.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Use checkboxes when users can choose multiple independent values or confirm optional settings.
For a single immediate on/off setting, use a switch instead.
For a mutually exclusive choice, use radio buttons instead.

{{"demo": "CheckboxUsage.js", "bg": true}}

## Import

```tsx
import { Checkbox } from '@open-ui-kit/core';
```

## Labels

Pair every checkbox with visible text when possible.
The examples use form label and group helpers around the Open UI Kit `Checkbox`.

{{"demo": "CheckboxLabels.js", "bg": true}}

## States

Checkbox supports the expected state props: `checked`, `defaultChecked`, `indeterminate`, and `disabled`.
Use the indeterminate state for parent items when only some child options are selected.

{{"demo": "CheckboxStates.js", "bg": true}}

## Controlled

Use `checked` and `onChange` when the selection belongs to application state.

{{"demo": "ControlledCheckbox.js", "bg": true}}

## Groups

Group related checkboxes under a short label so users understand the set they are editing.

{{"demo": "CheckboxGroup.js", "bg": true}}

## Size

Use the underlying `size` prop when a compact row needs a smaller control.

{{"demo": "CheckboxSizes.js", "bg": true}}

## Props

`Checkbox` supports the standard checkbox props.

| Prop | Type | Description |
| --- | --- | --- |
| `checked` | `boolean` | Controls the selected state. |
| `defaultChecked` | `boolean` | Sets the initial selected state for uncontrolled usage. |
| `indeterminate` | `boolean` | Shows the visual mixed state. |
| `disabled` | `boolean` | Prevents interaction and applies disabled styling. |
| `size` | `'small' \| 'medium'` | Changes the rendered control size. |
| `slotProps.input` | `object` | Passes accessibility attributes to the native input. |

## Accessibility

Every checkbox needs an accessible name.
Use a visible label with `FormControlLabel` whenever possible.
When there is no visible label, add `aria-label` or `aria-labelledby` through `slotProps.input`.

```tsx
<Checkbox
  slotProps={{
    input: { 'aria-label': 'Include archived items' },
  }}
/>
```

## Usage guidance

- Use checkboxes for multi-select decisions.
- Keep labels short and action-oriented.
- Use `indeterminate` for parent-child selection summaries.
- Do not use a checkbox for a single immediate setting; use a switch.
- Avoid putting unrelated checkboxes in the same group.
