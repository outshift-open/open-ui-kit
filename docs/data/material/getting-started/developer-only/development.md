---
title: Development
---

# Development

<p class="description">Developer-only notes for working on the Open UI Kit Core package, Storybook, tests, and local builds.</p>

## Repository setup

Use Node through the repository version manager and install dependencies from the workspace root:

```bash
nvm install
yarn install
```

The main package lives in `packages/open-ui-kit`.
Storybook is the primary place to develop and verify component states while the docs site carries the broader product documentation.

## Project structure

```text
open-ui-kit/
├── docs/                    # Documentation website
├── packages/
│   └── open-ui-kit/         # @open-ui-kit/core package
│       ├── src/             # Components, themes, icons, tokens
│       └── .storybook/      # Storybook configuration and overview docs
├── playground/              # Local app playgrounds
├── scripts/                 # Build and maintenance scripts
├── CONTRIBUTING.md
├── DEVELOPMENT.md
└── README.md
```

## Common commands

```bash
# Build the workspace
yarn build

# Run tests
yarn test

# Start Storybook for the core package
yarn workspace @open-ui-kit/core storybook

# Build Storybook
yarn workspace @open-ui-kit/core storybook:build
```

## Component work

New components should follow the existing package shape:

```text
packages/open-ui-kit/src/components/component-name/
├── components/
├── types/
├── styles/
├── utils/
├── stories/
├── __tests__/
└── index.ts
```

Export the component and public types from `index.ts`, add focused stories, and prefer theme tokens over one-off colors.

## Theme overrides

When overriding base component behavior, keep the override close to the active theme and export it through the theme override index.
Use existing override files as the template so light and dark behavior stay consistent.

## Release flow

Releases are handled through the repository automation.
Use Conventional Commits so the release tooling can infer the correct package version and changelog entry.

## Continue reading

- Previous: [Support](/open-ui-kit-core/getting-started/support/)
