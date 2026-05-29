/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Divider } from "@mui/material";

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
  });
});
