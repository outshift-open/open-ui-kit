/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactElement } from "react";
import type { SxProps, Theme } from "@mui/material/styles";
import { Widget } from "@/components/widget";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ChartType } from "../../common/types";
import { ChartWidget } from "../chart-widget";
import {
  getChartWidgetBodyStyles,
  getChartWidgetContainerStyles,
} from "../styles";

jest.mock("@/components/widget", () => ({
  Widget: jest.fn(
    ({ bodyElement }: { bodyElement: ReactElement }): JSX.Element => (
      <section data-testid="widget">{bodyElement}</section>
    ),
  ),
}));

jest.mock("../../common/chart-type-components", () => {
  const { ChartType: MockChartType } = jest.requireActual(
    "../../common/types",
  ) as typeof import("../../common/types");

  const MockChart = ({
    categories = [],
    data,
    showTooltip,
  }: {
    categories?: unknown[];
    data: Array<{ name?: string }>;
    showTooltip?: boolean;
  }) => (
    <div
      data-categories={categories.length}
      data-show-tooltip={String(showTooltip)}
      data-testid="chart-component"
    >
      {data[0]?.name}
    </div>
  );

  return {
    ChartTypeComponents: {
      [MockChartType.VERTICAL_BAR]: MockChart,
      [MockChartType.HORIZONTAL_BAR]: MockChart,
      [MockChartType.DONUT]: MockChart,
      [MockChartType.GAUGE]: MockChart,
      [MockChartType.LINE]: MockChart,
      [MockChartType.BAR_GRAPH]: MockChart,
    },
  };
});

const widgetMock = Widget as jest.MockedFunction<typeof Widget>;

const data = [{ name: "Healthy", value: 40, color: "token-color" }];

const getWidgetProps = () => widgetMock.mock.calls[0][0];

const getBodySx = () => {
  const bodyElement = getWidgetProps().bodyElement as ReactElement<{
    sx: SxProps<Theme>;
  }>;

  return bodyElement.props.sx;
};

describe("ChartWidget", () => {
  beforeEach(() => {
    widgetMock.mockClear();
  });

  it("uses the chart card token contract in both themes", () => {
    expect(lightTheme.palette.vars.baseBackgroundWeak).toBe("#fbfcfe");
    expect(lightTheme.palette.vars.interactiveSecondaryDefaultDefault).toBe(
      "#062242",
    );
    expect(lightTheme.shadows[1]).toBe("0px 4px 4px rgba(200, 213, 245, 0.33)");

    expect(darkTheme.palette.vars.baseBackgroundWeak).toBe("#183056");
    expect(darkTheme.palette.vars.interactiveSecondaryDefaultDefault).toBe(
      "#e8eefb",
    );
    expect(darkTheme.shadows[1]).toBe("0px 4px 4px rgba(6, 34, 66, 0.33)");
  });

  it("keeps consumer sx last on the outer widget", () => {
    render(
      <ChartWidget
        data={data}
        generalWidgetStyle={{ width: 301 }}
        label="Risk"
        sx={{ width: 360 }}
        type={ChartType.BAR_GRAPH}
      />,
    );

    expect(getWidgetProps().sx).toEqual([
      getChartWidgetContainerStyles(ChartType.BAR_GRAPH),
      { width: 301 },
      { width: 360 },
    ]);
  });

  it("only fixes the outer height for bar graph widgets", () => {
    expect(getChartWidgetContainerStyles(ChartType.BAR_GRAPH)).toEqual({
      height: "392px",
      position: "relative",
    });
    expect(getChartWidgetContainerStyles(ChartType.DONUT)).toEqual({});
    expect(getChartWidgetContainerStyles(ChartType.GAUGE)).toEqual({});
    expect(getChartWidgetContainerStyles(ChartType.LINE)).toEqual({});
  });

  it("applies default chart body sizing before stackStyle overrides", () => {
    render(
      <ChartWidget
        data={data}
        label="Risk"
        stackStyle={{ sx: { height: "200px" } }}
        type={ChartType.DONUT}
      />,
    );

    expect(getBodySx()).toEqual([
      getChartWidgetBodyStyles(ChartType.DONUT, false),
      { height: "200px" },
    ]);
  });

  it("uses compact body height for horizontal widgets", () => {
    render(
      <ChartWidget
        data={data}
        isHorizontal
        label="Risk"
        type={ChartType.DONUT}
      />,
    );

    expect(getBodySx()).toEqual([
      getChartWidgetBodyStyles(ChartType.DONUT, true),
    ]);
  });

  it("does not copy outer sx into bar graph or horizontal bar body styles", () => {
    render(
      <ChartWidget
        data={data}
        label="Risk"
        sx={{ height: "384px" }}
        type={ChartType.HORIZONTAL_BAR}
      />,
    );

    expect(getBodySx()).toEqual([
      getChartWidgetBodyStyles(ChartType.HORIZONTAL_BAR, false),
    ]);
  });

  it("passes chart props and widget state through", () => {
    render(
      <ChartWidget
        categories={[{ name: "Healthy" }]}
        data={data}
        isEmpty
        label="Risk"
        showTooltip
        type={ChartType.LINE}
      />,
    );

    expect(getWidgetProps()).toMatchObject({
      isEmpty: true,
      label: "Risk",
    });
    expect(screen.getByTestId("chart-component")).toHaveAttribute(
      "data-show-tooltip",
      "true",
    );
    expect(screen.getByTestId("chart-component")).toHaveAttribute(
      "data-categories",
      "1",
    );
  });
});
