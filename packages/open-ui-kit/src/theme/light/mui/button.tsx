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

import { lightBluePalette } from "../light-color-palette";
import { Components, Theme } from "@mui/material";

export const buttonComponent = (theme: Theme): Components => {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: "primary",
        color: "default",
        size: "medium",
      },
      styleOverrides: {
        root: {
          color: theme.palette.vars.baseTextInverse,
          textTransform: "none",
          transition: "none",
          borderRadius: "4px",
          "& .MuiButton-startIcon": {
            marginLeft: "0px",
          },
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
            ...theme.typography.subtitle1,
            height: "40px",
          },
          "&.MuiButton-sizeMedium": {
            ...theme.typography.subtitle2,
            height: "32px",
          },
          "&.MuiButton-sizeLarge svg": {
            fontSize: "24px",
          },
          "&.MuiButton-sizeMedium svg, &.MuiButton-sizeSmall svg": {
            fontSize: "20px",
          },
          "&.MuiButton-primarySizeLarge, &.MuiButton-primarySizeMedium": {
            paddingRight: "16px",
            paddingLeft: "16px",
            "&:active": {
              paddingRight: "15px",
              paddingLeft: "15px",
            },
          },
          "&.MuiButton-sizeSmall": {
            ...theme.typography.subtitle2,
            height: "24px",
            padding: "2px 12px",
            "&.MuiButton-primarySizeSmall:active": {
              paddingRight: "11px",
              paddingLeft: "11px",
            },
          },
          "&.MuiButton-primary": {
            background: theme.palette.vars.interactivePrimaryDefaultDefault,
            "&.Mui-disabled": {
              background: theme.palette.vars.interactivePrimaryDefaultDisabled,
              color: theme.palette.vars.interactivePrimaryWeakDefault,
              opacity: 0.35,
            },
            "&:hover": {
              background: theme.palette.vars.interactivePrimaryDefaultHover,
            },
            "&:active": {
              background: theme.palette.vars.interactivePrimaryDefaultActive,
              border: `1px solid ${theme.palette.vars.interactivePrimaryDefaultDefault}`,
            },
            "&:focus": {
              outline: `2px solid ${lightBluePalette[900]}`,
              outlineOffset: "2px",
            },
            "&.MuiButton-loading": {
              opacity: 1,
              background: theme.palette.vars.interactivePrimaryDefaultDefault,
            },
          },
          "&.MuiButton-secondary": {
            background: theme.palette.vars.interactiveSecondaryDefaultDefault,
            "&.Mui-disabled": {
              background:
                theme.palette.vars.interactiveSecondaryDefaultDisabled,
              color: theme.palette.vars.interactiveInverseTextDefault,
              opacity: 0.35,
            },
            "&:hover": {
              background: theme.palette.vars.interactiveSecondaryDefaultHover,
            },
            "&:active": {
              background: theme.palette.vars.interactiveSecondaryDefaultActive,
              border: `1px solid ${theme.palette.vars.interactiveSecondaryDefaultDefault}`,
            },
            "&:focus": {
              background: theme.palette.vars.interactiveSecondaryDefaultDefault,
              border: `2px solid ${lightBluePalette[900]}`,
            },
            "&.MuiButton-loading": {
              opacity: 1,
              background: theme.palette.vars.interactiveSecondaryDefaultDefault,
            },
          },
          "&.MuiButton-outlined": {
            border: `2px solid ${theme.palette.vars.interactiveTertiaryDefault}`,
            background: "none",
            color: theme.palette.vars.interactiveTextInDefault,
            "&:hover": {
              border: `2px solid ${theme.palette.vars.interactiveTertiaryHover}`,
              color: theme.palette.vars.interactiveTextInHover,
            },
            "&:active": {
              border: `2px solid ${theme.palette.vars.interactiveTertiaryActive}`,
              color: theme.palette.vars.interactiveTextInActive,
            },
            "&:focus": {
              outline: `2px solid ${lightBluePalette[900]}`,
              outlineOffset: "2px",
            },
            "&.Mui-disabled": {
              border: `2px solid ${theme.palette.vars.interactiveTertiaryDisabled}`,
              color: theme.palette.vars.baseTextWeak,
              opacity: 0.3,
            },
            "&.MuiButton-loading": {
              opacity: 1,
              border: `2px solid ${theme.palette.vars.interactiveTertiaryDefault}`,
              color: theme.palette.vars.interactiveTextInDefault,
            },
          },
          "&.MuiButton-tertariary": {
            background: "none",
            color: theme.palette.vars.interactivePrimaryDefaultDefault,
            "&:hover": {
              color: theme.palette.vars.interactivePrimaryDefaultHover,
            },
            "&:active": {
              color: theme.palette.vars.interactivePrimaryDefaultActive,
            },
            "&:focus": {
              border: `2px solid ${lightBluePalette[900]}`,
            },
            "&.Mui-disabled": {
              color: theme.palette.vars.interactivePrimaryDefaultDisabled,
            },
            "&.MuiButton-loading": {
              opacity: 1,
              color: theme.palette.vars.interactivePrimaryDefaultDefault,
            },
          },
        },
      },
      variants: [
        {
          props: {
            color: "negative",
          },
          style: {
            "&.MuiButton-primaryNegative": {
              background: theme.palette.vars.negativeBackgroundDefault,
              "&.Mui-disabled": {
                opacity: 0.35,
                background: theme.palette.vars.negativeBackgroundDisabled,
                color: theme.palette.vars.negativeTextInDefault,
              },
              "&:hover": {
                color: theme.palette.vars.baseTextInverse,
                background: theme.palette.vars.negativeBackgroundHover,
              },
              "&:active": {
                background: theme.palette.vars.negativeBackgroundActive,
                border: `1px solid ${theme.palette.vars.negativeBorderDefault}`,
              },
              "&:focus": {
                outline: `2px solid ${lightBluePalette[900]}`,
                outlineOffset: "2px",
              },
              "&.MuiButton-loading": {
                opacity: 1,
                color: theme.palette.vars.baseTextInverse,
                background: theme.palette.vars.negativeBackgroundDefault,
              },
            },
            "&.MuiButton-outlinedNegative": {
              border: `2px solid ${theme.palette.vars.negativeBorderDefault}`,
              background: "none",
              color: theme.palette.vars.negativeBackgroundActive,
              "&:hover": {
                border: `2px solid ${theme.palette.vars.negativeBackgroundHover}`,
                color: theme.palette.vars.negativeBackgroundHover,
              },
              "&:active": {
                border: `2px solid ${theme.palette.vars.negativeBackgroundActive}`,
                color: theme.palette.vars.negativeBackgroundActive,
              },
              "&:focus": {
                outline: `2px solid ${lightBluePalette[900]}`,
                outlineOffset: "2px",
                color: theme.palette.vars.negativeBackgroundActive,
                border: `2px solid ${theme.palette.vars.negativeBackgroundActive}`,
              },
              "&.Mui-disabled": {
                border: `2px solid ${theme.palette.vars.negativeBackgroundDisabled}`,
                color: theme.palette.vars.negativeBackgroundDisabled,
                opacity: 0.35,
              },
              "&.MuiButton-loading": {
                opacity: 1,
                border: `2px solid ${theme.palette.vars.negativeBorderDefault}`,
                color: theme.palette.vars.negativeBackgroundActive,
              },
            },
            "&.MuiButton-tertariary": {
              background: "none",
              color: theme.palette.vars.negativeTextDefault,
              "&:hover": {
                color: theme.palette.vars.negativeBackgroundHover,
              },
              "&:active": {
                color: theme.palette.vars.negativeBackgroundActive,
              },
              "&:focus": {
                border: `2px solid ${lightBluePalette[900]}`,
              },
              "&.Mui-disabled": {
                color: theme.palette.vars.negativeBackgroundDisabled,
              },
              "&.MuiButton-loading": {
                opacity: 1,
                color: theme.palette.vars.negativeTextDefault,
              },
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
      variants: [
        {
          props: { color: "default" },
          style: {
            color: theme.palette.vars.brandIconPrimaryDefault,
          },
        },
      ],
    },
  };
};
