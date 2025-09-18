import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { mockDateDecorator } from "storybook-mock-date-decorator";
import { withScreenshot } from "storycap";
import { ThemeDecorator } from "./decorators";

const comomnTheme = {
  fontBase: "Inter, Sharp Sans, sans-serif",
  fontCode: "monospace",
  brandTitle: "Open UI Kit",
  brandUrl: "https://github.com/outshift-open/open-ui-kit",
};

export const decorators = [ThemeDecorator, withScreenshot, mockDateDecorator];

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: {
        ...comomnTheme,
        ...themes.dark,
        appBg: "#00142B",
        barBg: "#00142B",
      },
      light: {
        ...comomnTheme,
        ...themes.light,
        appBg: "#EFF3FC",
        barBg: "#EFF3FC",
      },
      current: "light",
      stylePreview: true,
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
};

export const tags = ["autodocs"];

export default preview;
