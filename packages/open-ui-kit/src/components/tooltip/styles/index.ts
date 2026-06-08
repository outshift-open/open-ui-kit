/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";

export const baseTooltipStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.captionMedium,
  backgroundColor: theme.palette.vars.inactiveBackgroundActive,
  borderRadius: "4px",
  boxSizing: "border-box",
  color: theme.palette.vars.baseTextInverse,
  maxWidth: "none",
});

export const tooltipArrowStyles = (theme: Theme): CSSObject => ({
  color: theme.palette.vars.inactiveBackgroundActive,
  height: "6px",
  width: "10px",
  "&::before": {
    backgroundColor: "currentColor",
    borderRadius: "1px",
    height: "6px",
    width: "10px",
  },
});

export const largeTooltipStyles: CSSObject = {
  height: "32px",
  padding: "8px 12px",
};

export const mediumTooltipStyles: CSSObject = {
  height: "20px",
  padding: "2px 8px",
};
