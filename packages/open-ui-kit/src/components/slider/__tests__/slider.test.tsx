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
import { Slider } from "../";
import { getSliderStyles } from "../styles";

const normalizeHex = (value: string) => value.toLowerCase();

const renderSlider = (
  props: React.ComponentProps<typeof Slider> = {},
  dark = false,
) => {
  const accessibilityProps =
    Array.isArray(props.defaultValue) || Array.isArray(props.value)
      ? { getAriaLabel: (index: number) => `test slider ${index + 1}` }
      : { "aria-label": "test slider" };

  return render(
    <ThemeProvider defaultDarkMode={dark}>
      <Slider {...accessibilityProps} {...props} />
    </ThemeProvider>,
  );
};

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
    it("maps light mode styles to the CSS reference tokens", () => {
      expect(normalizeHex(lightTheme.palette.vars.controlBorderMedium)).toBe(
        "#dae3f8",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlBorderStrong)).toBe(
        "#c8d5f5",
      );
      expect(
        normalizeHex(lightTheme.palette.vars.interactivePrimaryDefaultDefault),
      ).toBe("#187adc");
      expect(
        normalizeHex(lightTheme.palette.vars.controlBackgroundDefault),
      ).toBe("#fbfcfe");
      expect(normalizeHex(lightTheme.palette.vars.controlIconWeak)).toBe(
        "#9ea2a8",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlFocusRingWeak)).toBe(
        "#cce1ff",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlFocusRingStrong)).toBe(
        "#3e84e5",
      );

      expect(getSliderStyles(lightTheme)).toMatchObject({
        borderRadius: "4px",
        color: lightTheme.palette.vars.interactivePrimaryDefaultDefault,
        height: "8px",
        padding: "8px 0 28px",
        "& .MuiSlider-rail": {
          backgroundColor: lightTheme.palette.vars.controlBorderMedium,
          borderRadius: "50%",
          opacity: 1,
        },
        "& .MuiSlider-track": {
          backgroundColor:
            lightTheme.palette.vars.interactivePrimaryDefaultDefault,
          borderRadius: "4px",
        },
        "& .MuiSlider-thumb": {
          backgroundColor: lightTheme.palette.vars.controlBackgroundDefault,
          border: `2px solid ${lightTheme.palette.vars.controlBorderStrong}`,
          borderRadius: "50%",
          height: "24px",
          width: "24px",
          "&::before, &::after": {
            borderRadius: "50%",
            height: "44px",
            width: "44px",
          },
        },
        "& .MuiSlider-mark": {
          backgroundColor: lightTheme.palette.vars.controlIconWeak,
          height: "4px",
          width: "4px",
        },
        "& .MuiSlider-markActive": {
          backgroundColor: lightTheme.palette.vars.controlBorderMedium,
        },
        "& .MuiSlider-markLabel": {
          color: lightTheme.palette.vars.baseTextMedium,
        },
      });
    });

    it("maps dark mode styles to the CSS reference tokens", () => {
      expect(normalizeHex(darkTheme.palette.vars.controlBorderStrong)).toBe(
        "#3a4e77",
      );
      expect(
        normalizeHex(darkTheme.palette.vars.controlBackgroundDefault),
      ).toBe("#183056");
      expect(
        normalizeHex(darkTheme.palette.vars.interactivePrimaryDefaultDefault),
      ).toBe("#1bcdff");
      expect(normalizeHex(darkTheme.palette.vars.controlBackgroundWeak)).toBe(
        "#0d274d",
      );
      expect(normalizeHex(darkTheme.palette.vars.baseTextMedium)).toBe(
        "#c5c7cb",
      );

      expect(getSliderStyles(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.interactivePrimaryDefaultDefault,
        "& .MuiSlider-rail": {
          backgroundColor: darkTheme.palette.vars.controlBorderStrong,
        },
        "& .MuiSlider-track": {
          backgroundColor:
            darkTheme.palette.vars.interactivePrimaryDefaultDefault,
        },
        "& .MuiSlider-thumb": {
          backgroundColor: darkTheme.palette.vars.controlBackgroundDefault,
          border: `2px solid ${darkTheme.palette.vars.controlBorderStrong}`,
        },
        "& .MuiSlider-markActive": {
          backgroundColor: darkTheme.palette.vars.controlBackgroundWeak,
        },
        "& .MuiSlider-markLabel": {
          color: darkTheme.palette.vars.baseTextMedium,
        },
      });
    });

    it("renders with marks in light theme without throwing", () => {
      expect(() =>
        renderSlider({ marks: true, defaultValue: 30 }),
      ).not.toThrow();
    });

    it("renders with marks in dark theme without throwing", () => {
      expect(() =>
        renderSlider({ marks: true, defaultValue: 30 }, true),
      ).not.toThrow();
    });

    it("renders disabled in light theme without throwing", () => {
      expect(() => renderSlider({ disabled: true })).not.toThrow();
    });

    it("renders disabled in dark theme without throwing", () => {
      expect(() => renderSlider({ disabled: true }, true)).not.toThrow();
    });
  });
});
