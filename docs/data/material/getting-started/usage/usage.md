# Usage

<p class="description">Learn the basic setup for rendering Open UI Kit components in a React app.</p>

## Quickstart

Once the package is installed, wrap your app with `ThemeProvider` and import components from `@open-ui-kit/core`.

```tsx
import "@open-ui-kit/core/typography.css";
import { Button, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export function App() {
  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 420 }}>
        <Typography variant="h4">Open UI Kit is ready</Typography>
        <Typography color="text.secondary">
          The button below uses the Open UI Kit theme tokens and component
          props.
        </Typography>
        <Button variant="primary">Create project</Button>
      </Stack>
    </ThemeProvider>
  );
}
```

## Customizing components

Open UI Kit keeps component-level customization close to the code.
Use `sx`, theme overrides, slots, and component props when a screen needs local control.

```tsx
<Button
  variant="outlined"
  sx={{
    alignSelf: "flex-start",
    minWidth: 160,
  }}
>
  Review changes
</Button>
```

## Switching themes

Use `useThemeMode` anywhere inside the provider to switch between built-in themes.

```tsx
import { Button, ThemeMode, useThemeMode } from "@open-ui-kit/core";

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
```

## Component docs

The component pages include props, examples, and implementation notes.
Start with [Button](/open-ui-kit-core/react-button/) when you want to verify the theme is connected correctly.

## Continue reading

- Previous: [Installation](/open-ui-kit-core/getting-started/installation/)
- Next: [Theming](/open-ui-kit-core/getting-started/theming/)
