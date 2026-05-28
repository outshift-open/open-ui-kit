/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Checkbox } from "../components/checkbox";

const renderCheckbox = (
  props: React.ComponentProps<typeof Checkbox> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Checkbox {...props} />
    </ThemeProvider>,
  );

describe("Checkbox", () => {
  describe("rendering", () => {
    it("renders without throwing", () => {
      expect(() => renderCheckbox()).not.toThrow();
    });

    it("renders a checkbox input", () => {
      renderCheckbox();
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("renders checked when defaultChecked is set", () => {
      renderCheckbox({ defaultChecked: true });
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("renders disabled", () => {
      renderCheckbox({ disabled: true });
      expect(screen.getByRole("checkbox")).toBeDisabled();
    });

    it("renders indeterminate state without throwing", () => {
      expect(() => renderCheckbox({ indeterminate: true })).not.toThrow();
    });
  });

  describe("light theme token coverage", () => {
    it("renders unchecked in light mode without throwing", () => {
      expect(() => renderCheckbox()).not.toThrow();
    });

    it("renders checked in light mode without throwing", () => {
      expect(() => renderCheckbox({ defaultChecked: true })).not.toThrow();
    });

    it("renders disabled in light mode without throwing", () => {
      expect(() => renderCheckbox({ disabled: true })).not.toThrow();
    });

    it("renders indeterminate in light mode without throwing", () => {
      expect(() => renderCheckbox({ indeterminate: true })).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders unchecked in dark mode without throwing", () => {
      expect(() => renderCheckbox({}, true)).not.toThrow();
    });

    it("renders checked in dark mode without throwing", () => {
      expect(() =>
        renderCheckbox({ defaultChecked: true }, true),
      ).not.toThrow();
    });

    it("renders disabled in dark mode without throwing", () => {
      expect(() => renderCheckbox({ disabled: true }, true)).not.toThrow();
    });

    it("renders indeterminate in dark mode without throwing", () => {
      expect(() => renderCheckbox({ indeterminate: true }, true)).not.toThrow();
    });
  });
});
