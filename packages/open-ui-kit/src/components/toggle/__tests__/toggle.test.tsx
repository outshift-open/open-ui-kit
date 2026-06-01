/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Toggle } from "../components/toggle";

const renderToggle = (
  props: React.ComponentProps<typeof Toggle> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Toggle {...props} />
    </ThemeProvider>,
  );

describe("Toggle", () => {
  describe("rendering", () => {
    it("renders a checkbox input", () => {
      renderToggle();
      expect(screen.getByRole("switch")).toBeInTheDocument();
    });

    it("renders unchecked by default", () => {
      renderToggle();
      expect(screen.getByRole("switch")).not.toBeChecked();
    });

    it("renders checked when defaultChecked", () => {
      renderToggle({ defaultChecked: true });
      expect(screen.getByRole("switch")).toBeChecked();
    });

    it("renders disabled", () => {
      renderToggle({ disabled: true });
      expect(screen.getByRole("switch")).toBeDisabled();
    });

    it("renders checked and disabled", () => {
      renderToggle({ defaultChecked: true, disabled: true });
      const input = screen.getByRole("switch");
      expect(input).toBeChecked();
      expect(input).toBeDisabled();
    });
  });

  describe("interaction", () => {
    it("toggles on click", () => {
      renderToggle();
      const input = screen.getByRole("switch");
      expect(input).not.toBeChecked();
      fireEvent.click(input);
      expect(input).toBeChecked();
    });

    it("calls onChange when toggled", () => {
      const onChange = jest.fn();
      renderToggle({ onChange });
      fireEvent.click(screen.getByRole("switch"));
      expect(onChange).toHaveBeenCalled();
    });

    it("renders switch input as disabled", () => {
      renderToggle({ disabled: true });
      expect(screen.getByRole("switch")).toBeDisabled();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderToggle()).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderToggle({}, true)).not.toThrow();
    });
  });
});
