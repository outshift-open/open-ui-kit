/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { SpiderChart } from "../components/spider-chart";
import type { ExtendedDataPoint, RadarType } from "../types/spider-chart.types";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({
    children,
    height,
    width,
  }: {
    children: ReactNode;
    height: string;
    width: string;
  }) => (
    <div
      data-height={height}
      data-testid="responsive-container"
      data-width={width}
    >
      {children}
    </div>
  ),
  RadarChart: ({
    children,
    data,
    outerRadius,
  }: {
    children: ReactNode;
    data: ExtendedDataPoint[];
    outerRadius: number;
  }) => (
    <div
      data-outer-radius={outerRadius}
      data-subjects={data.map((item) => item.subject).join(",")}
      data-testid="radar-chart"
    >
      {children}
    </div>
  ),
  Customized: ({
    component: Component,
    ...props
  }: {
    component: React.ElementType;
  }) => (
    <svg data-testid="customized-layer">
      <Component {...props} />
    </svg>
  ),
  Radar: ({
    color,
    dataKey,
    fill,
    name,
    strokeWidth,
  }: {
    color: string;
    dataKey: string;
    fill: string;
    name: string;
    strokeWidth: number;
  }) => (
    <div
      data-color={color}
      data-data-key={dataKey}
      data-fill={fill}
      data-name={name}
      data-stroke-width={strokeWidth}
      data-testid="radar-series"
    />
  ),
  Tooltip: ({
    content,
    cursor,
  }: {
    content: ReactNode;
    cursor: { fill: string; stroke: string };
  }) => (
    <div
      data-cursor-fill={cursor.fill}
      data-cursor-stroke={cursor.stroke}
      data-testid="tooltip"
    >
      {isValidElement(content)
        ? cloneElement(content as ReactElement, {
            active: true,
            payload: [{ payload: { subject: "Identity", variableA: 150 } }],
          })
        : content}
    </div>
  ),
  PolarRadiusAxis: ({
    axisLine,
    domain,
    tickCount,
  }: {
    axisLine: boolean;
    domain: [number, number];
    tickCount: number;
  }) => (
    <div
      data-axis-line={String(axisLine)}
      data-domain={JSON.stringify(domain)}
      data-testid="polar-radius-axis"
      data-tick-count={tickCount}
    />
  ),
}));

const data: ExtendedDataPoint[] = [
  { subject: "Runtime", variableA: 80, variableB: 120 },
  { subject: "Identity", variableA: 150, variableB: 96 },
  { subject: "Network", variableA: 60, variableB: 112 },
];

const radars: RadarType[] = [
  {
    name: "Exposure",
    dataKey: "variableA",
  },
];

const renderSpiderChart = (
  dark = false,
  props: Partial<React.ComponentProps<typeof SpiderChart>> = {},
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <SpiderChart data={data} radars={radars} {...props} />
    </ThemeProvider>,
  );

describe("SpiderChart", () => {
  it("uses tokenized default radar colors in light mode", () => {
    renderSpiderChart();

    expect(screen.getByTestId("responsive-container")).toHaveAttribute(
      "data-width",
      "100%",
    );
    expect(screen.getByTestId("radar-series")).toMatchObject({
      dataset: expect.objectContaining({
        fill: lightTheme.palette.vars.neutralBackgroundWeak,
        color: `conic-gradient(${lightTheme.palette.vars.accentJDefault} 0deg, ${lightTheme.palette.vars.accentGDefault} 180deg, ${lightTheme.palette.vars.accentADefault} 360deg)`,
        strokeWidth: "0",
      }),
    });
  });

  it("uses tokenized default radar colors in dark mode", () => {
    renderSpiderChart(true);

    expect(screen.getByTestId("radar-series")).toMatchObject({
      dataset: expect.objectContaining({
        fill: darkTheme.palette.vars.neutralBackgroundWeak,
        color: `conic-gradient(${darkTheme.palette.vars.accentJDefault} 0deg, ${darkTheme.palette.vars.accentGDefault} 180deg, ${darkTheme.palette.vars.accentADefault} 360deg)`,
      }),
    });
  });

  it("sorts rendered data without mutating consumer data", () => {
    const originalSubjects = data.map((item) => item.subject).join(",");

    renderSpiderChart();

    expect(screen.getByTestId("radar-chart")).toHaveAttribute(
      "data-subjects",
      "Identity,Network,Runtime",
    );
    expect(data.map((item) => item.subject).join(",")).toBe(originalSubjects);
  });

  it("lets consumer radar color props win", () => {
    const customRadars: RadarType[] = [
      {
        name: "Coverage",
        dataKey: "variableB",
        fill: lightTheme.palette.vars.successBackgroundWeak,
        background: `conic-gradient(${lightTheme.palette.vars.successBackgroundDefault} 0deg, ${lightTheme.palette.vars.warningBackgroundDefault} 360deg)`,
      },
    ];

    renderSpiderChart(false, { radars: customRadars });

    expect(screen.getByTestId("radar-series")).toMatchObject({
      dataset: expect.objectContaining({
        dataKey: "variableB",
        fill: lightTheme.palette.vars.successBackgroundWeak,
        color: customRadars[0].background,
      }),
    });
  });

  it("hides the tooltip when requested and renders custom tooltip content", () => {
    const { rerender } = renderSpiderChart(false, { showTooltip: false });

    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();

    rerender(
      <ThemeProvider defaultMode={ThemeMode.Light}>
        <SpiderChart
          data={data}
          radars={radars}
          tooltipContent={(dataPoint) => (
            <span>{dataPoint.subject} custom tooltip</span>
          )}
        />
      </ThemeProvider>,
    );

    const tooltipText = screen.getByText("Identity custom tooltip");
    const tooltipShell = tooltipText.closest("div");

    expect(tooltipText).toBeInTheDocument();
    expect(tooltipShell).toHaveStyle({
      backgroundColor: lightTheme.palette.vars.inactiveBackgroundActive,
      color: lightTheme.palette.vars.baseTextInverse,
    });
  });

  it("uses a safe domain when data has no numeric values", () => {
    renderSpiderChart(false, {
      data: [{ subject: "Empty" }],
      radars,
    });

    expect(screen.getByTestId("polar-radius-axis")).toHaveAttribute(
      "data-domain",
      JSON.stringify([0, 0]),
    );
  });
});
