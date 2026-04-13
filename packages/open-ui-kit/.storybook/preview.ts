import "./css/typography.css";

import type { Preview } from "@storybook/react-vite";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { mockDateDecorator } from "storybook-mock-date-decorator";
import { withScreenshot } from "storycap";
import { darkTheme } from "../src/theme/dark/dark-theme";
import { lightTheme } from "../src/theme/light/light-theme";

const muiThemeDecorator = withThemeFromJSXProvider({
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
  defaultTheme: "light",
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
});

export const decorators = [
  muiThemeDecorator,
  withScreenshot,
  mockDateDecorator,
];

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: {
          name: "Dark",
          value: "#00142B",
        },
        light: {
          name: "Light",
          value: "#EFF3FC",
        },
        extra: {
          name: "Extra",
          value: "red",
        },
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    screenshot: {
      fullPage: false,
      viewport: {
        width: 1600,
        height: 900,
        deviceScaleFactor: 1,
      },
    },
    docs: {
      source: {
        type: "dynamic",
        excludeDecorators: true,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Overview",
          ["Introduction", "*", "Developer Only"],
          "Foundations",
          ["Icons", ["Icon Library"]],
          "Templates",
          "Components",
          "Charts",
          "DEV",
          ["README", "*"],
        ],
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "light" },
    theme: "light",
  },
};

export const tags = ["autodocs"];

export default preview;
