# Installation

<p class="description">Install Open UI Kit with its required React styling peer dependencies.</p>

## Package manager

Run one of the following commands from your application:

<codeblock storageKey="package-manager">

```bash npm
npm install @open-ui-kit/core @mui/material @emotion/react @emotion/styled
```

```bash pnpm
pnpm add @open-ui-kit/core @mui/material @emotion/react @emotion/styled
```

```bash yarn
yarn add @open-ui-kit/core @mui/material @emotion/react @emotion/styled
```

</codeblock>

## Peer dependencies

Open UI Kit expects your app to provide React, React DOM, and the styling packages listed below.
Install extra peer dependencies only when the components you use require them, such as date pickers, charts, routing, motion, or toast packages.

```json
{
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18",
    "@mui/material": ">=7",
    "@emotion/react": ">=11",
    "@emotion/styled": ">=11"
  }
}
```

## Add the provider

Wrap your application once with `ThemeProvider`.
It applies the Open UI Kit theme, baseline styles, and the light or dark mode context.

```tsx
import { ThemeProvider } from '@open-ui-kit/core';

export function App() {
  return (
    <ThemeProvider>
      <YourRoutes />
    </ThemeProvider>
  );
}
```

## Fonts and baseline

Import the Open UI Kit typography CSS once near your app root:

```tsx
import '@open-ui-kit/core/typography.css';
```

The provider applies `CssBaseline`, so most apps do not need a separate global reset.

## Next step

After installation, continue with [Usage](/open-ui-kit-core/getting-started/usage/).
