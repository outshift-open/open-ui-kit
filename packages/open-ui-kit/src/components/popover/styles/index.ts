/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import {
  lightModeCardFloating,
  darkModeCardFloating,
} from "@/theme/style/color-palette";
import type { PopoverPlacement, PopoverSize } from "../types";
import { PopoverArrowAxisAlign, PopoverPlacementSide } from "../types";
import {
  getArrowAxisAlign,
  getOppositePlacementSide,
  getPlacementSide,
} from "../utils/placement";
import { POPOVER_ARROW_HEIGHT } from "../utils/placement/constants";

/** Panel edge that faces the anchor; placement names use the opposite panel edge. */
const getArrowEdgeSide = (placement: PopoverPlacement) =>
  getOppositePlacementSide(getPlacementSide(placement));

const ARROW_SIZE = 16; // px — width of the arrow triangle
const ARROW_HALF = ARROW_SIZE / 2;
const ARROW_HEIGHT = POPOVER_ARROW_HEIGHT;
const ARROW_OFFSET = 12; // px — distance from edge for non-center arrows
const popoverWidthBySize: Record<PopoverSize, string> = {
  medium: "228px",
  large: "360px",
};

const popoverContentLayoutBySize: Record<
  PopoverSize,
  { padding: string; gap: string }
> = {
  medium: { padding: "12px 16px", gap: "16px" },
  large: { padding: "16px 20px", gap: "20px" },
};

/** Paper margin so the protruding arrow sits in the gap toward the anchor. */
export const getPaperArrowOffset = (
  placement: PopoverPlacement | undefined,
  anchorOrigin: { vertical: string | number; horizontal?: string | number } = {
    vertical: PopoverPlacementSide.Top,
  },
  transformOrigin: {
    vertical: string | number;
    horizontal?: string | number;
  } = {
    vertical: PopoverPlacementSide.Top,
  },
) => {
  if (!placement) return {};

  const side = getPlacementSide(placement);

  if (
    side === PopoverPlacementSide.Top &&
    anchorOrigin.vertical === PopoverPlacementSide.Top &&
    transformOrigin.vertical === PopoverPlacementSide.Bottom
  ) {
    return { marginTop: `-${ARROW_HEIGHT}px` };
  }

  if (
    side === PopoverPlacementSide.Bottom &&
    anchorOrigin.vertical === PopoverPlacementSide.Bottom &&
    transformOrigin.vertical === PopoverPlacementSide.Top
  ) {
    return { marginTop: `${ARROW_HEIGHT}px` };
  }

  if (
    side === PopoverPlacementSide.Left &&
    anchorOrigin.horizontal === PopoverPlacementSide.Left &&
    transformOrigin.horizontal === PopoverPlacementSide.Right
  ) {
    return { marginLeft: `-${ARROW_HEIGHT}px` };
  }

  if (
    side === PopoverPlacementSide.Right &&
    anchorOrigin.horizontal === PopoverPlacementSide.Right &&
    transformOrigin.horizontal === PopoverPlacementSide.Left
  ) {
    return { marginLeft: `${ARROW_HEIGHT}px` };
  }

  return {};
};

/** Styles for the arrow div rendered inside the paper. */
export const getArrowStyles = (placement: PopoverPlacement, bg: string) => {
  const edgeSide = getArrowEdgeSide(placement);
  const align = getArrowAxisAlign(placement);

  const base = {
    position: "absolute" as const,
    background: bg,
    zIndex: 2,
    pointerEvents: "none" as const,
  };

  const horizontal: Record<string, unknown> =
    align === PopoverArrowAxisAlign.Center
      ? { left: `calc(50% - ${ARROW_HALF}px)` }
      : align === PopoverArrowAxisAlign.Left
        ? { left: `${ARROW_OFFSET}px` }
        : { right: `${ARROW_OFFSET}px` };

  const vertical: Record<string, unknown> =
    align === PopoverArrowAxisAlign.Center
      ? { top: `calc(50% - ${ARROW_HALF}px)` }
      : align === PopoverArrowAxisAlign.Top
        ? { top: `${ARROW_OFFSET}px` }
        : { bottom: `${ARROW_OFFSET}px` };

  if (edgeSide === PopoverPlacementSide.Bottom) {
    return {
      ...base,
      ...horizontal,
      width: `${ARROW_SIZE}px`,
      height: `${ARROW_HEIGHT}px`,
      bottom: `-${ARROW_HEIGHT}px`,
      clipPath: `polygon(50% 100%, 0 0, 100% 0)`,
    };
  }

  if (edgeSide === PopoverPlacementSide.Top) {
    return {
      ...base,
      ...horizontal,
      width: `${ARROW_SIZE}px`,
      height: `${ARROW_HEIGHT}px`,
      top: `-${ARROW_HEIGHT}px`,
      clipPath: `polygon(0 100%, 50% 0, 100% 100%)`,
    };
  }

  if (edgeSide === PopoverPlacementSide.Left) {
    return {
      ...base,
      ...vertical,
      width: `${ARROW_HEIGHT}px`,
      height: `${ARROW_SIZE}px`,
      left: `-${ARROW_HEIGHT}px`,
      clipPath: `polygon(0 50%, 100% 0, 100% 100%)`,
    };
  }

  return {
    ...base,
    ...vertical,
    width: `${ARROW_HEIGHT}px`,
    height: `${ARROW_SIZE}px`,
    right: `-${ARROW_HEIGHT}px`,
    clipPath: `polygon(100% 50%, 0 0, 0 100%)`,
  };
};

export const getPopoverPaperStyles = (
  theme: Theme,
  size: PopoverSize = "medium",
) => {
  const width = popoverWidthBySize[size];

  return {
    boxSizing: "border-box",
    width,
    minWidth: width,
    maxWidth: width,
    background: theme.palette.vars?.controlBackgroundDefault,
    borderRadius: "6px",
    boxShadow: "none",
    filter:
      theme.palette.mode === "dark"
        ? `drop-shadow(${darkModeCardFloating})`
        : `drop-shadow(${lightModeCardFloating})`,
    overflow: "visible",
    overflowX: "visible",
    overflowY: "visible",
  };
};

/** Positioning context for the arrow; must not be applied to the Popper-positioned paper. */
export const popoverSurfaceStyles = {
  position: "relative" as const,
  boxSizing: "border-box" as const,
  width: "100%",
  overflow: "visible",
};

export const getPopoverContentStyles = (
  theme: Theme,
  featureHighlight = false,
  size: PopoverSize = "medium",
) => {
  const layout = popoverContentLayoutBySize[size];

  return {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: layout.gap,
    padding: layout.padding,
    width: "100%",
    background: theme.palette.vars?.controlBackgroundDefault,
    border: featureHighlight
      ? `2px solid ${theme.palette.vars?.controlBorderActive}`
      : "0px solid transparent",
    borderRadius: "6px",
  };
};

export const popoverColumnStyles = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  gap: "12px",
  flex: 1,
  minWidth: 0,
};

export const popoverTextStyles = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  gap: "4px",
  alignSelf: "stretch",
};

export const popoverIconStyles = {
  display: "flex",
  alignItems: "flex-start",
  flexShrink: 0,
  paddingTop: "1px",
};

export const popoverHeaderStyles = {
  display: "flex",
  flexDirection: "row" as const,
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "8px",
};

export const popoverTitleStyles = (theme: Theme) => ({
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0px",
  color: theme.palette.vars?.baseTextStrong,
});

export const popoverBodyStyles = (theme: Theme) => ({
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px",
  color: theme.palette.vars?.baseTextDefault,
});

export const popoverActionsStyles = {
  display: "flex",
  flexDirection: "row" as const,
  flexWrap: "wrap" as const,
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  "& .MuiButton-root": {
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
};

export const closeButtonStyles = {
  padding: "2px",
  marginLeft: "auto",
  flexShrink: 0,
};
