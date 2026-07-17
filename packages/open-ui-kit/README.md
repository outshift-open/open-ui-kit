# Open UI Kit Core

A React component library and theme system built on Material UI, with Open UI Kit defaults for product interfaces.

[![npm](https://img.shields.io/badge/npm-package-CB3837?logo=npm)](https://www.npmjs.com/package/@open-ui-kit/core)
[![Storybook](https://img.shields.io/badge/storybook-view%20docs-ff69b4)](https://open-ui-kit.outshift.ai/storybook/)
[![License](https://img.shields.io/github/license/outshift-open/open-ui-kit)](../../LICENSE)

## What you get

- **Production-ready components** for application screens, forms, navigation, feedback, data display, and charts.
- **Open UI Kit light/dark and IoC themes** through `ThemeProvider`.
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
import "@open-ui-kit/core/typography.css";
import { Button, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

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

Use `useThemeMode()` inside `ThemeProvider` to read or change the active built-in theme.
Open UI Kit ships `ThemeMode.Light`, `ThemeMode.Dark`, and `ThemeMode.IoC`.

```tsx
import {
  Button,
  ThemeMode,
  ThemeProvider,
  useThemeMode,
} from "@open-ui-kit/core";
import type { ReactNode } from "react";

export function ThemeSelector() {
  const { mode, setTheme } = useThemeMode();

  return (
    <Button
      variant="outlined"
      onClick={() =>
        setTheme(mode === ThemeMode.IoC ? ThemeMode.Light : ThemeMode.IoC)
      }
    >
      Use {mode === ThemeMode.IoC ? "light" : "IoC"} theme
    </Button>
  );
}

export function IocApp({ children }: { children: ReactNode }) {
  return <ThemeProvider defaultMode={ThemeMode.IoC}>{children}</ThemeProvider>;
}
```

Use `defaultMode={ThemeMode.Dark}` on `ThemeProvider` when an app needs to start in dark mode.
Use `defaultMode={ThemeMode.IoC}` when an app should start with the IoC theme.

IoC palette helpers such as `iocGradients`, `iocGlows`, and `iocShape` are exported for IoC-specific product surfaces.
Reusable Open UI Kit components still read semantic colors from `theme.palette.vars`.

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

- Storybook: https://open-ui-kit.outshift.ai/storybook/
- Installation guide: https://github.com/outshift-open/open-ui-kit/blob/main/docs/data/material/getting-started/installation/installation.md
- Usage guide: https://github.com/outshift-open/open-ui-kit/blob/main/docs/data/material/getting-started/usage/usage.md
- Theming guide: https://github.com/outshift-open/open-ui-kit/blob/main/docs/data/material/getting-started/theming/theming.md
- Migration notes: https://github.com/outshift-open/open-ui-kit/blob/main/MIGRATION.md
- Contributing: https://github.com/outshift-open/open-ui-kit/blob/main/CONTRIBUTING.md

## License

Open UI Kit Core is licensed under the Apache License 2.0.
