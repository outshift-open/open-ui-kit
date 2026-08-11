/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import styled from "@emotion/styled";
import { Box, Typography, useTheme } from "@mui/material";
import { useId, type ReactNode } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  barShadow,
  boxStyle,
  GAUGE_GRADIENT_TRACK_COLOR,
  gaugeGlow,
  gaugeGradientSuffix,
  gaugeGradientValue,
  gaugeLabel,
  gaugeWrapper,
  getGaugeChartGradient,
  getGaugeStatusColor,
  type GaugeChartGradient,
} from "./styles";
import { ChartDataItem, ChartProps } from "../common/types";

export type { GaugeChartGradient } from "./styles";

// Dividers Configuration
const NUM_DIVIDERS = 51;
const SMALL_DIVIDER_LENGTH = 2.2;
const BIG_DIVIDER_LENGTH = 4.4;
const DIVIDER_MARGIN_FROM_CHART = 10;

// Gauge Configuration
const START_ANGLE = 240;
const END_ANGLE = -60;

/*
 * Gradient treatment — Figma `Gauge Chart` (274417:44466).
 *
 * The frame's gauge is a 270° ring from the bottom-left (225°) clockwise to
 * the bottom-right (-45°): a translucent track under a round-capped arc
 * carrying the ramp. Both rings stay `Pie`s, so the treatment shares its
 * rendering path with the default gauge, but each paints its sector through
 * `renderGaugeArc` — see there for why a filled sector cannot carry the
 * frame's round cap.
 *
 * The track deliberately shares the value arc's 5.275px stroke (the frame
 * draws a 2.433px hairline instead) so the ring keeps one line weight through
 * the junction, matching the default gauge's even ring. The stroke width is
 * normalized to the frame's 171.7px gauge so it stays exact at any size.
 *
 * The ring's radius is derived from the box rather than taken from the frame:
 * the frame's 84.18px radius plus half the stroke overflows its own 171.7px
 * bounds (86.8 > 85.85), and an svg clips at its viewport — shaving the
 * stroke flat wherever the ring meets the box edge (90°, 180°, 0°). Insetting
 * the radius by half the stroke plus a pixel of padding keeps the full stroke
 * inside the box all the way around.
 */
const GRADIENT_START_ANGLE = 225;
const GRADIENT_SWEEP_ANGLE = 270;
const GRADIENT_STROKE_RATIO = 5.275 / 171.704;
const GRADIENT_EDGE_PADDING = 1;

/** The sector geometry recharts hands a `Pie`'s shape renderer. */
interface GaugeArcShapeProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
}

/**
 * Draws a `Pie`'s sector as a stroke down the middle of the ring. The sector
 * still owns the geometry; only the way it is painted changes, because a
 * filled sector cannot carry a round cap — recharts approximates one from
 * `cornerRadius` by trimming the outer edge by `asin(cr / mid)` and the inner
 * edge by `asin(cr / (inner - cr))`, two different angles joined by a straight
 * line, which leaves the flat, slightly skewed end the frame does not have.
 * A stroke carries the thickness and both round caps exactly, and neither can
 * drift between the ring's edges along the arc.
 */
const renderGaugeArc = (props: unknown) => {
  // Recharts types a shape renderer's props as `unknown`; what it passes is
  // the resolved sector.
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props as GaugeArcShapeProps;

  const radius = (innerRadius + outerRadius) / 2;
  const point = (angle: number) => {
    const radian = (angle * Math.PI) / 180;
    return `${cx + radius * Math.cos(radian)},${cy - radius * Math.sin(radian)}`;
  };
  // The gauge fills from its start angle downwards, which is clockwise on
  // screen — SVG's `sweep-flag` of 1.
  const largeArc = startAngle - endAngle > 180 ? 1 : 0;

  return (
    <path
      d={`M${point(startAngle)}A${radius},${radius},0,${largeArc},1,${point(endAngle)}`}
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={outerRadius - innerRadius}
    />
  );
};

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * A gauge's single metric. Unlike the shared `ChartDataItem`, `color` is
 * optional — omit it and the default gauge derives the arc color from the
 * value through `getGaugeStatusColor`.
 */
export interface GaugeChartDataItem extends Omit<ChartDataItem, "color"> {
  color?: string;
}

export interface GaugeChartProps extends Omit<ChartProps, "data"> {
  /**
   * Single metric to plot. Widened rather than narrowed to
   * `GaugeChartDataItem[]` because `ExtendedChartProps` intersects these props
   * with the other charts', where the shared union still has to be accepted.
   */
  data: ChartProps["data"] | GaugeChartDataItem[];
  /** Highest target value used to calculate how much of the gauge arc is filled. */
  maxValue?: number;
  /**
   * Applies the gradient treatment: a 270° ring with the named ramp filling
   * the value arc, an ambient glow behind the value, and a muted `%` suffix.
   * Replaces the default arc, dividers, and the data item's `color`.
   */
  variant?: GaugeChartGradient;
  /** Optional content shown below the numeric value inside the gauge. */
  customLabelComponent?: ReactNode;
  /** Optional dimensional overrides for compact or expanded gauge layouts. */
  styleProps?: {
    /** Custom gauge width in pixels. */
    customWidth?: number;
    /** Custom gauge height in pixels. */
    customHeight?: number;
    /** CSS top value for the central numeric label. */
    textTop?: string;
  };
}

export const GaugeChart = ({
  data,
  maxValue = 100,
  variant, // prop for gradiant gauge chart variant eg: amber, teal, blue
  customLabelComponent,
  styleProps,
}: GaugeChartProps) => {
  const theme = useTheme();
  // `useId` wraps its value in colons, which are not valid in a `url(#...)`
  // reference.
  const gradientId = `gauge-gradient-${useId().replace(/:/g, "")}`;

  const [valueItem] = data as GaugeChartDataItem[];
  const clampedValue = Math.min(valueItem.value, maxValue);
  // Scoped to the PieChart below: the gradient treatment paints its arc from
  // the variant's ramp and never reads the data item's color.
  const arcColor =
    valueItem.color ??
    getGaugeStatusColor(theme, (clampedValue / maxValue) * 100);
  const gaugeData = [
    // Main Bar
    {
      value: (clampedValue / maxValue) * 100,
      fill: arcColor,
    },
    // Background Bar
    {
      value: ((maxValue - clampedValue) / maxValue) * 100, // The remaining part to fill with background
      fill: theme.palette.vars.controlIconDisabled,
    },
  ];

  // Gauge Configuration
  const width = styleProps?.customWidth || 132;
  const height = styleProps?.customHeight || 132;
  const cx = width / 2;
  const cy = height / 2;
  const chartWidth = 9;
  const outerRadius = width / 2;
  const innerRadius = outerRadius - chartWidth;

  // Create all dividers in their appropriate place
  const renderDividers = () => (
    <>
      {Array.from({ length: NUM_DIVIDERS }).map((_, i) => {
        const strokeWidth = i % 5 === 0 ? 1.2 : 0.4;
        const length = i % 5 === 0 ? BIG_DIVIDER_LENGTH : SMALL_DIVIDER_LENGTH;
        const margin =
          i % 5 === 0
            ? DIVIDER_MARGIN_FROM_CHART + SMALL_DIVIDER_LENGTH
            : DIVIDER_MARGIN_FROM_CHART;

        // Calculate the angle where the divider will be at
        const angle =
          START_ANGLE + (i * (END_ANGLE - START_ANGLE)) / (NUM_DIVIDERS - 1);
        const radian = (angle * Math.PI) / 180;
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);

        // Calculate divider line start and end points
        const x1 = cx + (innerRadius - margin) * cos;
        const y1 = cy - (innerRadius - margin) * sin;
        const x2 = x1 + length * cos;
        const y2 = y1 - length * sin;

        return (
          <line
            key={`gauge-divider-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={theme.palette.vars.inactiveBackgroundDefault}
            strokeWidth={strokeWidth}
          />
        );
      })}
    </>
  );

  if (variant) {
    const config = getGaugeChartGradient(variant);
    const strokeThickness = width * GRADIENT_STROKE_RATIO;
    const arcRadius =
      (Math.min(width, height) - strokeThickness) / 2 - GRADIENT_EDGE_PADDING;
    const valueSweep = (clampedValue / maxValue) * GRADIENT_SWEEP_ANGLE;

    return (
      <StyledResponsiveContainer width="100%" height="100%">
        <div style={gaugeWrapper({ height, width })}>
          <div style={gaugeGlow(config.glow, width)} />
          <PieChart width={width} height={height}>
            <defs>
              {/* Figma runs the ramp horizontally across the value arc's own
                  bounding box, which is what objectBoundingBox units give the
                  stroked arc. */}
              <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
                <stop stopColor={config.from} />
                <stop
                  offset="1"
                  stopColor={config.to}
                  stopOpacity={config.toOpacity}
                />
              </linearGradient>
            </defs>
            <Pie
              data={[{ value: 1, fill: GAUGE_GRADIENT_TRACK_COLOR }]}
              cx="50%"
              cy="50%"
              startAngle={GRADIENT_START_ANGLE}
              endAngle={GRADIENT_START_ANGLE - GRADIENT_SWEEP_ANGLE}
              innerRadius={arcRadius - strokeThickness / 2}
              outerRadius={arcRadius + strokeThickness / 2}
              isAnimationActive={false}
              activeIndex={0}
              activeShape={renderGaugeArc}
              dataKey="value"
              strokeWidth={0}
            />
            {valueSweep > 0 && (
              <Pie
                data={[{ value: 1, fill: `url(#${gradientId})` }]}
                cx="50%"
                cy="50%"
                startAngle={GRADIENT_START_ANGLE}
                endAngle={GRADIENT_START_ANGLE - valueSweep}
                innerRadius={arcRadius - strokeThickness / 2}
                outerRadius={arcRadius + strokeThickness / 2}
                isAnimationActive={false}
                activeIndex={0}
                activeShape={renderGaugeArc}
                dataKey="value"
                strokeWidth={0}
              />
            )}
          </PieChart>
          <Typography
            variant="h4"
            position="absolute"
            top={styleProps?.textTop || "50%"}
            left="50%"
            color={theme.palette.vars.baseTextDefault}
            style={{ ...gaugeLabel, ...gaugeGradientValue(width) }}
          >
            {Math.round(valueItem.value)}
            <span style={gaugeGradientSuffix(width)}>%</span>
          </Typography>
          <Box sx={boxStyle}>
            {customLabelComponent && customLabelComponent}
          </Box>
        </div>
      </StyledResponsiveContainer>
    );
  }

  return (
    <StyledResponsiveContainer width="100%" height="100%">
      <div style={gaugeWrapper({ height, width })}>
        <PieChart width={width} height={height}>
          <Pie
            data={gaugeData}
            cx="50%"
            cy="50%"
            startAngle={START_ANGLE}
            endAngle={END_ANGLE}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            dataKey="value"
            strokeWidth={0}
          >
            <Cell
              key={`gauge-main-bar`}
              strokeLinecap="round"
              style={barShadow(theme, gaugeData[0].fill)}
            />
            <Cell key={`gauge-background-bar`} strokeLinecap="round" />
          </Pie>
          {renderDividers()}
        </PieChart>
        <Typography
          variant="h4"
          position="absolute"
          top={styleProps?.textTop || "50%"}
          left="50%"
          color={theme.palette.vars.baseTextDefault}
          style={gaugeLabel}
        >
          {Math.round(valueItem.value)}
        </Typography>
        <Box sx={boxStyle}>{customLabelComponent && customLabelComponent}</Box>
      </div>
    </StyledResponsiveContainer>
  );
};
