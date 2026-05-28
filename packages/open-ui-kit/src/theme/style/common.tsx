/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { BreakpointsOptions, Theme } from "@mui/material";
import { TOOLBAR_MINIMUM_HEIGHT } from "./constants";
import { typography } from "./typography";

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
