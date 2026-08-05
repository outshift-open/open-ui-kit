/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { alpha, styled, type Theme } from "@mui/material";
import type { ComponentType, HTMLAttributes } from "react";
import {
  blue500,
  blueAlpha40,
  lightAlphaOrange40,
  lightOrange600,
  midnightGradientStops,
  night700,
  purple600,
  purpleAlpha40,
} from "@/theme/style/color-palette";
import type { SpiderChartGradient } from "../types/spider-chart.types";

export const StyledTooltip = styled("div")(({ theme }) => ({
  width: "max-content",
  borderRadius: "4px",
  boxShadow: theme.shadows[4],
  color: theme.palette.vars.baseTextInverse,
  backgroundColor: theme.palette.vars.inactiveBackgroundActive,
  padding: "2px 8px",
})) as ComponentType<HTMLAttributes<HTMLDivElement>>;

/**
 * Outline width and vertex-dot geometry for the gradient treatment.
 *
 * Figma `Spider Chart` (274417:44533) is drawn at 1.333× (the widget border
 * reads 1.333px): every data polygon and dot ring carries a 2.678px stroke,
 * i.e. 2px at 1×. The dots read 9.27px across, i.e. 6.95px at 1× — a ring
 * whose inner radius is 2.5 under the shared 2px stroke.
 */
export const SPIDER_GRADIENT_STROKE_WIDTH = 2;
export const SPIDER_GRADIENT_DOT_RADIUS = 2.5;

/**
 * Gradient treatment — Figma `Spider Chart` (274417:44533).
 *
 * The frame pairs each Summary widget with a `gradient-token` swatch. The
 * swatch documents the fill ramp — all four labels already exist as theme
 * gradients — while the outline and dot colors are read off the widget's own
 * data polygon and vertex rings, and every one is a named palette value:
 *
 * | Ramp         | Outline (`stroke`)     | Dot fill                    | Dot ring |
 * | ------------ | ---------------------- | --------------------------- | -------- |
 * | `pinkPurple` | `purple600` (9C4EEA)   | `purpleAlpha40` (B76DFF66)  | outline  |
 * | `cyanBlue`   | `night700` (1C2B7F)    | `blueAlpha40` (0051AF66)    | outline  |
 * | `orangeGold` | `lightOrange600`       | `lightAlphaOrange40`        | outline  |
 * | `blueDark`   | `blue500` (0051AF)     | B9ABEF @ 76%, no palette name | `dataVizBlue` (3B82F6) |
 *
 * Blue-dark is the one variant whose dot rings are not the outline color: the
 * frame strokes them with the ramp's own `3B82F6` stop.
 *
 * They are fixed palette values rather than theme vars for the same reason as
 * the toast glow shadows: the ramp itself is Midnight-only, and design has not
 * diverged the accents per theme.
 */
export const getSpiderChartGradient = (
  theme: Theme,
  gradient: SpiderChartGradient,
): { background: string; stroke: string; dotFill: string; dotStroke: string } => {
  const gradients = theme.palette.gradients;

  switch (gradient) {
    case "cyanBlue":
      return {
        background: gradients.gradientDataVizCyanBlue,
        stroke: night700,
        dotFill: blueAlpha40,
        dotStroke: night700,
      };
    case "orangeGold":
      return {
        background: gradients.gradientDataVizOrangeGold,
        stroke: lightOrange600,
        dotFill: lightAlphaOrange40,
        dotStroke: lightOrange600,
      };
    case "blueDark":
      return {
        background: gradients.gradientDataVizBlueDark,
        stroke: blue500,
        dotFill: alpha("#b9abef", 0.76),
        dotStroke: midnightGradientStops.dataVizBlue,
      };
    case "pinkPurple":
    default:
      return {
        background: gradients.gradientDataVizPinkPurple,
        stroke: purple600,
        dotFill: purpleAlpha40,
        dotStroke: purple600,
      };
  }
};

export const StyledRadarChart = styled("div")({
  width: "100%",
  height: "100%",
  ".recharts-active-dot": {
    "& > *": {
      strokeWidth: "0 !important",
    },
  },
}) as ComponentType<HTMLAttributes<HTMLDivElement>>;
