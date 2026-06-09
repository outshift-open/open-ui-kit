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
import { ScrollArea } from "../components/scroll-area";

const renderScrollArea = (
  props: Partial<React.ComponentProps<typeof ScrollArea>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <ScrollArea {...props} />
    </ThemeProvider>,
  );

describe("ScrollArea", () => {
  describe("rendering", () => {
    it("renders root with data-slot=scroll-area", () => {
      renderScrollArea();
      expect(
        document.querySelector("[data-slot='scroll-area']"),
      ).toBeInTheDocument();
    });

    it("renders viewport with data-slot=scroll-area-viewport", () => {
      renderScrollArea();
      expect(
        document.querySelector("[data-slot='scroll-area-viewport']"),
      ).toBeInTheDocument();
    });

    it("renders children inside the viewport", () => {
      renderScrollArea({ children: <span>hello</span> });
      expect(screen.getByText("hello")).toBeInTheDocument();
    });

    it("forwards ref to root element", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <ThemeProvider>
          <ScrollArea ref={ref}>content</ScrollArea>
        </ThemeProvider>,
      );
      expect(ref.current).not.toBeNull();
      expect(ref.current?.getAttribute("data-slot")).toBe("scroll-area");
    });
  });

  describe("token usage", () => {
    it("renders in light mode without error", () => {
      expect(() =>
        renderScrollArea({ children: <span>content</span> }, false),
      ).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() =>
        renderScrollArea({ children: <span>content</span> }, true),
      ).not.toThrow();
    });
  });

  describe("props", () => {
    it("forwards sx to root element", () => {
      renderScrollArea({ sx: { height: 200 } });
      const root = document.querySelector(
        "[data-slot='scroll-area']",
      ) as HTMLElement;
      expect(root).toBeInTheDocument();
    });

    it("applies displayName", () => {
      expect(ScrollArea.displayName).toBe("ScrollArea");
    });
  });
});
