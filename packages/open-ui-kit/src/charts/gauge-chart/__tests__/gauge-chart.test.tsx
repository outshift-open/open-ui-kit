/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { GaugeChart } from "../gauge-chart";
import { barShadow, gaugeWrapper } from "../styles";
import type { ChartDataItem } from "../../common/types";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({
    children,
    className,
    height,
    width,
  }: {
    children: ReactNode;
    className?: string;
    height: string;
    width: string;
  }) => (
    <div
      className={className}
      data-height={height}
      data-testid="responsive-container"
      data-width={width}
    >
      {children}
    </div>
  ),
  PieChart: ({
    children,
    height,
    width,
  }: {
    children: ReactNode;
    height: number;
    width: number;
  }) => (
    <svg data-height={height} data-testid="pie-chart" data-width={width}>
      {children}
    </svg>
  ),
  Pie: ({
    children,
    data,
    dataKey,
    endAngle,
    innerRadius,
    outerRadius,
    startAngle,
    strokeWidth,
  }: {
    children: ReactNode;
    data: Array<{ fill: string; value: number }>;
    dataKey: string;
    endAngle: number;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    strokeWidth: number;
  }) => (
    <g
      data-background-fill={data[1].fill}
      data-background-value={data[1].value}
      data-data-key={dataKey}
      data-end-angle={endAngle}
      data-inner-radius={innerRadius}
      data-main-fill={data[0].fill}
      data-main-value={data[0].value}
      data-outer-radius={outerRadius}
      data-start-angle={startAngle}
      data-stroke-width={strokeWidth}
      data-testid="pie"
    >
      {children}
    </g>
  ),
  Cell: ({
    strokeLinecap,
    style,
  }: {
    strokeLinecap: string;
    style?: CSSProperties;
  }) => (
    <path
      data-stroke-linecap={strokeLinecap}
      data-testid="gauge-cell"
      style={style}
    />
  ),
}));

const data: ChartDataItem[] = [
  {
    name: "Score",
    value: 75,
    color: lightTheme.palette.vars.warningBackgroundDefault,
  },
];

const renderGauge = (
  dark = false,
  props: Partial<ComponentProps<typeof GaugeChart>> = {},
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <GaugeChart data={data} {...props} />
    </ThemeProvider>,
  );

describe("GaugeChart", () => {
  it("uses design tokens for light theme fill, background, dividers, and label", () => {
    expect(lightTheme.palette.vars.warningBackgroundDefault).toBe("#fbab2c");
    expect(lightTheme.palette.vars.controlIconDisabled).toBe("#c5c7cb");
    expect(lightTheme.palette.vars.inactiveBackgroundDefault).toBe("#59616b");
    expect(lightTheme.palette.vars.baseTextDefault).toBe("#3c4551");

    const { container } = renderGauge();

    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        mainFill: lightTheme.palette.vars.warningBackgroundDefault,
        backgroundFill: lightTheme.palette.vars.controlIconDisabled,
      }),
    });
    expect(container.querySelector("line")).toHaveAttribute(
      "stroke",
      lightTheme.palette.vars.inactiveBackgroundDefault,
    );
    expect(screen.getByText("75")).toHaveStyle({
      color: lightTheme.palette.vars.baseTextDefault,
    });
  });

  it("uses design tokens for dark theme fill, background, dividers, and label", () => {
    expect(darkTheme.palette.vars.warningBackgroundDefault).toBe("#fbaf45");
    expect(darkTheme.palette.vars.controlIconDisabled).toBe("#777d85");
    expect(darkTheme.palette.vars.inactiveBackgroundDefault).toBe("#e8e9ea");
    expect(darkTheme.palette.vars.baseTextDefault).toBe("#e8e9ea");

    const { container } = renderGauge(true, {
      data: [
        {
          name: "Score",
          value: 75,
          color: darkTheme.palette.vars.warningBackgroundDefault,
        },
      ],
    });

    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        mainFill: darkTheme.palette.vars.warningBackgroundDefault,
        backgroundFill: darkTheme.palette.vars.controlIconDisabled,
      }),
    });
    expect(container.querySelector("line")).toHaveAttribute(
      "stroke",
      darkTheme.palette.vars.inactiveBackgroundDefault,
    );
    expect(screen.getByText("75")).toHaveStyle({
      color: darkTheme.palette.vars.baseTextDefault,
    });
  });

  it("renders the design geometry and divider ticks", () => {
    const { container } = renderGauge();

    expect(screen.getByTestId("responsive-container")).toHaveAttribute(
      "data-width",
      "100%",
    );
    expect(screen.getByTestId("responsive-container")).toHaveAttribute(
      "data-height",
      "100%",
    );
    expect(screen.getByTestId("pie-chart")).toMatchObject({
      dataset: expect.objectContaining({
        width: "132",
        height: "132",
      }),
    });
    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        dataKey: "value",
        endAngle: "-60",
        innerRadius: "57",
        outerRadius: "66",
        startAngle: "240",
        strokeWidth: "0",
      }),
    });
    expect(container.querySelectorAll("line")).toHaveLength(51);
  });

  it("clamps the filled arc to maxValue", () => {
    renderGauge(false, {
      maxValue: 50,
      data: [
        {
          name: "Score",
          value: 75,
          color: lightTheme.palette.vars.negativeBackgroundDefault,
        },
      ],
    });

    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        mainValue: "100",
        backgroundValue: "0",
      }),
    });
  });

  it("applies token-aware shadow and custom sizing", () => {
    renderGauge(false, {
      styleProps: {
        customWidth: 160,
        customHeight: 160,
        textTop: "48%",
      },
    });

    expect(gaugeWrapper({ width: 160, height: 160 })).toMatchObject({
      width: "160px",
      height: "160px",
    });
    expect(
      barShadow(lightTheme, lightTheme.palette.vars.warningBackgroundDefault),
    ).toMatchObject({
      filter: expect.stringContaining(lightTheme.shadows[1]),
    });
    expect(screen.getByTestId("pie-chart")).toMatchObject({
      dataset: expect.objectContaining({
        width: "160",
        height: "160",
      }),
    });
    expect(screen.getByText("75")).toHaveStyle({ top: "48%" });
  });

  it("renders an optional custom label", () => {
    renderGauge(false, {
      customLabelComponent: <span>Good</span>,
    });

    expect(screen.getByText("Good")).toBeInTheDocument();
  });
});
