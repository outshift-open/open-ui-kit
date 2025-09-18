/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Box, Typography, useTheme } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import { barShadow, boxStyle, gaugeLabel, gaugeWrapper } from "./styles";
import { ChartDataItem, ChartProps } from "@/charts";
import styled from "@emotion/styled";

// Dividers Configuration
const NUM_DIVIDERS = 51;
const SMALL_DIVIDER_LENGTH = 2.2;
const BIG_DIVIDER_LENGTH = 4.4;
const DIVIDER_MARGIN_FROM_CHART = 10;

// Gauge Configuration
const START_ANGLE = 240;
const END_ANGLE = -60;

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface GaugeChartProps extends ChartProps {
  maxValue?: number;
  customLabelComponent?: React.ReactNode;
  styleProps?: {
    customWidth?: number;
    customHeight?: number;
    textTop?: string;
  };
}

export const GaugeChart = ({
  data,
  maxValue = 100,
  customLabelComponent,
  styleProps,
}: GaugeChartProps) => {
  const theme = useTheme();

  const [valueItem] = data as ChartDataItem[];
  const gaugeData = [
    // Main Bar
    {
      value: (valueItem.value / maxValue) * 100,
      fill: valueItem.color,
    },
    // Background Bar
    {
      value:
        ((maxValue - Math.min(valueItem.value, maxValue)) / maxValue) * 100, // The remaining part to fill with background
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
              style={barShadow(gaugeData[0].fill)}
            />
            <Cell key={`gauge-background-bar`} strokeLinecap="round" />;
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

export const barShadow = (barFill: string) => ({
  filter: `drop-shadow(0 0 4px ${barFill}80) drop-shadow(0 1.97px 1px rgba(0, 0, 0, 0.25))`,
});

export const gaugeLabel = {
  transform: "translate(-50%, -50%)",
};

export const boxStyle = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translateX(-50%)",
};
