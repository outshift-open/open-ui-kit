/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react";
import {
  Customized,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useTheme } from "@mui/material";
import CustomConicalGradient from "./custom-conical-gradient";
import CustomLines from "./custom-lines";
import CustomPolarGrid from "./custom-polar-grid";
import CustomLabels from "./custom-radar-labels";
import CustomRadarTick from "./custom-radar-tick";
import CustomTooltip from "./custom-tooltip";
import { StyledRadarChart } from "../styles/spider-chart.styles";
import {
  ExtendedDataPoint,
  SpiderChartProps,
} from "../types/spider-chart.types";

const TICK_COUNT = 3;

const getMaxValueFromVariables = (numbers: number[]) => Math.max(...numbers);

const calculateDomain = (data: ExtendedDataPoint[]) => [
  0,
  getMaxValueFromVariables(
    data.filter((x) => x.variableA).map((x) => x.variableA ?? 0),
  ),
];

/**
 *  Spider charts, also known as radar charts or star plots, are used to display multivariate data in a two-dimensional chart.
 *  Each variable is represented by an axis radiating from a common center point, and the values of the variables are plotted as data points along the corresponding axis.
 *  The range of values in a spider chart depends on the specific variables being represented.
 */
export const SpiderChart = ({
  data,
  radars,
  tickBand = 5,
  scale = 1,
  outerRadius = 90,
  labelOffsets,
  showTooltip = true,
  onTooltipClick,
  tooltipContent,
  customTooltip,
}: SpiderChartProps) => {
  const tooltipValue = useRef<string | null>(null);
  const theme = useTheme();

  const domain = calculateDomain(data);

  const handleClick = () => {
    if (tooltipValue.current !== null && onTooltipClick)
      onTooltipClick(tooltipValue.current);
  };

  const sortData = (a: ExtendedDataPoint, b: ExtendedDataPoint) => {
    return a.subject.localeCompare(b.subject);
  };

  const dataPadded = data.sort(sortData).map((dp) => {
    return Object.fromEntries(
      Object.entries(dp).map(([key, value]) => {
        if (key.length === 1) return [key, Number(value)];
        return [key, value];
      }),
    );
  });

  const angleStep = 360 / data.length;
  const computedAngleOffset = 90 % angleStep;

  return (
    <StyledRadarChart onClick={handleClick}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={outerRadius} data={dataPadded}>
          <Customized
            component={CustomLabels}
            cx={"1"}
            cy={"1"}
            width={1}
            height={1}
            band={tickBand}
            outerRadius={1}
            labelOffsets={labelOffsets || []}
            tooltipTicks={[{ value: "1", coordinate: 1 }]}
            data={[{ subject: "1" }]}
            polarAngles={Array(data.length)
              .fill(0)
              .map((_, i) => i * angleStep + tickBand)}
          />
          <Customized
            component={CustomPolarGrid}
            cx={"1"}
            cy={"1"}
            width={1}
            height={1}
            polarRadius={[22.5, 45, 67.5, 90]}
            scale={scale}
            polarAngles={Array(data.length)
              .fill(0)
              .map((_, i) => i * angleStep + computedAngleOffset)}
          />
          <Customized
            component={CustomLines}
            scale={1}
            cx={"1"}
            cy={"1"}
            width={1}
            height={1}
            innerRadius={1}
            outerRadius={1}
            polarAngles={Array(data.length)
              .fill(0)
              .map((_, i) => i * angleStep + computedAngleOffset)}
          />

          {radars.map((radar, index) => (
            <Radar
              key={`radar-${index}`}
              name={radar.name}
              animationEasing={"ease-in"}
              animationDuration={1750}
              dataKey={radar.dataKey}
              fill={theme.palette.vars.neutralBackgroundWeak}
              strokeWidth={0}
              scale={scale}
              color={
                radar.background ||
                "conic-gradient(rgba(64, 255, 244, 0.8) 0deg, rgba(73, 207, 223, .2) 180deg, rgba(0, 85, 255, 0.3) 360deg)"
              }
              r={0}
              shape={CustomConicalGradient}
            />
          ))}
          {showTooltip && (
            <Tooltip
              wrapperStyle={{ outline: "none", zIndex: 1 }}
              content={
                customTooltip ?? (
                  <CustomTooltip tooltipContent={tooltipContent} />
                )
              }
              cursor={{ stroke: "transparent", fill: "transparent" }}
            />
          )}

          <PolarRadiusAxis
            tickCount={TICK_COUNT}
            tick={<CustomRadarTick />}
            ticks={[0, Math.round(domain[1] / 2), domain[1]].map((v, i) => ({
              value: v,
              coordinate: v,
              index: i,
            }))}
            angle={90}
            orientation="right"
            domain={domain}
            axisLine={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </StyledRadarChart>
  );
};
