/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { BarGraph, type BarProps } from "../bar-graph";
import {
  getBarGraphAxisTickStyles,
  getBarGraphGridColor,
  getBarGraphHeaderTextStyles,
  getBarGraphLegendStyles,
  tooltipStyles,
} from "../styles";
import type { BarGraphItem } from "../../common/types";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: { children: ReactNode }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
  BarChart: ({
    children,
    onClick,
  }: {
    children: ReactNode;
    onClick?: () => void;
  }) => (
    <div data-testid="recharts-bar-chart" onClick={onClick}>
      {children}
    </div>
  ),
  CartesianGrid: ({ stroke }: { stroke: string }) => (
    <div data-stroke={stroke} data-testid="cartesian-grid" />
  ),
  XAxis: ({ stroke, tick }: { stroke: string; tick: { fill?: string } }) => (
    <div data-stroke={stroke} data-tick-fill={tick.fill} data-testid="x-axis" />
  ),
  YAxis: ({ stroke }: { stroke: string }) => (
    <div data-stroke={stroke} data-testid="y-axis" />
  ),
  Tooltip: ({ cursor }: { cursor: { fill: string } }) => (
    <div data-cursor-fill={cursor.fill} data-testid="tooltip" />
  ),
  Bar: ({ dataKey, fill }: { dataKey: string; fill: string }) => (
    <div data-fill={fill} data-key={dataKey} data-testid="bar-segment" />
  ),
}));

const data: BarGraphItem[] = [
  {
    value: "us-east-1",
    barData: {
      Critical: 4,
      Warning: 14,
      Healthy: 7,
    },
  },
];

const bars: BarProps[] = [
  { key: "Critical", color: lightTheme.palette.vars.negativeBackgroundDefault },
  { key: "Warning", color: lightTheme.palette.vars.warningBackgroundDefault },
  { key: "Healthy", color: lightTheme.palette.vars.successBackgroundDefault },
];

const renderBarGraph = (dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <BarGraph bars={bars} data={data} headers={["Services", "Health"]} />
    </ThemeProvider>,
  );

describe("BarGraph", () => {
  beforeEach(() => {
    class ResizeObserverMock {
      unobserve = jest.fn();
      observe = jest.fn();
      disconnect = jest.fn();
    }

    window.ResizeObserver = ResizeObserverMock;
  });

  it("uses chart grid and text tokens in light mode", () => {
    expect(getBarGraphGridColor(lightTheme)).toBe(
      lightTheme.palette.vars.controlBorderMedium,
    );
    expect(lightTheme.palette.vars.controlBorderMedium).toBe("#dae3f8");
    expect(lightTheme.palette.vars.baseTextMedium).toBe("#59616b");
    expect(lightTheme.palette.vars.negativeBackgroundDefault).toBe("#c0244c");
    expect(lightTheme.palette.vars.warningBackgroundDefault).toBe("#fbab2c");
    expect(lightTheme.palette.vars.successBackgroundDefault).toBe("#00b285");
    expect(getBarGraphHeaderTextStyles(lightTheme)).toMatchObject({
      color: lightTheme.palette.vars.baseTextMedium,
    });
    expect(getBarGraphAxisTickStyles(lightTheme)).toMatchObject({
      fill: lightTheme.palette.vars.baseTextMedium,
      fontSize: "10px",
      fontFamily: "Inter",
      fontWeight: 600,
      letterSpacing: "0.4px",
    });
  });

  it("uses chart grid and text tokens in dark mode", () => {
    expect(getBarGraphGridColor(darkTheme)).toBe(
      darkTheme.palette.vars.controlBorderMedium,
    );
    expect(darkTheme.palette.vars.controlBorderMedium).toBe("#31466e");
    expect(darkTheme.palette.vars.baseTextMedium).toBe("#c5c7cb");
    expect(darkTheme.palette.vars.negativeBackgroundDefault).toBe("#c62953");
    expect(darkTheme.palette.vars.warningBackgroundDefault).toBe("#fbaf45");
    expect(darkTheme.palette.vars.successBackgroundDefault).toBe("#00b98d");
    expect(getBarGraphLegendStyles(darkTheme)).toMatchObject({
      backgroundColor: darkTheme.palette.vars.baseBackgroundWeak,
    });
    expect(tooltipStyles(darkTheme).categoryEntry()).toMatchObject({
      color: darkTheme.palette.vars.baseTextStrong,
    });
  });

  it("passes the grid token to Recharts axes and grid", () => {
    renderBarGraph();

    expect(screen.getByTestId("cartesian-grid")).toHaveAttribute(
      "data-stroke",
      lightTheme.palette.vars.controlBorderMedium,
    );
    expect(screen.getByTestId("x-axis")).toHaveAttribute(
      "data-stroke",
      lightTheme.palette.vars.controlBorderMedium,
    );
    expect(screen.getByTestId("y-axis")).toHaveAttribute(
      "data-stroke",
      lightTheme.palette.vars.controlBorderMedium,
    );
    expect(screen.getByTestId("x-axis")).toHaveAttribute(
      "data-tick-fill",
      lightTheme.palette.vars.baseTextMedium,
    );
  });

  it("renders stacked bar segments and legend entries", () => {
    renderBarGraph();

    expect(screen.getAllByTestId("bar-segment")).toHaveLength(3);
    expect(screen.getByText("Critical")).toBeInTheDocument();
    expect(screen.getByText("Warning")).toBeInTheDocument();
    expect(screen.getByText("Healthy")).toBeInTheDocument();
  });
});
