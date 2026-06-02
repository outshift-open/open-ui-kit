/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import "../typography.css";
import React from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
export { useTheme } from "@mui/material";

export interface ThemeModeContextValue {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
}

const ThemeModeContext = React.createContext<ThemeModeContextValue | null>(
  null,
);

export function useThemeMode(): ThemeModeContextValue {
  const ctx = React.useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within ThemeProvider");
  }
  return ctx;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  /** Initial value for the internal dark-mode flag. */
  defaultDarkMode?: boolean;
}

export const ThemeProvider = ({
  children,
  defaultDarkMode = false,
}: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState(defaultDarkMode);

  const toggleTheme = React.useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  const themeModeValue = React.useMemo(
    () => ({
      isDarkMode,
      setIsDarkMode,
      toggleTheme,
    }),
    [isDarkMode, toggleTheme],
  );

  return (
    <ThemeModeContext.Provider value={themeModeValue}>
      <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};
