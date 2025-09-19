# Contributing 🙌

Want to contribute to Open UI Kit? Thanks! Here's what you need to know.

We welcome contributions from the open source community and appreciate your interest in making Open UI Kit better for everyone.

## Types of Contributions

We welcome many types of contributions, including:

- 🐛 **Bug fixes** - Help us squash those pesky bugs
- ✨ **New components** - Add new UI components to the library
- 🎨 **Design improvements** - Enhance existing component designs
- 📚 **Documentation** - Improve guides, examples, and API docs
- 🧪 **Testing** - Add or improve test coverage
- ♿ **Accessibility** - Improve WCAG compliance and screen reader support
- 🔧 **Developer experience** - Improve build tools, scripts, and workflows
- 🌐 **Internationalization** - Add support for more languages

## Prerequisites

To make contributions to this project, the following system dependencies must be available on the machine used for contributions:

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Git](https://git-scm.com/)

## Downloading

Before making any changes, the codebase must be downloaded locally. Follow the steps below to download this project:

```bash
# Navigate the shell to the preferred destination folder for the download.
git clone https://github.com/outshift-open/open-ui-kit.git

# Use your local navigation command (`cd` on Unix-based operating systems) to navigate to the newly downloaded folder.
cd open-ui-kit
```

## Environment

After downloading the project, initialization of the environment is needed. Use the `nvm` command to install the correct version of `node` and `npm` for this project using the following command example:

```bash
nvm install
```

This should install the current version of node (if not already installed) to the designated version stored within `./.nvmrc` and set it within the current terminal environment.

## Installation

After setting up the environment, the following command can be used to install all dependencies for this project:

```bash
yarn install
```

After installation, be sure to validate that a `./node_modules` folder was created, and that there are no errors in the terminal.

_**Note**: In some cases, the connection while downloading can halt due to a networking error. Be sure to fully clean the `./node_modules` folder under these conditions and try again._

## Storybook

[Storybook](https://storybook.js.org/) is used as the documentation tool for this project. To build and view our documentation tool (in watch mode), please follow the steps below:

- `yarn run build`
- `yarn run storybook`

## Working with the Package

This is a monorepo that contains the `@open-ui-kit/core` package. When contributing:

- **Main package location**: `packages/open-ui-kit/` contains the core component library
- **Package name**: The published package is `@open-ui-kit/core` on npm
- **Development**: Most development work happens in the `packages/open-ui-kit/` directory
- **Testing locally**: Use `yarn link` to test your changes in other projects

### Building the Package

```bash
# Build all packages
yarn build

# Build and test the core package specifically
cd packages/open-ui-kit
yarn build
yarn test
```

## Requirements

When making changes to this project, the following requirements within this section must be met.

### Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

### Development Workflow

1. **Fork the repository** and create a feature branch from `main`
2. **Make your changes** following our coding standards
3. **Add tests** for any new functionality
4. **Run the test suite** to ensure everything passes
5. **Update documentation** if needed
6. **Submit a pull request** with a clear description

### Code Quality Standards

- **Follow existing code style** and patterns
- **Write comprehensive tests** for new features
- **Ensure accessibility** compliance (WCAG 2.1 AA)
- **Add TypeScript types** for all new code
- **Update Storybook stories** for component changes

### Confirmation with Maintainers

Before starting work on a significant feature or change, please open an issue or start a discussion to coordinate with the maintainers. This helps ensure your contribution aligns with the project's direction and prevents duplicate work.

For minor bug fixes and documentation improvements, feel free to submit a pull request directly.

### Pull Request Titles

This project requires a specific format when setting the title of a Pull Request. See the following list of requirements for Pull Request titles:

- They must follow [the conventional commit conventions](https://www.conventionalcommits.org/en/v1.0.0/)
- When including a scope (e.g., `type(scope): message`), it must exist within this project's modules.
- Include a `!` character after the scope parenthesis if the Pull Request includes a breaking change (e.g., `type(scope)!: message`).

After all of these requirements are met, the Pull Request should pass the respective step in our automation testing.

## Support

This section includes all active support channels for this project.

### Getting Help

If you need help or have questions:

- **General Questions**: [GitHub Discussions](https://github.com/outshift-open/open-ui-kit/discussions)
- **Bug Reports**: [GitHub Issues](https://github.com/outshift-open/open-ui-kit/issues)

### Reporting Issues

When submitting a new issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use the issue templates** provided
3. **Include reproduction steps** for bugs
4. **Provide environment details** (Node.js version, browser, OS)
5. **Add screenshots or recordings** if applicable

### Feature Requests

For new feature requests:

1. **Start a discussion** in GitHub Discussions
2. **Explain the use case** and why it would be valuable
3. **Provide examples** of how you envision it working
4. **Be open to feedback** and alternative approaches

## Recognition

We value all contributions to Open UI Kit! Contributors will be:

- 🏆 **Listed in our README** with the contrib.rocks widget
- 📝 **Mentioned in release notes** for significant contributions
- 🎉 **Celebrated in our community** discussions and social media
- 🌟 **Given credit** in component documentation for new features

Thank you for helping make Open UI Kit better for everyone! 🚀
