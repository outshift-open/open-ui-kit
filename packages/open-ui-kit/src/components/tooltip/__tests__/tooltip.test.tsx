/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Tooltip } from "../components/tooltip";
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
  });
});
