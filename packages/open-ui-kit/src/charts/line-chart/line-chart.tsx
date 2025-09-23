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
import { ChartProps } from "@/charts";
import { LineChartTooltip, LineChartTooltipProps } from "./line-chart-tooltip";
import { formatISODate, formatNumber } from "./utils";
import { useTheme } from "@mui/material";

type SafeLineProps = Omit<LineProps, "ref">;

export interface LineChartProps
  extends ChartProps,
    Pick<LineChartTooltipProps, "valueFormatter"> {
  subject?: string;
  xAxisProps?: XAxisProps;
  yAxisProps?: YAxisProps;
  lineProps?: Partial<SafeLineProps>;
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
            stroke: theme.palette.vars.inactiveBackgroundDefault,
          }}
          tickSize={2}
          tickLine={{
            strokeWidth: 1,
            stroke: theme.palette.vars.inactiveBackgroundDefault,
            style: { transform: "translateY(3.5px)" },
          }}
          tick={{
            fontFamily: "Inter",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: 0.4,
            color: theme.palette.vars.inactiveBackgroundDefault,
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
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: 0.4,
            color: theme.palette.vars.inactiveBackgroundDefault,
          }}
          tickMargin={10}
          minTickGap={14}
          tickFormatter={valueFormatter || formatNumber}
          {...yAxisProps}
        />
        <CartesianGrid
          vertical={false}
          strokeWidth={1}
          stroke={theme.palette.vars.inactiveBackgroundDefault}
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
            strokeWidth={2}
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
              stroke: theme.palette.vars.inactiveBackgroundDefault,
            }}
          />
        )}
      </RechartLineChart>
    </ResponsiveContainer>
  );
};
