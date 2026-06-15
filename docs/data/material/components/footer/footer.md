---
productId: open-ui-kit-core
title: React Footer component
githubLabel: 'component: footer'
githubSource: packages/open-ui-kit/src/components/footer
---

# Footer

<p class="description">Application footer layout for links, legal text, and branding.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Footer is part of the Open UI Kit Core public API.
Use surfaces to group related content and make page hierarchy clear.

Use this page as the implementation entry point, then use Storybook to inspect visual states, prop combinations, and edge cases that are easier to understand interactively.

## Import

```tsx
import { Footer } from '@open-ui-kit/core';
```

## When to use

Use this component when content needs a clear container, disclosure model, or application chrome.

## Anatomy

Surface components combine a container, title or header treatment, body content, and optional action areas.

Keep each part purposeful: the visible label or title should explain the object, the state should reflect real product data, and supporting content should help users decide what to do next.

## Basic example

```tsx
import { Footer } from '@open-ui-kit/core';

export function FooterExample() {
  return (
    <Footer>
      Footer
    </Footer>
  );
}
```

## Storybook scenarios

Storybook is the source of truth for interactive examples, controls, and visual state checks.
Start with the closest story, then adapt the props to match your product flow.

- Default
- Default Copyright
- Without Links

## Behavior notes

- Use borders, elevation, and spacing to clarify hierarchy.
- Avoid stacking multiple framed surfaces inside each other.
- Check how the surface behaves with long titles, actions, and responsive width.

## Props

Footer is exported from `@open-ui-kit/core`.
Use the exported TypeScript props for implementation details and keep local overrides narrow.

| Prop | Type | Description |
| --- | --- | --- |
| `Footer` props | Component-specific props | Controls the supported behavior, slots, state, and styling for Footer. |
| `children` | `React.ReactNode` | Content rendered inside the component when the component supports composition. |
| `className` | `string` | Adds a class to the root slot for product-level styling hooks. |
| `sx` | `SxProps` | Applies local style overrides while still using the active Open UI Kit theme. |

## Accessibility

- Use headings that describe the surface clearly.
- Keep nested interactive controls reachable and visually focused.
- Avoid making large surfaces clickable when they contain multiple actions.

## Usage guidance

- Keep each surface focused on one object, task, or content group.
- Use spacing before adding heavier borders or elevation.
- Reserve stronger surfaces for content that needs separation from the page.
- Do not use surfaces only as decoration.

## Resources

- [Storybook](https://main--68cc22452afe30d90e4ca977.chromatic.com/?path=/docs/components-footer--docs)
- [Source](https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components/footer)
