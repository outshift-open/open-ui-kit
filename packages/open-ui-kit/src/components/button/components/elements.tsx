/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ComponentType } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.vars.baseTextInverse,
  textTransform: "none",
  transition: "none",
  borderRadius: "4px",
  "& .MuiButton-startIcon": {
    marginLeft: "0px",
  },
  "& .MuiButton-endIcon": {
    marginRight: "0px",
  },
  "&:has(>svg:only-child)": {
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
  "&.MuiButton-sizeLarge": {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "125%",
    height: "40px",
    padding: "10px 16px",
  },
  "&.MuiButton-sizeLarge:has(.MuiButton-startIcon), &.MuiButton-sizeLarge:has(.MuiButton-endIcon)":
    {
      padding: "8px 16px",
    },
  "&.MuiButton-sizeMedium": {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "125%",
    height: "32px",
    padding: "7px 16px",
  },
  "&.MuiButton-sizeSmall": {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "125%",
    height: "24px",
    padding: "3px 12px",
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
  "&.MuiButton-primarySizeSmall:active": {
    paddingRight: "11px",
    paddingLeft: "11px",
  },
  // Primary
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
    "&:focus-visible": {
      outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
      outlineOffset: "2px",
    },
    "&.MuiButton-loading": {
      opacity: 1,
      background: theme.palette.vars.interactivePrimaryDefaultDefault,
    },
  },
  // Secondary
  "&.MuiButton-secondary": {
    background: theme.palette.vars.interactiveSecondaryDefaultDefault,
    "&.Mui-disabled": {
      background: theme.palette.vars.interactiveSecondaryDefaultDisabled,
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
    "&:focus-visible": {
      outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
      outlineOffset: "2px",
      background: theme.palette.vars.interactiveSecondaryDefaultDefault,
    },
    "&.MuiButton-loading": {
      opacity: 1,
      background: theme.palette.vars.interactiveSecondaryDefaultDefault,
    },
  },
  // Outlined
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
    "&:focus-visible": {
      outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
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
  // Tertiary
  "&.MuiButton-tertariary": {
    background: "none",
    color: theme.palette.vars.interactivePrimaryDefaultDefault,
    "&:hover": {
      color: theme.palette.vars.interactivePrimaryDefaultHover,
    },
    "&:active": {
      color: theme.palette.vars.interactivePrimaryDefaultActive,
    },
    "&:focus-visible": {
      outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
      outlineOffset: "2px",
    },
    "&.Mui-disabled": {
      color: theme.palette.vars.interactivePrimaryDefaultDisabled,
    },
    "&.MuiButton-loading": {
      opacity: 1,
      color: theme.palette.vars.interactivePrimaryDefaultDefault,
    },
  },
  // Negative color — primary
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
    "&:focus-visible": {
      outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
      outlineOffset: "2px",
    },
    "&.MuiButton-loading": {
      opacity: 1,
      color: theme.palette.vars.baseTextInverse,
      background: theme.palette.vars.negativeBackgroundDefault,
    },
  },
  // Negative color — outlined
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
    "&:focus-visible": {
      outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
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
  // Negative color — tertiary
  "&.MuiButton-tertariaryNegative": {
    background: "none",
    color: theme.palette.vars.negativeTextDefault,
    "&:hover": {
      color: theme.palette.vars.negativeBackgroundHover,
    },
    "&:active": {
      color: theme.palette.vars.negativeBackgroundActive,
    },
    "&:focus-visible": {
      outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
      outlineOffset: "2px",
    },
    "&.Mui-disabled": {
      color: theme.palette.vars.negativeBackgroundDisabled,
    },
    "&.MuiButton-loading": {
      opacity: 1,
      color: theme.palette.vars.negativeTextDefault,
    },
  },
})) as ComponentType<MuiButtonProps>;
