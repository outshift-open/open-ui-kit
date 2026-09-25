/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Tooltip,
  TooltipProps,
} from "recharts";
import type {
  HorizontalCoordinatesGenerator,
  VerticalCoordinatesGenerator,
} from "recharts/types/cartesian/CartesianGrid";
import { ChartDataItem, ChartProps } from "../common/types";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import {
  BAR_CHART_Y_AXIS_WIDTH_PX,
  getBarChartAxisTickStyles,
  getBarChartGridColor,
  styles,
} from "./styles";

/** Bars never get thinner than this; past that point the chart scrolls instead. */
export const MIN_BAR_SIZE_PX = 18;
/** Gap between neighbouring bars — constant, whatever the bar width. */
export const SPACE_BETWEEN_BARS_PX = 8;
const BAR_RADIUS: [number, number, number, number] = [4, 4, 0, 0];
/** The plot is divided into quarters in both directions. */
const GRID_FRACTIONS = [0, 0.25, 0.5, 0.75, 1];
/**
 * Lets bars/tooltips escape the chart's SVG (default UA overflow is `hidden`).
 * `overflow` is a valid passthrough SVG attribute on the root <svg>, but recharts'
 * CategoricalChartProps type doesn't declare it, so it's spread in rather than
 * passed as a direct JSX prop to avoid a type error.
 */
const SVG_OVERFLOW_VISIBLE = { overflow: "visible" } as const;

export interface BarChartLayout {
  /** Width of each bar. */
  barSize: number;
  /**
   * Total width of the plot and its axis column when the bars do not fit the
   * viewport at `MIN_BAR_SIZE_PX` — the chart then scrolls horizontally.
   * `undefined` when everything fits and the chart fills its container.
   */
  contentWidth: number | undefined;
}

/**
 * Bar width and scroll extent for `itemCount` bars in a viewport `viewportWidth`
 * wide.
 *
 * Recharts lays bars out across the plot only — the value-axis column is not
 * part of it — so each bar's slot is the plot width divided by the item count.
 * The bar takes its slot minus a constant gap, which keeps the spacing uniform
 * as bars grow; once that would drop below the minimum width, bars stay at the
 * minimum and the content grows past the viewport instead.
 */
export const getBarChartLayout = (
  viewportWidth: number,
  itemCount: number,
): BarChartLayout => {
  if (!viewportWidth || itemCount === 0) {
    return { barSize: MIN_BAR_SIZE_PX, contentWidth: undefined };
  }

  const plotWidth = Math.max(0, viewportWidth - BAR_CHART_Y_AXIS_WIDTH_PX);
  const fittedBarSize = plotWidth / itemCount - SPACE_BETWEEN_BARS_PX;

  if (fittedBarSize >= MIN_BAR_SIZE_PX) {
    return { barSize: fittedBarSize, contentWidth: undefined };
  }

  return {
    barSize: MIN_BAR_SIZE_PX,
    contentWidth:
      BAR_CHART_Y_AXIS_WIDTH_PX +
      itemCount * (MIN_BAR_SIZE_PX + SPACE_BETWEEN_BARS_PX),
  };
};

const quarterRows: HorizontalCoordinatesGenerator = ({ offset }) =>
  GRID_FRACTIONS.map((f) => (offset.top ?? 0) + (offset.height ?? 0) * f);

const quarterColumns: VerticalCoordinatesGenerator = ({ offset }) =>
  GRID_FRACTIONS.map((f) => (offset.left ?? 0) + (offset.width ?? 0) * f);

const DefaultTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  const theme = useTheme();

  if (!active || !payload?.length) {
    return null;
  }

  return (
    <Stack sx={styles(theme).tooltip}>
      <Typography variant="caption" sx={styles(theme).tooltipTypography}>
        {payload[0].value} {payload[0].payload.name}
      </Typography>
    </Stack>
  );
};

export interface BarChartProps extends ChartProps {
  /** Called when a data bar is selected. Use it for drill-down interactions. */
  handleClick?: (item: ChartDataItem) => void;
  /** Value at the top of the scale. Defaults to the largest value in `data`. */
  maxValue?: number | undefined;
  /** Formats the scale labels at the bottom and top of the value axis. */
  valueFormatter?: ((value: number) => string) | undefined;
  /** Labels under the start and end of the plot. Defaults to the first and last item names. */
  categoryLabels?: [start: string, end: string] | undefined;
}

export const BarChart = ({
  data,
  handleClick,
  showTooltip,
  customTooltip,
  maxValue,
  valueFormatter = String,
  categoryLabels,
}: BarChartProps) => {
  const theme = useTheme();
  const items = data as ChartDataItem[];
  const gridColor = getBarChartGridColor(theme);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  // Measured on the viewport (the box the consumer sizes), not on the chart: once
  // the chart scrolls it is wider than its container, and measuring it would feed
  // its own width back into the layout.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry) setViewportWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { barSize, contentWidth } = useMemo(
    () => getBarChartLayout(viewportWidth, items.length),
    [viewportWidth, items.length],
  );
  const sx = styles(theme, contentWidth);

  const scaleMax = useMemo(() => {
    const max =
      maxValue ?? Math.max(0, ...items.map((item) => Number(item.value) || 0));
    // Avoid a zero-width domain, which would leave the axis with a duplicate [0, 0] tick.
    return max || 1;
  }, [maxValue, items]);

  const [startLabel, endLabel] = categoryLabels ?? [
    items[0]?.name ?? "",
    items.length > 1 ? items[items.length - 1].name : "",
  ];

  return (
    <Box ref={viewportRef} sx={sx.root} data-testid="bar-chart">
      <Box sx={sx.content} data-testid="bar-chart-content">
        <Box sx={sx.plot}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={items}
              barSize={barSize}
              margin={{ top: 8, right: 0, bottom: 0, left: 0 }}
              {...SVG_OVERFLOW_VISIBLE}
            >
              {/* Dotted value lines, solid time divisions — both on quarters, not per bar. */}
              <CartesianGrid
                vertical={false}
                stroke={gridColor}
                strokeDasharray="2 2"
                horizontalCoordinatesGenerator={quarterRows}
              />
              <CartesianGrid
                horizontal={false}
                stroke={gridColor}
                verticalCoordinatesGenerator={quarterColumns}
              />
              <XAxis dataKey="name" hide />
              <YAxis
                width={BAR_CHART_Y_AXIS_WIDTH_PX}
                type="number"
                domain={[0, scaleMax]}
                ticks={[0, scaleMax]}
                allowDataOverflow
                axisLine={false}
                tickLine={false}
                tickSize={0}
                tickMargin={12}
                tick={getBarChartAxisTickStyles(theme)}
                tickFormatter={valueFormatter}
              />
              <Bar dataKey="value" radius={BAR_RADIUS}>
                {items.map((dataItem, i) => (
                  <Cell
                    key={`${dataItem.name}-${i}`}
                    fill={dataItem.color}
                    {...(handleClick && {
                      cursor: "pointer",
                      onClick: () => handleClick(dataItem),
                    })}
                  />
                ))}
              </Bar>
              {showTooltip && (
                <Tooltip
                  cursor={false}
                  allowEscapeViewBox={{ x: true, y: true }}
                  content={customTooltip ?? DefaultTooltip}
                />
              )}
            </RechartsBarChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={sx.categoryLabels} data-testid="bar-chart-labels">
          <span>{startLabel}</span>
          <span>{endLabel}</span>
        </Box>
      </Box>
    </Box>
  );
};
