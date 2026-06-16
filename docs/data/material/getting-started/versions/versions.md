# Open UI Kit Core Versions

<p class="description">Understand how Open UI Kit Core versions are released and how to plan upgrades.</p>

## Current package

The docs show the latest published Open UI Kit Core package from npm.
For published package details, use the npm package page or the repository releases.

- Package: `@open-ui-kit/core`
- Current npm version: shown in the docs header and notifications, with a workspace fallback when npm cannot be reached
- Repository: [outshift-open/open-ui-kit](https://github.com/outshift-open/open-ui-kit)

## Versioning strategy

Open UI Kit Core follows [Semantic Versioning 2.0.0](https://semver.org/).
Version numbers use the `major.minor.patch` format.

- **Major releases** can include breaking changes and migration work.
- **Minor releases** add backwards-compatible features and component improvements.
- **Patch releases** include fixes, small refinements, and documentation updates.

## Upgrade guidance

When upgrading:

1. Read the release notes for breaking changes and peer dependency updates.
2. Update `@open-ui-kit/core` together with compatible peer dependency versions.
3. Run your visual checks for shared application surfaces such as navigation, tables, dialogs, and forms.
4. Check any custom `sx` overrides that reach into component internals.

## Pre-release changes

Experimental APIs may change before they become stable.
Treat undocumented internals as implementation details and prefer the documented component props wherever possible.

## Notable migration notes

### Theme mode in `ThemeProvider`

Open UI Kit Core 1.6 moved dark and light mode state into `ThemeProvider`.
Use `useThemeMode()` inside the provider to read or change the active mode.

```tsx
import { ThemeMode, ThemeProvider, useThemeMode } from "@open-ui-kit/core";

function ThemeSelector() {
  const { mode, setTheme } = useThemeMode();

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(mode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark)
      }
    >
      Switch to {mode === ThemeMode.Dark ? "light" : "dark"} mode
    </button>
  );
}

export function App() {
  return (
    <ThemeProvider defaultMode={ThemeMode.Light}>
      <ThemeSelector />
    </ThemeProvider>
  );
}
```

Upgrade checklist:

- Wrap the app, Storybook preview, or local playground with `ThemeProvider`.
- Replace older theme-mode wiring with `useThemeMode()`.
- Use `defaultMode` with `ThemeMode` when you need a specific initial theme.
- Keep `useThemeMode()` calls under the provider.

## Release process

The package uses semantic-release and Conventional Commits to determine release versions.
Stable releases are published to npm with the `latest` tag, while beta releases are published with the `beta` tag for preview testing.

## Continue reading

- Previous: [Theming](/open-ui-kit-core/getting-started/theming/)
- Next: [Contributing](/open-ui-kit-core/getting-started/contributing/)
