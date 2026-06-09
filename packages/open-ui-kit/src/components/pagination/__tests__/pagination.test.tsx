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
import { Pagination } from "../components/pagination";

const renderPagination = (
  props: Partial<React.ComponentProps<typeof Pagination>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Pagination count={5} {...props} />
    </ThemeProvider>,
  );

describe("Pagination", () => {
  describe("rendering", () => {
    it("renders page buttons", () => {
      renderPagination();
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("renders correct number of page items", () => {
      renderPagination({ count: 3 });
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("renders first/last buttons when showFirstButton/showLastButton set", () => {
      renderPagination({ showFirstButton: true, showLastButton: true });
      expect(screen.getByLabelText("Go to first page")).toBeInTheDocument();
      expect(screen.getByLabelText("Go to last page")).toBeInTheDocument();
    });

    it("renders in disabled state", () => {
      renderPagination({ disabled: true });
      const buttons = screen.getAllByRole("button");
      buttons.forEach((btn) => expect(btn).toBeDisabled());
    });

    it("renders outlined variant without error", () => {
      expect(() => renderPagination({ variant: "outlined" })).not.toThrow();
    });
  });

  describe("sizes", () => {
    it("renders large size without error", () => {
      expect(() => renderPagination({ size: "large" })).not.toThrow();
    });

    it("renders small size without error", () => {
      expect(() => renderPagination({ size: "small" })).not.toThrow();
    });
  });

  describe("token usage", () => {
    it("renders in light mode without error", () => {
      expect(() => renderPagination({}, false)).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() => renderPagination({}, true)).not.toThrow();
    });

    it("renders primary color without error", () => {
      expect(() => renderPagination({ color: "primary" })).not.toThrow();
    });
  });
});
