/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { FloatingButton } from "..";
import { getFloatingButtonStyles } from "../styles";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(<ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>);

describe("FloatingButton", () => {
  describe("variants", () => {
    it("renders primary variant without throwing", () => {
      expect(() =>
        wrap(<FloatingButton variant="primary">Button</FloatingButton>),
      ).not.toThrow();
    });

    it("renders secondary variant without throwing", () => {
      expect(() =>
        wrap(<FloatingButton variant="secondary">Button</FloatingButton>),
      ).not.toThrow();
    });
  });

  describe("sizes", () => {
    it("renders medium size without throwing", () => {
      expect(() =>
        wrap(<FloatingButton size="medium">Button</FloatingButton>),
      ).not.toThrow();
    });

    it("renders small size without throwing", () => {
      expect(() =>
        wrap(<FloatingButton size="small">Button</FloatingButton>),
      ).not.toThrow();
    });
  });

  describe("content", () => {
    it("renders children text", () => {
      wrap(<FloatingButton>Click me</FloatingButton>);
      expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("renders with startIcon without throwing", () => {
      expect(() =>
        wrap(
          <FloatingButton startIcon={<span data-testid="icon" />}>
            Button
          </FloatingButton>,
        ),
      ).not.toThrow();
    });

    it("renders disabled state without throwing", () => {
      expect(() =>
        wrap(<FloatingButton disabled>Button</FloatingButton>),
      ).not.toThrow();
    });
  });

  describe("dark mode", () => {
    it("renders primary in dark mode without throwing", () => {
      expect(() =>
        wrap(<FloatingButton variant="primary">Button</FloatingButton>, true),
      ).not.toThrow();
    });

    it("renders secondary in dark mode without throwing", () => {
      expect(() =>
        wrap(<FloatingButton variant="secondary">Button</FloatingButton>, true),
      ).not.toThrow();
    });
  });

  describe("sx override", () => {
    it("accepts sx prop without throwing", () => {
      expect(() =>
        wrap(<FloatingButton sx={{ opacity: 0.8 }}>Button</FloatingButton>),
      ).not.toThrow();
    });
  });

  describe("token styles", () => {
    it("uses light theme tokens for primary styling", () => {
      expect(getFloatingButtonStyles(lightTheme, "primary")).toMatchObject({
        background: `${lightTheme.palette.vars.controlBackgroundDefault} !important`,
        border: `2px solid ${lightTheme.palette.vars.interactivePrimaryDefaultDefault} !important`,
        color: `${lightTheme.palette.vars.baseTextStrong} !important`,
        boxShadow: lightTheme.shadows[4],
      });
    });

    it("uses dark theme tokens for secondary styling", () => {
      expect(getFloatingButtonStyles(darkTheme, "secondary")).toMatchObject({
        background: `${darkTheme.palette.vars.controlBackgroundDefault} !important`,
        border: `2px solid ${darkTheme.palette.vars.controlBorderDefault} !important`,
        color: `${darkTheme.palette.vars.baseTextStrong} !important`,
        boxShadow: darkTheme.shadows[4],
      });
    });
  });
});
