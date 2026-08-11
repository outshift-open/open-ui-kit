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

    // Figma anchors the ramp to the text layer's own box — 858 wide over 440
    // of glyphs, so the text covers 51.28% of the ramp and ends on #9dbcf7.
    // Fitting the box to the glyphs makes that independent of the container;
    // 858 / 440 = 1.95 puts the last glyph back on the same stop at any size.
    it("fits the box to the text and stretches the ramp past it", () => {
      renderTypography(<Typography gradient>Welcome Amy!</Typography>);

      expect(screen.getByText("Welcome Amy!")).toHaveStyle({
        width: "fit-content",
        backgroundSize: "195% 100%",
        backgroundRepeat: "no-repeat",
      });
    });

    it("leaves ungradiented text alone", () => {
      renderTypography(<Typography>Plain text</Typography>);

      const el = screen.getByText("Plain text");
      expect(el).not.toHaveStyle({ width: "fit-content" });
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
