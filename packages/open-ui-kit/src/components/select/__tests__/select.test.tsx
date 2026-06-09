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

import React from "react"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormControl, InputLabel } from "@mui/material";
import { MenuItem } from "@/components/menu";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Select } from "../";
import {
  getSelectMenuPaperStyles,
  getSelectStyles,
  getSelectClearButtonStyles,
} from "../styles";
import type { SelectProps } from "../types";

const normalizeHex = (value: string) => value.toLowerCase();

const renderSelect = (props: Partial<SelectProps<string>> = {}, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <FormControl>
        <InputLabel>Label</InputLabel>
        <Select<string> value="opt1" onChange={jest.fn()} {...props}>
          <MenuItem value="opt1">Option 1</MenuItem>
          <MenuItem value="opt2">Option 2</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>,
  );

describe("Select", () => {
  describe("rendering", () => {
    it("renders the selected value", () => {
      renderSelect();
      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });

    it("defaults to outlined variant", () => {
      renderSelect();
      expect(
        document.querySelector(".MuiOutlinedInput-root"),
      ).toBeInTheDocument();
    });

    it("renders in disabled state", () => {
      renderSelect({ disabled: true });
      expect(document.querySelector(".Mui-disabled")).toBeInTheDocument();
    });

    it("renders in error state", () => {
      renderSelect({ error: true });
      expect(document.querySelector(".Mui-error")).toBeInTheDocument();
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
      expect(normalizeHex(lightTheme.palette.vars.controlBorderNegative)).toBe(
        "#c0244c",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlBorderDisabled)).toBe(
        "#e8eefb",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlIconDefault)).toBe(
        "#3c4551",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlIconDisabled)).toBe(
        "#c5c7cb",
      );
      expect(normalizeHex(lightTheme.palette.vars.baseTextWeak)).toBe(
        "#777d85",
      );

      expect(getSelectStyles(lightTheme, false, false)).toMatchObject({
        backgroundColor: lightTheme.palette.vars.controlBackgroundDefault,
        borderRadius: "4px",
        color: lightTheme.palette.vars.baseTextWeak,
        height: "40px",
        width: "285px",
        "& .MuiSelect-icon": {
          color: lightTheme.palette.vars.controlIconDefault,
          height: "24px",
          right: "8px",
          width: "24px",
        },
        "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
          {
            padding: "8px 40px 8px 16px",
          },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: lightTheme.palette.vars.controlBorderDefault,
          borderRadius: "4px",
          borderWidth: "2px",
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
      expect(normalizeHex(darkTheme.palette.vars.controlBorderNegative)).toBe(
        "#c62953",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlBorderDisabled)).toBe(
        "#263b62",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlBackgroundWeak)).toBe(
        "#0d274d",
      );

      expect(getSelectStyles(darkTheme, false, false)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.controlBackgroundDefault,
        color: darkTheme.palette.vars.baseTextWeak,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: darkTheme.palette.vars.controlBorderDefault,
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: darkTheme.palette.vars.controlBorderNegative,
        },
        "&.Mui-disabled": {
          backgroundColor: darkTheme.palette.vars.controlBackgroundDisabled,
        },
      });
    });

    it("uses the CSS size, clear-button, and menu paper rules", () => {
      expect(getSelectStyles(lightTheme, true, true)).toMatchObject({
        color: lightTheme.palette.vars.baseTextDefault,
        "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
          {
            padding: "8px 72px 8px 16px",
          },
      });

      expect(getSelectStyles(lightTheme, false, false)).toMatchObject({
        "&.MuiInputBase-sizeSmall": {
          height: "36px",
          "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
            {
              paddingBottom: "6px",
              paddingTop: "6px",
            },
        },
      });

      expect(getSelectMenuPaperStyles(lightTheme)).toMatchObject({
        backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
        border: `2px solid ${lightTheme.palette.vars.controlBorderActive}`,
        borderRadius: "8px",
        boxShadow: lightTheme.shadows[2],
        marginTop: "4px",
        width: "283px",
      });

      expect(getSelectClearButtonStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.controlIconWeak,
        height: "24px",
        right: "32px",
        top: "calc(50% - 12px)",
        width: "24px",
      });
    });
  });

  describe("props", () => {
    it("renders small size", () => {
      renderSelect({ size: "small" });
      expect(
        document.querySelector(".MuiInputBase-sizeSmall"),
      ).toBeInTheDocument();
    });

    it("forwards sx to root", () => {
      renderSelect({ sx: { width: 300 } });
      expect(
        document.querySelector(".MuiOutlinedInput-root"),
      ).toBeInTheDocument();
    });

    it("calls onClear when the clear button is clicked", () => {
      const onClear = jest.fn();
      renderSelect({ onClear });
      fireEvent.click(screen.getByLabelText("Clear selection"));
      expect(onClear).toHaveBeenCalledTimes(1);
    });
  });
});
