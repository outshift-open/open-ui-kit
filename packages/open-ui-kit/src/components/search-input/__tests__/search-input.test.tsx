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
import { SearchInput } from "../components/search-input";

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
    it("renders in light mode without error", () => {
      expect(() => renderInput({}, false)).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() => renderInput({}, true)).not.toThrow();
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
