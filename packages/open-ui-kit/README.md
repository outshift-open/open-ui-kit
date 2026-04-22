<!-- To update the table of contents, install globally `doctoc`, and run 'doctoc ./README.md'
DO NOT UPDATE MANUALLY! -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Open UI Kit](#open-ui-kit)
  - [✨ Features](#-features)
  - [🚀 Quick Start](#-quick-start)
  - [🔐 Authentication](#-authentication)
  - [📦 Installation](#-installation)
    - [NPM](#npm)
    - [Yarn](#yarn)
  - [💻 Usage](#-usage)
    - [Basic Setup](#basic-setup)
    - [Using Components](#using-components)
    - [Theme Customization](#theme-customization)
    - [TypeScript Support](#typescript-support)
  - [📚 Available Components](#-available-components)
  - [📖 Documentation](#-documentation)
  - [🧪 Testing](#-testing)
  - [🚢 Releases](#-releases)
    - [Beta Releases](#beta-releases)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<div align="center">

<h1> 🎨 Open UI Kit </h1>

**A comprehensive React component library built on Material-UI for modern applications**

<br />
<br />

[![npm](https://img.shields.io/badge/npm-package-CB3837?logo=npm)](https://www.npmjs.com/package/@open-ui-kit/core)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/storybook-view%20docs-ff69b4)](https://main--68cc22452afe30d90e4ca977.chromatic.com)
[![License](https://img.shields.io/github/license/outshift-open/open-ui-kit)](LICENSE)

</div>

## ✨ Features

- 🎯 **50+ Pre-built Components** - From basic buttons to complex data tables and interactive charts
- 🌓 **Dark/Light Theme Support** - Built-in theme switching with seamless transitions
- 📱 **Responsive Design** - Mobile-first approach with flexible, adaptive layouts
- ♿ **Accessibility First** - WCAG compliant components with proper ARIA attributes
- 🔧 **TypeScript Native** - Full TypeScript support with comprehensive type definitions
- 📊 **Data Visualization** - Rich chart components for analytics and dashboards
- 🎨 **Customizable Theming** - Extend and customize colors, typography, and spacing
- 📚 **Interactive Documentation** - Comprehensive Storybook with live examples

## 🚀 Quick Start

```bash
# Install the package and peer dependencies
npm install @open-ui-kit/core @mui/material @emotion/react @emotion/styled

# Import CSS and start using components
import '@open-ui-kit/core/typography.css';
import { ThemeProvider, Button } from '@open-ui-kit/core';
```

## 🔐 Installation

Open UI Kit is available as an open source package. You can install it directly from npm.

## 📦 Installation

> **Prerequisites**: Node.js 18+ and npm 8+ (or Yarn 1.22+)

### NPM

```bash
npm install @open-ui-kit/core @mui/material @emotion/react @emotion/styled
```

### Yarn

```bash
yarn add @open-ui-kit/core @mui/material @emotion/react @emotion/styled
```

**Required Peer Dependencies:**
- `@mui/material` ^5.0.0 - Core Material-UI components
- `@emotion/react` ^11.0.0 - CSS-in-JS styling engine  
- `@emotion/styled` ^11.0.0 - Styled component utilities
- `react` ^17.0.0 || ^18.0.0
- `react-dom` ^17.0.0 || ^18.0.0

## 💻 Usage

### Basic Setup

Wrap your application with the `ThemeProvider` to enable Open UI Kit theming:

```jsx
import React from 'react';
import { ThemeProvider, useThemeMode } from '@open-ui-kit/core';
import '@open-ui-kit/core/typography.css';

function AppContent() {
  const { isDarkMode, toggleTheme } = useThemeMode();

  return (
    <div className="app">
      <header>
        <button type="button" onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      {/* Your app content goes here */}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
```

### Using Components

Import and use components from the library:

```jsx
import {
  Button,
  Card,
  TextField,
  Badge,
  Avatar,
  Modal,
  Typography
} from '@open-ui-kit/core';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <Card sx={{ p: 3, maxWidth: 400 }}>
      <div style={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar src="/user-avatar.jpg" sx={{ mr: 2 }} />
        <Typography variant="h6">Welcome back!</Typography>
      </div>
      
      <TextField 
        label="Enter your message" 
        variant="outlined" 
        fullWidth 
        sx={{ mb: 2 }}
      />
      
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setOpen(true)}
        sx={{ mr: 1 }}
      >
        Open Modal
      </Button>
      
      <Badge badgeContent={4} color="secondary">
        <Button variant="outlined">Notifications</Button>
      </Badge>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div>Modal content here</div>
      </Modal>
    </Card>
  );
}
```

### Theme Customization

Access theme variables for consistent styling across your application:

```jsx
import { useTheme } from '@open-ui-kit/core';

function StyledComponent() {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.vars.controlBackgroundDefault,
        color: theme.palette.vars.textPrimary,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`
      }}
    >
      <h3 style={{ color: theme.palette.primary.main }}>
        Themed Content
      </h3>
      <p>This component uses theme variables for consistent styling.</p>
    </div>
  );
}
```

### TypeScript Support

The library provides full TypeScript support with augmented Material-UI theme types:

```typescript
import { useTheme, Theme } from '@open-ui-kit/core';

const MyTypedComponent: React.FC = () => {
  const theme: Theme = useTheme();
  
  // Access custom theme variables with full type safety
  const backgroundColor = theme.palette.vars.controlBackgroundDefault;
  const primaryColor = theme.palette.primary.main;
  const spacing = theme.spacing(2);
  
  return (
    <div 
      style={{ 
        backgroundColor, 
        color: primaryColor,
        padding: spacing
      }}
    >
      Fully typed theme access
    </div>
  );
};
```

## 📚 Available Components

The library includes 50+ components organized into the following categories:

**🔧 Layout & Structure**
- `Card`, `Divider`, `Drawer`, `Modal`, `Tabs`, `Accordion`

**📝 Form Controls**
- `Button`, `TextField`, `Checkbox`, `Radio`, `Select`, `Slider`, `Toggle`

**🧭 Navigation**
- `Breadcrumbs`, `Menu`, `Pagination`, `Stepper`, `Header`, `Footer`

**📊 Data Display**
- `Avatar`, `Badge`, `Table`, `List`, `Typography`, `Code Block`

**💬 Feedback & Status**
- `Toast`, `Spinner`, `Loading States`, `Empty State`, `Banner`

**📈 Data Visualization**
- `Bar Chart`, `Line Chart`, `Donut Chart`, `Gauge Chart`, `Chart Widget`

**🔍 Specialized**
- `Search Field`, `Autocomplete Tree`, `Date Time`, `Copy Button`, `Filters`

> **💡 Tip**: All components are fully documented with interactive examples in our [Storybook](https://main--68cc22452afe30d90e4ca977.chromatic.com).

## 📖 Documentation

### Interactive Documentation
We use **Storybook** for comprehensive component documentation with live examples:

```bash
# Run Storybook locally
yarn storybook
```

🌐 **[View Live Documentation](https://main--68cc22452afe30d90e4ca977.chromatic.com)**

### What you'll find in Storybook:
- 📖 **Component API docs** - Props, types, and usage examples
- 🎮 **Interactive playground** - Test components with different configurations
- 🎨 **Design tokens** - Colors, typography, spacing, and theme variables
- 📱 **Responsive examples** - See how components adapt to different screen sizes
- ♿ **Accessibility guidelines** - WCAG compliance information and best practices

## 🧪 Testing

We use **Jest** and **React Testing Library** for comprehensive testing coverage.

### Writing Tests
- Create test files alongside components: `ComponentName.test.tsx`
- Test component functionality, accessibility, and user interactions
- Ensure all custom (non-MUI) components have test coverage

### Running Tests
```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run tests with coverage report
yarn test --coverage
```

### Example Test Structure
```typescript
// src/components/Button/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@open-ui-kit/core';
import { Button } from './Button';

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('Button Component', () => {
  it('renders correctly', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 🚢 Releases

This repository uses [**semantic-release**](https://github.com/semantic-release/semantic-release) for automated version management and package publishing.

### 🎯 Stable Releases

When a pull request is merged into the `main` branch, changes are automatically bundled into a stable release.

- **Format**: `vX.Y.Z` (e.g., `v1.2.3`)
- **Purpose**: Production-ready releases with all new features, improvements, and bug fixes
- **Availability**: Published to npm with `latest` tag

### 🧪 Beta Releases

When a pull request is merged into the `beta` branch, changes are automatically bundled into a beta release.

- **Format**: `vX.Y.Z-beta.N` (e.g., `v1.2.3-beta.4`)
- **Purpose**: Pre-release testing and preview of upcoming features
- **Availability**: Published to npm with `beta` tag
- **⚠️ Note**: Beta releases may be less stable than production releases

### 📋 Release Notes

Each release includes:
- 📝 **Changelog** - Detailed list of changes, additions, and fixes
- 🏷️ **Git Tags** - Semantic versioning tags for easy reference
- 📦 **Package Artifacts** - Built and tested distribution files

### 🆘 Support

Need help? Check out our [Contributing Guide](../../CONTRIBUTING.md#support) for support options.

## 🤝 Contributing

We welcome contributions from the open source community! Please read our [Contributing Guidelines](../../CONTRIBUTING.md) and [Code of Conduct](../../CODE_OF_CONDUCT.md) before getting started.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes and add tests
4. Run tests: `yarn test`
5. Submit a pull request

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](../../LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by the Open UI Kit community**

<br/>

[📚 Documentation](https://main--68cc22452afe30d90e4ca977.chromatic.com) • [🐛 Report Issues](https://github.com/outshift-open/open-ui-kit/issues) • [💬 Discussions](https://github.com/outshift-open/open-ui-kit/discussions)

</div>
