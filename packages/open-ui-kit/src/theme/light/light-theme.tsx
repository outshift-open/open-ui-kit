/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  bluePalette,
  greenPalette,
  greyPalette,
  lightOrangePalette,
  orangePalette,
  redPalette,
  surfaceLight100,
  surfaceLight200,
  surfaceDarkPalette,
  lightModeCardLifted,
  lightModeCardSubtle,
  lightModeCardRaised,
  lightModeCardFloating,
  lightModeSideDrawer,
} from "@/theme/style/color-palette";
import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
  Theme,
  Shadows,
} from "@mui/material";
import { commonMixins, breakpoints } from "@/theme/style/common";
import { typography } from "@/theme/style/typography";
import { lightVars } from "./light-vars";
import {
  backdropComponent,
  buttonComponent,
  circularProgressComponent,
  inputComponents,
  listComponent,
  radioComponent,
  skeletonComponent,
  snackbarComponent,
  switchComponent,
  tabComponent,
  tabsComponent,
  tooltipComponent,
} from "@/theme/mui";

export const shadows: Shadows = [
  `none`,
  lightModeCardLifted,
  lightModeCardSubtle,
  lightModeCardRaised,
  lightModeCardFloating,
  lightModeSideDrawer,
  ...Array(20).fill("none"),
] as Shadows;

const palette: PaletteOptions = {
  mode: "light",
  primary: bluePalette,
  secondary: {
    ...surfaceDarkPalette,
    main: surfaceDarkPalette[500],
  },
  tertiary: lightOrangePalette,
  error: redPalette,
  warning: lightOrangePalette,
  info: bluePalette,
  success: greenPalette,
  negative: redPalette,
  orange: orangePalette,
  grey: greyPalette,
  vars: lightVars,
  text: {
    primary: greyPalette[500],
    secondary: greyPalette[50],
    disabled: greyPalette[100],
  },
  background: {
    paper: surfaceLight100,
    default: surfaceLight200,
  },
  action: {
    hoverOpacity: 0.05,
    selectedOpacity: 0.25,
    focusOpacity: 0.18,
  },
};

const theme: Theme = createTheme({
  breakpoints,
  palette,
  typography,
  mixins: commonMixins,
});

const lightThemeOptions: ThemeOptions = {
  shadows,
  components: {
    ...backdropComponent(theme),
    ...buttonComponent(theme),
    ...circularProgressComponent(theme),
    ...inputComponents(theme),
    ...listComponent(theme),
    ...radioComponent(theme),
    ...skeletonComponent(theme),
    ...snackbarComponent(theme),
    ...switchComponent(theme),
    ...tabComponent(theme),
    ...tabsComponent(theme),
    ...tooltipComponent(theme),
  },
};

export const lightTheme: Theme = createTheme(theme, lightThemeOptions);
