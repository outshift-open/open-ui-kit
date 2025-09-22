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
} from "../color-palette";
import { typography, commonMixins } from "../common";
import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
  Theme,
  Shadows,
} from "@mui/material";
import { darkVars } from "./dark-vars";
import {
  appBarComponent,
  accordionComponent,
  avatarComponent,
  avatarGroupComponent,
  buttonComponent,
  cardComponent,
  checkboxComponent,
  circularProgressComponent,
  dialogComponent,
  dividerComponent,
  inputComponents,
  listComponent,
  menuComponent,
  popoverComponent,
  radioComponent,
  skeletonComponent,
  snackbarComponent,
  switchComponent,
  tabComponent,
  tabsComponent,
  tooltipComponent,
} from "../mui";

export const shadows: Shadows = [
  `none`,
  `0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)`,
  `0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)`,
  `0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)`,
  `0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)`,
  `0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)`,
  ...Array(20).fill("none"),
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
    primary: "rgba(255, 255, 255, 0.87)",
    secondary: "#849FC8",
    disabled: "rgba(255, 255, 255, 0.45)",
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
  breakpoints: {
    keys: ["md", "lg", "xl", "xxl"],
    values: {
      md: 1024,
      lg: 1440,
      xl: 1920,
      xxl: 2560,
    },
  },
  palette,
  typography,
  mixins: commonMixins,
});

const darkThemeOptions: ThemeOptions = {
  shadows,
  components: {
    ...appBarComponent(theme),
    ...accordionComponent(theme),
    ...avatarComponent(theme),
    ...avatarGroupComponent(theme),
    ...buttonComponent(theme),
    ...cardComponent(theme),
    ...checkboxComponent(theme),
    ...circularProgressComponent(theme),
    ...dialogComponent(theme),
    ...dividerComponent(theme),
    ...inputComponents(theme),
    ...listComponent(theme),
    ...menuComponent(theme),
    ...popoverComponent(theme),
    ...radioComponent(theme),
    ...skeletonComponent(theme),
    ...snackbarComponent(theme),
    ...switchComponent(theme),
    ...tabComponent(theme),
    ...tabsComponent(theme),
    ...tooltipComponent(theme),

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
