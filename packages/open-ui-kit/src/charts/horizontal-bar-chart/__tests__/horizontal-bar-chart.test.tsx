/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ComponentProps } from "react";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { HorizontalBarChart } from "../horizontal-bar-chart";
import { getBarStyle } from "../styles";
import type { ChartDataItem } from "../../common/types";

const TestIcon = () => <svg data-testid="row-icon" />;

const data: ChartDataItem[] = [
  {
    name: "Cryptomining",
    value: 10,
    color: lightTheme.palette.vars.accentADefault,
    icon: TestIcon,
  },
  {
    name: "Ransomware",
    value: 4,
    color: lightTheme.palette.vars.accentADefault,
  },
  {
    name: "Application",
    value: 0,
    color: lightTheme.palette.vars.accentADefault,
  },
];

const renderChart = (
  dark = false,
  props: Partial<ComponentProps<typeof HorizontalBarChart>> = {},
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <HorizontalBarChart data={data} {...props} />
    </ThemeProvider>,
  );

describe("HorizontalBarChart", () => {
  it("uses token colors and design dimensions for bar styles", () => {
    expect(lightTheme.palette.vars.accentADefault).toBe("#5c6ddd");
    expect(darkTheme.palette.vars.accentADefault).toBe("#bac1ff");

    expect(
      getBarStyle(4, 10, lightTheme.palette.vars.accentADefault),
    ).toMatchObject({
      width: "40%",
      height: 8,
      borderRadius: 0.5,
      backgroundColor: lightTheme.palette.vars.accentADefault,
    });
    expect(
      getBarStyle(4, 10, darkTheme.palette.vars.accentADefault),
    ).toMatchObject({
      backgroundColor: darkTheme.palette.vars.accentADefault,
    });
  });

  it("keeps zero-value data from producing invalid widths", () => {
    expect(
      getBarStyle(0, 0, lightTheme.palette.vars.accentADefault),
    ).toMatchObject({
      width: "0%",
    });
  });

  it("renders categories, labels, values, and icons", () => {
    renderChart(false, {
      categories: [{ name: "Attack Purpose" }, { name: "No. Attacks" }],
    });

    expect(screen.getByText("Attack Purpose")).toBeInTheDocument();
    expect(screen.getByText("No. Attacks")).toBeInTheDocument();
    expect(screen.getByText("Cryptomining")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Application")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByTestId("row-icon")).toBeInTheDocument();
  });

  it("does not make rows interactive without handleClick", () => {
    renderChart();

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("calls handleClick from mouse and keyboard activation", () => {
    const handleClick = jest.fn();
    renderChart(false, { handleClick });

    const cryptominingRow = screen.getByRole("button", {
      name: "Cryptomining 10",
    });

    fireEvent.click(cryptominingRow);
    fireEvent.keyDown(cryptominingRow, { key: "Enter" });
    fireEvent.keyDown(cryptominingRow, { key: " " });

    expect(handleClick).toHaveBeenCalledTimes(3);
    expect(handleClick).toHaveBeenCalledWith(data[0]);
  });
});
