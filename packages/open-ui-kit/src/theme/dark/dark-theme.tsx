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
  primaryPalette,
  secondaryPalette,
  redPalette,
  yellowPalette,
  bluePalette,
  greenPalette,
  greyPalette,
  surface800,
  surface900,
  PA_Colors,
  grey50,
  grey200,
  surface200,
  surface500,
  bordeauxPalette,
  orangePalette,
  surface50,
  grey500,
  secondary200,
} from "./dark-color-palette";
import {
  typography,
  getInputSharedStyle,
  listItemCommonStyles,
  commonMixins,
  snackbarTopRightCommonStyles,
  commonCheckboxStyles,
} from "../common";
import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
  Theme,
  Shadows,
} from "@mui/material";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  SkipNext,
  SkipPrevious,
  TriangleUpOutline,
} from "@/custom-icons";

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
  primary: primaryPalette,
  secondary: secondaryPalette,
  error: redPalette,
  warning: yellowPalette,
  info: bluePalette,
  success: greenPalette,
  negative: bordeauxPalette,
  orange: orangePalette,
  grey: greyPalette,
  text: {
    primary: "rgba(255, 255, 255, 0.87)",
    secondary: "#849FC8",
    disabled: "rgba(255, 255, 255, 0.45)",
  },
  background: {
    paper: surface800,
    default: surface900,
  },
  action: {
    hoverOpacity: 0.05,
    selectedOpacity: 0.25,
    focusOpacity: 0.18,
  },
};

const getAlertStylesForSeverity = (borderColor: string) => ({
  borderRadius: "4px",
  borderTop: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
  borderBottom: `1px solid ${borderColor}`,
  borderLeft: `4px solid ${borderColor}`,
  background: PA_Colors.surface["500"],
  boxShadow: shadows[5],
  ".MuiAlert-icon": {
    color: borderColor,
  },
});

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
  components: {
    MuiButton: {
      styleOverrides: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        /* @ts-ignore */
        outlinedNegative: { color: bordeauxPalette.text },
        textNegative: { color: bordeauxPalette.text },
      },
    },
  },
});

const darkThemeOptions: ThemeOptions = {
  shadows,
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "rgba(255, 255, 255, 0.04)",
        },
        root: {
          paddingTop: "16px",
          paddingBottom: "16px",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: { backgroundColor: theme.palette.grey[700] },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckBoxOutlineBlankRoundedIcon />,
        checkedIcon: <CheckBoxRoundedIcon />,
        indeterminateIcon: <IndeterminateCheckBoxRoundedIcon />,
      },
      variants: [
        {
          props: { color: "error" },
          style: {
            "&:hover": {
              backgroundColor: "rgba(255, 133, 132, 0.18)",
            },
          },
        },
        {
          props: { color: "success" },
          style: {
            "&:hover": {
              backgroundColor: "rgba(99, 245, 194, 0.18)",
            },
          },
        },
        {
          props: { color: "warning" },
          style: {
            "&:hover": {
              backgroundColor: "rgba(249, 189, 48, 0.18)",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          "&.MuiCheckbox-colorError, &.MuiCheckbox-colorSuccess, &.MuiCheckbox-colorWarning":
            {
              ...commonCheckboxStyles,
              "&:not(.Mui-checked, .MuiCheckbox-indeterminate)": {
                color: theme.palette.grey[300],
              },
            },
        },
        colorPrimary: {
          ...commonCheckboxStyles,
          color: theme.palette.grey[300],
          "&.Mui-disabled": {
            color: theme.palette.grey[500],
            "& + *": {
              color: theme.palette.grey[300],
            },
          },
          "&:hover": {
            backgroundColor: "rgba(31, 210, 255, 0.25)",
            "&:not(.Mui-checked, .MuiCheckbox-indeterminate)": {
              backgroundColor: "rgba(119, 125, 133, 0.2)",
            },
          },
        },
        colorSecondary: {
          ...commonCheckboxStyles,
          color: theme.palette.grey[300],
          "&:hover": {
            backgroundColor: "rgba(199, 155, 255, 0.25)",
          },
        },
      },
    },
    ...getInputSharedStyle(theme),
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        placement: "top",
      },
      styleOverrides: {
        arrow: {
          color: surface200,
        },
        tooltip: {
          ...typography.caption,
          color: grey50,
          backgroundColor: surface200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2px 8px",
          lineHeight: "16px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: PA_Colors.surface[700],
          backgroundImage: "none",
          color: theme.palette.grey["50"],
        },
        modal: {
          "& .MuiBackdrop-root": {
            background: `rgba(21, 29, 40, 0.50)`, // TODO add backdrop in surface
          },
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTabs: {
      styleOverrides: {
        scrollButtons: {
          "& svg": {
            fill: palette.text?.secondary,
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-completed": {
            color: theme.palette.success.main,
          },
          "&.Mui-error": {
            color: theme.palette.error.main,
          },
          "&.Mui-disabled": {
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        lineHorizontal: {
          background:
            "linear-gradient(86.04deg, rgba(72, 122, 215, 0.45) 0%, rgba(75, 204, 208, 0.45) 100%)",
          height: 1,
          borderRadius: 1,
          backgroundClip: "padding-box",
          borderTopStyle: "none",
        },
        lineVertical: {
          background:
            "linear-gradient(86.04deg, rgba(72, 122, 215, 0.45) 0%, rgba(75, 204, 208, 0.45) 100%)",
          width: 1,
          borderRadius: 1,
          backgroundClip: "padding-box",
          borderLeftStyle: "none",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          "&.Mui-disabled": {
            color: theme.palette.text.disabled,
          },
          "&.Mui-error": {
            color: theme.palette.error.main,
          },
          "&.MuiStepLabel-completed": {
            color: theme.palette.success.main,
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: TriangleUpOutline,
        MenuProps: {
          PaperProps: {
            sx: {
              marginTop: "4px",
            },
          },
        },
      },
      styleOverrides: {
        standard: {
          backgroundColor: theme.palette.background.paper,
        },
        icon: {
          color: theme.palette.text.secondary,
          transform: "rotate(180deg)",
          paddingLeft: "6px",
          width: "auto",
        },
        iconOpen: {
          transform: "rotate(0deg)",
          paddingRight: "6px",
        },
        filled: {
          backgroundColor: "#243E5E",
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 4,
      },
      styleOverrides: {
        paper: {
          backgroundImage: "none",
          backgroundColor: PA_Colors.surface[500],
          padding: "8px 0px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
          padding: "8px 16px",
          minHeight: "40px",
          backgroundColor: PA_Colors.surface[500],
          "&:hover, &.MuiMenuItem-root.Mui-selected, &.Mui-selected:hover": {
            backgroundColor: PA_Colors.surface[300],
          },
          "&.Mui-selected": {
            color: PA_Colors.primary[500],
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          color: theme.palette.text.primary,
          "&.MuiBadge-standard": {
            height: "16px",
            borderRadius: "64px",
          },
          "&.MuiBadge-colorPrimary": {
            backgroundColor: theme.palette.primary["900"],
          },
          "&.MuiBadge-colorSecondary": {
            backgroundColor: theme.palette.secondary["500"],
          },
          "&.MuiBadge-colorError": {
            backgroundColor: bordeauxPalette["500"],
          },
          "&.MuiBadge-colorWarning": {
            backgroundColor: redPalette["500"],
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          color: grey50,
        },
        action: {
          paddingTop: "0px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        },
        root: {
          "& .MuiButtonBase-root": {
            color: grey200,
          },
        },
      },
      variants: [
        {
          props: { severity: "error" },
          style: getAlertStylesForSeverity(PA_Colors.bordeaux["500"]),
        },
        {
          props: { severity: "info" },
          style:
            theme.palette.info["500"] &&
            getAlertStylesForSeverity(theme.palette.info["500"]),
        },
        {
          props: { severity: "success" },
          style:
            theme.palette.success["500"] &&
            getAlertStylesForSeverity(theme.palette.success["500"]),
        },
        {
          props: { severity: "warning" },
          style: getAlertStylesForSeverity(theme.palette.orange.main),
        },
      ],
    },
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: listItemCommonStyles(theme),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: listItemCommonStyles(theme),
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          color: grey50,
          textTransform: "none",
          transition: "none",
          "& .MuiButton-startIcon": {
            marginLeft: "0px",
          },
          // handle icon only buttons
          "&:has(>svg:only-child )": {
            "&.MuiButton-sizeLarge": {
              padding: "8px",
              minWidth: "40px",
              width: "40px",
            },
            "&.MuiButton-sizeMedium": {
              padding: "6px",
              minWidth: "32px",
              width: "32px",
            },
            "&.MuiButton-sizeSmall": {
              padding: "2px",
              minWidth: "24px",
              width: "24px",
            },
          },
          "& .MuiButton-endIcon": {
            marginRight: "0px",
          },
          "&.MuiButton-sizeLarge": {
            ...typography.subtitle1,
            height: "40px",
          },
          "&.MuiButton-sizeMedium": {
            ...typography.subtitle2,
            height: "32px",
          },
          "&.MuiButton-sizeLarge svg": {
            fontSize: "24px",
          },
          "&.MuiButton-sizeMedium svg, &.MuiButton-sizeSmall svg": {
            fontSize: "20px",
          },
          "&.MuiButton-containedSizeLarge, &.MuiButton-containedSizeMedium": {
            paddingRight: "16px",
            paddingLeft: "16px",
            "&:active": {
              paddingRight: "15px",
              paddingLeft: "15px",
            },
          },
          "&.MuiButton-sizeSmall": {
            ...typography.subtitle2,
            height: "24px",
            padding: "2px 12px",
            "&.MuiButton-containedSizeSmall:active": {
              paddingRight: "11px",
              paddingLeft: "11px",
            },
          },
          "&.Mui-focusVisible": {
            outline: `2px solid ${secondary200}`,
            outlineOffset: "2px",
          },
          "&.MuiButton-contained.Mui-disabled": {
            opacity: 0.35,
            color: grey50,
          },
          "&.MuiButton-containedPrimary": {
            background: PA_Colors.gradients.light,
            "&:hover": {
              background: PA_Colors.gradients.light_hover,
            },
            "&:active": {
              background: `${PA_Colors.gradients.light_pressed} padding-box, ${PA_Colors.gradients.light} border-box`,
              border: "1px solid #0000",
              borderRadius: "4px",
            },
          },
          "&.MuiButton-containedSecondary": {
            background: PA_Colors.gradients.dark,
            "&:hover": {
              background: PA_Colors.gradients.dark_hover,
            },
            "&:active": {
              background: `${PA_Colors.gradients.dark_pressed} padding-box, ${PA_Colors.gradients.dark} border-box`,
              border: "1px solid #0000",
              borderRadius: "4px",
            },
          },
          "&.MuiButton-outlined": {
            borderColor: surface200,
            background: "none",
            "&:hover": {
              background: "none",
              color: grey200,
              borderColor: surface50,
            },
            "&:active": {
              borderColor: surface200,
            },
            "&.Mui-disabled": {
              color: grey500,
              borderColor: surface500,
            },
          },
          "&.MuiButton-text": {
            "&:hover": {
              background: "none",
              color: grey200,
            },
            "&:active": {
              color: grey50,
            },
            "&.Mui-disabled": {
              color: grey500,
            },
          },
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        anchorOriginTopRight: snackbarTopRightCommonStyles,
        root: {
          "& .MuiSnackbarContent-root": {
            backgroundColor: surface500,
            backgroundImage: "none",
            color: grey50,
          },
          "& .MuiButtonBase-root": {
            color: "#9ea2a8",
          },
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          "& .MuiFormControlLabel-root": {
            "& .MuiCheckbox-root": {
              "& + *": {
                marginLeft: 8,
              },
            },
          },
        },
      },
    },
    MuiPaginationItem: {
      defaultProps: {
        slots: {
          previous: KeyboardArrowLeft,
          next: KeyboardArrowRight,
          first: SkipPrevious,
          last: SkipNext,
        },
      },
      styleOverrides: {
        root: {
          "&.MuiPaginationItem-text:not(.MuiPaginationItem-ellipsis)": {
            "&.Mui-selected, :hover, :active": {
              backgroundColor: PA_Colors.surface[50],
            },
          },
          "&.MuiPaginationItem-text.MuiPaginationItem-textPrimary:not(.MuiPaginationItem-ellipsis)":
            {
              "&.Mui-selected, :hover, :active": {
                backgroundColor: PA_Colors.primary[500],
                color: PA_Colors.surface[900],
              },
            },
          "&.MuiPaginationItem-outlined:not(.MuiPaginationItem-ellipsis)": {
            border: `1px solid ${PA_Colors.surface[200]}`,
            "&.Mui-selected, :hover, :active": {
              backgroundColor: `rgba(56, 77, 107, 0.20)`,
            },
          },
          "&.MuiPaginationItem-outlined.MuiPaginationItem-outlinedPrimary:not(.MuiPaginationItem-ellipsis)":
            {
              "&.Mui-selected, :hover, :active": {
                border: `1px solid rgba(31, 210, 255, 0.40)`,
                backgroundColor: `rgba(0, 188, 235, 0.10)`,
                color: PA_Colors.primary[500],
              },
            },
        },
      },
    },
  },
};

export const darkTheme: Theme = createTheme(theme, darkThemeOptions);
