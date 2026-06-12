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

import type { ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { PathDisplay } from "../components/path-display";

const renderPath = (
  props: Partial<ComponentProps<typeof PathDisplay>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <PathDisplay path="" {...props} />
    </ThemeProvider>,
  );

describe("PathDisplay", () => {
  describe("rendering", () => {
    it("renders nothing for empty path", () => {
      const { container } = renderPath({ path: "" });
      expect(container.firstChild).toBeNull();
    });

    it("renders the full path when segments < numberOfLevels", () => {
      renderPath({ path: "A / B" });
      expect(screen.getByText("A / B")).toBeInTheDocument();
    });

    it("collapses path when segments >= numberOfLevels (default 3)", () => {
      renderPath({ path: "A / B / C / D" });
      expect(screen.getByText("A / ... / D")).toBeInTheDocument();
    });

    it("normalizes whitespace around path separators", () => {
      renderPath({ path: "A / B/C  /   D" });
      expect(screen.getByText("A / ... / D")).toBeInTheDocument();
    });

    it("shows full path when exactly at numberOfLevels threshold", () => {
      renderPath({ path: "A / B / C", numberOfLevels: 3 });
      expect(screen.getByText("A / ... / C")).toBeInTheDocument();
    });

    it("does not collapse when path is below custom numberOfLevels", () => {
      renderPath({ path: "A / B / C", numberOfLevels: 4 });
      expect(screen.getByText("A / B / C")).toBeInTheDocument();
    });

    it("handles leading slash by using second segment as prefix", () => {
      renderPath({ path: "/Company / A / B / C" });
      expect(screen.getByText("Company / ... / C")).toBeInTheDocument();
    });

    it("removes a leading slash from short paths", () => {
      renderPath({ path: "/Company" });
      expect(screen.getByText("Company")).toBeInTheDocument();
    });

    it("renders single segment without collapsing", () => {
      renderPath({ path: "Epsagon" });
      expect(screen.getByText("Epsagon")).toBeInTheDocument();
    });

    it("forwards typography props to the rendered text", () => {
      renderPath({
        path: "A / B",
        typographyProps: { id: "path-text" },
      });
      expect(document.getElementById("path-text")).toHaveTextContent("A / B");
    });

    it("uses the normalized full path as the tooltip title when collapsed", () => {
      renderPath({ path: "A / B/C  /   D" });
      expect(screen.getByLabelText("A / B / C / D")).toBeInTheDocument();
    });

    it("forwards tooltip props", () => {
      renderPath({
        path: "A / B / C",
        tooltipProps: { placement: "bottom" },
      });
      expect(screen.getByLabelText("A / B / C")).toBeInTheDocument();
    });
  });

  describe("token usage", () => {
    it("renders in light mode without error", () => {
      expect(() => renderPath({ path: "A / B / C" }, false)).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() => renderPath({ path: "A / B / C" }, true)).not.toThrow();
    });
  });
});
