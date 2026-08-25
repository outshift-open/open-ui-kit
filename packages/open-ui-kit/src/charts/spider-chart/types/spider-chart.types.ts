/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactElement, ReactNode } from "react";
import type { ContentType } from "recharts/types/component/Tooltip";

export type DataPoint = {
  /** Label rendered around the radar axis and in the default tooltip. */
  subject: string;
};

export type ExtendedDataPoint = {
  [key: string]: string | number | undefined;
  /** Numeric value rendered by the default `variableA` radar series. */
  variableA?: number;
} & DataPoint;

/**
 * Design-approved data-viz ramps for a radar series.
 *
 * Each key is the `gradient-token` label on the matching widget in Figma
 * `Spider Chart` (274417:44533), camelCased the same way `GradientVarsType`
 * camelCases the Figma path:
 *
 * | Key          | Figma token                     | Theme token                  |
 * | ------------ | ------------------------------- | ---------------------------- |
 * | `pinkPurple` | `Gradient/Data-Viz-Pink-Purple` | `gradientDataVizPinkPurple`  |
 * | `cyanBlue`   | `Gradient/Data-Viz-Cyan-Blue`   | `gradientDataVizCyanBlue`    |
 * | `orangeGold` | `Gradient/Data-Viz-Orange-Gold` | `gradientDataVizOrangeGold`  |
 * | `blueDark`   | `Gradient/Data-Viz-Blue-Dark`   | `gradientDataVizBlueDark`    |
 */
export type SpiderChartGradient =
  | "pinkPurple"
  | "cyanBlue"
  | "orangeGold"
  | "blueDark";

export type RadarType = {
  /** Legend and tooltip name for the radar series. */
  name: string;
  /** Data key read from each item in `data`. */
  dataKey: string;
  /** Solid fill token used under the custom conic gradient shape. */
  fill?: string;
  /** CSS gradient or tokenized background used by the custom radar shape. */
  background?: string;
  /**
   * Applies the gradient treatment: the named data-viz ramp fills the radar
   * area, the ramp's paired accent draws the outline, and each data vertex
   * gets a ring in the same accent over a translucent fill. Sets
   * `background`, `stroke` and `dot` unless those are given explicitly.
   */
  gradient?: SpiderChartGradient;
  /**
   * Outline color for the radar polygon. Defaults to the accent paired with
   * `gradient`; without either, the polygon has no outline.
   */
  stroke?: string;
  /** Renders a ring at each data vertex, stroked in the outline color. */
  dot?: boolean;
  /** Optional Recharts shape override for the radar polygon. */
  shape?: ReactElement;
};

export type Offset = {
  /** Horizontal label offset in pixels. */
  cx: number;
  /** Vertical label offset in pixels. */
  cy: number;
};

export type SpiderChartProps = {
  /** Radar data points. `subject` labels each axis and numeric keys feed radar series. */
  data: ExtendedDataPoint[];
  /** Radar series definitions. Each `dataKey` must exist on the data points. */
  radars: RadarType[];
  /** Distance from the center to the outer radar ring. */
  outerRadius?: number;
  /** Reserved spacing hook for downstream chart compositions. */
  padData?: number;
  /** Called with the active subject when the tooltip area is clicked. */
  onTooltipClick?: (subject: string) => void;
  /** Custom renderer for the default tooltip body. */
  tooltipContent?: (dataPoint: ExtendedDataPoint) => ReactNode;
  /** Shows the default or custom tooltip. */
  showTooltip?: boolean;
  /** Fully custom Recharts tooltip content. */
  customTooltip?: ContentType<number, string>;
  /** Per-label pixel offsets for fine alignment around the chart. */
  labelOffsets?: Offset[];
  /** Distance multiplier between the radar and outer labels. */
  tickBand?: number;
  /** Scales the custom grid and radar line rendering. */
  scale?: number;
};
