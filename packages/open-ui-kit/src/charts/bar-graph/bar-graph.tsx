/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useRef, useState, useEffect } from "react";
import {
  getBarGraphGridColor,
  getBarGraphLegendStyles,
  graphStyles,
} from "./styles";
import { BarGraphTooltip } from "./bar-graph-tooltip";
import { YAxisTick } from "./y-axis-tick";
import { BarGraphItem, ChartProps } from "../common/types";
import type { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
import { CustomBar } from "./custom-bar";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const BAR_SIZE_PX = 8;
const SPACE_BETWEEN_BARS_PX = 24;
const EXTRA_GRAPH_HEIGHT_PX = 110;
const MIN_GRAPH_HEIGHT_PX = 261;

const DEFAULT_HEADERS = ["Type", "Info"];

export interface BarProps {
  /** Data key to read from each item's `barData` object. */
  key: string;
  /** Fill color for the stacked bar segment. Use a theme palette token. */
  color: string;
}

export interface BarGraphProps extends ChartProps {
  /** Column header labels rendered above the item labels and stacked bars. */
  headers?: string[];
  /** Stacked bar segment definitions. Each key must exist in every item's `barData`. */
  bars?: BarProps[];
  /** Shows the category legend below the graph. */
  showLegend?: boolean;
  /** Called when the Recharts graph receives a click event. */
  handleClick?: CategoricalChartFunc;
}

export const BarGraph = ({
  data,
  showLegend = true,
  showTooltip = true,
  bars = [],
  headers = DEFAULT_HEADERS,
  customTooltip,
  handleClick,
}: BarGraphProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [yAxisWidth, setYAxisWidth] = useState(0);

  const theme = useTheme();

  const barGraphItems = data as BarGraphItem[];

  const containerHeight: number =
    EXTRA_GRAPH_HEIGHT_PX +
    Math.round(barGraphItems.length * (BAR_SIZE_PX + SPACE_BETWEEN_BARS_PX));

  const graphHeight: number = Math.max(
    MIN_GRAPH_HEIGHT_PX,
    containerHeight - 10,
  );

  const [header0, header1] = headers;

  useEffect(() => {
    const el = chartContainerRef.current;
    if (!el) return;

    const updateYAxisWidth = () => {
      const chartWidth = el.getBoundingClientRect().width;
      setYAxisWidth(chartWidth * 0.43);
    };

    updateYAxisWidth();

    const ro = new ResizeObserver(updateYAxisWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <Stack
      ref={chartContainerRef}
      width="100%"
      height="100%"
      sx={{ paddingBottom: "16px", tspan: { fontSize: "10px" } }}
    >
      <Stack direction="row" sx={{ paddingBottom: "10px" }}>
        <Typography
          variant={"button"}
          sx={graphStyles(theme).headerText}
          width={yAxisWidth + 8}
        >
          {header0}
        </Typography>
        <Typography variant={"button"} sx={graphStyles(theme).headerText}>
          {header1}
        </Typography>
      </Stack>
      <div
        style={{
          ...graphStyles(theme).graphContainer,
          height: containerHeight,
        }}
      >
        <ResponsiveContainer height={graphHeight} {...{ overflow: "visible" }}>
          <BarChart
            layout="vertical"
            data={barGraphItems}
            barSize={BAR_SIZE_PX}
            margin={{
              right: 8,
              left: yAxisWidth - 52,
            }}
            onClick={handleClick}
          >
            <CartesianGrid
              strokeDasharray="5"
              horizontal={false}
              stroke={getBarGraphGridColor(theme)}
            />
            <XAxis
              type="number"
              stroke={getBarGraphGridColor(theme)}
              tickLine={false}
              tick={graphStyles(theme).xAxisTick}
              height={showLegend ? 30 : 16}
            />
            <YAxis
              dataKey={(data) => data.name}
              type="category"
              stroke={getBarGraphGridColor(theme)}
              tickLine={false}
              tick={(props) => {
                const tickData = barGraphItems[props.payload.index];
                const element = tickData.value;
                return (
                  <YAxisTick
                    yAxisWidth={yAxisWidth}
                    x={props.x}
                    y={props.y}
                    value={element}
                  />
                );
              }}
            />
            {showTooltip && (
              <Tooltip
                content={customTooltip ?? <BarGraphTooltip />}
                wrapperStyle={{ zIndex: 1 }}
                cursor={{
                  fill: theme.palette.vars.controlBackgroundMedium,
                }}
              />
            )}
            {bars.map((bar) => (
              <Bar
                key={`bar-${bar.key}-${bar.color}`}
                dataKey={`barData.${bar.key}`}
                stackId="main"
                fill={bar.color}
                radius={2}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                shape={(props: any) => <CustomBar {...props} />}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
      {showLegend && (
        <Stack
          height="40px"
          direction="row"
          spacing={2}
          alignItems="center"
          overflow="hidden"
          bottom={0}
          sx={getBarGraphLegendStyles(theme)}
          flexShrink={0}
        >
          {bars.map((bar) => (
            <Stack
              key={`legend-${bar.key}-${bar.color}`}
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <span
                style={{
                  ...graphStyles(theme).legendCircle,
                  backgroundColor: bar.color,
                }}
              />
              <Typography variant="body2">{bar.key}</Typography>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
