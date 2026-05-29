# Usage

<p class="description">Learn the basic setup for rendering Open UI Kit components in a React app.</p>

## Quickstart

Once the package is installed, wrap your app with `ThemeProvider` and import components from `@open-ui-kit/core`.

```tsx
import '@open-ui-kit/core/typography.css';
import { Button, Stack, ThemeProvider, Typography } from '@open-ui-kit/core';

export function App() {
  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 420 }}>
        <Typography variant="h4">Open UI Kit is ready</Typography>
        <Typography color="text.secondary">
          The button below uses the Open UI Kit theme tokens and MUI props.
        </Typography>
        <Button variant="primary">Create project</Button>
      </Stack>
    </ThemeProvider>
  );
}
```

## Working with MUI APIs

Open UI Kit keeps the Material UI styling model available.
Use `sx`, theme overrides, slots, and standard MUI props when a screen needs local control.

```tsx
<Button
  variant="outlined"
  sx={{
    alignSelf: 'flex-start',
    minWidth: 160,
  }}
>
  Review changes
</Button>
```

## Switching themes

Use `useThemeMode` anywhere inside the provider to toggle between the Open UI Kit light and dark themes.

```tsx
import { Button, useThemeMode } from '@open-ui-kit/core';

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeMode();

  return (
    <Button variant="outlined" onClick={toggleTheme}>
      Use {isDarkMode ? 'light' : 'dark'} theme
    </Button>
  );
}
```

## Component docs

The component pages include props, examples, and implementation notes.
Start with [Button](/open-ui-kit-core/react-button/) when you want to verify the theme is connected correctly.
