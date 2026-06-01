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
import AppsIcon from "@mui/icons-material/Apps";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { PickerItem } from "../components/picker-item";

const renderItem = (
  props: Partial<React.ComponentProps<typeof PickerItem>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <PickerItem icon={<AppsIcon />} label="Text" {...props} />
    </ThemeProvider>,
  );

describe("PickerItem", () => {
  describe("rendering", () => {
    it("renders the label", () => {
      renderItem();
      expect(screen.getByText("Text")).toBeInTheDocument();
    });

    it("renders the icon", () => {
      renderItem();
      expect(document.querySelector(".picker-icon")).toBeInTheDocument();
    });

    it("is a button element", () => {
      renderItem();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders disabled state", () => {
      renderItem({ disabled: true });
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  describe("interactions", () => {
    it("calls onClick when clicked", () => {
      const onClick = jest.fn();
      renderItem({ onClick });
      fireEvent.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", () => {
      const onClick = jest.fn();
      renderItem({ disabled: true, onClick });
      fireEvent.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("sizes", () => {
    it("renders large size without error", () => {
      expect(() => renderItem({ size: "large" })).not.toThrow();
    });

    it("renders medium size without error", () => {
      expect(() => renderItem({ size: "medium" })).not.toThrow();
    });

    it("renders small size without error", () => {
      expect(() => renderItem({ size: "small" })).not.toThrow();
    });
  });

  describe("display", () => {
    it("renders vertical display without error", () => {
      expect(() => renderItem({ display: "vertical" })).not.toThrow();
    });

    it("renders horizontal display without error", () => {
      expect(() => renderItem({ display: "horizontal" })).not.toThrow();
    });
  });

  describe("token usage", () => {
    it("renders in light mode without error", () => {
      expect(() => renderItem({}, false)).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() => renderItem({}, true)).not.toThrow();
    });

    it("renders selected state without error", () => {
      expect(() => renderItem({ selected: true })).not.toThrow();
    });
  });
});
