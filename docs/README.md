# Open UI Kit Docs

This workspace contains the documentation website for Open UI Kit Core.

## Development

From the repository root, start the docs site with:

```bash
yarn workspace docs dev
```

The site runs on Next.js. If port `3000` is already in use, Next.js will select the next available port.

## Build

From the repository root, create a production build with:

```bash
yarn workspace docs build
```

## Content

Getting started content lives in `docs/data/material/getting-started`.
Routes for those pages live in `docs/pages/open-ui-kit-core/getting-started`.

Component pages are being migrated category by category so the docs match the Open UI Kit package surface.
