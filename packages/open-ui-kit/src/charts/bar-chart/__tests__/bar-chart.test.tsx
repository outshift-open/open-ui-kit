/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { lightTheme } from "@/theme/light/light-theme";
import { darkTheme } from "@/theme/dark/dark-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { BarChart } from "../bar-chart";
import {
  getBarChartTooltipStyles,
  getBarChartTooltipTypographyStyles,
  getBarChartTrackColor,
} from "../styles";
import type { ChartDataItem } from "../../common/types";

jest.mock("recharts", () => {
  const ReactRuntime = jest.requireActual("react");

  return {
    ResponsiveContainer: ({
      children,
      onResize,
    }: {
      children: ReactNode;
      onResize?: (width: number) => void;
    }) => {
      ReactRuntime.useEffect(() => {
        onResize?.(230);
      }, [onResize]);

      return <div data-testid="responsive-container">{children}</div>;
    },
    BarChart: ({ children }: { children: ReactNode }) => (
      <div data-testid="recharts-bar-chart">{children}</div>
    ),
    XAxis: () => <div data-testid="x-axis" />,
    Bar: ({
      background,
      children,
    }: {
      background: { fill: string; radius: number };
      children: ReactNode;
    }) => (
      <div
        data-background-fill={background.fill}
        data-background-radius={background.radius}
        data-testid="bar-series"
      >
        {children}
      </div>
    ),
    Cell: ({
      cursor,
      display,
      fill,
      onClick,
    }: {
      cursor?: string;
      display?: string;
      fill: string;
      onClick?: () => void;
    }) => (
      <button
        data-display={display}
        data-fill={fill}
        data-testid="bar-cell"
        onClick={onClick}
        style={{ cursor }}
        type="button"
      />
    ),
    Tooltip: ({ content }: { content: ReactNode }) => (
      <div data-testid="tooltip">
        {typeof content === "function" ? null : content}
      </div>
    ),
  };
});

const data: ChartDataItem[] = [
  {
    name: "Critical",
    value: 82,
    color: lightTheme.palette.vars.accentADefault,
  },
  { name: "High", value: 64, color: lightTheme.palette.vars.accentADefault },
];

const renderBarChart = (
  dark = false,
  handleClick?: (item: ChartDataItem) => void,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <BarChart data={data} handleClick={handleClick} showTooltip />
    </ThemeProvider>,
  );

describe("BarChart", () => {
  it("uses chart track and tooltip tokens in light mode", () => {
    expect(getBarChartTrackColor(lightTheme)).toBe(
      lightTheme.palette.vars.controlBorderMedium,
    );
    expect(lightTheme.palette.vars.controlBorderMedium).toBe("#dae3f8");
    expect(lightTheme.palette.vars.accentADefault).toBe("#5c6ddd");
    expect(getBarChartTooltipStyles(lightTheme)).toMatchObject({
      backgroundColor: lightTheme.palette.vars.baseBackgroundMedium,
      padding: "2px 8px",
      borderRadius: "4px",
    });
    expect(getBarChartTooltipTypographyStyles(lightTheme)).toMatchObject({
      color: lightTheme.palette.vars.baseTextStrong,
    });
  });

  it("uses chart track and tooltip tokens in dark mode", () => {
    expect(getBarChartTrackColor(darkTheme)).toBe(
      darkTheme.palette.vars.controlBorderMedium,
    );
    expect(darkTheme.palette.vars.controlBorderMedium).toBe("#31466e");
    expect(darkTheme.palette.vars.accentADefault).toBe("#bac1ff");
    expect(getBarChartTooltipStyles(darkTheme)).toMatchObject({
      backgroundColor: darkTheme.palette.vars.baseBackgroundMedium,
      padding: "2px 8px",
      borderRadius: "4px",
    });
    expect(getBarChartTooltipTypographyStyles(darkTheme)).toMatchObject({
      color: darkTheme.palette.vars.baseTextStrong,
    });
  });

  it("renders bars with the theme track token", () => {
    renderBarChart();

    expect(screen.getByTestId("bar-series")).toHaveAttribute(
      "data-background-fill",
      lightTheme.palette.vars.controlBorderMedium,
    );
    expect(screen.getAllByTestId("bar-cell")[0]).toHaveAttribute(
      "data-fill",
      lightTheme.palette.vars.accentADefault,
    );
  });

  it("calls handleClick with the selected data item", () => {
    const handleClick = jest.fn();
    renderBarChart(false, handleClick);

    fireEvent.click(screen.getAllByTestId("bar-cell")[0]);

    expect(handleClick).toHaveBeenCalledWith(data[0]);
  });
});
