import "./css/typography.css";
import "./css/preview.css";

import React from "react";
import type { Decorator, Preview } from "@storybook/react-vite";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { create } from "storybook/theming/create";
import { mockDateDecorator } from "./mock-date-decorator";
import { withScreenshot } from "@prantlf/storycap";
import { darkTheme } from "../src/theme/dark/dark-theme";
import { lightTheme } from "../src/theme/light/light-theme";

const docsTheme = create({
  base: "light",
  brandTitle: "Open UI Kit Core",
  brandUrl: "/",
  colorPrimary: "#0051af",
  colorSecondary: "#187adc",
  appBg: "#eff3fc",
  appContentBg: "#fbfcfe",
  appPreviewBg: "#eff3fc",
  appBorderColor: "#dae3f8",
  appBorderRadius: 8,
  barBg: "#fbfcfe",
  barTextColor: "#3c4551",
  barHoverColor: "#0051af",
  barSelectedColor: "#0051af",
  textColor: "#1a1f27",
  textMutedColor: "#59616b",
  inputBg: "#ffffff",
  inputBorder: "#dae3f8",
  inputTextColor: "#1a1f27",
  inputBorderRadius: 8,
  fontBase: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
});

const muiThemeDecorator = withThemeFromJSXProvider({
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
  defaultTheme: "light",
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
});

const themeBackgrounds = {
  light: "#EFF3FC",
  dark: "#00142B",
};

const themeBackgroundTokens = {
  light: {
    background: themeBackgrounds.light,
    previewBackground: "#FBFCFE",
  },
  dark: {
    background: themeBackgrounds.dark,
    previewBackground: "#00142B",
  },
};

const ThemeBackground = ({
  mode,
  children,
}: {
  mode: keyof typeof themeBackgroundTokens;
  children: React.ReactNode;
}) => {
  React.useEffect(() => {
    const tokens = themeBackgroundTokens[mode];
    const previousBackgroundVariable =
      document.documentElement.style.getPropertyValue("--ouk-storybook-bg");
    const previousPreviewBackgroundVariable =
      document.documentElement.style.getPropertyValue(
        "--ouk-storybook-preview-bg",
      );

    document.documentElement.style.setProperty(
      "--ouk-storybook-bg",
      tokens.background,
    );
    document.documentElement.style.setProperty(
      "--ouk-storybook-preview-bg",
      tokens.previewBackground,
    );

    return () => {
      document.documentElement.style.setProperty(
        "--ouk-storybook-bg",
        previousBackgroundVariable,
      );
      document.documentElement.style.setProperty(
        "--ouk-storybook-preview-bg",
        previousPreviewBackgroundVariable,
      );
    };
  }, [mode]);

  return React.createElement(React.Fragment, null, children);
};

const themeBackgroundDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme === "dark" ? "dark" : "light";

  return React.createElement(
    ThemeBackground,
    { mode: theme },
    React.createElement(Story),
  );
};

export const decorators = [
  themeBackgroundDecorator,
  muiThemeDecorator,
  withScreenshot,
  mockDateDecorator,
];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme and canvas background",
    defaultValue: "light",
    toolbar: {
      icon: "mirror",
      items: [
        { value: "light", icon: "sun", title: "Light" },
        { value: "dark", icon: "moon", title: "Dark" },
      ],
      showName: false,
      dynamicTitle: false,
    },
  },
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    themes: {
      disable: true,
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
      theme: docsTheme,
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
    theme: "light",
  },
};

export const tags = ["autodocs"];

export default preview;
