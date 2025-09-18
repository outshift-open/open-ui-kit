# 💻 Development

Welcome to Open UI Kit development! This guide will help you set up your local development environment and understand our development workflow.

- [🛠️ Repository Setup](#%EF%B8%8F-repository-setup)
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

## 📦 Package Structure

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

The project's main branch Storybook documentation is hosted on [our Storybook instance](https://main--67e2c28f188630b706cee923.chromatic.com).

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
   - Create a file like [this](packages/open-ui-kit/src/theme/light/mui/avatar.ts) inside the `mui` folder in each `theme`(light or dark) and per each component that you want to override;
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
