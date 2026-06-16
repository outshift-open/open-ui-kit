# Theming

<p class="description">Configure Open UI Kit's built-in themes, read theme state, and provide a custom MUI theme when your product needs one.</p>

## Provider API

Wrap your app with `ThemeProvider` once near the root.
The provider supplies the Open UI Kit MUI theme, typography styles, and theme mode state to every component below it.

```tsx
import "@open-ui-kit/core/typography.css";
import { ThemeProvider } from "@open-ui-kit/core";

export function App() {
  return <ThemeProvider>{/* your app */}</ThemeProvider>;
}
```

| Prop          | Type              | Default           | Description                                                                                         |
| :------------ | :---------------- | :---------------- | :-------------------------------------------------------------------------------------------------- |
| `children`    | `React.ReactNode` | -                 | The React tree that receives the Open UI Kit theme.                                                 |
| `defaultMode` | `ThemeMode`       | `ThemeMode.Light` | The initial built-in theme. Use `ThemeMode.Light`, `ThemeMode.Dark`, or `ThemeMode.IoC`.            |
| `customTheme` | `Theme`           | `undefined`       | A fully custom MUI theme. It takes precedence over the built-in light, dark, and IoC theme objects. |

## Built-in themes

Open UI Kit ships three built-in themes: `ThemeMode.Light`, `ThemeMode.Dark`, and `ThemeMode.IoC`.

```tsx
import { ThemeMode, ThemeProvider } from "@open-ui-kit/core";

export function App() {
  return (
    <ThemeProvider defaultMode={ThemeMode.IoC}>{/* your app */}</ThemeProvider>
  );
}
```

## Changing themes

Use `useThemeMode` inside `ThemeProvider` to read and update the active theme.
It returns `mode`, `setMode`, and `setTheme`.
Prefer `setTheme` in app controls because it names the intent clearly.

```tsx
import { Button, Stack, ThemeMode, useThemeMode } from "@open-ui-kit/core";

export function ThemeSelector() {
  const { mode, setTheme } = useThemeMode();

  return (
    <Stack direction="row" spacing={1}>
      <Button
        variant={mode === ThemeMode.Light ? "primary" : "outlined"}
        onClick={() => setTheme(ThemeMode.Light)}
      >
        Light
      </Button>
      <Button
        variant={mode === ThemeMode.Dark ? "primary" : "outlined"}
        onClick={() => setTheme(ThemeMode.Dark)}
      >
        Dark
      </Button>
      <Button
        variant={mode === ThemeMode.IoC ? "primary" : "outlined"}
        onClick={() => setTheme(ThemeMode.IoC)}
      >
        IoC
      </Button>
    </Stack>
  );
}
```

## Reading theme tokens

Open UI Kit components use semantic tokens from `theme.palette.vars`.
Prefer those tokens over hard-coded colors when styling local layouts with `sx`.

```tsx
import { Box, Typography, useTheme } from "@open-ui-kit/core";

export function TokenExample() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.vars.baseBackgroundStrong,
        color: theme.palette.vars.baseTextDefault,
        borderColor: theme.palette.vars.baseBorderMedium,
        borderStyle: "solid",
        borderWidth: 1,
        p: 2,
      }}
    >
      <Typography variant="body1">
        This surface follows the active theme.
      </Typography>
    </Box>
  );
}
```

## Custom themes

Pass `customTheme` when your app needs a product-specific MUI theme.
Open UI Kit components expect `theme.palette.vars` to include the full `VarsType` shape, so use `lightVars`, `darkVars`, or `iocVars` as a starting point and override the values you need.

The source files are useful references when you want to see every token or compare against the built-in themes:

- [`VarsType`](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/types/vars.ts)
- [MUI theme type augmentation](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/types/theme.ts)
- [light theme](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/theme/light/light-theme.tsx)
- [dark theme](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/theme/dark/dark-theme.tsx)
- [IoC theme](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/theme/ioc/ioc-theme.tsx)
- [IoC vars](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/theme/ioc/ioc-vars.ts)
- [IoC palette and effects](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/theme/ioc/ioc-color-palette.ts)

The built-in vars and themes are also exported for advanced usage.

```tsx
import {
  darkVars,
  iocGradients,
  iocGlows,
  iocShape,
  iocTheme,
  iocVars,
  lightVars,
} from "@open-ui-kit/core";
```

IoC-specific effects such as gradients, glows, and shape constants are exported from the IoC palette files instead of being added to `VarsType`.
Use them when you are building IoC-specific product surfaces, while keeping reusable Open UI Kit components styled from `theme.palette.vars`.

```tsx
import { Box, iocGlows, iocGradients, iocShape } from "@open-ui-kit/core";

export function IocHeroSurface() {
  return (
    <Box
      sx={{
        background: iocGradients.brand,
        borderRadius: iocShape.borderRadiusLg,
        boxShadow: iocGlows.primary,
      }}
    />
  );
}
```

```tsx
import { createTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import { ThemeProvider, lightVars } from "@open-ui-kit/core";
import type { VarsType } from "@open-ui-kit/core";

const productVars: VarsType = {
  ...lightVars,
  baseBackgroundStrong: "#ffffff",
  baseTextDefault: "#101828",
};

const customTheme: Theme = createTheme({
  palette: {
    mode: "light",
    vars: productVars,
  },
});

export function App() {
  return (
    <ThemeProvider customTheme={customTheme}>{/* your app */}</ThemeProvider>
  );
}
```

When `customTheme` is provided, it is the theme object passed to MUI.
The `useThemeMode` hook still manages mode state for your app controls, but `customTheme` controls the actual rendered tokens until you replace or update that custom theme object.

## Custom theme template

Use this template when you want to create a reusable theme file in your app.
It follows the same two-step shape as the built-in themes: first create the base theme from palette, typography, and mixins, then create the final theme with shadows and component overrides.

```tsx
// custom-theme.ts
import {
  createTheme,
  type PaletteOptions,
  type Theme,
  type ThemeOptions,
} from "@mui/material/styles";
import { lightVars } from "@open-ui-kit/core";
import type { VarsType } from "@open-ui-kit/core";

const productVars: VarsType = {
  ...lightVars,
  baseBackgroundStrong: "#ffffff",
  baseTextDefault: "#101828",
  brandBackgroundPrimaryDefault: "#0b5cab",
  brandTextPrimary: "#0b5cab",
};

const palette: PaletteOptions = {
  mode: "light",
  vars: productVars,
  background: {
    default: productVars.baseBackgroundWeak,
    paper: productVars.baseBackgroundStrong,
  },
  text: {
    primary: productVars.baseTextDefault,
    secondary: productVars.baseTextMedium,
    disabled: productVars.baseTextDisabled,
  },
};

const baseTheme: Theme = createTheme({
  palette,
});

const themeOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: productVars.baseBackgroundWeak,
          color: productVars.baseTextDefault,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
};

export const customTheme: Theme = createTheme(baseTheme, themeOptions);
```

Then pass the theme into `ThemeProvider`.

```tsx
import { ThemeProvider } from "@open-ui-kit/core";
import { customTheme } from "./custom-theme";

export function App() {
  return (
    <ThemeProvider customTheme={customTheme}>{/* your app */}</ThemeProvider>
  );
}
```

## TypeScript types

Import `VarsType` from Open UI Kit when you want TypeScript to validate the complete `theme.palette.vars` token object.
Import `Theme` from MUI when you want to annotate a custom theme passed to `ThemeProvider`.
You can also import `ThemeProviderProps` from Open UI Kit when composing wrapper components around the provider.

```tsx
import type { Theme } from "@mui/material/styles";
import type { ThemeProviderProps, VarsType } from "@open-ui-kit/core";
import { ThemeMode } from "@open-ui-kit/core";

type ProductTheme = Theme;
type ProductVars = VarsType;

type AppThemeProviderProps = Pick<
  ThemeProviderProps,
  "children" | "defaultMode" | "customTheme"
>;

const defaultMode = ThemeMode.IoC;
```

## Choosing the right customization

Use `defaultMode` for a built-in starting theme.
Use `useThemeMode` for app-level theme controls.
Use `sx` for local component layout and one-off styling.
Use `customTheme` when the whole product needs different semantic tokens, palette values, typography, or component defaults.

## Continue reading

- Previous: [Usage](/open-ui-kit-core/getting-started/usage/)
- Next: [Versions](/open-ui-kit-core/getting-started/versions/)
