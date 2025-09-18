/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
} from "./light-color-palette";
import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
  Theme,
  Shadows,
} from "@mui/material";
import { commonMixins, typography } from "../common";
import { lightVars } from "./light-vars";
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
} from "./mui";

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

// const getAlertStylesForSeverity = (borderColor: string) => ({
//   borderRadius: "4px",
//   borderTop: `1px solid ${borderColor}`,
//   borderRight: `1px solid ${borderColor}`,
//   borderBottom: `1px solid ${borderColor}`,
//   borderLeft: `4px solid ${borderColor}`,
//   background: OS_LIGHT_COLORS.surfaceLight["500"],
//   boxShadow: shadows[5],
//   ".MuiAlert-icon": {
//     color: borderColor,
//   },
// });

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

const lightThemeOptions: ThemeOptions = {
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

    //     MuiCheckbox: {
    //       defaultProps: {
    //         icon: <CheckBoxOutlineBlankRoundedIcon />,
    //         checkedIcon: <CheckBoxRoundedIcon />,
    //         indeterminateIcon: <IndeterminateCheckBoxRoundedIcon />,
    //       },
    //       variants: [
    //         {
    //           props: { color: "error" },
    //           style: {
    //             "&:hover": {
    //               backgroundColor: "rgba(255, 133, 132, 0.18)",
    //             },
    //           },
    //         },
    //         {
    //           props: { color: "success" },
    //           style: {
    //             "&:hover": {
    //               backgroundColor: "rgba(99, 245, 194, 0.18)",
    //             },
    //           },
    //         },
    //         {
    //           props: { color: "warning" },
    //           style: {
    //             "&:hover": {
    //               backgroundColor: "rgba(249, 189, 48, 0.18)",
    //             },
    //           },
    //         },
    //       ],
    //       styleOverrides: {
    //         root: {
    //           "&.MuiCheckbox-colorError, &.MuiCheckbox-colorSuccess, &.MuiCheckbox-colorWarning":
    //             {
    //               ...commonCheckboxStyles,
    //               "&:not(.Mui-checked, .MuiCheckbox-indeterminate)": {
    //                 color: theme.palette.grey[300],
    //               },
    //             },
    //         },
    //         colorPrimary: {
    //           ...commonCheckboxStyles,
    //           color: theme.palette.grey[300],
    //           "&.Mui-disabled": {
    //             color: theme.palette.grey[500],
    //             "& + *": {
    //               color: theme.palette.grey[300],
    //             },
    //           },
    //           "&:hover": {
    //             backgroundColor: "rgba(31, 210, 255, 0.25)",
    //             "&:not(.Mui-checked, .MuiCheckbox-indeterminate)": {
    //               backgroundColor: "rgba(119, 125, 133, 0.2)",
    //             },
    //           },
    //         },
    //         colorSecondary: {
    //           ...commonCheckboxStyles,
    //           color: theme.palette.grey[300],
    //           "&:hover": {
    //             backgroundColor: "rgba(199, 155, 255, 0.25)",
    //           },
    //         },
    //       },
    //     },
    //     MuiTooltip: {
    //       defaultProps: {
    //         arrow: true,
    //         placement: "top",
    //       },
    //       styleOverrides: {
    //         arrow: {
    //           color: surface200,
    //         },
    //         tooltip: {
    //           ...typography.caption,
    //           color: grey50,
    //           backgroundColor: surface200,
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           padding: "2px 8px",
    //           lineHeight: "16px",
    //         },
    //       },
    //     },
    //     MuiDrawer: {
    //       styleOverrides: {
    //         paper: {
    //           background: PA_Colors.surface[700],
    //           backgroundImage: "none",
    //           color: theme.palette.grey["50"],
    //         },
    //         modal: {
    //           "& .MuiBackdrop-root": {
    //             background: `rgba(21, 29, 40, 0.50)`, // TODO add backdrop in surface
    //           },
    //         },
    //       },
    //       defaultProps: {
    //         elevation: 0,
    //       },
    //     },
    //     MuiStepIcon: {
    //       styleOverrides: {
    //         root: {
    //           "&.Mui-completed": {
    //             color: theme.palette.success.main,
    //           },
    //           "&.Mui-error": {
    //             color: theme.palette.error.main,
    //           },
    //           "&.Mui-disabled": {
    //             color: theme.palette.text.disabled,
    //           },
    //         },
    //       },
    //     },
    //     MuiStepConnector: {
    //       styleOverrides: {
    //         lineHorizontal: {
    //           background:
    //             "linear-gradient(86.04deg, rgba(72, 122, 215, 0.45) 0%, rgba(75, 204, 208, 0.45) 100%)",
    //           height: 1,
    //           borderRadius: 1,
    //           backgroundClip: "padding-box",
    //           borderTopStyle: "none",
    //         },
    //         lineVertical: {
    //           background:
    //             "linear-gradient(86.04deg, rgba(72, 122, 215, 0.45) 0%, rgba(75, 204, 208, 0.45) 100%)",
    //           width: 1,
    //           borderRadius: 1,
    //           backgroundClip: "padding-box",
    //           borderLeftStyle: "none",
    //         },
    //       },
    //     },
    //     MuiStepLabel: {
    //       styleOverrides: {
    //         label: {
    //           "&.Mui-disabled": {
    //             color: theme.palette.text.disabled,
    //           },
    //           "&.Mui-error": {
    //             color: theme.palette.error.main,
    //           },
    //           "&.MuiStepLabel-completed": {
    //             color: theme.palette.success.main,
    //           },
    //         },
    //       },
    //     },
    //     MuiSelect: {
    //       defaultProps: {
    //         IconComponent: PaTriangleUpOutline,
    //         MenuProps: {
    //           PaperProps: {
    //             sx: {
    //               marginTop: "4px",
    //             },
    //           },
    //         },
    //       },
    //       styleOverrides: {
    //         standard: {
    //           backgroundColor: theme.palette.background.paper,
    //         },
    //         icon: {
    //           color: theme.palette.text.secondary,
    //           transform: "rotate(180deg)",
    //           paddingLeft: "6px",
    //           width: "auto",
    //         },
    //         iconOpen: {
    //           transform: "rotate(0deg)",
    //           paddingRight: "6px",
    //         },
    //         filled: {
    //           backgroundColor: "#243E5E",
    //         },
    //       },
    //     },
    //     MuiMenu: {
    //       defaultProps: {
    //         elevation: 4,
    //       },
    //       styleOverrides: {
    //         paper: {
    //           backgroundImage: "none",
    //           backgroundColor: PA_Colors.surface[500],
    //           padding: "8px 0px",
    //         },
    //       },
    //     },
    //     MuiMenuItem: {
    //       styleOverrides: {
    //         root: {
    //           ...theme.typography.body2,
    //           padding: "8px 16px",
    //           minHeight: "40px",
    //           backgroundColor: PA_Colors.surface[500],
    //           "&:hover, &.MuiMenuItem-root.Mui-selected, &.Mui-selected:hover": {
    //             backgroundColor: PA_Colors.surface[300],
    //           },
    //           "&.Mui-selected": {
    //             color: PA_Colors.primary[500],
    //           },
    //         },
    //       },
    //     },
    // MuiBadge: {
    //   styleOverrides: {
    //     badge: {
    //       color: theme.palette.text.primary,
    //       "&.MuiBadge-standard": {
    //         height: "16px",
    //         borderRadius: "64px",
    //       },
    //       // "&.MuiBadge-colorPrimary": {
    //       //   backgroundColor: theme.palette.primary["900"],
    //       // },
    //       // "&.MuiBadge-colorSecondary": {
    //       //   backgroundColor: theme.palette.secondary["500"],
    //       // },
    //       // "&.MuiBadge-colorError": {
    //       //   backgroundColor: bordeauxPalette["500"],
    //       // },
    //       // "&.MuiBadge-colorWarning": {
    //       //   backgroundColor: redPalette["500"],
    //       // },
    //     },
    //   },
    // },
    //     MuiAlert: {
    //       styleOverrides: {
    //         message: {
    //           color: grey50,
    //         },
    //         action: {
    //           paddingTop: "0px",
    //           display: "flex",
    //           alignItems: "center",
    //           flexWrap: "wrap",
    //         },
    //         root: {
    //           "& .MuiButtonBase-root": {
    //             color: grey200,
    //           },
    //         },
    //       },
    //       variants: [
    //         {
    //           props: { severity: "error" },
    //           style: getAlertStylesForSeverity(PA_Colors.bordeaux["500"]),
    //         },
    //         {
    //           props: { severity: "info" },
    //           style:
    //             theme.palette.info["500"] &&
    //             getAlertStylesForSeverity(theme.palette.info["500"]),
    //         },
    //         {
    //           props: { severity: "success" },
    //           style:
    //             theme.palette.success["500"] &&
    //             getAlertStylesForSeverity(theme.palette.success["500"]),
    //         },
    //         {
    //           props: { severity: "warning" },
    //           style: getAlertStylesForSeverity(theme.palette.orange.main),
    //         },
    //       ],
    //     },
    //     MuiList: {
    //       defaultProps: {
    //         disablePadding: true,
    //       },
    //     },
    //     MuiListItem: {
    //       styleOverrides: {
    //         root: listItemCommonStyles(theme),
    //       },
    //     },
    //     MuiListItemButton: {
    //       styleOverrides: {
    //         root: listItemCommonStyles(theme),
    //       },
    //     },
    //     MuiSnackbar: {
    //       styleOverrides: {
    //         anchorOriginTopRight: snackbarTopRightCommonStyles,
    //         root: {
    //           "& .MuiSnackbarContent-root": {
    //             backgroundColor: surface500,
    //             backgroundImage: "none",
    //             color: grey50,
    //           },
    //           "& .MuiButtonBase-root": {
    //             color: "#9ea2a8",
    //           },
    //         },
    //       },
    //     },
    //     MuiFormGroup: {
    //       styleOverrides: {
    //         root: {
    //           "& .MuiFormControlLabel-root": {
    //             "& .MuiCheckbox-root": {
    //               "& + *": {
    //                 marginLeft: 8,
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //     MuiPaginationItem: {
    //       defaultProps: {
    //         slots: {
    //           previous: PaKeyboardArrowLeft,
    //           next: PaKeyboardArrowRight,
    //           first: PaSkipPrevious,
    //           last: PaSkipNext,
    //         },
    //       },
    //       styleOverrides: {
    //         root: {
    //           "&.MuiPaginationItem-text:not(.MuiPaginationItem-ellipsis)": {
    //             "&.Mui-selected, :hover, :active": {
    //               backgroundColor: PA_Colors.surface[50],
    //             },
    //           },
    //           "&.MuiPaginationItem-text.MuiPaginationItem-textPrimary:not(.MuiPaginationItem-ellipsis)":
    //             {
    //               "&.Mui-selected, :hover, :active": {
    //                 backgroundColor: PA_Colors.primary[500],
    //                 color: PA_Colors.surface[900],
    //               },
    //             },
    //           "&.MuiPaginationItem-outlined:not(.MuiPaginationItem-ellipsis)": {
    //             border: `1px solid ${PA_Colors.surface[200]}`,
    //             "&.Mui-selected, :hover, :active": {
    //               backgroundColor: `rgba(56, 77, 107, 0.20)`,
    //             },
    //           },
    //           "&.MuiPaginationItem-outlined.MuiPaginationItem-outlinedPrimary:not(.MuiPaginationItem-ellipsis)":
    //             {
    //               "&.Mui-selected, :hover, :active": {
    //                 border: `1px solid rgba(31, 210, 255, 0.40)`,
    //                 backgroundColor: `rgba(0, 188, 235, 0.10)`,
    //                 color: PA_Colors.primary[500],
    //               },
    //             },
    //         },
    //       },
    //   },
  },
};

export const lightTheme: Theme = createTheme(theme, lightThemeOptions);
