---
productId: open-ui-kit-core
title: React BasePage component
githubLabel: 'component: base-page'
githubSource: packages/open-ui-kit/src/components/index.ts
---

# BasePage

<p class="description">Page template with header, breadcrumbs, optional sub-navigation, and content area.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

BasePage is part of the Open UI Kit Core public API.
Use templates for repeatable page structures rather than rebuilding common layout chrome.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { BasePage } from '@open-ui-kit/core';
```

## When to use

Use this template when the page needs a known Open UI Kit product structure with consistent surrounding chrome.

## Anatomy

Templates usually combine page title areas, navigation slots, action regions, content slots, and responsive layout rules.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { BasePage } from '@open-ui-kit/core';

export function BasePageExample() {
  return (
    <BasePage>
      BasePage
    </BasePage>
  );
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Dedicated Storybook coverage is still being expanded for this export.

## Behavior notes

- Start from the closest template story and remove what the product flow does not need.
- Keep actions, breadcrumbs, and side navigation consistent across sibling pages.
- Pass composed content through props rather than forking the template.

## Props

BasePage is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `BasePage` props | Component-specific props | Controls the supported behavior, slots, state, and styling for BasePage. |
| `children` | `React.ReactNode` | Content rendered inside the component when the component supports composition. |
| `className` | `string` | Adds a class to the root slot for product-level styling hooks. |
| `sx` | `SxProps` | Applies local style overrides while still using the active Open UI Kit theme. |

## Accessibility

- Preserve heading hierarchy when composing page content inside the template.
- Make navigation landmarks and page actions easy to reach by keyboard.
- Keep responsive layout changes from hiding required controls.

## Usage guidance

- Use templates for structure, not for product-specific business logic.
- Compose smaller Open UI Kit components inside content regions.
- Keep top-level actions consistent across related pages.
- Avoid copying template internals into product code unless the template is missing a required extension point.

## Resources

- [Storybook](/storybook/?path=/docs/templates-basepage--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/components/index.ts)
