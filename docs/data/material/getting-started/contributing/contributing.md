---
title: Contributing
---

# Contributing

<p class="description">Help improve Open UI Kit Core with fixes, components, examples, accessibility work, tests, and documentation.</p>

## Before you start

Open UI Kit welcomes focused contributions that make the package easier to use, easier to maintain, or more consistent across products.
For larger changes, open an issue or discussion first so the work can be shaped with maintainers before implementation starts.

## Contribution areas

- **Bug fixes:** Reproduce the issue, patch the behavior, and add coverage where possible.
- **Components:** Follow existing component structure, theming, exports, stories, and tests.
- **Design improvements:** Keep changes grounded in the Open UI Kit theme tokens and interaction states.
- **Documentation:** Add practical examples, setup notes, and migration details where users are likely to need them.
- **Accessibility:** Improve keyboard behavior, ARIA support, focus states, and screen reader output.
- **Developer experience:** Make scripts, builds, tests, and Storybook easier to use.

## Local setup

Clone the repository, install the expected Node version, then install dependencies:

```bash
git clone https://github.com/outshift-open/open-ui-kit.git
cd open-ui-kit
nvm install
yarn install
```

Most package work happens inside `packages/open-ui-kit`.

## Development loop

1. Create a branch from `main`.
2. Make a focused change that follows the existing file and naming patterns.
3. Add or update tests for behavior changes.
4. Update Storybook stories and docs when the public surface changes.
5. Run the relevant checks before opening a pull request.

```bash
yarn build
yarn test
yarn workspace @open-ui-kit/core storybook
```

## Pull requests

Use Conventional Commit style for pull request titles, for example `fix(button): align disabled state`.
Include screenshots for visual changes and explain the product problem behind new APIs.

For support channels and issue reporting details, continue to [Support](/open-ui-kit-core/getting-started/support/).
