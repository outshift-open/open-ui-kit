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
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Popover } from "../components/popover";

const anchor = document.createElement("div");
document.body.appendChild(anchor);

const renderPopover = (
  props: Partial<React.ComponentProps<typeof Popover>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
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
    it("renders arrow element when arrowPosition is set", () => {
      renderPopover({ arrowPosition: "bottom-center", title: "Test" });
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

    it("renders arrow for top-center position", () => {
      renderPopover({ arrowPosition: "top-center", title: "Test" });
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
  });
});
