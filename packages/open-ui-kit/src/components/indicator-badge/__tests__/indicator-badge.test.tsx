/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { IndicatorBadge } from "../components/indicator-badge";

const renderIndicatorBadge = (
  props: React.ComponentProps<typeof IndicatorBadge>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <IndicatorBadge {...props} />
    </ThemeProvider>,
  );

describe("IndicatorBadge", () => {
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
  });

  describe("value variants", () => {
    it("renders all supported values", () => {
      ([0, 1, 2, 3, 4] as const).forEach((value) => {
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
