/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ComponentProps, ReactNode } from "react";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { DonutChart } from "../donut-chart";
import { styles } from "../styles";
import type { ChartDataItem } from "../../common/types";

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
    minAngle,
    onClick,
    outerRadius,
    paddingAngle,
    startAngle,
    strokeWidth,
  }: {
    children: ReactNode;
    data: ChartDataItem[];
    dataKey: string;
    endAngle: number;
    innerRadius: number;
    minAngle: number;
    onClick?: (item: ChartDataItem) => void;
    outerRadius: number;
    paddingAngle: number;
    startAngle: number;
    strokeWidth: number;
  }) => (
    <g
      data-data-key={dataKey}
      data-end-angle={endAngle}
      data-inner-radius={innerRadius}
      data-min-angle={minAngle}
      data-outer-radius={outerRadius}
      data-padding-angle={paddingAngle}
      data-start-angle={startAngle}
      data-stroke-width={strokeWidth}
      data-testid="pie"
      onClick={() => onClick?.(data[0])}
    >
      {children}
    </g>
  ),
  Cell: ({ cursor, fill }: { cursor: string; fill: string }) => (
    <path data-fill={fill} data-testid="donut-cell" style={{ cursor }} />
  ),
  Tooltip: ({ content }: { content: ReactNode }) => (
    <foreignObject data-testid="tooltip">
      {typeof content === "function" ? null : content}
    </foreignObject>
  ),
}));

const data: ChartDataItem[] = [
  {
    name: "Healthy",
    value: 400,
    color: lightTheme.palette.vars.successBackgroundDefault,
  },
  {
    name: "Warning",
    value: 300,
    color: lightTheme.palette.vars.warningBackgroundDefault,
  },
  {
    name: "Critical",
    value: 500,
    color: lightTheme.palette.vars.negativeBackgroundDefault,
  },
];

const renderDonut = (
  dark = false,
  props: Partial<ComponentProps<typeof DonutChart>> = {},
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <DonutChart data={data} {...props} />
    </ThemeProvider>,
  );

describe("DonutChart", () => {
  it("uses tooltip and center label tokens in light mode", () => {
    expect(lightTheme.palette.vars.baseBackgroundWeak).toBe("#fbfcfe");
    expect(lightTheme.palette.vars.baseTextDefault).toBe("#3c4551");
    expect(styles(lightTheme).tooltip).toMatchObject({
      backgroundColor: lightTheme.palette.vars.baseBackgroundWeak,
      padding: "2px 8px",
      borderRadius: "4px",
    });
    expect(styles(lightTheme).tooltipTypography).toMatchObject({
      color: lightTheme.palette.vars.baseTextDefault,
    });

    const { container } = renderDonut();
    const label = container.querySelector("text");

    expect(label).toHaveTextContent("1200");
    expect(label).toHaveAttribute(
      "fill",
      lightTheme.palette.vars.baseTextDefault,
    );
  });

  it("uses tooltip and center label tokens in dark mode", () => {
    expect(darkTheme.palette.vars.baseBackgroundWeak).toBe("#183056");
    expect(darkTheme.palette.vars.baseTextDefault).toBe("#e8e9ea");
    expect(styles(darkTheme).tooltip).toMatchObject({
      backgroundColor: darkTheme.palette.vars.baseBackgroundWeak,
    });
    expect(styles(darkTheme).tooltipTypography).toMatchObject({
      color: darkTheme.palette.vars.baseTextDefault,
    });

    const { container } = renderDonut(true);
    const label = container.querySelector("text");

    expect(label).toHaveAttribute(
      "fill",
      darkTheme.palette.vars.baseTextDefault,
    );
  });

  it("renders the Recharts geometry from the design spec", () => {
    renderDonut();

    expect(screen.getByTestId("responsive-container")).toHaveAttribute(
      "data-width",
      "100%",
    );
    expect(screen.getByTestId("responsive-container")).toHaveAttribute(
      "data-height",
      "100%",
    );
    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        dataKey: "value",
        endAngle: "90",
        innerRadius: "57",
        minAngle: "10",
        outerRadius: "66",
        paddingAngle: "3",
        startAngle: "450",
        strokeWidth: "0",
      }),
    });
  });

  it("renders slices with token colors", () => {
    renderDonut();

    expect(screen.getAllByTestId("donut-cell")).toHaveLength(3);
    expect(screen.getAllByTestId("donut-cell")[0]).toHaveAttribute(
      "data-fill",
      lightTheme.palette.vars.successBackgroundDefault,
    );
    expect(screen.getAllByTestId("donut-cell")[1]).toHaveAttribute(
      "data-fill",
      lightTheme.palette.vars.warningBackgroundDefault,
    );
    expect(screen.getAllByTestId("donut-cell")[2]).toHaveAttribute(
      "data-fill",
      lightTheme.palette.vars.negativeBackgroundDefault,
    );
  });

  it("formats large totals compactly", () => {
    const { container } = renderDonut(false, {
      data: [
        {
          name: "Open",
          value: 555654,
          color: lightTheme.palette.vars.warningBackgroundDefault,
        },
        {
          name: "Closed",
          value: 1154656,
          color: lightTheme.palette.vars.successBackgroundDefault,
        },
      ],
    });

    expect(container.querySelector("text")).toHaveTextContent("1.7M");
  });

  it("calls handleClick with the selected slice and shows pointer cursor", () => {
    const handleClick = jest.fn();
    renderDonut(false, { handleClick });

    expect(screen.getAllByTestId("donut-cell")[0]).toHaveStyle({
      cursor: "pointer",
    });

    fireEvent.click(screen.getByTestId("pie"));

    expect(handleClick).toHaveBeenCalledWith(data[0]);
  });

  it("omits the tooltip when disabled", () => {
    renderDonut(false, { showTooltip: false });

    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();
  });
});
