/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import "./types/theme";

export * from "./components";
export * from "./charts";
export * from "./templates";
export * as Icons from "./custom-icons";
export * from "./custom-illustrations";
export * from "./common";
export * from "./theme/style/color-palette";
export { gradientsPalette } from "./theme/style/gradients";
export { lightVars } from "./theme/light/light-vars";
export { darkVars } from "./theme/dark/dark-vars";
export * from "./theme/ioc";
export type { VarsType } from "./types/vars";
export {
  ThemeMode,
  ThemeProvider,
  useTheme,
  useThemeMode,
} from "./theme-provider/theme-provider";

export type { GradientsPalette, Gradient } from "./types/palette";
export type {
  ThemeModeContextValue,
  ThemeProviderProps,
} from "./theme-provider/theme-provider";
