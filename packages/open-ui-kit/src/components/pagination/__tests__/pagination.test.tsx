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
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Pagination } from "../components/pagination";
import {
  getPaginationControlStyles,
  getPaginationItemSize,
  getPaginationItemStyles,
  getPaginationOutlinedItemStyles,
  getPaginationRootStyles,
} from "../styles";

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

    it("uses CSS reference sizes and layout", () => {
      expect(getPaginationItemSize("small")).toBe("26px");
      expect(getPaginationItemSize("medium")).toBe("32px");
      expect(getPaginationItemSize("large")).toBe("40px");
      expect(getPaginationRootStyles()).toMatchObject({
        "& .MuiPagination-ul": {
          gap: "4px",
          padding: "0 4px",
        },
      });
      expect(getPaginationControlStyles(lightTheme)).toMatchObject({
        width: "20px",
        height: "20px",
        color: lightTheme.palette.vars.controlIconDefault,
      });
    });

    it("uses light theme tokens from the pagination CSS", () => {
      expect(getPaginationItemStyles(lightTheme, "small")).toMatchObject({
        width: "26px",
        height: "26px",
        color: lightTheme.palette.vars.baseTextDefault,
        "&.Mui-selected": expect.objectContaining({
          backgroundColor: lightTheme.palette.vars.controlBorderStrong,
          color: lightTheme.palette.vars.baseTextStrong,
        }),
        "&.MuiPaginationItem-colorPrimary.Mui-selected":
          expect.objectContaining({
            backgroundColor:
              lightTheme.palette.vars.interactivePrimaryDefaultActive,
            color: lightTheme.palette.vars.baseTextInverse,
          }),
        "&.Mui-disabled, &.Mui-selected.Mui-disabled": expect.objectContaining({
          backgroundColor: "transparent",
          color: lightTheme.palette.vars.baseTextDisabled,
          opacity: 1,
        }),
      });
      expect(getPaginationOutlinedItemStyles(lightTheme)).toMatchObject({
        borderColor: lightTheme.palette.vars.controlBorderStrong,
        "&.MuiPaginationItem-colorPrimary": {
          borderColor: lightTheme.palette.vars.interactivePrimaryDefaultDefault,
        },
        "&.Mui-disabled, &.Mui-selected.Mui-disabled": {
          borderColor: lightTheme.palette.vars.controlBorderWeak,
        },
        "&.MuiPaginationItem-colorPrimary.Mui-selected.Mui-disabled": {
          borderColor:
            lightTheme.palette.vars.interactivePrimaryDefaultDisabled,
        },
      });
    });

    it("uses dark theme tokens from the pagination CSS", () => {
      expect(getPaginationItemStyles(darkTheme, "large")).toMatchObject({
        width: "40px",
        height: "40px",
        color: darkTheme.palette.vars.baseTextDefault,
        "&.Mui-selected": expect.objectContaining({
          backgroundColor: darkTheme.palette.vars.controlBorderStrong,
          color: darkTheme.palette.vars.baseTextStrong,
        }),
        "&.MuiPaginationItem-colorPrimary.Mui-selected":
          expect.objectContaining({
            backgroundColor:
              darkTheme.palette.vars.interactivePrimaryDefaultActive,
            color: darkTheme.palette.vars.baseTextInverse,
          }),
      });
      expect(getPaginationControlStyles(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.controlIconDefault,
      });
    });
  });
});
