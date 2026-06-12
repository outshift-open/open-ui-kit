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
import type { PopoverArrowPosition, PopoverSize } from "../types";

const ARROW_SIZE = 16; // px — width of the arrow triangle
const ARROW_HALF = ARROW_SIZE / 2;
const ARROW_HEIGHT = 8; // px — height of the arrow triangle
const ARROW_OFFSET = 12; // px — distance from left/right edge for non-center arrows
const popoverWidthBySize: Record<PopoverSize, string> = {
  medium: "228px",
  large: "360px",
};

/** Outer padding added to the paper to make room for the arrow. */
export const getArrowPadding = (position?: PopoverArrowPosition) => {
  if (!position) return {};
  if (position.startsWith("top")) return { paddingTop: `${ARROW_HEIGHT}px` };
  return { paddingBottom: `${ARROW_HEIGHT}px` };
};

/** Styles for the arrow div rendered inside the paper. */
export const getArrowStyles = (position: PopoverArrowPosition, bg: string) => {
  const base = {
    position: "absolute" as const,
    width: `${ARROW_SIZE}px`,
    height: `${ARROW_HEIGHT}px`,
    background: bg,
    zIndex: 1,
  };

  const horizontal: Record<string, unknown> = position.endsWith("center")
    ? { left: `calc(50% - ${ARROW_HALF}px)` }
    : position.endsWith("left")
      ? { left: `${ARROW_OFFSET}px` }
      : { right: `${ARROW_OFFSET}px` };

  if (position.startsWith("bottom")) {
    return {
      ...base,
      ...horizontal,
      bottom: 0,
      clipPath: `polygon(50% 100%, 0 0, 100% 0)`,
    };
  }
  return {
    ...base,
    ...horizontal,
    top: 0,
    clipPath: `polygon(0 100%, 50% 0, 100% 100%)`,
  };
};

export const getPopoverPaperStyles = (
  theme: Theme,
  size: PopoverSize = "medium",
) => ({
  boxSizing: "border-box",
  width: popoverWidthBySize[size],
  background: theme.palette.vars?.controlBackgroundDefault,
  borderRadius: "6px",
  boxShadow: "none",
  filter:
    theme.palette.mode === "dark"
      ? `drop-shadow(${darkModeCardFloating})`
      : `drop-shadow(${lightModeCardFloating})`,
  overflow: "visible",
});

export const getPopoverContentStyles = (
  theme: Theme,
  featureHighlight = false,
) => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row" as const,
  justifyContent: "flex-end",
  alignItems: "flex-start",
  gap: "16px",
  padding: "12px 16px",
  width: "100%",
  background: theme.palette.vars?.controlBackgroundDefault,
  border: featureHighlight
    ? `2px solid ${theme.palette.vars?.controlBorderActive}`
    : "0px solid transparent",
  borderRadius: "6px",
});

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
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "12px",
  width: "100%",
};

export const closeButtonStyles = {
  padding: "2px",
  marginLeft: "auto",
  flexShrink: 0,
};
