/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { IndicatorBadge } from "..";
import {
  getIndicatorBadgeBackdropStyles,
  getIndicatorBadgeContainerStyles,
  getIndicatorBadgeValueBarStyles,
  getIndicatorBadgeValueStackStyles,
} from "../styles";
import type { IndicatorBadgeValue } from "../types";

const renderIndicatorBadge = (
  props: React.ComponentProps<typeof IndicatorBadge>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <IndicatorBadge {...props} />
    </ThemeProvider>,
  );

describe("IndicatorBadge", () => {
  const values: IndicatorBadgeValue[] = [0, 1, 2, 3, 4];

  describe("rendering", () => {
    it("renders an accessible indicator for the current value", () => {
      renderIndicatorBadge({
        color: lightTheme.palette.vars.negativeBackgroundActive,
        value: 3,
      });
      expect(
        screen.getByRole("img", { name: "Indicator badge value 3 of 4" }),
      ).toBeInTheDocument();
    });

    it("renders four value bars", () => {
      renderIndicatorBadge({
        color: lightTheme.palette.vars.negativeBackgroundActive,
        value: 2,
      });
      expect(screen.getAllByTestId("indicator-badge-bar")).toHaveLength(4);
    });

    it("uses the compact badge geometry", () => {
      const { container } = renderIndicatorBadge({
        color: lightTheme.palette.vars.negativeBackgroundActive,
        value: 3,
      });
      const badge = screen.getByRole("img", {
        name: "Indicator badge value 3 of 4",
      });
      const backdrop = container.querySelector(".MuiBox-root > .MuiBox-root");

      expect(badge).toHaveStyle({
        width: "24px",
        height: "24px",
        display: "flex",
        position: "relative",
      });
      expect(backdrop).toHaveStyle({
        width: "inherit",
        height: "inherit",
        borderRadius: "4px",
        opacity: "0.1",
      });
    });
  });

  describe("value variants", () => {
    it("renders all supported values", () => {
      values.forEach((value) => {
        const { unmount } = renderIndicatorBadge({
          color: lightTheme.palette.vars.negativeBackgroundActive,
          value,
        });
        expect(
          screen.getByRole("img", {
            name: `Indicator badge value ${value} of 4`,
          }),
        ).toBeInTheDocument();
        unmount();
      });
    });

    it("marks only the requested number of bars as active", () => {
      renderIndicatorBadge({
        color: lightTheme.palette.vars.negativeBackgroundActive,
        value: 2,
      });
      const bars = screen.getAllByTestId("indicator-badge-bar");
      expect(bars[0]).toHaveStyle({ opacity: "0.4" });
      expect(bars[1]).toHaveStyle({ opacity: "0.4" });
      expect(bars[2]).toHaveStyle({ opacity: "1" });
      expect(bars[3]).toHaveStyle({ opacity: "1" });
    });
  });

  describe("token coverage", () => {
    it("uses the expected light theme layout styles", () => {
      expect(getIndicatorBadgeContainerStyles()).toMatchObject({
        width: "24px",
        height: "24px",
        position: "relative",
      });
      expect(getIndicatorBadgeValueStackStyles()).toMatchObject({
        position: "absolute",
        gap: "2px",
      });
      expect(
        getIndicatorBadgeBackdropStyles(
          lightTheme,
          lightTheme.palette.vars.negativeBackgroundActive,
        ),
      ).toMatchObject({
        backgroundColor: lightTheme.palette.vars.negativeBackgroundActive,
        opacity: 0.1,
      });
      expect(
        getIndicatorBadgeValueBarStyles(
          lightTheme,
          lightTheme.palette.vars.negativeBackgroundActive,
          true,
        ),
      ).toMatchObject({
        width: "6px",
        height: "3px",
        backgroundColor: lightTheme.palette.vars.negativeBackgroundActive,
        opacity: 1,
      });
    });

    it("uses the expected dark theme severity token styles", () => {
      expect(
        getIndicatorBadgeValueBarStyles(
          darkTheme,
          darkTheme.palette.vars.warningBackgroundActive,
          false,
        ),
      ).toMatchObject({
        backgroundColor: darkTheme.palette.vars.warningBackgroundActive,
        opacity: 0.4,
      });
    });

    it("renders light theme severity token colors", () => {
      expect(() =>
        renderIndicatorBadge({
          color: lightTheme.palette.vars.negativeBackgroundActive,
          value: 4,
        }),
      ).not.toThrow();
      expect(() =>
        renderIndicatorBadge({
          color: lightTheme.palette.vars.warningBackgroundActive,
          value: 2,
        }),
      ).not.toThrow();
    });

    it("renders dark theme severity token colors", () => {
      expect(() =>
        renderIndicatorBadge(
          {
            color: darkTheme.palette.vars.negativeBackgroundActive,
            value: 4,
          },
          true,
        ),
      ).not.toThrow();
      expect(() =>
        renderIndicatorBadge(
          {
            color: darkTheme.palette.vars.warningBackgroundActive,
            value: 2,
          },
          true,
        ),
      ).not.toThrow();
    });
  });
});
