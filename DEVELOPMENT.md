# 💻 Development

Welcome to Open UI Kit development! This guide will help you set up your local development environment and understand our development workflow.

- [🛠️ Repository Setup](#%EF%B8%8F-repository-setup)
- [📁 Project Structure](#-project-structure)
- [🎨 Style and Linting](#-style-and-linting)
- [👾 Development & 📚 Documentation](#-development-documentation)
- [🗂️ Testing](#%EF%B8%8F-testing)
- [📦 Building and Publishing](#-building-and-publishing)
- [Style Agreements](#style-agreements)

## 🛠️ Repository Setup

Clone, authenticate with npm, and install project dependencies.

### 1. Binary prerequisites

You will need to install the following on your local machine if they are not already installed:

- [Node](https://nodejs.org/en/download/ "Node Downloads")

### 2. Clone repository

```sh
git clone https://github.com/outshift-open/open-ui-kit.git # Clone the repository
cd open-ui-kit # Move into the cloned repository
```

### 3. Install NPM dependencies

```sh
nvm install
yarn install
```

## 📁 Project Structure

This monorepo is organized as follows:

```
open-ui-kit/
├── .github/                    # GitHub templates and workflows
│   ├── ISSUE_TEMPLATE/        # Issue templates (bug reports, feature requests, docs)
│   ├── workflows/             # CI/CD GitHub Actions workflows
│   └── dependabot.yml         # Automated dependency updates
├── .husky/                    # Git hooks for code quality enforcement
├── .vscode/                   # VSCode workspace settings (optional)
├── docs/                      # Additional project documentation
├── packages/
│   └── open-ui-kit/          # 📦 @open-ui-kit/core - Main component library
│       ├── src/              # Source code for components, themes, utilities
│       ├── stories/          # Storybook stories for documentation
│       └── tests/            # Unit and integration tests
├── playground/
│   └── vite-ts/              # 🎮 Development playground with Vite + TypeScript
├── scripts/                   # Build scripts and automation tools
├── package.json              # Root workspace configuration
├── turbo.json                # Turborepo build system configuration
├── yarn.lock                 # Dependency lock file
├── DEVELOPMENT.md            # This file - development guidelines
├── CONTRIBUTING.md           # Contribution guidelines and processes
└── README.md                 # Main project overview and setup
```

### Key Directories

- **`packages/open-ui-kit/`** - The core component library where most development happens
- **`playground/vite-ts/`** - Interactive development environment for testing components
- **`.github/`** - CI/CD workflows, issue templates, and GitHub configuration
- **`scripts/`** - Build and maintenance automation

### Main Packages

This monorepo contains the following main packages:

- **`@open-ui-kit/core`** - The main component library (located in `packages/open-ui-kit/`)
- **`@open-ui-kit/monorepo`** - Root workspace configuration

When developing, you'll primarily work in the `packages/open-ui-kit/` directory where the core library resides.

## 🎨 Style and Linting

This repository follows [Prettier](https://prettier.io "Prettier intro page") styles and [ESlint](<[ESLint](https://eslint.org)> "ESLint intro page") to enforce code linting.
A pre-commit hook will format and lint your code. The CI pipeline will also check your code for style and lint it.

### 📝 VSCode Autoformatting

To enable format-on-save in [VSCode](https://code.visualstudio.com "VSCode intro page"), do the following:

1. Install `Prettier - Code formatter` extension
1. Add a directory at the root of the project named `.vscode/`
1. Inside the `.vscode/` directory, add a `settings.json` file
1. Add the following contents to your `settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

Your editor will now format your code when you save a file.

## 👾 Development & 📚 Documentation

This repository uses [Storybook](https://storybook.js.org/docs/react/writing-stories/introduction "How to Write Stories") for developing and documenting components. See [Documentation](/docs/overview-developer-only-documentation--page) for Storybook maintenance details.

To start up Storybook locally:

```sh
cd open-ui-kit  # Move into the cloned repository
yarn install && yarn run build && yarn run storybook # Install & build deps and start Storybook
```

The project's main branch Storybook documentation is hosted on [our Storybook instance](https://main--68cc22452afe30d90e4ca977.chromatic.com).

## 🗂️ Testing

### Unit and Integration Testing

This repository uses [Jest](https://jestjs.io/docs/en/using-matchers "Jest Matchers") and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro "Testing Library React Intro") for unit and integration tests.

```sh
# Run tests locally with a watcher
yarn run test -- --watch
```

See the [Jest CLI options](https://jestjs.io/docs/en/cli "Jest CLI Options") docs for more information on running tests.

Tests are run as a part of the CI pipeline to ensure code quality and prevent regressions.

## 📦 Building and Publishing

### Local Build

To build the project locally:

```sh
yarn build
```

This will compile TypeScript, generate type definitions, and create the distributable packages.

### Local Package Testing

To test the `@open-ui-kit/core` package locally in another project:

```sh
# In the Open UI Kit repository
yarn build

# Link the package globally
cd packages/open-ui-kit
yarn link

# In your test project
yarn link @open-ui-kit/core
```

### Package Publishing

The package is published to npm as `@open-ui-kit/core`. Publishing is handled automatically through semantic-release, but for manual testing:

```sh
# Build and test the package
yarn build
yarn test

# Check package contents before publishing
cd packages/open-ui-kit
npm pack
```

### Development Workflow

1. **Create a feature branch** from `main`
2. **Make your changes** following our style agreements
3. **Write tests** for your changes
4. **Run tests and linting** to ensure everything passes
5. **Create a pull request** with a clear description of your changes
6. **Wait for review** from maintainers

### Release Process

Releases are handled automatically through semantic-release when changes are merged to the main branch. The version is determined by the commit messages following [Conventional Commits](https://www.conventionalcommits.org/).

## 🤝 Contributing Guidelines

- Follow the existing code style and patterns
- Write comprehensive tests for new features
- Update documentation when adding new components or features
- Use descriptive commit messages following Conventional Commits
- Be respectful and inclusive in all interactions

# Style Agreements

1. Optional React component props should also accept `undefined` as a value.
   This is to support the `exactOptionalPropertyTypes` typescript option.

2. Override MUI component:
   - Create a file like [this](packages/open-ui-kit/src/theme/mui/avatar.ts) inside the `mui` folder in each `theme`(light or dark) and per each component that you want to override;
   - Export this file on the `index.ts` on the `mui` folder;
   - Add the custom override to the theme like [this](https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/theme/light/light-theme.tsx#L146-L149);

   Example of an override component:

   ```tsx
   export const avatarComponent: Pick<OverrideComponent, "MuiAvatar"> = {
     MuiAvatar: {
       styleOverrides: {
         root: {
           backgroundColor: "#E8F1FF",
           color: lightVars.interactivePrimaryDefaultDefault,
           fontWeight: 600,
           fontSize: "16px",
           lineHeight: "133%",
           letterSpacing: "0.15px",
           textAlign: "center",
           verticalAlign: "middle",
           "&:hover": {
             backgroundColor: lightVars.interactivePrimaryWeakHover,
             color: lightVars.controlIconHover,
             cursor: "pointer",
           },
         },
         img: {
           objectFit: "cover",
           width: "100%",
           height: "100%",
           "&:hover": {
             filter: `brightness(0.9) drop-shadow(0 0 4px ${lightVars.interactivePrimaryWeakDisabled})`,
           },
         },
       },
     },
   };
   ```

   and import it like this to the MUI theme:

   ```tsx
   const lightThemeOptions: ThemeOptions = {
       ...
       components: {
           MuiAvatar: { ...avatarComponent.MuiAvatar },
       },
   }
   ```

3. **Creating New Components** - Follow the established file structure pattern:

   When creating a new component, follow the structure used by existing components like `ActivityTimeline`. Each component should have its own directory with organized subfolders:

   ```
   packages/open-ui-kit/src/components/[component-name]/
   ├── components/
   │   ├── [ComponentName].tsx         # Main component implementation
   │   └── [SubComponent].tsx          # Sub-components (if needed)
   ├── types/
   │   ├── [ComponentName].types.ts    # Main component type definitions
   │   └── [SubComponent].types.ts     # Sub-component types (if needed)
   ├── styles/
   │   └── [component-name].styles.ts  # Component-specific styles
   ├── utils/
   │   └── [component-name].utils.ts   # Component-specific utilities
   ├── stories/
   │   └── [ComponentName].stories.tsx # Storybook documentation
   ├── __tests__/
   │   └── [ComponentName].test.tsx    # Unit tests
   └── index.ts                        # Main export file
   ```

   **Required files for a new component:**

   - **`index.ts`** - Export the component and its types
     ```tsx
     export { ComponentName } from './components/ComponentName';
     export type { ComponentNameProps } from './types/ComponentName.types';
     ```

   - **`components/[ComponentName].tsx`** - Main component implementation
     ```tsx
     import React from 'react';
     import { ComponentNameProps } from '../types/ComponentName.types';
     
     export const ComponentName: React.FC<ComponentNameProps> = ({ ...props }) => {
       // Component implementation
     };
     ```

   - **`types/[ComponentName].types.ts`** - Type definitions
     ```tsx
     export interface ComponentNameProps {
       // Component prop types
     }
     ```

   - **`__tests__/[ComponentName].test.tsx`** - Unit tests
     ```tsx
     import { render, screen } from '@testing-library/react';
     import { ComponentName } from '../components/ComponentName';
     
     describe('ComponentName', () => {
       it('renders correctly', () => {
         // Test implementation
       });
     });
     ```

   - **`stories/[ComponentName].stories.tsx`** - Storybook documentation
     ```tsx
     import type { Meta, StoryObj } from '@storybook/react';
     import { ComponentName } from '../components/ComponentName';
     
     const meta: Meta<typeof ComponentName> = {
       title: 'Components/ComponentName',
       component: ComponentName,
     };
     
     export default meta;
     type Story = StoryObj<typeof meta>;
     
     export const Default: Story = {
       args: {
         // Default props
       },
     };
     ```

   **Additional requirements:**
   - Export your component from `packages/open-ui-kit/src/components/index.ts`
   - Follow naming conventions: PascalCase for components, kebab-case for directories
   - Include comprehensive JSDoc comments for props and functionality
   - Organize types in the dedicated `types/` folder
   - Add component-specific styles to the `styles/` folder
   - Add component-specific utilities to the `utils/` folder
   - Organize sub-components within the same `components/` folder
   