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
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Skeleton } from "../components/skeleton";

const renderSkeleton = (
  props: Partial<React.ComponentProps<typeof Skeleton>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Skeleton {...props} />
    </ThemeProvider>,
  );

describe("Skeleton", () => {
  describe("rendering", () => {
    it("renders without error", () => {
      const { container } = renderSkeleton();
      expect(container.querySelector(".MuiSkeleton-root")).toBeInTheDocument();
    });

    it("defaults to wave animation", () => {
      const { container } = renderSkeleton();
      expect(container.querySelector(".MuiSkeleton-wave")).toBeInTheDocument();
    });

    it("renders text variant", () => {
      const { container } = renderSkeleton({ variant: "text" });
      expect(container.querySelector(".MuiSkeleton-text")).toBeInTheDocument();
    });

    it("renders circular variant", () => {
      const { container } = renderSkeleton({
        variant: "circular",
        width: 40,
        height: 40,
      });
      expect(
        container.querySelector(".MuiSkeleton-circular"),
      ).toBeInTheDocument();
    });

    it("renders rectangular variant", () => {
      const { container } = renderSkeleton({ variant: "rectangular" });
      expect(
        container.querySelector(".MuiSkeleton-rectangular"),
      ).toBeInTheDocument();
    });

    it("renders rounded variant", () => {
      const { container } = renderSkeleton({ variant: "rounded" });
      expect(
        container.querySelector(".MuiSkeleton-rounded"),
      ).toBeInTheDocument();
    });

    it("renders pulse animation", () => {
      const { container } = renderSkeleton({ animation: "pulse" });
      expect(container.querySelector(".MuiSkeleton-pulse")).toBeInTheDocument();
    });

    it("renders with no animation", () => {
      const { container } = renderSkeleton({ animation: false });
      expect(
        container.querySelector(".MuiSkeleton-wave"),
      ).not.toBeInTheDocument();
      expect(
        container.querySelector(".MuiSkeleton-pulse"),
      ).not.toBeInTheDocument();
    });
  });

  describe("token usage", () => {
    it("renders in light mode without error", () => {
      expect(() => renderSkeleton({}, false)).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() => renderSkeleton({}, true)).not.toThrow();
    });
  });
});
