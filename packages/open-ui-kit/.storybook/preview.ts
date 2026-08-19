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
import { iocTheme } from "../src/theme/ioc/ioc-theme";
import { lightTheme } from "../src/theme/light/light-theme";
import { midnightTheme } from "../src/theme/midnight/midnight-theme";

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
    ioc: iocTheme,
    midnight: midnightTheme,
  },
});

const themeBackgrounds = {
  light: "#EFF3FC",
  dark: "#00142B",
  ioc: "#07111F",
  midnight: "#060A0F",
};

const themeBackgroundTokens = {
  light: {
    background: themeBackgrounds.light,
    border: "#DAE3F8",
    link: "#0051AF",
    mutedText: "#59616B",
    previewBackground: "#FBFCFE",
    text: "#1A1F27",
  },
  dark: {
    background: themeBackgrounds.dark,
    border: "#3D5980",
    link: "#4FD5FF",
    mutedText: "#C8D5E8",
    previewBackground: "#00142B",
    text: "#E7EEF8",
  },
  ioc: {
    background: themeBackgrounds.ioc,
    border: "rgba(255, 255, 255, 0.09)",
    link: "#00BCEB",
    mutedText: "rgba(255, 255, 255, 0.55)",
    previewBackground: "#07111F",
    text: "rgba(255, 255, 255, 0.94)",
  },
  midnight: {
    background: themeBackgrounds.midnight,
    border: "#3A4E77",
    link: "#558BFF",
    mutedText: "#C5C7CB",
    previewBackground: "#060A0F",
    text: "#E8E9EA",
  },
};

const getThemeBackground = (theme?: string) =>
  theme && theme in themeBackgroundTokens
    ? themeBackgroundTokens[theme as keyof typeof themeBackgroundTokens]
    : themeBackgroundTokens.light;

const applyThemeBackgroundTokens = (theme?: string) => {
  if (typeof document === "undefined") {
    return;
  }

  const tokens = getThemeBackground(theme);

  document.documentElement.style.setProperty(
    "--ouk-storybook-bg",
    tokens.background,
  );
  document.documentElement.style.setProperty(
    "--ouk-storybook-preview-bg",
    tokens.previewBackground,
  );
  document.documentElement.style.setProperty(
    "--ouk-storybook-border",
    tokens.border,
  );
  document.documentElement.style.setProperty(
    "--ouk-storybook-link",
    tokens.link,
  );
  document.documentElement.style.setProperty(
    "--ouk-storybook-muted-text",
    tokens.mutedText,
  );
  document.documentElement.style.setProperty(
    "--ouk-storybook-text",
    tokens.text,
  );
};

const getThemeGlobalFromLocation = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const globals = new URLSearchParams(window.location.search).get("globals");
  return globals
    ?.split(";")
    .find((global) => global.startsWith("theme:"))
    ?.replace("theme:", "");
};

applyThemeBackgroundTokens(getThemeGlobalFromLocation());

const ThemeBackground = ({
  mode,
  children,
}: {
  mode: keyof typeof themeBackgroundTokens;
  children?: React.ReactNode;
}) => {
  React.useEffect(() => {
    const previousBackgroundVariable =
      document.documentElement.style.getPropertyValue("--ouk-storybook-bg");
    const previousPreviewBackgroundVariable =
      document.documentElement.style.getPropertyValue(
        "--ouk-storybook-preview-bg",
      );
    const previousBorderVariable =
      document.documentElement.style.getPropertyValue("--ouk-storybook-border");
    const previousLinkVariable =
      document.documentElement.style.getPropertyValue("--ouk-storybook-link");
    const previousMutedTextVariable =
      document.documentElement.style.getPropertyValue(
        "--ouk-storybook-muted-text",
      );
    const previousTextVariable =
      document.documentElement.style.getPropertyValue("--ouk-storybook-text");

    applyThemeBackgroundTokens(mode);

    return () => {
      document.documentElement.style.setProperty(
        "--ouk-storybook-bg",
        previousBackgroundVariable,
      );
      document.documentElement.style.setProperty(
        "--ouk-storybook-preview-bg",
        previousPreviewBackgroundVariable,
      );
      document.documentElement.style.setProperty(
        "--ouk-storybook-border",
        previousBorderVariable,
      );
      document.documentElement.style.setProperty(
        "--ouk-storybook-link",
        previousLinkVariable,
      );
      document.documentElement.style.setProperty(
        "--ouk-storybook-muted-text",
        previousMutedTextVariable,
      );
      document.documentElement.style.setProperty(
        "--ouk-storybook-text",
        previousTextVariable,
      );
    };
  }, [mode]);

  return React.createElement(React.Fragment, null, children);
};

const themeBackgroundDecorator: Decorator = (Story, context) => {
  const globalTheme = String(context.globals.theme ?? "light");
  const theme =
    globalTheme in themeBackgroundTokens
      ? (globalTheme as keyof typeof themeBackgroundTokens)
      : "light";

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
        { value: "ioc", icon: "mirror", title: "IoC" },
        { value: "midnight", icon: "starhollow", title: "Midnight" },
      ],
      showName: false,
      dynamicTitle: false,
    },
  },
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      disabled: true,
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
