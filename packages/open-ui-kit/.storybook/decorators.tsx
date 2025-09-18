import "./css/typography.css";

import { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../src/theme/dark/dark-theme";
import { lightTheme } from "../src/theme/light/light-theme";
import { Decorator } from "@storybook/react";
import React from "react";

import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

const channel = addons.getChannel();

const ThemeDecorator: Decorator = (Story) => {
  const [isDark, setDark] = React.useState(false);

  useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export { ThemeDecorator };
