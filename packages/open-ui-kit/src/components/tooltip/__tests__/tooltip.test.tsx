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
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Tooltip } from "../components/tooltip";
import {
  baseTooltipStyles,
  largeTooltipStyles,
  mediumTooltipStyles,
  TOOLTIP_ARROW_HEIGHT,
  TOOLTIP_ARROW_WIDTH,
  tooltipArrowStyles,
  tooltipPopperSx,
} from "../styles";
import { TooltipSize } from "../types";

const renderTooltip = (
  props: Partial<React.ComponentProps<typeof Tooltip>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
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
      "bottom-start",
      "bottom-end",
    ] as const;
    placements.forEach((placement) => {
      it(`renders placement "${placement}" with arrow without throwing`, () => {
        expect(() => renderTooltip({ placement, arrow: true })).not.toThrow();
      });

      it(`renders arrow element for placement "${placement}"`, () => {
        renderTooltip({ placement, arrow: true });
        expect(document.querySelector(".MuiTooltip-arrow")).toBeInTheDocument();
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
        height: `${TOOLTIP_ARROW_HEIGHT}px`,
        width: `${TOOLTIP_ARROW_WIDTH}px`,
        "&::before": {
          height: "100%",
          width: "100%",
        },
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

    it("uses px-accurate popper margins for all arrow sides", () => {
      expect(tooltipPopperSx).toMatchObject({
        [`&[data-popper-placement*="bottom"] .MuiTooltip-arrow`]: {
          marginTop: `-${TOOLTIP_ARROW_HEIGHT}px`,
        },
        [`&[data-popper-placement*="top"] .MuiTooltip-arrow`]: {
          marginBottom: `-${TOOLTIP_ARROW_HEIGHT}px`,
        },
        [`&[data-popper-placement*="left"] .MuiTooltip-arrow, &[data-popper-placement*="right"] .MuiTooltip-arrow`]:
          {
            height: `${TOOLTIP_ARROW_WIDTH}px`,
            width: `${TOOLTIP_ARROW_HEIGHT}px`,
          },
      });
    });
  });
});
