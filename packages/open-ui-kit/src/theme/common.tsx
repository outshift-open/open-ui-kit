/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { BreakpointsOptions, Components, Theme } from "@mui/material";
import type { TypographyVariantsOptions } from "@mui/material/styles";
import { KeyboardArrowUp } from "../custom-icons";
import { TOOLBAR_MINIMUM_HEIGHT } from "./constants";

export const typography: TypographyVariantsOptions = {
  fontFamily: "Inter, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "60px",
    lineHeight: "64px",
  },
  h2: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "52px",
  },
  h3: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "44px",
  },
  h4: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "36px",
  },
  h5: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
  },
  h6: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "28px",
  },
  headingSubSection: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "22px",
  },
  subtitle1: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.15px",
  },
  subtitle2: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.1px",
  },
  body1: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
  },
  body1Semibold: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0px",
  },
  body2: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
  },
  body2Semibold: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0px",
  },
  caption: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.4px",
  },
  captionMedium: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.4px",
  },
  captionSemibold: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0",
  },
  button: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "16px",
    textTransform: "none",
  },
  overline: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "10px",
    lineHeight: "16px",
    letterSpacing: "0.4px",
  },
};

export const getInputSharedStyle = (theme: Theme): Components => {
  const underline = { ...(typography.body2 as object) };

  return {
    MuiInput: {
      styleOverrides: {
        root: {
          padding: "8px 16px 8px 16px",
          height: "40px",
          marginTop: "24px",
          "label+&": {
            marginTop: "24px",
          },
          "&.Mui-disabled": {
            "& .MuiInputAdornment-root": {
              color: theme.palette.text.disabled,
            },
          },
        },
        input: {
          padding: "0px",
        },
        sizeSmall: {
          height: "32px",
        },
        multiline: {
          height: "max-content",
        },
        underline,
      },
    },
    MuiInputLabel: {},
    MuiFormHelperText: {},
    MuiFilledInput: {},
    MuiOutlinedInput: {},
    MuiTextField: {},
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <KeyboardArrowUp />,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "#mrt-rows-per-page": {
            margin: "0px 5px 0px 0px",
          },
          "& > .MuiBox-root": {
            "& > .MuiBox-root": {
              "& > .MuiBox-root": {
                width: "100%",
                "& > .MuiBox-root": {
                  width: "inherit",
                },
              },
            },
          },
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
  };
};

export const listItemCommonStyles = (theme: Theme) => {
  return {
    ...(typography.body1 as object),
    color: theme.palette.grey[50],
  };
};

/** Pixel widths for each named breakpoint (required keys; aligns with `BreakpointOverrides` in `types/theme.ts`). */
export type AppBreakpointValues = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

/** Single source of truth for breakpoint widths (px). Use this instead of `breakpoints.values?.x ?? n`. */
export const breakpointValues: AppBreakpointValues = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920,
  xxl: 2560,
};

export const breakpoints: BreakpointsOptions = {
  keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
  values: breakpointValues,
};

export const commonMixins = {
  toolbar: {
    minHeight: TOOLBAR_MINIMUM_HEIGHT,
    [`@media (min-width:${breakpointValues.xs}px) and (orientation: landscape)`]:
      {
        minHeight: TOOLBAR_MINIMUM_HEIGHT,
      },
    [`@media (min-width:${breakpointValues.sm}px)`]: {
      minHeight: TOOLBAR_MINIMUM_HEIGHT,
    },
  },
};

export const snackbarTopRightCommonStyles = {
  top: "76px",
  right: "24px",
};

export const commonCheckboxStyles = {
  padding: 0,
  borderRadius: 4,
  "& + *": {
    marginLeft: 8,
  },
};
