# Theming

<p class="description">Configure Open UI Kit's light and dark themes, read theme state, and provide a custom MUI theme when your product needs one.</p>

## Provider API

Wrap your app with `ThemeProvider` once near the root.
The provider supplies the Open UI Kit MUI theme, typography styles, and theme mode state to every component below it.

```tsx
import '@open-ui-kit/core/typography.css';
import { ThemeProvider } from '@open-ui-kit/core';

export function App() {
  return <ThemeProvider>{/* your app */}</ThemeProvider>;
}
```

| Prop | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| `children` | `React.ReactNode` | - | The React tree that receives the Open UI Kit theme. |
| `defaultMode` | `ThemeMode` | `ThemeMode.Light` | The initial built-in theme mode. |
| `customTheme` | `Theme` | `undefined` | A fully custom MUI theme. It takes precedence over the built-in light and dark theme objects. |

## Built-in themes

Use `ThemeMode.Light` or `ThemeMode.Dark` when you want the app to start with one of the built-in themes.

```tsx
import { ThemeMode, ThemeProvider } from '@open-ui-kit/core';

export function App() {
  return (
    <ThemeProvider defaultMode={ThemeMode.Dark}>
      {/* your app */}
    </ThemeProvider>
  );
}
```

## Changing theme mode

Use `useThemeMode` inside `ThemeProvider` to read and update the active mode.
It returns `mode`, `setMode`, and `toggleTheme`.

```tsx
import { Button, ThemeMode, useThemeMode } from '@open-ui-kit/core';

export function ThemeToggle() {
  const { mode, setMode, toggleTheme } = useThemeMode();

  return (
    <>
      <Button variant="outlined" onClick={toggleTheme}>
        Use {mode === ThemeMode.Dark ? 'light' : 'dark'} theme
      </Button>
      <Button variant="text" onClick={() => setMode(ThemeMode.Light)}>
        Reset to light
      </Button>
    </>
  );
}
```

## Reading theme tokens

Open UI Kit components use semantic tokens from `theme.palette.vars`.
Prefer those tokens over hard-coded colors when styling local layouts with `sx`.

```tsx
import { Box, Typography, useTheme } from '@open-ui-kit/core';

export function TokenExample() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.vars.baseBackgroundStrong,
        color: theme.palette.vars.baseTextDefault,
        borderColor: theme.palette.vars.baseBorderMedium,
        borderStyle: 'solid',
        borderWidth: 1,
        p: 2,
      }}
    >
      <Typography variant="body1">This surface follows the active theme.</Typography>
    </Box>
  );
}
```

## Custom themes

Pass `customTheme` when your app needs a product-specific MUI theme.
Open UI Kit components expect `theme.palette.vars` to include the full `VarsType` shape, so use `lightVars` or `darkVars` as a starting point and override the values you need.

The source files are useful references when you want to see every token or compare against the built-in themes:

- [`VarsType`](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/types/vars.ts)
- [MUI theme type augmentation](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/types/theme.ts)
- [light theme](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/theme/light/light-theme.tsx)
- [dark theme](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/theme/dark/dark-theme.tsx)

```tsx
import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { ThemeProvider, lightVars } from '@open-ui-kit/core';
import type { VarsType } from '@open-ui-kit/core';

const productVars: VarsType = {
  ...lightVars,
  baseBackgroundStrong: '#ffffff',
  baseTextDefault: '#101828',
};

const customTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    vars: productVars,
  },
});

export function App() {
  return <ThemeProvider customTheme={customTheme}>{/* your app */}</ThemeProvider>;
}
```

When `customTheme` is provided, it is the theme object passed to MUI.
The `useThemeMode` hook still manages mode state for your app controls, but `customTheme` controls the actual rendered tokens until you replace or update that custom theme object.

## Custom theme template

Use this template when you want to create a reusable theme file in your app.
It follows the same two-step shape as the built-in light and dark theme files: first create the base theme from palette, typography, and mixins, then create the final theme with shadows and component overrides.

```tsx
// custom-theme.ts
import {
  createTheme,
  type PaletteOptions,
  type Theme,
  type ThemeOptions,
} from '@mui/material/styles';
import { darkVars, lightVars } from '@open-ui-kit/core';
import type { VarsType } from '@open-ui-kit/core';

const productVars: VarsType = {
  ...lightVars,
  baseBackgroundStrong: '#ffffff',
  baseTextDefault: '#101828',
  brandBackgroundPrimaryDefault: '#0b5cab',
  brandTextPrimary: '#0b5cab',
};

const palette: PaletteOptions = {
  mode: 'light',
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
          textTransform: 'none',
        },
      },
    },
  },
};

export const customTheme: Theme = createTheme(baseTheme, themeOptions);

export const customDarkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    vars: {
      ...darkVars,
      brandBackgroundPrimaryDefault: '#64b5f6',
      brandTextPrimary: '#90caf9',
    },
  },
});
```

Then pass the theme into `ThemeProvider`.

```tsx
import { ThemeProvider } from '@open-ui-kit/core';
import { customTheme } from './custom-theme';

export function App() {
  return <ThemeProvider customTheme={customTheme}>{/* your app */}</ThemeProvider>;
}
```

## TypeScript types

Import `VarsType` from Open UI Kit when you want TypeScript to validate the complete `theme.palette.vars` token object.
Import `Theme` from MUI when you want to annotate a custom theme passed to `ThemeProvider`.
You can also import `ThemeProviderProps` from Open UI Kit when composing wrapper components around the provider.

```tsx
import type { Theme } from '@mui/material/styles';
import type { ThemeProviderProps, VarsType } from '@open-ui-kit/core';

type ProductTheme = Theme;
type ProductVars = VarsType;

type AppThemeProviderProps = Pick<
  ThemeProviderProps,
  'children' | 'defaultMode' | 'customTheme'
>;
```

## Choosing the right customization

Use `defaultMode` for a light or dark starting point.
Use `useThemeMode` for app-level light and dark controls.
Use `sx` for local component layout and one-off styling.
Use `customTheme` when the whole product needs different semantic tokens, palette values, typography, or component defaults.

## Continue reading

- Previous: [Usage](/open-ui-kit-core/getting-started/usage/)
- Next: [Versions](/open-ui-kit-core/getting-started/versions/)
