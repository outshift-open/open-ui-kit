/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });

global.ResizeObserver = class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
};

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { OverflowTooltip } from "../components/overflow-tooltip";

const renderTooltip = (
  props: Partial<React.ComponentProps<typeof OverflowTooltip>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <OverflowTooltip value="Tooltip text" {...props}>
        Display text
      </OverflowTooltip>
    </ThemeProvider>,
  );

describe("OverflowTooltip", () => {
  describe("rendering", () => {
    it("renders children content", () => {
      renderTooltip();
      expect(screen.getByText("Display text")).toBeInTheDocument();
    });

    it("renders with end truncation by default", () => {
      const { container } = renderTooltip();
      const wrapper = container.querySelector("div");
      // default direction = ltr (no rtl override)
      expect(wrapper?.style.direction).not.toBe("rtl");
    });

    it("renders with start truncation (rtl wrapper)", () => {
      const { container } = renderTooltip({ ellipsisDirection: "start" });
      const wrapper = container.querySelector("div");
      expect(wrapper?.style.direction).toBe("rtl");
    });

    it("applies styleText to the inner span", () => {
      const { container } = renderTooltip({ styleText: { color: "red" } });
      const span = container.querySelector("span");
      expect(span?.style.color).toBe("red");
    });
  });

  describe("token usage", () => {
    it("renders in light mode without error", () => {
      expect(() => renderTooltip({}, false)).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() => renderTooltip({}, true)).not.toThrow();
    });
  });
});
