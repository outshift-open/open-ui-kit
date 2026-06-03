/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });

global.ResizeObserver = class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
};

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { RadioButton, RadioGroup } from "../";
import { getRadioButtonStyles, getRadioLabelStyles } from "../styles";

const normalizeHex = (value: string) => value.toLowerCase();

const renderRadio = (
  props: Partial<React.ComponentProps<typeof RadioButton>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <RadioButton {...props} />
    </ThemeProvider>,
  );

describe("RadioButton", () => {
  describe("rendering", () => {
    it("renders a radio input", () => {
      renderRadio();
      expect(screen.getByRole("radio")).toBeInTheDocument();
    });

    it("renders with a label", () => {
      renderRadio({ label: "Option A" });
      expect(screen.getByText("Option A")).toBeInTheDocument();
      expect(screen.getByRole("radio")).toBeInTheDocument();
    });

    it("renders without a label when label is omitted", () => {
      const { container } = renderRadio();
      expect(
        container.querySelector(".MuiFormControlLabel-root"),
      ).not.toBeInTheDocument();
    });

    it("renders checked state", () => {
      renderRadio({ checked: true, onChange: jest.fn() });
      expect(screen.getByRole("radio")).toBeChecked();
    });

    it("renders disabled state", () => {
      renderRadio({ disabled: true });
      expect(screen.getByRole("radio")).toBeDisabled();
    });

    it("renders small size", () => {
      const { container } = renderRadio({ size: "small" });
      expect(
        container.querySelector(".MuiRadio-sizeSmall"),
      ).toBeInTheDocument();
    });
  });

  describe("interactions", () => {
    it("calls onChange when clicked", () => {
      const onChange = jest.fn();
      renderRadio({ label: "A", onChange });
      fireEvent.click(screen.getByRole("radio"));
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe("RadioGroup", () => {
    it("renders multiple radio buttons with shared group", () => {
      render(
        <ThemeProvider>
          <RadioGroup value="a" onChange={jest.fn()}>
            <RadioButton label="A" value="a" />
            <RadioButton label="B" value="b" />
          </RadioGroup>
        </ThemeProvider>,
      );
      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(2);
      expect(radios[0]).toBeChecked();
      expect(radios[1]).not.toBeChecked();
    });
  });

  describe("token usage", () => {
    it("maps light mode radio colors to the CSS reference tokens", () => {
      expect(normalizeHex(lightTheme.palette.vars.controlIconDefault)).toBe(
        "#3c4551",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlIconHover)).toBe(
        "#0051af",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlIconActive)).toBe(
        "#0051af",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlIconDisabled)).toBe(
        "#c5c7cb",
      );
      expect(normalizeHex(lightTheme.palette.vars.baseTextDefault)).toBe(
        "#3c4551",
      );
      expect(normalizeHex(lightTheme.palette.vars.baseTextDisabled)).toBe(
        "#c5c7cb",
      );

      expect(getRadioButtonStyles(lightTheme)).toMatchObject({
        height: "24px",
        padding: 0,
        width: "24px",
        color: lightTheme.palette.vars.controlIconDefault,
        "&:hover": {
          backgroundColor: "transparent",
          color: lightTheme.palette.vars.controlIconHover,
        },
        "&.Mui-checked": {
          color: lightTheme.palette.vars.controlIconActive,
        },
        "&.Mui-disabled": {
          color: lightTheme.palette.vars.controlIconDisabled,
        },
        "& svg": {
          height: "18px",
          width: "18px",
        },
        "@media (max-width: 600px)": {
          height: "44px",
          width: "44px",
        },
      });
    });

    it("maps dark mode radio colors to the CSS reference tokens", () => {
      expect(normalizeHex(darkTheme.palette.vars.controlIconDefault)).toBe(
        "#e8e9ea",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlIconHover)).toBe(
        "#12c1ff",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlIconActive)).toBe(
        "#12c1ff",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlIconDisabled)).toBe(
        "#777d85",
      );
      expect(normalizeHex(darkTheme.palette.vars.baseTextDefault)).toBe(
        "#e8e9ea",
      );
      expect(normalizeHex(darkTheme.palette.vars.baseTextDisabled)).toBe(
        "#777d85",
      );

      expect(getRadioButtonStyles(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.controlIconDefault,
        "&:hover": {
          backgroundColor: "transparent",
          color: darkTheme.palette.vars.controlIconHover,
        },
        "&.Mui-checked": {
          color: darkTheme.palette.vars.controlIconActive,
        },
        "&.Mui-disabled": {
          color: darkTheme.palette.vars.controlIconDisabled,
        },
      });
    });

    it("uses the CSS label spacing and typography tokens", () => {
      expect(getRadioLabelStyles(lightTheme)).toMatchObject({
        alignItems: "flex-start",
        gap: "4px",
        margin: 0,
        "& .MuiFormControlLabel-label": {
          color: lightTheme.palette.vars.baseTextDefault,
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.25px",
        },
        "& .MuiFormControlLabel-label.Mui-disabled": {
          color: lightTheme.palette.vars.baseTextDisabled,
        },
      });
    });
  });
});
