/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { midnightTheme } from "@/theme/midnight/midnight-theme";
import { Typography } from "..";

const renderTypography = (ui: React.ReactElement) =>
  render(<ThemeProvider defaultMode={ThemeMode.Dark}>{ui}</ThemeProvider>);

describe("Typography", () => {
  describe("rendering", () => {
    it("renders its children", () => {
      renderTypography(<Typography>Plain text</Typography>);
      expect(screen.getByText("Plain text")).toBeInTheDocument();
    });

    it("composes the gradient with any variant", () => {
      expect(() =>
        renderTypography(
          <>
            <Typography variant="h1" gradient>
              Heading
            </Typography>
            <Typography variant="body1" gradient>
              Body
            </Typography>
          </>,
        ),
      ).not.toThrow();
    });
  });

  describe("gradient fill", () => {
    it("clips the Text-White-Blue ramp to the glyphs", () => {
      renderTypography(<Typography gradient>Welcome Amy!</Typography>);

      expect(screen.getByText("Welcome Amy!")).toHaveStyle({
        background: midnightTheme.palette.gradients.gradientTextWhiteBlue,
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      });
    });

    // Sizing the ramp to the text pins every string to the same colour, so a
    // short line stops looking any different from a long one.
    it("lets the ramp span the element, not the glyphs", () => {
      renderTypography(<Typography gradient>Welcome Amy!</Typography>);

      const el = screen.getByText("Welcome Amy!");
      expect(el).not.toHaveStyle({ width: "fit-content" });
      expect(el).not.toHaveStyle({ backgroundRepeat: "no-repeat" });
      expect(el).not.toHaveStyle({ boxDecorationBreak: "clone" });
    });

    // One ramp shared by every line is what gives a short trailing line its
    // paler fill, so the element must stay block-level.
    it("keeps the fill on a block element so lines share one ramp", () => {
      renderTypography(
        <Typography variant="h1" gradient>
          Welcome Amy!
        </Typography>,
      );

      const el = screen.getByText("Welcome Amy!");
      expect(el).toHaveClass("MuiTypography-h1");
      expect(el).not.toHaveStyle({ display: "inline" });
      expect(el.querySelector("span")).toBeNull();
    });

    it("leaves ungradiented text alone", () => {
      renderTypography(<Typography>Plain text</Typography>);

      const el = screen.getByText("Plain text");
      expect(el.querySelector("span")).toBeNull();
      expect(el).not.toHaveStyle({ WebkitTextFillColor: "transparent" });
    });
  });

  describe("token coverage", () => {
    // Matches the design's own CSS, middle stop included. That stop sits on
    // the line between the two ends, so it is cosmetic.
    it("carries the three stops Figma emits", () => {
      expect(midnightTheme.palette.gradients.gradientTextWhiteBlue).toBe(
        "linear-gradient(90deg, #ffffff 0%, #9dbcf7 51.28%, #3f7def 100%)",
      );
    });
  });
});
