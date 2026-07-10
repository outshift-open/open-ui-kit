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
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Popover } from "../components/popover";
import {
  PopoverPlacement,
  PopoverEdgeAlignment,
  PopoverPlacementSide,
} from "../types";
import {
  getArrowStyles,
  getPaperArrowOffset,
  getPopoverContentStyles,
  getPopoverPaperStyles,
  popoverActionsStyles,
  popoverBodyStyles,
  popoverSurfaceStyles,
  popoverTextStyles,
  popoverTitleStyles,
} from "../styles";

const anchor = document.createElement("div");
document.body.appendChild(anchor);

const renderPopover = (
  props: Partial<React.ComponentProps<typeof Popover>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Popover open anchorEl={anchor} {...props} />
    </ThemeProvider>,
  );

describe("Popover", () => {
  describe("rendering", () => {
    it("renders title", () => {
      renderPopover({ title: "Hello world" });
      expect(screen.getByText("Hello world")).toBeInTheDocument();
    });

    it("renders body text", () => {
      renderPopover({ body: "Some body text here." });
      expect(screen.getByText("Some body text here.")).toBeInTheDocument();
    });

    it("renders children when provided, bypassing title/body", () => {
      renderPopover({
        children: <span>custom content</span>,
        title: "ignored",
      });
      expect(screen.getByText("custom content")).toBeInTheDocument();
      expect(screen.queryByText("ignored")).not.toBeInTheDocument();
    });

    it("renders close button when showCloseButton is true", () => {
      renderPopover({ showCloseButton: true, title: "Test" });
      expect(screen.getByLabelText("Close popover")).toBeInTheDocument();
    });

    it("does not render close button by default", () => {
      renderPopover({ title: "Test" });
      expect(screen.queryByLabelText("Close popover")).not.toBeInTheDocument();
    });

    it("renders action buttons", () => {
      renderPopover({ actions: <button>Confirm</button> });
      expect(screen.getByText("Confirm")).toBeInTheDocument();
    });

    it("renders an optional icon", () => {
      renderPopover({ icon: <span data-testid="popover-icon" /> });
      expect(screen.getByTestId("popover-icon")).toBeInTheDocument();
    });
  });

  describe("interactions", () => {
    it("calls onClose when close button is clicked", () => {
      const onClose = jest.fn();
      renderPopover({ showCloseButton: true, title: "Test", onClose });
      fireEvent.click(screen.getByLabelText("Close popover"));
      expect(onClose).toHaveBeenCalledWith({}, "escapeKeyDown");
    });
  });

  describe("arrow", () => {
    it("renders arrow element when placement is set", () => {
      renderPopover({ placement: PopoverPlacement.Bottom, title: "Test" });
      expect(
        document.querySelector("[data-slot='popover-arrow']"),
      ).toBeInTheDocument();
    });

    it("does not render arrow by default", () => {
      renderPopover({ title: "Test" });
      expect(
        document.querySelector("[data-slot='popover-arrow']"),
      ).not.toBeInTheDocument();
    });

    it("renders arrow for top placement", () => {
      renderPopover({ placement: PopoverPlacement.Top, title: "Test" });
      expect(
        document.querySelector("[data-slot='popover-arrow']"),
      ).toBeInTheDocument();
    });

    it("positions bottom-side popovers with arrows on the top edge", () => {
      const bg = lightTheme.palette.vars.controlBackgroundDefault;

      expect(getArrowStyles(PopoverPlacement.BottomStart, bg)).toMatchObject({
        top: "-8px",
        left: "12px",
      });
      expect(getArrowStyles(PopoverPlacement.Bottom, bg)).toMatchObject({
        top: "-8px",
        left: "calc(50% - 8px)",
      });
      expect(getArrowStyles(PopoverPlacement.BottomEnd, bg)).toMatchObject({
        top: "-8px",
        right: "12px",
      });
    });

    it("positions top-side popovers with arrows on the bottom edge", () => {
      const bg = lightTheme.palette.vars.controlBackgroundDefault;

      expect(getArrowStyles(PopoverPlacement.TopStart, bg)).toMatchObject({
        bottom: "-8px",
        left: "12px",
      });
      expect(getArrowStyles(PopoverPlacement.Top, bg)).toMatchObject({
        bottom: "-8px",
        left: "calc(50% - 8px)",
      });
      expect(getArrowStyles(PopoverPlacement.TopEnd, bg)).toMatchObject({
        bottom: "-8px",
        right: "12px",
      });
    });

    it("offsets the paper to leave room for the protruding arrow", () => {
      expect(
        getPaperArrowOffset(
          PopoverPlacement.Top,
          { vertical: PopoverPlacementSide.Top },
          { vertical: PopoverPlacementSide.Bottom },
        ),
      ).toEqual({ marginTop: "-8px" });
      expect(
        getPaperArrowOffset(
          PopoverPlacement.Bottom,
          { vertical: PopoverPlacementSide.Bottom },
          { vertical: PopoverPlacementSide.Top },
        ),
      ).toEqual({ marginTop: "8px" });
      expect(
        getPaperArrowOffset(
          PopoverPlacement.Left,
          {
            vertical: PopoverEdgeAlignment.Center,
            horizontal: PopoverPlacementSide.Left,
          },
          {
            vertical: PopoverEdgeAlignment.Center,
            horizontal: PopoverPlacementSide.Right,
          },
        ),
      ).toEqual({ marginLeft: "-8px" });
      expect(
        getPaperArrowOffset(
          PopoverPlacement.Right,
          {
            vertical: PopoverEdgeAlignment.Center,
            horizontal: PopoverPlacementSide.Right,
          },
          {
            vertical: PopoverEdgeAlignment.Center,
            horizontal: PopoverPlacementSide.Left,
          },
        ),
      ).toEqual({ marginLeft: "8px" });
      expect(getPaperArrowOffset(undefined)).toEqual({});
    });

    it("positions left and right arrows outside the side edges", () => {
      const bg = lightTheme.palette.vars.controlBackgroundDefault;

      expect(getArrowStyles(PopoverPlacement.Left, bg)).toMatchObject({
        right: "-8px",
        top: "calc(50% - 8px)",
        width: "8px",
        height: "16px",
      });
      expect(getArrowStyles(PopoverPlacement.RightEnd, bg)).toMatchObject({
        left: "-8px",
        bottom: "12px",
        width: "8px",
        height: "16px",
      });
    });

    it("renders arrow for left placement", () => {
      renderPopover({ placement: PopoverPlacement.Left, title: "Test" });
      expect(
        document.querySelector("[data-slot='popover-arrow']"),
      ).toBeInTheDocument();
    });
  });

  describe("paperSx merging", () => {
    it("accepts paperSx without error", () => {
      expect(() =>
        renderPopover({ paperSx: { minWidth: 300 }, title: "Test" }),
      ).not.toThrow();
    });

    it("accepts paperSx array without error", () => {
      expect(() =>
        renderPopover({
          paperSx: [{ minWidth: 300 }, { maxWidth: 500 }],
          title: "Test",
        }),
      ).not.toThrow();
    });
  });

  describe("token usage", () => {
    it("renders in light mode without error", () => {
      expect(() => renderPopover({ title: "Light" }, false)).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() => renderPopover({ title: "Dark" }, true)).not.toThrow();
    });

    it("uses light mode design tokens", () => {
      expect(getPopoverPaperStyles(lightTheme)).toMatchObject({
        width: "228px",
        minWidth: "228px",
        maxWidth: "228px",
        background: lightTheme.palette.vars.controlBackgroundDefault,
        borderRadius: "6px",
        boxShadow: "none",
        overflow: "visible",
        overflowX: "visible",
        overflowY: "visible",
      });
      expect(popoverSurfaceStyles).toMatchObject({
        position: "relative",
        width: "100%",
      });
      expect(getPopoverPaperStyles(lightTheme, "large")).toMatchObject({
        width: "360px",
        minWidth: "360px",
        maxWidth: "360px",
      });
      expect(getPopoverContentStyles(lightTheme)).toMatchObject({
        background: lightTheme.palette.vars.controlBackgroundDefault,
        border: "0px solid transparent",
        borderRadius: "6px",
        gap: "16px",
        padding: "12px 16px",
      });
      expect(getPopoverContentStyles(lightTheme, false, "large")).toMatchObject(
        {
          gap: "20px",
          padding: "16px 20px",
        },
      );
      expect(getPopoverContentStyles(lightTheme, true)).toMatchObject({
        border: `2px solid ${lightTheme.palette.vars.controlBorderActive}`,
      });
      expect(popoverTitleStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextStrong,
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "0px",
        lineHeight: "20px",
      });
      expect(popoverBodyStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextDefault,
        fontSize: "14px",
        letterSpacing: "0.25px",
        lineHeight: "20px",
      });
      expect(popoverTextStyles).toMatchObject({
        gap: "4px",
      });
      expect(popoverActionsStyles).toMatchObject({
        flexWrap: "wrap",
        justifyContent: "flex-end",
        "& .MuiButton-root": {
          flexShrink: 0,
          whiteSpace: "nowrap",
        },
      });
      expect(
        getArrowStyles(
          PopoverPlacement.Bottom,
          lightTheme.palette.vars.controlBorderActive,
        ),
      ).toMatchObject({
        background: lightTheme.palette.vars.controlBorderActive,
      });
      expect(lightTheme.palette.vars.controlBackgroundDefault).toBe("#fbfcfe");
      expect(lightTheme.palette.vars.controlBorderActive).toBe("#0051af");
      expect(lightTheme.palette.vars.baseTextStrong).toBe("#00142b");
      expect(lightTheme.palette.vars.baseTextDefault).toBe("#3c4551");
    });

    it("uses dark mode design tokens", () => {
      expect(getPopoverPaperStyles(darkTheme)).toMatchObject({
        background: darkTheme.palette.vars.controlBackgroundDefault,
      });
      expect(getPopoverContentStyles(darkTheme, true)).toMatchObject({
        background: darkTheme.palette.vars.controlBackgroundDefault,
        border: `2px solid ${darkTheme.palette.vars.controlBorderActive}`,
      });
      expect(popoverTitleStyles(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.baseTextStrong,
      });
      expect(popoverBodyStyles(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.baseTextDefault,
      });
      expect(darkTheme.palette.vars.controlBackgroundDefault).toBe("#183056");
      expect(darkTheme.palette.vars.controlBorderActive).toBe("#12c1ff");
      expect(darkTheme.palette.vars.baseTextStrong).toBe("#ffffff");
      expect(darkTheme.palette.vars.baseTextDefault).toBe("#e8e9ea");
    });
  });
});
