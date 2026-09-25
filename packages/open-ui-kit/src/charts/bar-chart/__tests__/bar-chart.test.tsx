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
import {
  BarChart,
  getBarChartLayout,
  MIN_BAR_SIZE_PX,
  SPACE_BETWEEN_BARS_PX,
  type BarChartProps,
} from "../bar-chart";
import {
  BAR_CHART_Y_AXIS_WIDTH_PX,
  getBarChartAxisTickStyles,
  getBarChartGridColor,
  getBarChartTooltipStyles,
  getBarChartTooltipTypographyStyles,
} from "../styles";
import type { ChartDataItem } from "../../common/types";

type Offset = { top: number; left: number; width: number; height: number };
type CoordinatesGenerator = (props: { offset: Offset }) => number[];

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
    BarChart: ({
      children,
      barSize,
    }: {
      children: ReactNode;
      barSize: number;
    }) => (
      <div data-bar-size={barSize} data-testid="recharts-bar-chart">
        {children}
      </div>
    ),
    CartesianGrid: ({
      horizontal,
      stroke,
      strokeDasharray,
      horizontalCoordinatesGenerator,
      verticalCoordinatesGenerator,
    }: {
      horizontal?: boolean;
      stroke: string;
      strokeDasharray?: string;
      horizontalCoordinatesGenerator?: CoordinatesGenerator;
      verticalCoordinatesGenerator?: CoordinatesGenerator;
    }) => {
      const offset = { top: 8, left: 44, width: 400, height: 132 };
      const generator =
        horizontal === false
          ? verticalCoordinatesGenerator
          : horizontalCoordinatesGenerator;

      return (
        <div
          data-coordinates={generator?.({ offset }).join(",")}
          data-dash={strokeDasharray ?? "solid"}
          data-stroke={stroke}
          data-testid={horizontal === false ? "grid-columns" : "grid-rows"}
        />
      );
    },
    XAxis: () => <div data-testid="x-axis" />,
    YAxis: ({
      domain,
      ticks,
      tickFormatter,
      tick,
    }: {
      domain: [number, number];
      ticks: number[];
      tickFormatter: (value: number) => string;
      tick: { fill: string };
    }) => (
      <div
        data-domain={domain.join(",")}
        data-tick-fill={tick.fill}
        data-testid="y-axis"
      >
        {ticks.map((value) => (
          <span key={value}>{tickFormatter(value)}</span>
        ))}
      </div>
    ),
    Bar: ({ children }: { children: ReactNode }) => (
      <div data-testid="bar-series">{children}</div>
    ),
    Cell: ({
      cursor,
      fill,
      onClick,
    }: {
      cursor?: string;
      fill: string;
      onClick?: () => void;
    }) => (
      <button
        data-fill={fill}
        data-testid="bar-cell"
        onClick={onClick}
        style={{ cursor }}
        type="button"
      />
    ),
    Tooltip: () => <div data-testid="tooltip" />,
  };
});

const data: ChartDataItem[] = [
  { name: "15:11", value: 20, color: lightTheme.palette.vars.accentADefault },
  { name: "16:11", value: 40, color: lightTheme.palette.vars.accentADefault },
  { name: "17:11", value: 16, color: lightTheme.palette.vars.accentADefault },
];

/** Width the stubbed ResizeObserver reports for the chart's viewport. */
let viewportWidth = 230;

beforeEach(() => {
  viewportWidth = 230;
  window.ResizeObserver = class {
    constructor(private callback: ResizeObserverCallback) {}
    observe = () =>
      this.callback(
        [{ contentRect: { width: viewportWidth } } as ResizeObserverEntry],
        this as unknown as ResizeObserver,
      );
    unobserve = jest.fn();
    disconnect = jest.fn();
  } as unknown as typeof ResizeObserver;
});

const renderBarChart = (props: Partial<BarChartProps> = {}, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <BarChart data={data} showTooltip {...props} />
    </ThemeProvider>,
  );

describe("BarChart", () => {
  it("uses grid, axis and tooltip tokens in light mode", () => {
    expect(getBarChartGridColor(lightTheme)).toBe(
      lightTheme.palette.vars.controlBorderMedium,
    );
    expect(lightTheme.palette.vars.controlBorderMedium).toBe("#dae3f8");
    expect(lightTheme.palette.vars.accentADefault).toBe("#5c6ddd");
    expect(getBarChartAxisTickStyles(lightTheme)).toMatchObject({
      fontSize: 12,
      fill: lightTheme.palette.vars.baseTextMedium,
    });
    expect(getBarChartTooltipStyles(lightTheme)).toMatchObject({
      backgroundColor: lightTheme.palette.vars.baseBackgroundMedium,
      padding: "2px 8px",
      borderRadius: "4px",
    });
    expect(getBarChartTooltipTypographyStyles(lightTheme)).toMatchObject({
      color: lightTheme.palette.vars.baseTextStrong,
    });
  });

  it("uses grid, axis and tooltip tokens in dark mode", () => {
    expect(getBarChartGridColor(darkTheme)).toBe(
      darkTheme.palette.vars.controlBorderMedium,
    );
    expect(darkTheme.palette.vars.controlBorderMedium).toBe("#31466e");
    expect(darkTheme.palette.vars.accentADefault).toBe("#bac1ff");
    expect(getBarChartAxisTickStyles(darkTheme)).toMatchObject({
      fill: darkTheme.palette.vars.baseTextMedium,
    });
    expect(getBarChartTooltipStyles(darkTheme)).toMatchObject({
      backgroundColor: darkTheme.palette.vars.baseBackgroundMedium,
    });
  });

  it("draws dotted value lines and solid time lines on quarters", () => {
    renderBarChart();

    const rows = screen.getByTestId("grid-rows");
    const columns = screen.getByTestId("grid-columns");

    expect(rows).toHaveAttribute("data-dash", "2 2");
    expect(rows).toHaveAttribute("data-coordinates", "8,41,74,107,140");
    expect(rows).toHaveAttribute(
      "data-stroke",
      lightTheme.palette.vars.controlBorderMedium,
    );
    expect(columns).toHaveAttribute("data-dash", "solid");
    expect(columns).toHaveAttribute("data-coordinates", "44,144,244,344,444");
  });

  it("splits the plot width evenly across items, keeping an 8px gap, and fills bars with the item color", () => {
    renderBarChart();

    // The viewport is 230px; the 44px value column is not part of the plot, so
    // each of the 3 slots is (230 - 44) / 3 wide and the bar is that minus 8px.
    const expectedBarSize = (230 - BAR_CHART_Y_AXIS_WIDTH_PX) / data.length - 8;
    expect(screen.getByTestId("recharts-bar-chart")).toHaveAttribute(
      "data-bar-size",
      String(expectedBarSize),
    );
    expect(screen.getByTestId("bar-chart")).not.toHaveStyle({
      overflowX: "auto",
    });
    expect(screen.getByTestId("bar-chart-content")).toHaveStyle({
      width: "100%",
    });
    expect(screen.getAllByTestId("bar-cell")).toHaveLength(3);
    expect(screen.getAllByTestId("bar-cell")[0]).toHaveAttribute(
      "data-fill",
      lightTheme.palette.vars.accentADefault,
    );
  });

  it("holds bars at 18px and scrolls horizontally when they no longer fit", () => {
    renderBarChart({ data: Array(20).fill(data[0]) as ChartDataItem[] });

    // (230 - 44) / 20 - 8 is under 18px, so bars stay at the minimum and the
    // content grows to fit every bar and gap: 44 + 20 * (18 + 8).
    expect(screen.getByTestId("recharts-bar-chart")).toHaveAttribute(
      "data-bar-size",
      "18",
    );
    expect(screen.getByTestId("bar-chart")).toHaveStyle({ overflowX: "auto" });
    expect(screen.getByTestId("bar-chart-content")).toHaveStyle({
      width: "564px",
    });
  });

  it("stops scrolling again once the container is wide enough", () => {
    viewportWidth = 800;
    renderBarChart({ data: Array(20).fill(data[0]) as ChartDataItem[] });

    expect(screen.getByTestId("recharts-bar-chart")).toHaveAttribute(
      "data-bar-size",
      String((800 - 44) / 20 - 8),
    );
    expect(screen.getByTestId("bar-chart")).not.toHaveStyle({
      overflowX: "auto",
    });
  });

  describe("getBarChartLayout", () => {
    it("uses an 18px minimum and an 8px gap", () => {
      expect(MIN_BAR_SIZE_PX).toBe(18);
      expect(SPACE_BETWEEN_BARS_PX).toBe(8);
    });

    it("fits bars to the plot and does not scroll while they are at least 18px", () => {
      // Exactly at the threshold: (44 + 10 * 26 - 44) / 10 - 8 = 18.
      expect(getBarChartLayout(44 + 10 * 26, 10)).toEqual({
        barSize: 18,
        contentWidth: undefined,
      });
    });

    it("scrolls one pixel below the threshold", () => {
      expect(getBarChartLayout(44 + 10 * 26 - 1, 10)).toEqual({
        barSize: 18,
        contentWidth: 44 + 10 * 26,
      });
    });

    it("falls back to the minimum before the viewport is measured or with no data", () => {
      expect(getBarChartLayout(0, 5)).toEqual({
        barSize: 18,
        contentWidth: undefined,
      });
      expect(getBarChartLayout(400, 0)).toEqual({
        barSize: 18,
        contentWidth: undefined,
      });
    });
  });

  it("scales to the largest value and labels only the ends of the value axis", () => {
    renderBarChart();

    const yAxis = screen.getByTestId("y-axis");
    expect(yAxis).toHaveAttribute("data-domain", "0,40");
    expect(yAxis).toHaveTextContent("040");
  });

  it("falls back to a 0-1 scale with distinct ticks when every value is 0", () => {
    const zeroData: ChartDataItem[] = [
      {
        name: "15:11",
        value: 0,
        color: lightTheme.palette.vars.accentADefault,
      },
      {
        name: "16:11",
        value: 0,
        color: lightTheme.palette.vars.accentADefault,
      },
    ];
    renderBarChart({ data: zeroData });

    const yAxis = screen.getByTestId("y-axis");
    expect(yAxis).toHaveAttribute("data-domain", "0,1");
    expect(yAxis).toHaveTextContent("01");
  });

  it("accepts a fixed scale and value formatter", () => {
    renderBarChart({ maxValue: 100, valueFormatter: (value) => `${value}%` });

    const yAxis = screen.getByTestId("y-axis");
    expect(yAxis).toHaveAttribute("data-domain", "0,100");
    expect(yAxis).toHaveTextContent("0%100%");
  });

  it("labels the start and end of the plot", () => {
    const { rerender } = renderBarChart();

    expect(screen.getByTestId("bar-chart-labels")).toHaveTextContent(
      "15:1117:11",
    );

    rerender(
      <ThemeProvider defaultMode={ThemeMode.Light}>
        <BarChart data={data} categoryLabels={["Mon", "Sun"]} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId("bar-chart-labels")).toHaveTextContent("MonSun");
  });

  it("calls handleClick with the selected data item", () => {
    const handleClick = jest.fn();
    renderBarChart({ handleClick });

    fireEvent.click(screen.getAllByTestId("bar-cell")[1]);

    expect(handleClick).toHaveBeenCalledWith(data[1]);
  });
});
