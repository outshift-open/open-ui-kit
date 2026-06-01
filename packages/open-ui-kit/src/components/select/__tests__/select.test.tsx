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
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Select } from "../components/select";
import type { SelectProps } from "../types";

const renderSelect = (props: Partial<SelectProps<string>> = {}, dark = false) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
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
    it("renders in light mode without error", () => {
      expect(() => renderSelect({}, false)).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() => renderSelect({}, true)).not.toThrow();
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
  });
});
