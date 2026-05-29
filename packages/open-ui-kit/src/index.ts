/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import "./typography.css";
import "./types/theme";

export * from "./templates";
export * from "./components";
export * from "./charts";
export * as Icons from "./custom-icons";
export * from "./custom-illustrations";
export * from "./common";
export * from "./common/utils";
export {
  OS_LIGHT_COLORS,
  surfaceLightPalette,
  surfaceDarkPalette,
  bluePalette,
  lightBluePalette,
  greyPalette,
  purplePalette,
  redPalette,
  orangePalette,
  lightOrangePalette,
  yellowPalette,
  greenPalette,
  tealPalette,
  lavenderPalette,
  limePalette,
  pinkPalette,
  nightPalette,
  sunsetPalette,
  brandColors,
} from "./theme/style/color-palette";
export { gradientsPalette } from "./theme/style/gradients";
export { lightVars } from "./theme/light/light-vars";
export { darkVars } from "./theme/dark/dark-vars";
export type { VarsType } from "./types/vars";
export {
  ThemeProvider,
  useTheme,
  useThemeMode,
} from "./theme-provider/theme-provider";

export type { GradientsPalette, Gradient } from "./types/palette";
export type {
  ThemeModeContextValue,
  ThemeProviderProps,
} from "./theme-provider/theme-provider";
export * from "./types/select-tree";
