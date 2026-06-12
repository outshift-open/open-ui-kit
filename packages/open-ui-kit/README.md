# Open UI Kit Core

A React component library and theme system built on Material UI, with Open UI Kit defaults for product interfaces.

[![npm](https://img.shields.io/badge/npm-package-CB3837?logo=npm)](https://www.npmjs.com/package/@open-ui-kit/core)
[![Storybook](https://img.shields.io/badge/storybook-view%20docs-ff69b4)](https://main--68cc22452afe30d90e4ca977.chromatic.com)
[![License](https://img.shields.io/github/license/outshift-open/open-ui-kit)](../../LICENSE)

## What you get

- **Production-ready components** for application screens, forms, navigation, feedback, data display, and charts.
- **Open UI Kit themes** with light and dark mode support through `ThemeProvider`.
- **Material UI compatibility** for `sx`, slots, theme overrides, and familiar component APIs.
- **TypeScript support** with exported component and theme types.
- **Interactive examples** in Storybook for component states, variants, and composition patterns.

## Installation

Install the package and required Material UI peers:

```bash
npm install @open-ui-kit/core @mui/material @emotion/react @emotion/styled
```

```bash
yarn add @open-ui-kit/core @mui/material @emotion/react @emotion/styled
```

```bash
pnpm add @open-ui-kit/core @mui/material @emotion/react @emotion/styled
```

Required runtime peers:

- `react >=18`
- `react-dom >=18`
- `@mui/material >=7`
- `@emotion/react >=11`
- `@emotion/styled >=11`

Some components need additional peers, such as icons, date pickers, routing, motion, toast, or virtualization packages. Install those only when your app uses the related components.

## Basic usage

Import the typography CSS once near your app root, then wrap the app with `ThemeProvider`.

```tsx
import '@open-ui-kit/core/typography.css';
import { Button, Stack, ThemeProvider, Typography } from '@open-ui-kit/core';

export function App() {
  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 420 }}>
        <Typography variant="h4">Open UI Kit is ready</Typography>
        <Typography color="text.secondary">
          The button below uses Open UI Kit theme tokens and Material UI props.
        </Typography>
        <Button variant="primary">Create project</Button>
      </Stack>
    </ThemeProvider>
  );
}
```

## Theme mode

Use `useThemeMode()` inside `ThemeProvider` to read or change the active light or dark theme.

```tsx
import { Button, ThemeMode, useThemeMode } from '@open-ui-kit/core';

export function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Button variant="outlined" onClick={toggleTheme}>
      Use {mode === ThemeMode.Dark ? 'light' : 'dark'} theme
    </Button>
  );
}
```

Use `defaultMode={ThemeMode.Dark}` on `ThemeProvider` when an app needs to start in dark mode.

## Local development

From the repository root:

```bash
yarn install
yarn build
yarn workspace @open-ui-kit/core storybook
```

Useful package commands:

```bash
yarn workspace @open-ui-kit/core build
yarn workspace @open-ui-kit/core test
yarn workspace @open-ui-kit/core storybook:build
```

## Documentation

- Storybook: https://main--68cc22452afe30d90e4ca977.chromatic.com
- Installation guide: https://github.com/outshift-open/open-ui-kit/blob/main/docs/data/material/getting-started/installation/installation.md
- Usage guide: https://github.com/outshift-open/open-ui-kit/blob/main/docs/data/material/getting-started/usage/usage.md
- Migration notes: https://github.com/outshift-open/open-ui-kit/blob/main/MIGRATION.md
- Contributing: https://github.com/outshift-open/open-ui-kit/blob/main/CONTRIBUTING.md

## License

Open UI Kit Core is licensed under the Apache License 2.0.
