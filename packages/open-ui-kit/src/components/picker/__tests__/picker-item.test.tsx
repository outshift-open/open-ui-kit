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
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { PickerItem } from "../components/picker-item";

const renderItem = (
  props: Partial<ComponentProps<typeof PickerItem>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <PickerItem icon={<AppsIcon />} label="Text" {...props} />
    </ThemeProvider>,
  );

describe("PickerItem", () => {
  const getButton = () => screen.getByRole("button");
  const getIcon = () => document.querySelector(".picker-icon");
  const getLabel = () => screen.getByText("Text");

  describe("rendering", () => {
    it("renders the label", () => {
      renderItem();
      expect(getLabel()).toBeInTheDocument();
    });

    it("renders the icon", () => {
      renderItem();
      expect(getIcon()).toBeInTheDocument();
    });

    it("is a button element", () => {
      renderItem();
      expect(getButton()).toBeInTheDocument();
    });

    it("renders disabled state", () => {
      renderItem({ disabled: true });
      expect(getButton()).toBeDisabled();
    });
  });

  describe("interactions", () => {
    it("calls onClick when clicked", () => {
      const onClick = jest.fn();
      renderItem({ onClick });
      fireEvent.click(getButton());
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", () => {
      const onClick = jest.fn();
      renderItem({ disabled: true, onClick });
      fireEvent.click(getButton());
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("sizes", () => {
    it("renders large size with the CSS dimensions", () => {
      renderItem({ size: "large" });
      expect(getButton()).toHaveStyle({
        height: "76px",
        minWidth: "67px",
        width: "67px",
      });
      expect(getIcon()).toHaveStyle({ height: "32px", width: "32px" });
      expect(getLabel()).toHaveStyle({
        fontSize: "16px",
        letterSpacing: "0.5px",
        lineHeight: "24px",
      });
    });

    it("renders medium size with the CSS dimensions", () => {
      renderItem({ size: "medium" });
      expect(getButton()).toHaveStyle({
        height: "68px",
        minWidth: "67px",
        width: "67px",
      });
      expect(getIcon()).toHaveStyle({ height: "24px", width: "24px" });
      expect(getLabel()).toHaveStyle({
        fontSize: "16px",
        letterSpacing: "0.5px",
        lineHeight: "24px",
      });
    });

    it("renders small size with the CSS dimensions", () => {
      renderItem({ size: "small" });
      expect(getButton()).toHaveStyle({
        height: "56px",
        minWidth: "54px",
        width: "54px",
      });
      expect(getIcon()).toHaveStyle({ height: "20px", width: "20px" });
      expect(getLabel()).toHaveStyle({
        fontSize: "14px",
        letterSpacing: "0.25px",
        lineHeight: "20px",
      });
    });
  });

  describe("display", () => {
    it("renders vertical display", () => {
      renderItem({ display: "vertical" });
      expect(getButton()).toHaveStyle({
        flexDirection: "column",
        gap: "4px",
        padding: "8px 16px",
      });
    });

    it("renders horizontal display", () => {
      renderItem({ display: "horizontal" });
      expect(getButton()).toHaveStyle({
        flexDirection: "row",
        gap: "8px",
        height: "40px",
        minWidth: "99px",
        padding: "8px 16px",
        width: "99px",
      });
    });
  });

  describe("token usage", () => {
    it("uses light default tokens", () => {
      renderItem({}, false);
      expect(getButton()).toHaveStyle({
        backgroundColor: "#fbfcfe",
        border: "1px solid #d5dff7",
      });
      expect(getIcon()).toHaveStyle({ color: "#3c4551" });
      expect(getLabel()).toHaveStyle({ color: "#3c4551" });
    });

    it("uses dark default tokens", () => {
      renderItem({}, true);
      expect(getButton()).toHaveStyle({
        backgroundColor: "#183056",
        border: "1px solid #4f628d",
      });
      expect(getIcon()).toHaveStyle({ color: "#e8e9ea" });
      expect(getLabel()).toHaveStyle({ color: "#e8e9ea" });
    });

    it("uses selected border tokens", () => {
      renderItem({ selected: true }, false);
      expect(getButton()).toHaveStyle({ border: "2px solid #fb962e" });
    });

    it("uses dark selected border tokens", () => {
      renderItem({ selected: true }, true);
      expect(getButton()).toHaveStyle({ border: "2px solid #fb9f36" });
    });

    it("uses light disabled tokens", () => {
      renderItem({ disabled: true }, false);
      expect(getButton()).toHaveStyle({
        backgroundColor: "#f5f8fd",
        border: "1px solid #e8eefb",
      });
      expect(getIcon()).toHaveStyle({ color: "#c5c7cb" });
      expect(getLabel()).toHaveStyle({ color: "#c5c7cb" });
    });

    it("uses dark disabled tokens", () => {
      renderItem({ disabled: true }, true);
      expect(getButton()).toHaveStyle({
        backgroundColor: "#0d274d",
        border: "1px solid #263b62",
      });
      expect(getIcon()).toHaveStyle({ color: "#777d85" });
      expect(getLabel()).toHaveStyle({ color: "#777d85" });
    });
  });
});
