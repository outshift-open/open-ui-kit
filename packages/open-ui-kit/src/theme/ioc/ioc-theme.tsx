/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  greenPalette,
  greyPalette,
  lightOrangePalette,
  orangePalette,
  redPalette,
} from "../style/color-palette";
import { breakpoints, commonMixins } from "../style/common";
import { typography } from "../style/typography";
import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
  Theme,
  Shadows,
} from "@mui/material";
import { iocVars } from "./ioc-vars";
import {
  iocTealPalette,
  iocBluePalette,
  iocSurfacePalette,
  iocBackdropPalette,
  iocTextPrimary,
  iocTextSecondary,
  iocTextDisabled,
  iocPageBackground,
  iocShadowSm,
  iocShadowMd,
  iocShadowLg,
} from "./ioc-color-palette";
import { buttonComponent, inputComponents, snackbarComponent } from "../mui";

export const iocShadows: Shadows = [
  "none",
  iocShadowSm,
  iocShadowMd,
  iocShadowLg,
  iocShadowLg,
  iocShadowLg,
  ...Array(19).fill("none"),
] as Shadows;

const palette: PaletteOptions = {
  mode: "dark",
  primary: {
    ...iocTealPalette,
    main: iocTealPalette[500],
    light: iocTealPalette[300],
    dark: iocTealPalette[700],
    contrastText: iocBackdropPalette[900],
  },
  secondary: {
    main: iocBluePalette[500],
    light: iocBluePalette[400],
    dark: iocBluePalette[600],
    contrastText: "#ffffff",
  },
  tertiary: lightOrangePalette,
  error: redPalette,
  warning: lightOrangePalette,
  info: iocBluePalette,
  success: greenPalette,
  negative: redPalette,
  orange: orangePalette,
  grey: greyPalette,
  vars: iocVars,
  text: {
    primary: iocTextPrimary,
    secondary: iocTextSecondary,
    disabled: iocTextDisabled,
  },
  background: {
    paper: iocSurfacePalette[100],
    default: iocBackdropPalette[600],
  },
  action: {
    hoverOpacity: 0.08,
    selectedOpacity: 0.14,
    focusOpacity: 0.1,
  },
};

const baseTheme: Theme = createTheme({
  breakpoints,
  palette,
  typography,
  mixins: commonMixins,
});

const iocCssBaselineComponent: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        scrollbarWidth: "thin",
        scrollbarColor: `${baseTheme.palette.vars.baseTextMedium} ${baseTheme.palette.background.default}`,
      },
      body: {
        background: iocPageBackground,
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      },
      "*::-webkit-scrollbar": { width: "12px", height: "12px" },
      "*::-webkit-scrollbar-track": {
        backgroundColor: baseTheme.palette.background.default,
        borderRadius: 8,
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: baseTheme.palette.vars.controlIconMedium,
        borderRadius: 8,
        border: "2px solid transparent",
        backgroundClip: "content-box",
      },
      "*::-webkit-scrollbar-thumb:hover": {
        backgroundColor: baseTheme.palette.vars.baseTextMedium,
      },
      "*::-webkit-scrollbar-corner": {
        backgroundColor: baseTheme.palette.background.default,
      },
      "::selection": {
        backgroundColor: baseTheme.palette.vars.controlFocusRingStrong,
        color: baseTheme.palette.vars.baseTextStrong,
      },
    },
  },
};

const iocThemeOptions: ThemeOptions = {
  shadows: iocShadows,
  components: {
    ...buttonComponent(baseTheme),
    ...inputComponents(baseTheme),
    ...snackbarComponent(baseTheme),
    ...iocCssBaselineComponent,
  },
};

export const iocTheme: Theme = createTheme(baseTheme, iocThemeOptions);
iocTheme.palette.vars = iocVars;
