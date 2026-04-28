# Migration Guide

This guide helps you migrate between major versions of Open UI Kit.

## Overview

Open UI Kit follows [Semantic Versioning](https://semver.org/):
- **Major versions** (1.0.0 → 2.0.0) - Breaking changes
- **Minor versions** (1.0.0 → 1.1.0) - New features (backward compatible)
- **Patch versions** (1.0.0 → 1.0.1) - Bug fixes (backward compatible)

## Current Version: 1.5.0

Open UI Kit is currently in its initial major version (1.x). This migration guide will be updated as new major versions are released.

**Current stable version**: Check the [latest release](https://github.com/outshift-open/open-ui-kit/releases) for the most up-to-date version information.

## 1.5 → 1.6 (Breaking changes within 1.x)

While Open UI Kit follows Semantic Versioning, some changes may still be breaking within `1.x` while the library is evolving. This section documents notable migrations you may need when upgrading between minor/patch versions.

### Theme mode (dark/light) switching moved into `ThemeProvider`

**What changed**

- Dark mode state is now owned by Open UI Kit’s `ThemeProvider`.
- Consumers should use the exported `useThemeMode()` hook to read/control theme mode:
  - `isDarkMode`
  - `setIsDarkMode`
  - `toggleTheme`
- The provider supports `defaultDarkMode?: boolean` to seed initial mode.

**Why this is a breaking change**

- If your app previously wired its own dark-mode state (or relied on older Open UI Kit theme switching behavior), you now need to:
  - Ensure your React tree is wrapped with `ThemeProvider`.
  - Replace any previous theme-mode toggling integration with `useThemeMode()`.

**New usage (recommended)**

```tsx
import React from "react";
import { ThemeProvider, useThemeMode } from "@open-ui-kit/core";
import "@open-ui-kit/core/typography.css";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeMode();

  return (
    <button type="button" onClick={toggleTheme}>
      Switch to {isDarkMode ? "Light" : "Dark"} mode
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultDarkMode={false}>
      <ThemeToggle />
      {/* rest of your app */}
    </ThemeProvider>
  );
}
```

**If you need explicit control (instead of toggle)**

```tsx
import React from "react";
import { useThemeMode } from "@open-ui-kit/core";

export function ThemeModeSelect() {
  const { isDarkMode, setIsDarkMode } = useThemeMode();

  return (
    <div>
      <button type="button" disabled={!isDarkMode} onClick={() => setIsDarkMode(true)}>
        Dark
      </button>
      <button type="button" disabled={isDarkMode} onClick={() => setIsDarkMode(false)}>
        Light
      </button>
    </div>
  );
}
```

**Common upgrade checklist**

- Wrap your app (or Storybook preview/root) with `ThemeProvider`.
- Replace old theme-mode state/hooks with `useThemeMode()` usage.
- If you need an initial dark mode, pass `defaultDarkMode` to `ThemeProvider`.
- Ensure any component calling `useThemeMode()` is rendered *under* `ThemeProvider` (otherwise it will throw).

## Future Migration Planning

When major versions are released, this guide will include:

### What to Expect in Major Releases

- **Component API Changes** - Modified prop names or types
- **Theme Structure Updates** - Changes to design tokens or theme format
- **Peer Dependency Updates** - Material-UI, React, or other dependency versions
- **Breaking Changes** - Removed deprecated features
- **New Requirements** - Updated Node.js, TypeScript, or browser support

### Migration Process We'll Provide

1. **Detailed Changelog** - All breaking changes documented
2. **Codemod Scripts** - Automated migration tools where possible
3. **Step-by-Step Guide** - Manual migration instructions
4. **Example Projects** - Before/after code examples
5. **Support Period** - How long previous versions will be supported

## Getting Migration Help

When migration guides are needed:

- 📖 **Documentation** - Check this guide and the changelog
- 💬 **GitHub Discussions** - Ask questions in the community
- 🐛 **Issues** - Report migration problems
- 🆘 **Support** - Get help from maintainers

## Beta Testing

To help ensure smooth migrations:

- 🧪 **Beta Releases** - Test pre-release versions
- 📝 **Feedback** - Share migration experience
- 🔧 **Bug Reports** - Report migration issues early

## Staying Updated

- ⭐ **Star the Repository** - Get notified of new releases
- 👀 **Watch Releases** - Subscribe to release notifications
- 📰 **Follow Discussions** - Stay informed about upcoming changes

---

## Version History

### v1.x.x (Current)
- Initial stable release
- 50+ components with full TypeScript support
- Material-UI v5 foundation
- React 17+ support

---

*This guide will be expanded as the project evolves and new major versions are released.*