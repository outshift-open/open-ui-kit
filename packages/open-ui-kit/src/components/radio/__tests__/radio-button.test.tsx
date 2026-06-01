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
import { RadioButton, RadioGroup } from "../components/radio-button";

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
    it("renders in light mode without error", () => {
      expect(() => renderRadio({ label: "Light" }, false)).not.toThrow();
    });

    it("renders in dark mode without error", () => {
      expect(() => renderRadio({ label: "Dark" }, true)).not.toThrow();
    });
  });
});
