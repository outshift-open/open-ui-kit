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
  surfaceDark800,
  surfaceDark900,
  surfaceDarkPalette,
  darkModeCardFloating,
  darkModeCardLifted,
  darkModeCardRaised,
  darkModeCardSubtle,
  darkModeFooterBottom,
  darkModeSideDrawerLeft,
  darkModeSideDrawerRight,
} from "@/theme/style/color-palette";
import { breakpoints, commonMixins } from "@/theme/style/common";
import { typography } from "@/theme/style/typography";
import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
  Theme,
  Shadows,
} from "@mui/material";
import { darkVars } from "./dark-vars";
import {
  buttonComponent,
  inputComponents,
  snackbarComponent,
} from "@/theme/mui";

export const shadows: Shadows = [
  `none`,
  darkModeCardLifted,
  darkModeCardSubtle,
  darkModeCardRaised,
  darkModeCardFloating,
  darkModeSideDrawerRight,
  darkModeSideDrawerLeft,
  darkModeFooterBottom,
  ...Array(17).fill("none"),
] as Shadows;

const palette: PaletteOptions = {
  mode: "dark",
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
  vars: darkVars,
  text: {
    primary: darkVars.baseTextStrong,
    secondary: darkVars.baseTextDefault,
    disabled: darkVars.baseTextDisabled,
  },
  background: {
    paper: surfaceDark800,
    default: surfaceDark900,
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

const darkThemeOptions: ThemeOptions = {
  shadows,
  components: {
    ...buttonComponent(theme),
    ...inputComponents(theme),
    ...snackbarComponent(theme),
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollbarWidth: "thin",
          scrollbarColor: `${theme.palette.vars.baseTextMedium} ${theme.palette.background.default}`,
        },
        "*::-webkit-scrollbar": {
          width: "12px",
          height: "12px",
        },
        "*::-webkit-scrollbar-track": {
          backgroundColor: theme.palette.background.default,
          borderRadius: 8,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.vars.controlIconMedium,
          borderRadius: 8,
          border: "2px solid transparent",
          backgroundClip: "content-box",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: theme.palette.vars.baseTextMedium,
        },
        "*::-webkit-scrollbar-corner": {
          backgroundColor: theme.palette.background.default,
        },
      },
    },
  },
};

export const darkTheme: Theme = createTheme(theme, darkThemeOptions);
