/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Backdrop } from "../components/backdrop";

const renderBackdrop = (
  props: React.ComponentProps<typeof Backdrop>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Backdrop {...props} />
    </ThemeProvider>,
  );

describe("Backdrop", () => {
  describe("rendering", () => {
    it("renders when open is true", () => {
      const { container } = renderBackdrop({ open: true });
      expect(container.querySelector(".MuiBackdrop-root")).toBeInTheDocument();
    });

    it("is not visible when open is false", () => {
      const { container } = renderBackdrop({ open: false });
      const backdrop = container.querySelector(".MuiBackdrop-root");
      expect(backdrop).not.toBeVisible();
    });

    it("renders children when open", () => {
      renderBackdrop({ open: true, children: <span>loading</span> });
      expect(screen.getByText("loading")).toBeInTheDocument();
    });
  });

  describe("light theme token coverage", () => {
    it("renders in light theme without throwing", () => {
      expect(() => renderBackdrop({ open: true })).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders in dark theme without throwing", () => {
      expect(() => renderBackdrop({ open: true }, true)).not.toThrow();
    });
  });
});
