/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  CartesianGridProps,
  ResponsiveContainer,
  LineChart as RechartLineChart,
  XAxisProps,
  YAxisProps,
  LineProps,
} from "recharts";
import { ChartProps } from "../common/types";
import { LineChartTooltip, LineChartTooltipProps } from "./line-chart-tooltip";
import { formatISODate, formatNumber } from "./utils";
import { useTheme } from "@mui/material/styles";

type SafeLineProps = Omit<LineProps, "ref">;

export interface LineChartProps
  extends ChartProps,
    Pick<LineChartTooltipProps, "valueFormatter"> {
  /** Optional title shown in the default tooltip before the category values. */
  subject?: string;
  /** Props forwarded to the Recharts X axis for domain, tick, and formatter overrides. */
  xAxisProps?: XAxisProps;
  /** Props forwarded to the Recharts Y axis for domain, tick, and formatter overrides. */
  yAxisProps?: YAxisProps;
  /** Props forwarded to every line series. Use for dots, active dots, and stroke overrides. */
  lineProps?: Partial<SafeLineProps>;
  /** Props forwarded to the Cartesian grid for dash and stroke overrides. */
  gridProps?: CartesianGridProps;
}

export const LineChart = ({
  data,
  categories,
  showTooltip = true,
  subject,
  xAxisProps,
  yAxisProps,
  customTooltip,
  valueFormatter,
  lineProps,
  gridProps,
}: LineChartProps) => {
  const theme = useTheme();
  const axisTextColor = theme.palette.vars.baseTextMedium;
  const gridColor = theme.palette.vars.controlBorderMedium;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartLineChart
        data={data}
        margin={{ top: 13, right: 5, bottom: 0, left: 0 }}
        {...{ overflow: "visible" }}
      >
        <XAxis
          dataKey="date"
          type="category"
          axisLine={{
            strokeWidth: 1,
            stroke: gridColor,
          }}
          tickSize={2}
          tickLine={{
            strokeWidth: 1,
            stroke: gridColor,
            style: { transform: "translateY(3.5px)" },
          }}
          tick={{
            fontFamily: "Inter",
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: 0.4,
            fill: axisTextColor,
          }}
          tickMargin={8}
          minTickGap={16}
          tickFormatter={(date) => formatISODate(date, "d")}
          {...xAxisProps}
        />
        <YAxis
          width={40}
          type="number"
          domain={["dataMin", "dataMax"]}
          axisLine={false}
          tickLine={false}
          tick={{
            fontFamily: "Inter",
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: 0.4,
            fill: axisTextColor,
          }}
          tickMargin={10}
          minTickGap={14}
          tickFormatter={valueFormatter || formatNumber}
          {...yAxisProps}
        />
        <CartesianGrid
          vertical={false}
          strokeWidth={1}
          stroke={gridColor}
          {...gridProps}
        />
        {categories?.map((category) => (
          <Line
            key={category.name}
            type="monotone"
            dataKey={category.name}
            legendType="none"
            dot={false}
            activeDot={true}
            strokeWidth={3}
            stroke={category.color}
            name={category.name}
            {...lineProps}
          />
        ))}
        {showTooltip && (
          <Tooltip
            content={
              customTooltip ?? (
                <LineChartTooltip
                  subject={subject}
                  valueFormatter={valueFormatter}
                />
              )
            }
            wrapperStyle={{ zIndex: 1 }}
            allowEscapeViewBox={{ x: false, y: true }}
            cursor={{
              strokeWidth: 1,
              strokeDasharray: "5",
              stroke: gridColor,
            }}
          />
        )}
      </RechartLineChart>
    </ResponsiveContainer>
  );
};
