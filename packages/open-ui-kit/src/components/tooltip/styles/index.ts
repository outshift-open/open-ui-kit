/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";

/** Horizontal extent of the arrow for top/bottom placements (px). */
export const TOOLTIP_ARROW_WIDTH = 10;
/** Vertical extent of the arrow for top/bottom placements (px). */
export const TOOLTIP_ARROW_HEIGHT = 6;

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
  height: `${TOOLTIP_ARROW_HEIGHT}px`,
  width: `${TOOLTIP_ARROW_WIDTH}px`,
  "&::before": {
    backgroundColor: "currentColor",
    display: "block",
    height: "100%",
    width: "100%",
  },
});

/** Popper sx overrides so px-sized arrows align with MUI placement logic on every side. */
export const tooltipPopperSx: CSSObject = {
  [`&[data-popper-placement*="bottom"] .MuiTooltip-arrow`]: {
    marginTop: `-${TOOLTIP_ARROW_HEIGHT}px`,
  },
  [`&[data-popper-placement*="top"] .MuiTooltip-arrow`]: {
    marginBottom: `-${TOOLTIP_ARROW_HEIGHT}px`,
  },
  [`&[data-popper-placement*="left"] .MuiTooltip-arrow, &[data-popper-placement*="right"] .MuiTooltip-arrow`]:
    {
      height: `${TOOLTIP_ARROW_WIDTH}px`,
      width: `${TOOLTIP_ARROW_HEIGHT}px`,
    },
  [`&[data-popper-placement*="right"] .MuiTooltip-arrow`]: {
    marginLeft: `-${TOOLTIP_ARROW_HEIGHT}px`,
    marginRight: 0,
  },
  [`&[data-popper-placement*="left"] .MuiTooltip-arrow`]: {
    marginRight: `-${TOOLTIP_ARROW_HEIGHT}px`,
    marginLeft: 0,
  },
  '[dir="rtl"] &[data-popper-placement*="right"] .MuiTooltip-arrow': {
    marginLeft: 0,
    marginRight: `-${TOOLTIP_ARROW_HEIGHT}px`,
  },
  '[dir="rtl"] &[data-popper-placement*="left"] .MuiTooltip-arrow': {
    marginRight: 0,
    marginLeft: `-${TOOLTIP_ARROW_HEIGHT}px`,
  },
};

export const largeTooltipStyles: CSSObject = {
  height: "32px",
  padding: "8px 12px",
};

export const mediumTooltipStyles: CSSObject = {
  height: "20px",
  padding: "2px 8px",
};
