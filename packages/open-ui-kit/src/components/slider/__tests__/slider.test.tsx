/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Slider } from "../components/slider";

const renderSlider = (
  props: React.ComponentProps<typeof Slider> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Slider aria-label="test slider" {...props} />
    </ThemeProvider>,
  );

describe("Slider", () => {
  describe("rendering", () => {
    it("renders without throwing", () => {
      expect(() => renderSlider()).not.toThrow();
    });

    it("renders the slider input", () => {
      const { container } = renderSlider();
      expect(container.querySelector(".MuiSlider-root")).toBeInTheDocument();
    });

    it("renders with defaultValue without throwing", () => {
      expect(() => renderSlider({ defaultValue: 30 })).not.toThrow();
    });

    it("renders range slider without throwing", () => {
      expect(() => renderSlider({ defaultValue: [20, 60] })).not.toThrow();
    });

    it("renders with marks without throwing", () => {
      expect(() => renderSlider({ marks: true, step: 10 })).not.toThrow();
    });

    it("renders disabled without throwing", () => {
      expect(() => renderSlider({ disabled: true })).not.toThrow();
    });

    it("renders vertical orientation without throwing", () => {
      expect(() => renderSlider({ orientation: "vertical" })).not.toThrow();
    });

    it("renders with valueLabelDisplay auto without throwing", () => {
      expect(() =>
        renderSlider({ defaultValue: 30, valueLabelDisplay: "auto" }),
      ).not.toThrow();
    });
  });

  describe("props override", () => {
    it("applies sx override without throwing", () => {
      expect(() => renderSlider({ sx: { width: "200px" } })).not.toThrow();
    });

    it("merges sx arrays without throwing", () => {
      expect(() =>
        renderSlider({ sx: [{ width: "200px" }, { opacity: 0.8 }] }),
      ).not.toThrow();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderSlider()).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderSlider({}, true)).not.toThrow();
    });
  });
});
