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
    it("uses the light-only CSS overlay token", () => {
      const { container } = renderBackdrop({ open: true });
      const backdrop = container.querySelector(".MuiBackdrop-root");

      expect(backdrop).toBeInTheDocument();
      expect(getComputedStyle(backdrop as Element).backgroundColor).toBe(
        "rgba(209, 219, 246, 0.4)",
      );
      expect(lightTheme.palette.vars.interactiveSecondaryWeakDisabled).toBe(
        "#d1dbf666",
      );
    });

    it("makes invisible backdrops transparent", () => {
      const { container } = renderBackdrop({ invisible: true, open: true });
      const backdrop = container.querySelector(".MuiBackdrop-root");

      expect(backdrop).toBeInTheDocument();
      expect(getComputedStyle(backdrop as Element).backgroundColor).toBe(
        "transparent",
      );
    });

    it("allows consumer sx to override internal styles", () => {
      const { container } = renderBackdrop({
        open: true,
        sx: { backgroundColor: "rgb(1, 2, 3)" },
      });
      const backdrop = container.querySelector(".MuiBackdrop-root");

      expect(backdrop).toBeInTheDocument();
      expect(getComputedStyle(backdrop as Element).backgroundColor).toBe(
        "rgb(1, 2, 3)",
      );
    });
  });

  describe("dark theme fallback", () => {
    it("uses the same token slot when no dark Figma CSS exists", () => {
      const { container } = renderBackdrop({ open: true }, true);
      const backdrop = container.querySelector(".MuiBackdrop-root");

      expect(backdrop).toBeInTheDocument();
      expect(darkTheme.palette.vars.interactiveSecondaryWeakDisabled).toBe(
        "#04193066",
      );
      expect(getComputedStyle(backdrop as Element).backgroundColor).toBe(
        "rgba(4, 25, 48, 0.4)",
      );
    });
  });
});
