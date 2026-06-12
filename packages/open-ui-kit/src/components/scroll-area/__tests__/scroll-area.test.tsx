/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });

global.ResizeObserver = class ResizeObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
};

import React, { type ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { ScrollArea } from "../components/scroll-area";
import { getScrollAreaViewportStyles } from "../styles";

const renderScrollArea = (
  props: Partial<ComponentProps<typeof ScrollArea>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <ScrollArea {...props} />
    </ThemeProvider>,
  );

describe("ScrollArea", () => {
  const getRoot = () =>
    document.querySelector("[data-slot='scroll-area']") as HTMLElement;
  const getViewport = () =>
    document.querySelector("[data-slot='scroll-area-viewport']") as HTMLElement;

  describe("rendering", () => {
    it("renders root with data-slot=scroll-area", () => {
      renderScrollArea();
      expect(getRoot()).toBeInTheDocument();
    });

    it("renders viewport with data-slot=scroll-area-viewport", () => {
      renderScrollArea();
      expect(getViewport()).toBeInTheDocument();
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

    it("makes the viewport keyboard focusable", () => {
      renderScrollArea();
      expect(getViewport()).toHaveAttribute("tabindex", "0");
    });
  });

  describe("token usage", () => {
    it("uses light scrollbar tokens", () => {
      renderScrollArea({ children: <span>content</span> }, false);
      expect(getViewport()).toHaveStyle({
        overflow: "hidden scroll",
      });
      expect(getScrollAreaViewportStyles(lightTheme)).toMatchObject({
        scrollbarColor: "#59616b transparent",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar-thumb": expect.objectContaining({
          backgroundColor: "#777d85",
        }),
      });
    });

    it("uses dark scrollbar tokens", () => {
      renderScrollArea({ children: <span>content</span> }, true);
      expect(getViewport()).toHaveStyle({
        overflow: "hidden scroll",
      });
      expect(getScrollAreaViewportStyles(darkTheme)).toMatchObject({
        scrollbarColor: "#c5c7cb transparent",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar-thumb": expect.objectContaining({
          backgroundColor: "#c5c7cb",
        }),
      });
    });
  });

  describe("props", () => {
    it("forwards sx to root element", () => {
      renderScrollArea({ sx: { height: 200 } });
      expect(getRoot()).toHaveStyle({ height: "200px" });
    });

    it("applies displayName", () => {
      expect(ScrollArea.displayName).toBe("ScrollArea");
    });
  });
});
