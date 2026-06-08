/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Tooltip } from "../components/tooltip";
import {
  baseTooltipStyles,
  largeTooltipStyles,
  mediumTooltipStyles,
  tooltipArrowStyles,
} from "../styles";
import { TooltipSize } from "../types";

const renderTooltip = (
  props: Partial<React.ComponentProps<typeof Tooltip>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Tooltip title="Tooltip text" open {...props}>
        <span>trigger</span>
      </Tooltip>
    </ThemeProvider>,
  );

describe("Tooltip", () => {
  describe("rendering", () => {
    it("renders tooltip content when open", () => {
      renderTooltip();
      expect(screen.getByText("Tooltip text")).toBeInTheDocument();
    });

    it("renders trigger children", () => {
      renderTooltip();
      expect(screen.getByText("trigger")).toBeInTheDocument();
    });

    it("renders medium size by default", () => {
      renderTooltip();
      expect(screen.getByText("Tooltip text")).toBeInTheDocument();
    });

    it("renders large size without throwing", () => {
      expect(() => renderTooltip({ size: TooltipSize.Large })).not.toThrow();
    });

    it("renders with arrow without throwing", () => {
      expect(() => renderTooltip({ arrow: true })).not.toThrow();
    });
  });

  describe("placements", () => {
    const placements = [
      "top",
      "bottom",
      "left",
      "right",
      "top-start",
      "top-end",
    ] as const;
    placements.forEach((placement) => {
      it(`renders placement "${placement}" without throwing`, () => {
        expect(() => renderTooltip({ placement })).not.toThrow();
      });
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderTooltip()).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderTooltip({}, true)).not.toThrow();
    });

    it("uses CSS-specified light theme tooltip tokens", () => {
      expect(baseTooltipStyles(lightTheme)).toMatchObject({
        backgroundColor: lightTheme.palette.vars.inactiveBackgroundActive,
        borderRadius: "4px",
        color: lightTheme.palette.vars.baseTextInverse,
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.4px",
        lineHeight: "16px",
      });
      expect(tooltipArrowStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.inactiveBackgroundActive,
        height: "6px",
        width: "10px",
      });
      expect(lightTheme.palette.vars.inactiveBackgroundActive).toBe("#272e37");
      expect(lightTheme.palette.vars.baseTextInverse).toBe("#e8e9ea");
    });

    it("uses CSS-specified dark theme tooltip tokens", () => {
      expect(baseTooltipStyles(darkTheme)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.inactiveBackgroundActive,
        color: darkTheme.palette.vars.baseTextInverse,
      });
      expect(tooltipArrowStyles(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.inactiveBackgroundActive,
      });
      expect(darkTheme.palette.vars.inactiveBackgroundActive).toBe("#9ea2a8");
      expect(darkTheme.palette.vars.baseTextInverse).toBe("#00142b");
    });

    it("uses CSS-specified size dimensions", () => {
      expect(mediumTooltipStyles).toMatchObject({
        height: "20px",
        padding: "2px 8px",
      });
      expect(largeTooltipStyles).toMatchObject({
        height: "32px",
        padding: "8px 12px",
      });
    });
  });
});
