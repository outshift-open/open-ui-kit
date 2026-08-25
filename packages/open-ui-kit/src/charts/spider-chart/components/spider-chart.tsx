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
import { useTheme, type Theme } from "@mui/material/styles";
import CustomConicalGradient from "./custom-conical-gradient";
import CustomGradientRadar from "./custom-gradient-radar";
import CustomLines from "./custom-lines";
import CustomPolarGrid from "./custom-polar-grid";
import CustomLabels from "./custom-radar-labels";
import CustomRadarTick from "./custom-radar-tick";
import CustomTooltip from "./custom-tooltip";
import {
  getSpiderChartGradient,
  SPIDER_GRADIENT_DOT_RADIUS,
  SPIDER_GRADIENT_STROKE_WIDTH,
  StyledRadarChart,
} from "../styles/spider-chart.styles";
import {
  ExtendedDataPoint,
  SpiderChartProps,
} from "../types/spider-chart.types";

const TICK_COUNT = 3;

const getMaxValueFromVariables = (numbers: number[]) =>
  numbers.length ? Math.max(...numbers) : 0;

const calculateDomain = (data: ExtendedDataPoint[]) => [
  0,
  getMaxValueFromVariables(
    data.filter((x) => x.variableA).map((x) => x.variableA ?? 0),
  ),
];

const getDefaultRadarBackground = (theme: Theme): string =>
  `conic-gradient(${theme.palette.vars.accentJDefault} 0deg, ${theme.palette.vars.accentGDefault} 180deg, ${theme.palette.vars.accentADefault} 360deg)`;

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

  const dataPadded = [...data].sort(sortData).map((dp) => {
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

          {radars.map((radar, index) => {
            // The gradient treatment only supplies defaults: an explicit
            // `background`, `stroke` or `dot` on the radar still wins.
            const gradient = radar.gradient
              ? getSpiderChartGradient(theme, radar.gradient)
              : undefined;
            const stroke = radar.stroke ?? gradient?.stroke;
            const showDots = radar.dot ?? Boolean(gradient);

            return (
              <Radar
                key={`radar-${index}`}
                name={radar.name}
                animationEasing={"ease-in"}
                animationDuration={1750}
                dataKey={radar.dataKey}
                fill={radar.fill ?? theme.palette.vars.neutralBackgroundWeak}
                // Recharts clones the shape with the `Radar` props, so the
                // outline reaches the shape from here. `dotRadius`/`dotFill`
                // are not `Radar` props, so they survive the clone on the
                // element below.
                stroke={stroke}
                strokeWidth={stroke ? SPIDER_GRADIENT_STROKE_WIDTH : 0}
                scale={scale}
                color={
                  radar.background ??
                  gradient?.background ??
                  getDefaultRadarBackground(theme)
                }
                r={0}
                shape={
                  radar.shape ??
                  (stroke ? (
                    <CustomGradientRadar
                      dotRadius={showDots ? SPIDER_GRADIENT_DOT_RADIUS : 0}
                      dotFill={gradient?.dotFill}
                      dotStroke={gradient?.dotStroke}
                    />
                  ) : (
                    CustomConicalGradient
                  ))
                }
              />
            );
          })}
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
