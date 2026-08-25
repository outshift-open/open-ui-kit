/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSProperties } from "react";
import type { Theme } from "@mui/material/styles";
import {
  blue300,
  blue500,
  green500,
  grey200,
  greyAlpha40,
  lightOrange500,
  midnightGradientStops as stops,
} from "@/theme/style/color-palette";

export const gaugeWrapper = ({
  height,
  width,
}: {
  height: number;
  width: number;
}) =>
  ({
    display: "inline-block",
    width: `${width}px`,
    height: `${height}px`,
    position: "relative",
  }) as const;

export const barShadow = (theme: Theme, barFill: string): CSSProperties => ({
  filter: `drop-shadow(0 0 4px ${barFill}80) drop-shadow(${theme.shadows[1]})`,
});

export const gaugeLabel: CSSProperties = {
  transform: "translate(-50%, -50%)",
};

export const boxStyle = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translateX(-50%)",
};

/**
 * Arc color for the default gauge when the data item does not name one — the
 * status ramp the `States` widget paints across its 100 / 75 / 50 / 25 gauges.
 *
 * Each band runs from its threshold up to the next, so the ramp holds for any
 * `value` / `maxValue` pair rather than only those four readings. The bounds
 * sit one point above each widget reading so that 75, 50, and 25 land in the
 * band below — the widget's own colors — rather than topping out their band:
 *
 * | Filled  | Token                           | Widget reading |
 * | ------- | ------------------------------- | -------------- |
 * | `>= 76` | `Success/Background/Default`    | 100            |
 * | `>= 51` | `Warning/Background/Default`    | 75             |
 * | `>= 26` | `Severe-Warning/Border/Default` | 50             |
 * | `<  26` | `Negative/Background/Default`   | 25             |
 *
 * The gradient treatment replaces the arc with its own ramp, so this applies
 * to the default gauge only.
 */
export const getGaugeStatusColor = (theme: Theme, filledPercent: number) => {
  const { vars } = theme.palette;

  if (filledPercent >= 76) return vars.successBackgroundDefault;
  if (filledPercent >= 51) return vars.warningBackgroundDefault;
  if (filledPercent >= 26) return vars.severeWarningBorderDefault;

  return vars.negativeBackgroundDefault;
};

/**
 * Design-approved gauge ramps for the gradient treatment.
 *
 * Each key is the `gradient-token` swatch label on the matching widget in
 * Figma `Gauge Chart` (274417:44466), and the paired `Solid` swatch is the
 * ambient glow behind the value:
 *
 * | Key     | Figma token                  | Arc stops                          | Glow             |
 * | ------- | ---------------------------- | ---------------------------------- | ---------------- |
 * | `amber` | `Gradient/Gauge-Arc-Amber`   | FFAE4C 100% → FFAE4C 78%           | `lightOrange500` |
 * | `teal`  | `Gradient/Gauge-Arc-Teal`    | 29FCC4 → 00AF2F                    | `green500`       |
 * | `blue`  | `Gradient/Icon-Subtract-Blue`| 5096FF → `blue500`                 | `blue300`        |
 */
export type GaugeChartGradient = "amber" | "teal" | "blue";

/** Track ring under the gradient arc: the frame's `3C4551` at 40%. */
export const GAUGE_GRADIENT_TRACK_COLOR = greyAlpha40;

/**
 * Arc stops and glow for a gauge ramp. The stops are raw palette values
 * rather than the `gradientGaugeArc*` theme vars because the arc is an SVG
 * stroke — a CSS gradient string cannot feed `<linearGradient>` stops — and
 * the ramp itself is Midnight-only, so design has not diverged it per theme.
 */
export const getGaugeChartGradient = (
  gradient: GaugeChartGradient,
): { from: string; to: string; toOpacity: number; glow: string } => {
  switch (gradient) {
    case "teal":
      return {
        from: stops.gaugeArcTealStart,
        to: stops.gaugeArcTealEnd,
        toOpacity: 1,
        glow: green500,
      };
    case "blue":
      return {
        from: stops.iconSubtractBlue,
        to: blue500,
        toOpacity: 1,
        glow: blue300,
      };
    case "amber":
    default:
      return {
        from: stops.gaugeArcAmber,
        to: stops.gaugeArcAmber,
        toOpacity: 0.78,
        glow: lightOrange500,
      };
  }
};

/**
 * Ambient glow behind the gauge value — Figma `Ellipse 1940`: an 82 × 57.5
 * ellipse with a 65px gaussian blur, centered ~44px below the ring center at
 * the frame's 171.7px gauge. All lengths scale with the gauge width.
 */
export const gaugeGlow = (color: string, width: number): CSSProperties => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  width: `${width * (164 / 171.704)}px`,
  height: `${width * (115 / 171.704)}px`,
  transform: `translate(-50%, calc(-50% + ${width * (44 / 171.704)}px))`,
  borderRadius: "50%",
  background: color,
  filter: `blur(${width * (65.019 / 171.704)}px)`,
  pointerEvents: "none",
});

/** Gauge value in the gradient treatment: 62.4px Inter Medium at 171.7px. */
export const gaugeGradientValue = (width: number): CSSProperties => ({
  fontSize: `${width * (62.418 / 171.704)}px`,
  fontWeight: 500,
  lineHeight: 1.1,
});

/** The `%` suffix: 41.6px at 171.7px, in the frame's muted `grey200`. */
export const gaugeGradientSuffix = (width: number): CSSProperties => ({
  fontSize: `${width * (41.612 / 171.704)}px`,
  fontWeight: 500,
  color: grey200,
});
