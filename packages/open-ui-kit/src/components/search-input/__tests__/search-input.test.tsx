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
import { SearchInput } from "../";
import { getSearchInputStyles } from "../styles";

const normalizeHex = (value: string) => value.toLowerCase();

const renderInput = (
  props: Partial<React.ComponentProps<typeof SearchInput>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <SearchInput {...props} />
    </ThemeProvider>,
  );

describe("SearchInput", () => {
  describe("rendering", () => {
    it("renders with placeholder Search", () => {
      renderInput();
      expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    });

    it("renders with a controlled value", () => {
      renderInput({ value: "hello" });
      expect(screen.getByDisplayValue("hello")).toBeInTheDocument();
    });

    it("hides clear button when input is empty", () => {
      renderInput();
      const clearBtn = screen.getByTestId("clear-button");
      expect(clearBtn).toHaveStyle({ visibility: "hidden" });
    });

    it("shows clear button when input has a value", () => {
      renderInput({ value: "hello" });
      const clearBtn = screen.getByTestId("clear-button");
      expect(clearBtn).toHaveStyle({ visibility: "visible" });
    });
  });

  describe("interactions", () => {
    it("calls onChangeCallback with typed value", () => {
      const onChangeCallback = jest.fn();
      renderInput({ onChangeCallback });
      const input = screen.getByPlaceholderText("Search");
      fireEvent.change(input, { target: { value: "cisco" } });
      expect(onChangeCallback).toHaveBeenCalledWith("cisco");
    });

    it("clears value and calls onClear when clear button is clicked", () => {
      const onClear = jest.fn();
      renderInput({ value: "hello", onClear });
      const clearBtn = screen.getByTestId("clear-button");
      fireEvent.click(clearBtn);
      expect(onClear).toHaveBeenCalledTimes(1);
    });

    it("updates displayed value when external value prop changes", () => {
      const { rerender } = renderInput({ value: "first" });
      expect(screen.getByDisplayValue("first")).toBeInTheDocument();
      rerender(
        <ThemeProvider>
          <SearchInput value="second" />
        </ThemeProvider>,
      );
      expect(screen.getByDisplayValue("second")).toBeInTheDocument();
    });
  });

  describe("token usage", () => {
    it("maps light mode styles to the CSS reference tokens", () => {
      expect(
        normalizeHex(lightTheme.palette.vars.controlBackgroundDefault),
      ).toBe("#fbfcfe");
      expect(normalizeHex(lightTheme.palette.vars.controlBorderDefault)).toBe(
        "#d5dff7",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlBorderHover)).toBe(
        "#0051af",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlBorderActive)).toBe(
        "#0051af",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlIconWeak)).toBe(
        "#9ea2a8",
      );
      expect(normalizeHex(lightTheme.palette.vars.baseTextWeak)).toBe(
        "#777d85",
      );
      expect(normalizeHex(lightTheme.palette.vars.baseTextDefault)).toBe(
        "#3c4551",
      );

      expect(getSearchInputStyles(lightTheme, false, undefined)).toMatchObject({
        width: "360px",
        "& .MuiInput-root": {
          backgroundColor: lightTheme.palette.vars.controlBackgroundDefault,
          border: `2px solid ${lightTheme.palette.vars.controlBorderDefault}`,
          borderRadius: "4px",
          gap: "8px",
          height: "40px",
          marginTop: 0,
          padding: "8px 12px",
          "&:hover:not(.Mui-disabled, .Mui-error, .Mui-focused)": {
            borderColor: lightTheme.palette.vars.controlBorderHover,
            borderWidth: "2px",
          },
          "&.Mui-focused:not(.Mui-disabled, .Mui-error)": {
            borderColor: lightTheme.palette.vars.controlBorderActive,
            borderWidth: "2px",
          },
        },
        "& .MuiInput-input": {
          color: lightTheme.palette.vars.baseTextDefault,
          "&::placeholder": {
            color: lightTheme.palette.vars.baseTextWeak,
            opacity: 1,
          },
        },
        "& .MuiInputAdornment-root": {
          color: lightTheme.palette.vars.controlIconWeak,
          height: "24px",
          margin: 0,
        },
        "& .MuiInputAdornment-root .MuiSvgIcon-root": {
          height: "24px",
          width: "24px",
        },
        "&& .MuiInputAdornment-root .MuiSvgIcon-root": {
          height: "24px",
          width: "24px",
        },
      });
    });

    it("maps dark mode styles to the CSS reference tokens", () => {
      expect(
        normalizeHex(darkTheme.palette.vars.controlBackgroundDefault),
      ).toBe("#183056");
      expect(normalizeHex(darkTheme.palette.vars.controlBorderDefault)).toBe(
        "#4f628d",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlBorderHover)).toBe(
        "#12c1ff",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlBorderActive)).toBe(
        "#12c1ff",
      );
      expect(normalizeHex(darkTheme.palette.vars.baseTextWeak)).toBe("#9ea2a8");
      expect(normalizeHex(darkTheme.palette.vars.baseTextDefault)).toBe(
        "#e8e9ea",
      );

      expect(getSearchInputStyles(darkTheme, false, undefined)).toMatchObject({
        "& .MuiInput-root": {
          backgroundColor: darkTheme.palette.vars.controlBackgroundDefault,
          border: `2px solid ${darkTheme.palette.vars.controlBorderDefault}`,
          "&:hover:not(.Mui-disabled, .Mui-error, .Mui-focused)": {
            borderColor: darkTheme.palette.vars.controlBorderHover,
          },
          "&.Mui-focused:not(.Mui-disabled, .Mui-error)": {
            borderColor: darkTheme.palette.vars.controlBorderActive,
          },
        },
        "& .MuiInput-input": {
          color: darkTheme.palette.vars.baseTextDefault,
          "&::placeholder": {
            color: darkTheme.palette.vars.baseTextWeak,
          },
        },
      });
    });

    it("uses the CSS size and value-present border rules", () => {
      expect(getSearchInputStyles(lightTheme, true, undefined)).toMatchObject({
        "& .MuiInput-root": {
          border: `1px solid ${lightTheme.palette.vars.controlBorderDefault}`,
          height: "40px",
          padding: "8px 12px",
        },
      });

      expect(getSearchInputStyles(lightTheme, true, "small")).toMatchObject({
        "& .MuiInput-root.MuiInputBase-sizeSmall": {
          padding: "6px 12px",
        },
        "& .MuiInput-root": {
          border: `2px solid ${lightTheme.palette.vars.controlBorderDefault}`,
          height: "36px",
          padding: "6px 12px",
        },
      });
    });
  });

  describe("props", () => {
    it("renders disabled state", () => {
      renderInput({ disabled: true });
      const input = screen.getByPlaceholderText("Search");
      expect(input).toBeDisabled();
    });

    it("passes extendEndAdornment into the end adornment", () => {
      renderInput({
        extendEndAdornment: <span data-testid="extra-icon">icon</span>,
      });
      expect(screen.getByTestId("extra-icon")).toBeInTheDocument();
    });
  });
});
