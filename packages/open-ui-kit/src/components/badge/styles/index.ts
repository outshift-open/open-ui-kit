/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import type { BadgeShape, BadgeSize, BadgeType } from "../types";

export const BADGE_TYPES = [
  "default",
  "excellent",
  "neutral",
  "error",
  "warning",
  "info",
  "success",
  "inactive",
  "moderate",
  "severe",
] as const satisfies readonly BadgeType[];

export const getBadgeBackgroundColor = (
  theme: Theme,
  type: BadgeType = "default",
) => {
  switch (type) {
    case "excellent":
      return theme.palette.vars.excellentBackgroundDefault;
    case "neutral":
      return theme.palette.vars.neutralBackgroundDefault;
    case "error":
      return theme.palette.vars.negativeBackgroundDefault;
    case "warning":
      return theme.palette.vars.warningBackgroundDefault;
    case "info":
      return theme.palette.vars.infoBackgroundDefault;
    case "success":
      return theme.palette.vars.successBackgroundDefault;
    case "inactive":
      return theme.palette.vars.inactiveBackgroundDefault;
    case "moderate":
      return theme.palette.vars.moderateBackgroundDefault;
    case "severe":
      return theme.palette.vars.severeWarningBackgroundDefault;
    case "default":
    default:
      return theme.palette.vars.controlBackgroundMedium;
  }
};

export const getBadgeTextColor = (
  theme: Theme,
  type: BadgeType = "default",
) => {
  switch (type) {
    case "excellent":
      return theme.palette.vars.excellentTextInDefault;
    case "neutral":
      return theme.palette.vars.neutralTextInDefault;
    case "error":
      return theme.palette.vars.negativeTextInDefault;
    case "info":
      return theme.palette.vars.infoTextInDefault;
    case "success":
      return theme.palette.vars.successTextInDefault;
    case "severe":
      return theme.palette.vars.severeWarningTextInDefault;
    case "inactive":
      return theme.palette.mode === "dark"
        ? theme.palette.vars.baseTextDark
        : theme.palette.vars.inactiveTextInDefault;
    case "warning":
    case "moderate":
      return theme.palette.vars.baseTextDark;
    case "default":
    default:
      return theme.palette.mode === "dark"
        ? theme.palette.vars.baseTextStrong
        : theme.palette.vars.baseTextDark;
  }
};

export const BADGE_SHAPES = [
  "circle",
  "triangleUp",
  "triangleDown",
  "dash",
] as const satisfies readonly BadgeShape[];

export const BADGE_SIZES = [
  "small",
  "medium",
  "large",
] as const satisfies readonly BadgeSize[];

/**
 * Marker footprints in px, matching the Spark library Badge page.
 *
 * Medium matches the Figma variants Dot Large (8x8), Triangle / Triangle-
 * Inverse (8x8) and Line (8x2); small matches Dot (6x6) with the other shapes
 * reduced to the same 6px step.
 *
 * Large has no counterpart in the Figma file, which stops at 8px. It extends
 * the 6 -> 8 step to 12 for denser-than-design contexts. If the library later
 * defines a large marker, these are the values to reconcile.
 */
const BADGE_SHAPE_DIMENSIONS: Record<
  BadgeShape,
  Record<BadgeSize, { width: number; height: number }>
> = {
  circle: {
    small: { width: 6, height: 6 },
    medium: { width: 8, height: 8 },
    large: { width: 12, height: 12 },
  },
  triangleUp: {
    small: { width: 6, height: 6 },
    medium: { width: 8, height: 8 },
    large: { width: 12, height: 12 },
  },
  triangleDown: {
    small: { width: 6, height: 6 },
    medium: { width: 8, height: 8 },
    large: { width: 12, height: 12 },
  },
  dash: {
    small: { width: 6, height: 2 },
    medium: { width: 8, height: 2 },
    large: { width: 12, height: 2 },
  },
};

/**
 * Clip paths keep each shape a single painted box, so every `BadgeType`
 * background token applies unchanged. The older CSS border-triangle trick
 * would need the colour restated as a border colour and could not inherit.
 */
const BADGE_SHAPE_CLIP_PATHS: Partial<Record<BadgeShape, string>> = {
  // Apex centred on the top edge, base spanning the bottom.
  triangleUp: "polygon(50% 0%, 100% 100%, 0% 100%)",
  // Base spanning the top edge, apex centred along the bottom.
  triangleDown: "polygon(0% 0%, 100% 0%, 50% 100%)",
};

const getBadgeShapeBorderRadius = (shape: BadgeShape, height: number) => {
  switch (shape) {
    case "circle":
      return "50%";
    // Rounded caps on the rule, which at 2px means a half-height radius.
    case "dash":
      return `${height / 2}px`;
    default:
      return 0;
  }
};

/**
 * Gap between a shape marker and its label, from the Spark Badge/Basic frame.
 * The label sits outside the marker, so this is the only spacing the pair has.
 */
const BADGE_SHAPE_LABEL_GAP = 8;

/**
 * Wrapper for a shape marker that carries a label. Inline-flex so the pair
 * still behaves like a single marker in the row it sits in, and centred so the
 * marker tracks the 16px label line box rather than its own smaller height.
 */
export const getBadgeShapeRootStyles = () => ({
  display: "inline-flex",
  alignItems: "center",
  gap: `${BADGE_SHAPE_LABEL_GAP}px`,
});

/**
 * The label is copy sitting next to the marker, not text inside a filled pill,
 * so it takes the page text token rather than the per-type `TextInDefault`
 * colours used by the badge pill.
 */
export const getBadgeShapeLabelStyles = (theme: Theme) => ({
  color: theme.palette.vars.baseTextStrong,
  letterSpacing: 0,
  whiteSpace: "nowrap" as const,
});

export const getBadgeShapeStyles = (
  theme: Theme,
  shape: BadgeShape,
  size: BadgeSize = "medium",
  type: BadgeType = "default",
) => {
  const { width, height } = BADGE_SHAPE_DIMENSIONS[shape][size];

  return {
    display: "inline-block",
    flexShrink: 0,
    boxSizing: "border-box" as const,
    width: `${width}px`,
    height: `${height}px`,
    minWidth: `${width}px`,
    padding: 0,
    backgroundColor: getBadgeBackgroundColor(theme, type),
    borderRadius: getBadgeShapeBorderRadius(shape, height),
    clipPath: BADGE_SHAPE_CLIP_PATHS[shape],
  };
};
