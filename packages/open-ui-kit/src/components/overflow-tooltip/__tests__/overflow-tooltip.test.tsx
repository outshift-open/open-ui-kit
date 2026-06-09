/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });

let resizeObserverCallback: ResizeObserverCallback | undefined;

class ResizeObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();

  constructor(callback: ResizeObserverCallback) {
    resizeObserverCallback = callback;
  }
}

global.ResizeObserver = ResizeObserverMock;

import type { ComponentProps } from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { OverflowTooltip } from "../components/overflow-tooltip";

const renderTooltip = (
  props: Partial<ComponentProps<typeof OverflowTooltip>> = {},
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

    it("shows the tooltip when the text overflows", async () => {
      const { container } = renderTooltip();
      const wrapper = container.querySelector("div") as HTMLDivElement;

      Object.defineProperty(wrapper, "scrollWidth", {
        configurable: true,
        value: 220,
      });
      Object.defineProperty(wrapper, "clientWidth", {
        configurable: true,
        value: 120,
      });

      act(() => {
        resizeObserverCallback?.([], {} as ResizeObserver);
      });

      fireEvent.mouseOver(screen.getByText("Display text"));

      expect(await screen.findByRole("tooltip")).toHaveTextContent(
        "Tooltip text",
      );
    });

    it("does not show the tooltip when the text fits", async () => {
      const { container } = renderTooltip();
      const wrapper = container.querySelector("div") as HTMLDivElement;

      Object.defineProperty(wrapper, "scrollWidth", {
        configurable: true,
        value: 120,
      });
      Object.defineProperty(wrapper, "clientWidth", {
        configurable: true,
        value: 120,
      });

      act(() => {
        resizeObserverCallback?.([], {} as ResizeObserver);
      });

      fireEvent.mouseOver(screen.getByText("Display text"));

      await waitFor(() => {
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
      });
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
