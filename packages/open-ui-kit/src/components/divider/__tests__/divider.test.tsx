/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Divider } from "../components/divider";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(<ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>);

describe("Divider", () => {
  describe("light theme token coverage", () => {
    it("renders horizontal 1px in light mode without throwing", () => {
      expect(() => wrap(<Divider orientation="horizontal" />)).not.toThrow();
    });

    it("renders vertical 1px in light mode without throwing", () => {
      expect(() => wrap(<Divider orientation="vertical" />)).not.toThrow();
    });

    it("renders horizontal bold (2px) in light mode without throwing", () => {
      expect(() =>
        wrap(<Divider orientation="horizontal" variant="bold" />),
      ).not.toThrow();
    });

    it("renders vertical bold (2px) in light mode without throwing", () => {
      expect(() =>
        wrap(<Divider orientation="vertical" variant="bold" />),
      ).not.toThrow();
    });

    it("uses the divider token in light mode", () => {
      const { container } = wrap(<Divider orientation="horizontal" />);
      expect(container.firstChild).toHaveStyle(
        "background-color: rgb(213, 223, 247)",
      );
      expect(lightTheme.palette.vars.controlBorderDefault).toBe("#d5dff7");
    });

    it("renders horizontal and vertical dimensions from the design", () => {
      const { container: horizontal } = wrap(
        <Divider orientation="horizontal" />,
      );
      const { container: vertical } = wrap(<Divider orientation="vertical" />);
      const { container: boldHorizontal } = wrap(
        <Divider orientation="horizontal" variant="bold" />,
      );
      const { container: boldVertical } = wrap(
        <Divider orientation="vertical" variant="bold" />,
      );

      expect(horizontal.firstChild).toHaveStyle({
        height: "1px",
        margin: "0",
        width: "100%",
      });
      expect(vertical.firstChild).toHaveStyle({
        height: "100%",
        margin: "0",
        width: "1px",
      });
      expect(boldHorizontal.firstChild).toHaveStyle({
        height: "2px",
        margin: "0",
        width: "100%",
      });
      expect(boldVertical.firstChild).toHaveStyle({
        height: "100%",
        margin: "0",
        width: "2px",
      });
    });

    it("uses the CSS reference shape", () => {
      const { container } = wrap(<Divider orientation="horizontal" />);
      expect(container.firstChild).toHaveStyle({
        alignItems: "flex-start",
        border: "0",
        borderRadius: "100px",
        display: "flex",
        flexDirection: "column",
        isolation: "isolate",
        padding: "0",
      });
    });
  });

  describe("dark theme token coverage", () => {
    it("renders horizontal in dark mode without throwing", () => {
      expect(() =>
        wrap(<Divider orientation="horizontal" />, true),
      ).not.toThrow();
    });

    it("renders vertical in dark mode without throwing", () => {
      expect(() =>
        wrap(<Divider orientation="vertical" />, true),
      ).not.toThrow();
    });

    it("renders bold horizontal in dark mode without throwing", () => {
      expect(() =>
        wrap(<Divider orientation="horizontal" variant="bold" />, true),
      ).not.toThrow();
    });

    it("renders bold vertical in dark mode without throwing", () => {
      expect(() =>
        wrap(<Divider orientation="vertical" variant="bold" />, true),
      ).not.toThrow();
    });

    it("uses the divider token in dark mode", () => {
      const { container } = wrap(<Divider orientation="vertical" />, true);
      expect(container.firstChild).toHaveStyle(
        "background-color: rgb(79, 98, 141)",
      );
      expect(darkTheme.palette.vars.controlBorderDefault).toBe("#4f628d");
    });
  });
});
