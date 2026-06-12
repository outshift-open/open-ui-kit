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
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Skeleton } from "../components/skeleton";
import { getSkeletonStyles } from "../styles";

const renderSkeleton = (
  props: Partial<ComponentProps<typeof Skeleton>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Skeleton {...props} />
    </ThemeProvider>,
  );

describe("Skeleton", () => {
  const getSkeleton = (container: HTMLElement) =>
    container.querySelector("[data-slot='skeleton']") as HTMLElement;

  describe("rendering", () => {
    it("renders without error", () => {
      const { container } = renderSkeleton();
      expect(getSkeleton(container)).toBeInTheDocument();
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
    it("uses light theme skeleton tokens", () => {
      expect(getSkeletonStyles(lightTheme)).toEqual({
        backgroundColor: "#fbfcfe",
        "&.MuiSkeleton-wave": {
          backgroundColor: "#fbfcfe",
          "&::after": {
            background:
              "linear-gradient(90deg, transparent, #e8eefb, transparent)",
          },
        },
      });
    });

    it("uses dark theme skeleton tokens", () => {
      expect(getSkeletonStyles(darkTheme)).toEqual({
        backgroundColor: "#183056",
        "&.MuiSkeleton-wave": {
          backgroundColor: "#183056",
          "&::after": {
            background:
              "linear-gradient(90deg, transparent, #263b62, transparent)",
          },
        },
      });
    });
  });
});
