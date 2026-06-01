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
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { LoadingErrorState } from "../components/loading-error-state";

const renderState = (
  props: React.ComponentProps<typeof LoadingErrorState> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <LoadingErrorState {...props} />
    </ThemeProvider>,
  );

describe("LoadingErrorState", () => {
  describe("loading state", () => {
    it("renders a spinner by default when loading", () => {
      renderState({ loading: true });
      expect(
        document.querySelector(".MuiCircularProgress-root"),
      ).toBeInTheDocument();
    });

    it("renders skeleton when loadingVariant is skeleton", () => {
      renderState({ loading: true, loadingVariant: "skeleton" });
      expect(document.querySelector(".MuiSkeleton-root")).toBeInTheDocument();
    });

    it("renders custom loading content when loadingVariant is custom", () => {
      renderState({
        loading: true,
        loadingVariant: "custom",
        customLoadingContent: <span>custom-loader</span>,
      });
      expect(screen.getByText("custom-loader")).toBeInTheDocument();
    });

    it("does not render children when loading", () => {
      renderState({ loading: true, children: <span>content</span> });
      expect(screen.queryByText("content")).not.toBeInTheDocument();
    });
  });

  describe("error state", () => {
    it("renders the default error empty-state title", () => {
      renderState({ error: true });
      expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    });

    it("renders custom error title via errorStateProps", () => {
      renderState({ error: true, errorStateProps: { title: "No access" } });
      expect(screen.getByText("No access")).toBeInTheDocument();
    });

    it("does not render children when errored", () => {
      renderState({ error: true, children: <span>content</span> });
      expect(screen.queryByText("content")).not.toBeInTheDocument();
    });

    it("loading takes priority over error", () => {
      renderState({ loading: true, error: true });
      expect(
        document.querySelector(".MuiCircularProgress-root"),
      ).toBeInTheDocument();
      expect(
        screen.queryByText("Something went wrong"),
      ).not.toBeInTheDocument();
    });
  });

  describe("empty data state", () => {
    it("renders empty-data state for empty array", () => {
      renderState({ data: [] });
      expect(screen.getByText("No data")).toBeInTheDocument();
    });

    it("renders empty-data state for null", () => {
      renderState({ data: null });
      expect(screen.getByText("No data")).toBeInTheDocument();
    });

    it("renders empty-data state for undefined data", () => {
      renderState({ data: undefined });
      expect(screen.getByText("No data")).toBeInTheDocument();
    });

    it("renders custom empty title via emptyStateProps", () => {
      renderState({ data: [], emptyStateProps: { title: "No results" } });
      expect(screen.getByText("No results")).toBeInTheDocument();
    });

    it("skips empty check when skipEmptyCheck is true", () => {
      renderState({
        data: [],
        skipEmptyCheck: true,
        children: <span>content</span>,
      });
      expect(screen.getByText("content")).toBeInTheDocument();
      expect(screen.queryByText("No data")).not.toBeInTheDocument();
    });
  });

  describe("data ready state", () => {
    it("renders static children when data is present", () => {
      renderState({ data: "ok", children: <span>content</span> });
      expect(screen.getByText("content")).toBeInTheDocument();
    });

    it("calls render function with data", () => {
      renderState({
        data: { label: "hello" },
        children: (d: unknown) => <span>{(d as { label: string }).label}</span>,
      });
      expect(screen.getByText("hello")).toBeInTheDocument();
    });

    it("renders children when data is a non-empty array", () => {
      renderState({ data: [1, 2, 3], children: <span>list</span> });
      expect(screen.getByText("list")).toBeInTheDocument();
    });
  });

  describe("token usage", () => {
    it("renders in light mode without error", () => {
      expect(() => renderState({ error: true }, false)).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() => renderState({ error: true }, true)).not.toThrow();
    });
  });
});
