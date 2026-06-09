/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import "../typography.css";
import React from "react";
import {
  CssBaseline,
  type Theme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
export { useTheme } from "@mui/material";

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export interface ThemeModeContextValue {
  mode: ThemeMode;
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
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
  defaultMode?: ThemeMode;
  /**
   * A fully custom MUI Theme. Must include palette.vars (VarsType) to be
   * compatible with open-ui-kit components. When provided, takes precedence
   * over defaultMode for theme selection.
   * Reference: src/theme/light/light-theme.tsx
   */
  customTheme?: Theme;
}

export const ThemeProvider = ({
  children,
  defaultMode,
  customTheme,
}: ThemeProviderProps) => {
  const [mode, setMode] = React.useState<ThemeMode>(
    defaultMode ?? ThemeMode.Light,
  );

  const toggleTheme = React.useCallback(() => {
    setMode((prev) =>
      prev === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark,
    );
  }, []);

  const resolvedTheme =
    customTheme ?? (mode === ThemeMode.Dark ? darkTheme : lightTheme);

  const themeModeValue = React.useMemo(
    () => ({
      mode,
      setMode,
      toggleTheme,
    }),
    [mode, toggleTheme],
  );

  return (
    <ThemeModeContext.Provider value={themeModeValue}>
      <MuiThemeProvider theme={resolvedTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};
