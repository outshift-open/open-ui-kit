/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ComponentProps, ReactNode } from "react";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { LineChart } from "../line-chart";
import type { ChartCategory, ChartCategoryItem } from "../../common/types";

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
  LineChart: ({
    children,
    margin,
  }: {
    children: ReactNode;
    margin: Record<string, number>;
  }) => (
    <div data-margin={JSON.stringify(margin)} data-testid="line-chart">
      {children}
    </div>
  ),
  XAxis: ({
    axisLine,
    minTickGap,
    tick,
    tickFormatter,
    tickLine,
    tickMargin,
    tickSize,
  }: {
    axisLine: { stroke: string; strokeWidth: number };
    minTickGap: number;
    tick: { fill: string; fontSize: number; fontWeight: number };
    tickFormatter: (value: string) => string;
    tickLine: { stroke: string; strokeWidth: number };
    tickMargin: number;
    tickSize: number;
  }) => (
    <div
      data-axis-stroke={axisLine.stroke}
      data-axis-stroke-width={axisLine.strokeWidth}
      data-formatted={tickFormatter("2020-01-10")}
      data-min-tick-gap={minTickGap}
      data-testid="x-axis"
      data-tick-fill={tick.fill}
      data-tick-font-size={tick.fontSize}
      data-tick-font-weight={tick.fontWeight}
      data-tick-line-stroke={tickLine.stroke}
      data-tick-line-stroke-width={tickLine.strokeWidth}
      data-tick-margin={tickMargin}
      data-tick-size={tickSize}
    />
  ),
  YAxis: ({
    domain,
    tick,
    tickFormatter,
    tickMargin,
    width,
  }: {
    domain: [string | number, string | number];
    tick: { fill: string; fontSize: number; fontWeight: number };
    tickFormatter: (value: number) => string;
    tickMargin: number;
    width: number;
  }) => (
    <div
      data-domain={JSON.stringify(domain)}
      data-formatted={tickFormatter(1200)}
      data-testid="y-axis"
      data-tick-fill={tick.fill}
      data-tick-font-size={tick.fontSize}
      data-tick-font-weight={tick.fontWeight}
      data-tick-margin={tickMargin}
      data-width={width}
    />
  ),
  CartesianGrid: ({
    stroke,
    strokeDasharray,
    strokeWidth,
    vertical,
  }: {
    stroke: string;
    strokeDasharray?: string;
    strokeWidth: number;
    vertical: boolean;
  }) => (
    <div
      data-stroke={stroke}
      data-stroke-dasharray={strokeDasharray}
      data-stroke-width={strokeWidth}
      data-testid="cartesian-grid"
      data-vertical={String(vertical)}
    />
  ),
  Line: ({
    activeDot,
    dataKey,
    dot,
    name,
    stroke,
    strokeWidth,
  }: {
    activeDot: boolean | ReactNode;
    dataKey: string;
    dot: boolean;
    name: string;
    stroke: string;
    strokeWidth: number;
  }) => (
    <div
      data-active-dot={String(Boolean(activeDot))}
      data-data-key={dataKey}
      data-dot={String(dot)}
      data-name={name}
      data-stroke={stroke}
      data-stroke-width={strokeWidth}
      data-testid="line-series"
    />
  ),
  Tooltip: ({
    allowEscapeViewBox,
    content,
    cursor,
    wrapperStyle,
  }: {
    allowEscapeViewBox: { x: boolean; y: boolean };
    content: ReactNode;
    cursor: { stroke: string; strokeDasharray: string; strokeWidth: number };
    wrapperStyle: { zIndex: number };
  }) => (
    <div
      data-cursor-dasharray={cursor.strokeDasharray}
      data-cursor-stroke={cursor.stroke}
      data-cursor-stroke-width={cursor.strokeWidth}
      data-escape-x={String(allowEscapeViewBox.x)}
      data-escape-y={String(allowEscapeViewBox.y)}
      data-testid="tooltip"
      data-z-index={wrapperStyle.zIndex}
    >
      {typeof content === "function" ? null : content}
    </div>
  ),
}));

const data: ChartCategoryItem[] = [
  {
    date: "2020-01-10",
    Critical: 211,
    New: 215,
  },
  {
    date: "2020-01-11",
    Critical: 222,
    New: 135,
  },
];

const categories: ChartCategory[] = [
  {
    name: "Critical",
    color: lightTheme.palette.vars.negativeBackgroundDefault,
  },
  {
    name: "New",
    color: lightTheme.palette.vars.accentADefault,
  },
];

const renderLineChart = (
  dark = false,
  props: Partial<ComponentProps<typeof LineChart>> = {},
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <LineChart data={data} categories={categories} {...props} />
    </ThemeProvider>,
  );

describe("LineChart", () => {
  it("uses axis text and grid tokens in light mode", () => {
    expect(lightTheme.palette.vars.baseTextMedium).toBe("#59616b");
    expect(lightTheme.palette.vars.controlBorderMedium).toBe("#dae3f8");

    renderLineChart();

    expect(screen.getByTestId("responsive-container")).toHaveAttribute(
      "data-width",
      "100%",
    );
    expect(screen.getByTestId("responsive-container")).toHaveAttribute(
      "data-height",
      "100%",
    );
    expect(screen.getByTestId("x-axis")).toHaveAttribute(
      "data-axis-stroke",
      lightTheme.palette.vars.controlBorderMedium,
    );
    expect(screen.getByTestId("y-axis")).toHaveAttribute(
      "data-tick-fill",
      lightTheme.palette.vars.baseTextMedium,
    );
    expect(screen.getByTestId("cartesian-grid")).toHaveAttribute(
      "data-stroke",
      lightTheme.palette.vars.controlBorderMedium,
    );
    expect(screen.getByTestId("tooltip")).toHaveAttribute(
      "data-cursor-stroke",
      lightTheme.palette.vars.controlBorderMedium,
    );
  });

  it("uses axis text and grid tokens in dark mode", () => {
    expect(darkTheme.palette.vars.baseTextMedium).toBe("#c5c7cb");
    expect(darkTheme.palette.vars.controlBorderMedium).toBe("#31466e");

    renderLineChart(true);

    expect(screen.getByTestId("x-axis")).toHaveAttribute(
      "data-axis-stroke",
      darkTheme.palette.vars.controlBorderMedium,
    );
    expect(screen.getByTestId("y-axis")).toHaveAttribute(
      "data-tick-fill",
      darkTheme.palette.vars.baseTextMedium,
    );
    expect(screen.getByTestId("cartesian-grid")).toHaveAttribute(
      "data-stroke",
      darkTheme.palette.vars.controlBorderMedium,
    );
    expect(screen.getByTestId("tooltip")).toHaveAttribute(
      "data-cursor-stroke",
      darkTheme.palette.vars.controlBorderMedium,
    );
  });

  it("renders the design geometry and line series colors", () => {
    renderLineChart();

    expect(screen.getByTestId("line-chart")).toHaveAttribute(
      "data-margin",
      JSON.stringify({ top: 13, right: 5, bottom: 0, left: 0 }),
    );
    expect(screen.getByTestId("x-axis")).toMatchObject({
      dataset: expect.objectContaining({
        tickSize: "2",
        tickMargin: "8",
        minTickGap: "16",
        formatted: "10",
        tickFontSize: "12",
        tickFontWeight: "400",
      }),
    });
    expect(screen.getByTestId("y-axis")).toMatchObject({
      dataset: expect.objectContaining({
        width: "40",
        domain: JSON.stringify(["dataMin", "dataMax"]),
        formatted: "1.2K",
      }),
    });
    expect(screen.getAllByTestId("line-series")[0]).toMatchObject({
      dataset: expect.objectContaining({
        dataKey: "Critical",
        dot: "false",
        stroke: lightTheme.palette.vars.negativeBackgroundDefault,
        strokeWidth: "3",
      }),
    });
  });

  it("lets consumer axis, grid, and line props win", () => {
    renderLineChart(false, {
      gridProps: { strokeDasharray: "4 4" },
      lineProps: { strokeWidth: 1 },
      xAxisProps: { tickSize: 7 },
      yAxisProps: { domain: [0, "auto"] },
    });

    expect(screen.getByTestId("x-axis")).toHaveAttribute("data-tick-size", "7");
    expect(screen.getByTestId("y-axis")).toHaveAttribute(
      "data-domain",
      JSON.stringify([0, "auto"]),
    );
    expect(screen.getByTestId("cartesian-grid")).toHaveAttribute(
      "data-stroke-dasharray",
      "4 4",
    );
    expect(screen.getAllByTestId("line-series")[0]).toHaveAttribute(
      "data-stroke-width",
      "1",
    );
  });

  it("hides the tooltip when requested", () => {
    renderLineChart(false, { showTooltip: false });

    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();
  });

  it("uses a custom value formatter for the y axis", () => {
    renderLineChart(false, {
      valueFormatter: (value) => `${value ?? 0} events`,
    });

    expect(screen.getByTestId("y-axis")).toHaveAttribute(
      "data-formatted",
      "1200 events",
    );
  });
});
