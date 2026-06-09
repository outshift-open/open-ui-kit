/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Toaster } from "../components/toaster";
import { Toast } from "../components/toast";
import {
  toastActionButtonStyle,
  toastCloseButtonStyle,
  toastCloseIconStyle,
  toastContentStyle,
  toastDescriptionStyle,
  toastIconSlotStyle,
  toastInnerStyle,
  toastMessageSlotStyle,
  toastRootStyle,
  toastTitleStyle,
  toastTopRowStyle,
} from "../styles";

jest.mock("sonner", () => {
  const React = jest.requireActual("react");
  const mockToast = Object.assign(jest.fn(), {
    custom: jest.fn(),
    dismiss: jest.fn(),
  });

  return {
    __esModule: true,
    Toaster: jest.fn(
      ({
        toastOptions,
        ...props
      }: {
        toastOptions?: Record<string, unknown>;
        [key: string]: unknown;
      }) =>
        React.createElement("div", {
          "data-testid": "sonner-toaster",
          "data-position": props.position,
          "data-offset": String(props.offset),
          "data-expand": String(props.expand),
          "data-visible-toasts": String(props.visibleToasts),
          "data-toast-options": JSON.stringify(toastOptions),
        }),
    ),
    toast: mockToast,
  };
});

const renderToast = (
  props: Partial<React.ComponentProps<typeof Toast>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Toast id="test" title="Test title" {...props} />
    </ThemeProvider>,
  );

describe("Toaster", () => {
  it("passes the design system defaults to Sonner", () => {
    render(<Toaster />);

    const toaster = screen.getByTestId("sonner-toaster");

    expect(toaster).toHaveAttribute("data-position", "top-right");
    expect(toaster).toHaveAttribute("data-offset", "16");
    expect(toaster).toHaveAttribute("data-expand", "true");
    expect(toaster).toHaveAttribute("data-visible-toasts", "3");
    expect(JSON.parse(toaster.dataset.toastOptions ?? "{}")).toEqual({
      duration: 2500,
    });
  });

  it("keeps consumer overrides while merging default toast options", () => {
    render(
      <Toaster
        position="bottom-left"
        toastOptions={{ className: "custom-toast", duration: 5000 }}
      />,
    );

    const toaster = screen.getByTestId("sonner-toaster");

    expect(toaster).toHaveAttribute("data-position", "bottom-left");
    expect(JSON.parse(toaster.dataset.toastOptions ?? "{}")).toEqual({
      className: "custom-toast",
      duration: 5000,
    });
  });
});

describe("Toast", () => {
  describe("rendering", () => {
    it("renders title", () => {
      renderToast();
      expect(screen.getByText("Test title")).toBeInTheDocument();
    });

    it("renders description", () => {
      renderToast({ description: "Test description" });
      expect(screen.getByText("Test description")).toBeInTheDocument();
    });

    it("renders close button by default", () => {
      renderToast();
      expect(
        screen.getByRole("button", { name: "Close toast" }),
      ).toBeInTheDocument();
    });

    it("does not render close button when showCloseButton=false", () => {
      renderToast({ showCloseButton: false });
      expect(
        screen.queryByRole("button", { name: "Close toast" }),
      ).not.toBeInTheDocument();
    });

    it("renders action button", () => {
      renderToast({ action: { label: "Undo", onClick: jest.fn() } });
      expect(screen.getByRole("button", { name: "Undo" })).toBeInTheDocument();
    });

    it("renders without title", () => {
      renderToast({ title: undefined, description: "Just a message" });
      expect(screen.getByText("Just a message")).toBeInTheDocument();
    });
  });

  describe("types", () => {
    const types = ["default", "success", "error", "warning", "info"] as const;

    types.forEach((type) => {
      it(`renders type "${type}" without throwing`, () => {
        expect(() => renderToast({ type })).not.toThrow();
      });
    });
  });

  describe("interaction", () => {
    it("hides toast when close button is clicked in native close mode", () => {
      renderToast({ useNativeClose: true });
      fireEvent.click(screen.getByRole("button", { name: "Close toast" }));
      expect(screen.queryByText("Test title")).not.toBeInTheDocument();
    });

    it("calls action onClick when action button is clicked", () => {
      const onClick = jest.fn();
      renderToast({ action: { label: "Act", onClick } });
      fireEvent.click(screen.getByRole("button", { name: "Act" }));
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("token coverage", () => {
    it("uses light theme layout and color tokens", () => {
      expect(toastRootStyle(lightTheme, "default", true, true)).toMatchObject({
        boxSizing: "border-box",
        width: "320px",
        height: "118px",
        padding: "12px 16px",
        gap: "8px",
        border: "none",
        borderRadius: "4px",
        backgroundColor: lightTheme.palette.vars.baseBackgroundMedium,
        color: lightTheme.palette.vars.baseTextDefault,
      });
      expect(toastRootStyle(lightTheme, "success", true, true)).toMatchObject({
        height: "138px",
        gap: "12px",
        border: `1px solid ${lightTheme.palette.vars.successBorderDefault}`,
        borderLeftWidth: "4px",
      });
      expect(toastRootStyle(lightTheme, "error", false, true)).toMatchObject({
        height: "110px",
        border: `1px solid ${lightTheme.palette.vars.negativeBorderDefault}`,
      });
      expect(toastRootStyle(lightTheme, "warning")).toMatchObject({
        border: `1px solid ${lightTheme.palette.vars.severeWarningBorderDefault}`,
      });
      expect(toastRootStyle(lightTheme, "info")).toMatchObject({
        border: `1px solid ${lightTheme.palette.vars.infoBorderDefault}`,
      });
      expect(toastIconSlotStyle(lightTheme, "success")).toMatchObject({
        color: lightTheme.palette.vars.successIconDefault,
        width: "24px",
        height: "24px",
      });
      expect(toastTitleStyle(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextStrong,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
        letterSpacing: "0.15px",
      });
      expect(toastDescriptionStyle(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextDefault,
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        letterSpacing: "0.25px",
      });
      expect(toastCloseIconStyle(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.controlIconDefault,
      });
      expect(lightTheme.palette.vars.baseBackgroundMedium).toBe("#f5f8fd");
      expect(lightTheme.palette.vars.baseTextStrong).toBe("#00142b");
      expect(lightTheme.palette.vars.baseTextDefault).toBe("#3c4551");
      expect(lightTheme.palette.vars.controlIconDefault).toBe("#3c4551");
      expect(lightTheme.palette.vars.successBorderDefault).toBe("#00b285");
      expect(lightTheme.palette.vars.negativeBorderDefault).toBe("#c0244c");
      expect(lightTheme.palette.vars.severeWarningBorderDefault).toBe(
        "#f05c37",
      );
      expect(lightTheme.palette.vars.infoBorderDefault).toBe("#9c4eea");
    });

    it("uses dark theme layout and color tokens", () => {
      expect(toastRootStyle(darkTheme, "default", true, true)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.baseBackgroundMedium,
        color: darkTheme.palette.vars.baseTextDefault,
      });
      expect(toastRootStyle(darkTheme, "success", true, true)).toMatchObject({
        border: `1px solid ${darkTheme.palette.vars.successBorderDefault}`,
      });
      expect(toastRootStyle(darkTheme, "error")).toMatchObject({
        border: `1px solid ${darkTheme.palette.vars.negativeBorderDefault}`,
      });
      expect(toastRootStyle(darkTheme, "warning")).toMatchObject({
        border: `1px solid ${darkTheme.palette.vars.severeWarningBorderDefault}`,
      });
      expect(toastRootStyle(darkTheme, "info")).toMatchObject({
        border: `1px solid ${darkTheme.palette.vars.infoBorderDefault}`,
      });
      expect(toastIconSlotStyle(darkTheme, "success")).toMatchObject({
        color: darkTheme.palette.vars.successIconDefault,
      });
      expect(toastIconSlotStyle(darkTheme, "error")).toMatchObject({
        color: darkTheme.palette.vars.negativeIconDefault,
      });
      expect(toastIconSlotStyle(darkTheme, "warning")).toMatchObject({
        color: darkTheme.palette.vars.severeWarningIconDefault,
      });
      expect(toastIconSlotStyle(darkTheme, "info")).toMatchObject({
        color: darkTheme.palette.vars.infoIconDefault,
      });
      expect(toastTitleStyle(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.baseTextStrong,
      });
      expect(toastDescriptionStyle(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.baseTextDefault,
      });
      expect(darkTheme.palette.vars.baseBackgroundMedium).toBe("#062242");
      expect(darkTheme.palette.vars.baseTextStrong).toBe("#ffffff");
      expect(darkTheme.palette.vars.baseTextDefault).toBe("#e8e9ea");
      expect(darkTheme.palette.vars.controlIconDefault).toBe("#e8e9ea");
      expect(darkTheme.palette.vars.successBorderDefault).toBe("#00b98d");
      expect(darkTheme.palette.vars.successIconDefault).toBe("#26c49e");
      expect(darkTheme.palette.vars.negativeBorderDefault).toBe("#c62953");
      expect(darkTheme.palette.vars.negativeIconDefault).toBe("#cf496d");
      expect(darkTheme.palette.vars.severeWarningBorderDefault).toBe("#f2643d");
      expect(darkTheme.palette.vars.severeWarningIconDefault).toBe("#f47b5a");
      expect(darkTheme.palette.vars.infoBorderDefault).toBe("#b76dff");
      expect(darkTheme.palette.vars.infoIconDefault).toBe("#c080ff");
    });

    it("uses CSS-specified internal spacing helpers", () => {
      expect(toastMessageSlotStyle).toMatchObject({
        padding: 0,
        margin: 0,
      });
      expect(toastInnerStyle).toMatchObject({
        width: "100%",
        gap: "8px",
      });
      expect(toastContentStyle).toMatchObject({
        width: "100%",
        gap: "4px",
      });
      expect(toastTopRowStyle).toMatchObject({
        width: "100%",
        gap: "8px",
      });
      expect(toastCloseButtonStyle).toMatchObject({
        width: "24px",
        height: "24px",
        padding: 0,
      });
      expect(toastActionButtonStyle["&&"]).toMatchObject({
        minWidth: 0,
        height: "18px",
        padding: 0,
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "125%",
      });
    });
  });
});
