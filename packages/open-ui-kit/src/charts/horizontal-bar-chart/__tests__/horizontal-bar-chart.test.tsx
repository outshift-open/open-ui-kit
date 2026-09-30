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
import {
  BAR_RADIUS,
  getBarStyle,
  MIN_BAR_HEIGHT_PX,
  SPACE_BETWEEN_BARS_PX,
  styles,
  VALUE_GAP_PX,
  VALUE_GUTTER_PX,
  VALUE_WIDTH_PX,
} from "../styles";
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
      height: 18,
      borderRadius: "0 4px 4px 0",
      backgroundColor: lightTheme.palette.vars.accentADefault,
    });
    expect(
      getBarStyle(4, 10, darkTheme.palette.vars.accentADefault),
    ).toMatchObject({
      backgroundColor: darkTheme.palette.vars.accentADefault,
    });
  });

  it("drops the values and the gutter they reserved when showValues is false", () => {
    renderChart(false, { showValues: false });

    data.forEach((d) => {
      expect(screen.queryByText(String(d.value))).not.toBeInTheDocument();
      expect(screen.getByText(d.name)).toBeInTheDocument();
    });
    // The gutter exists only to hold the value; keeping it would shorten every
    // bar against unchanged data.
    expect(styles.barTrackBare).not.toHaveProperty("paddingRight");
  });

  it("rounds only the growing end of the bar", () => {
    // Figma renders the fill with `rounded-tr-[4px] rounded-br-[4px]` — the left
    // edge stays square so the bar reads as running out from a common origin
    // rather than floating. The vertical chart rounds its columns the same way.
    expect(BAR_RADIUS).toBe("0 4px 4px 0");
    expect(
      getBarStyle(4, 10, lightTheme.palette.vars.accentADefault),
    ).toMatchObject({ borderRadius: BAR_RADIUS });
  });

  it("uses an 18px bar height and an 8px gap between rows", () => {
    expect(MIN_BAR_HEIGHT_PX).toBe(18);
    expect(SPACE_BETWEEN_BARS_PX).toBe(8);
    expect(styles.barsContainer).toMatchObject({ gap: "8px" });
  });

  it("places the value 2px past the end of the bar, centred against it", () => {
    // The design positions the value box at x = bar fill width + 2 and gives it
    // the bar's own height, so the number reads as part of the bar.
    expect(VALUE_GAP_PX).toBe(2);
    expect(VALUE_WIDTH_PX).toBe(36);
    expect(styles.value).toMatchObject({
      minWidth: VALUE_WIDTH_PX,
      height: MIN_BAR_HEIGHT_PX,
      marginLeft: "2px",
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
    });
  });

  it("reserves the value's room so a full-width bar cannot push it out of the row", () => {
    expect(VALUE_GUTTER_PX).toBe(38);
    expect(styles.barTrack).toMatchObject({
      display: "flex",
      alignItems: "center",
      paddingRight: "38px",
    });
    // Bar widths are a percentage of what is left after that gutter, and the
    // bar never shrinks, so the longest bar stops exactly one gutter short of
    // the row's right edge and its value fits in the space kept back.
    expect(
      getBarStyle(10, 10, lightTheme.palette.vars.accentADefault),
    ).toMatchObject({
      width: "100%",
      flexShrink: 0,
    });
  });

  it("scrolls rows vertically inside the height it is given", () => {
    // Shrinkable flex child with vertical overflow — the pieces that make the
    // rows scroll instead of stretching the chart past its container.
    expect(styles.barsContainer).toMatchObject({
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      overflowX: "hidden",
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

  it("keeps each value with its bar rather than in the label row", () => {
    renderChart();

    const value = screen.getByText("10");
    const track = value.parentElement;

    // The bar is the value's only sibling and comes first; the name stays in
    // the row above, so the number tracks the bar's length instead of sitting
    // in a fixed right-hand column.
    expect(track?.childElementCount).toBe(2);
    expect(track?.lastElementChild).toBe(value);
    expect(track).not.toContainElement(screen.getByText("Cryptomining"));
  });

  it("renders values in the value token color and typography", () => {
    expect(lightTheme.palette.vars.baseTextMedium).toBe("#59616b");
    expect(lightTheme.typography.captionSemibold).toMatchObject({
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "16px",
    });

    renderChart();

    const value = screen.getByText("10");

    expect(value).toHaveClass("MuiTypography-captionSemibold");
    expect(value).toHaveStyle({
      color: lightTheme.palette.vars.baseTextMedium,
    });
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

  describe("inline variant", () => {
    it("renders the name before the bar and the value after it, on the same line", () => {
      renderChart(false, {
        variant: "inline",
        categories: [{ name: "Attack Purpose" }, { name: "No. Attacks" }],
      });

      // The category header is unrelated to per-row layout and still renders.
      expect(screen.getByText("Attack Purpose")).toBeInTheDocument();
      expect(screen.getByText("Cryptomining")).toBeInTheDocument();
      expect(screen.getByText("10")).toBeInTheDocument();
      expect(screen.getByTestId("row-icon")).toBeInTheDocument();
    });

    it("trails the value off the end of the bar, as the labelled variant does", () => {
      renderChart(false, { variant: "inline" });

      const value = screen.getByText("10");
      const track = value.parentElement;

      expect(track?.childElementCount).toBe(2);
      expect(track?.lastElementChild).toBe(value);
      expect(track).not.toContainElement(screen.getByText("Cryptomining"));
    });

    it("still supports mouse and keyboard activation", () => {
      const handleClick = jest.fn();
      renderChart(false, { variant: "inline", handleClick });

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
});
