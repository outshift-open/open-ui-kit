import "./css/typography.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../src/theme/dark/dark-theme";
import { lightTheme } from "../src/theme/light/light-theme";
import { Decorator } from "@storybook/react";
import React from "react";
import { useDarkMode } from "storybook-dark-mode";

const ThemeDecorator: Decorator = (Story) => {
  const isDark = useDarkMode();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export { ThemeDecorator };
