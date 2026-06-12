/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ComponentProps } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Spinner } from "../components/spinner";
import {
  getSpinnerColorStyles,
  getSpinnerIndicatorStyles,
  getSpinnerTrackStyles,
  getSpinnerWrapperStyles,
} from "../styles";

const renderSpinner = (
  props: ComponentProps<typeof Spinner> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Spinner {...props} />
    </ThemeProvider>,
  );

describe("Spinner", () => {
  const getWrapper = (container: HTMLElement) =>
    container.querySelector("[data-slot='spinner']") as HTMLElement;
  const getTrack = (container: HTMLElement) =>
    container.querySelector("[data-slot='spinner-track']") as HTMLElement;
  const getIndicator = (container: HTMLElement) =>
    container.querySelector("[data-slot='spinner-indicator']") as HTMLElement;

  describe("rendering", () => {
    it("renders without throwing", () => {
      expect(() => renderSpinner()).not.toThrow();
    });

    it("renders two CircularProgress elements", () => {
      const { container } = renderSpinner();
      expect(getTrack(container)).toBeInTheDocument();
      expect(getIndicator(container)).toBeInTheDocument();
    });

    it("uses the provided size", () => {
      const { container } = renderSpinner({ size: 24 });
      expect(getWrapper(container)).toBeInTheDocument();
      expect(getSpinnerWrapperStyles(24)).toEqual({
        position: "relative",
        width: 24,
        height: 24,
      });
    });
  });

  describe("size variants", () => {
    [40, 24, 20, 16].forEach((size) => {
      it(`renders size ${size} without throwing`, () => {
        expect(() => renderSpinner({ size })).not.toThrow();
      });
    });
  });

  describe("color variants", () => {
    it("renders primary color without throwing", () => {
      expect(() => renderSpinner({ color: "primary" })).not.toThrow();
    });

    it("renders secondary color without throwing", () => {
      expect(() => renderSpinner({ color: "secondary" })).not.toThrow();
    });
  });

  describe("token coverage", () => {
    it("uses light color tokens", () => {
      expect(getSpinnerColorStyles(lightTheme)).toEqual({
        "&.MuiCircularProgress-colorPrimary .MuiCircularProgress-circle": {
          color: "#187adc",
        },
        "&.MuiCircularProgress-colorSecondary .MuiCircularProgress-circle": {
          color: "#062242",
        },
      });
    });

    it("uses dark color tokens", () => {
      expect(getSpinnerColorStyles(darkTheme)).toEqual({
        "&.MuiCircularProgress-colorPrimary .MuiCircularProgress-circle": {
          color: "#1bcdff",
        },
        "&.MuiCircularProgress-colorSecondary .MuiCircularProgress-circle": {
          color: "#e8eefb",
        },
      });
    });

    it("uses determinate track and indeterminate indicator styles", () => {
      expect(getSpinnerTrackStyles(lightTheme)).toMatchObject({
        opacity: 0.2,
      });
      expect(getSpinnerIndicatorStyles(lightTheme)).toMatchObject({
        animationDuration: "1s",
        position: "absolute",
        left: 0,
        top: 0,
        "& .MuiCircularProgress-circle": {
          strokeLinecap: "round",
          strokeDasharray: "31.4, 94.2",
        },
      });
    });
  });

  describe("props override", () => {
    it("applies sx overrides without throwing", () => {
      expect(() => renderSpinner({ sx: { opacity: 0.5 } })).not.toThrow();
    });

    it("forwards boxProps sx without throwing", () => {
      expect(() =>
        renderSpinner({ boxProps: { sx: { margin: "8px" } } }),
      ).not.toThrow();
    });
  });
});
