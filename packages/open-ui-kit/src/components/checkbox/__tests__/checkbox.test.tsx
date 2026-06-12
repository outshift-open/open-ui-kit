/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Checkbox } from "../components/checkbox";

const renderCheckbox = (
  props: React.ComponentProps<typeof Checkbox> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Checkbox {...props} />
    </ThemeProvider>,
  );

const getCheckboxRoot = () => {
  const root = screen.getByRole("checkbox").closest(".MuiCheckbox-root");

  expect(root).toBeInTheDocument();

  return root as HTMLElement;
};

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

    it("matches the CSS-specified root and icon dimensions", () => {
      renderCheckbox();

      const root = getCheckboxRoot();
      const icon = root.querySelector("svg");

      expect(root).toHaveStyle({
        height: "24px",
        marginLeft: "0px",
        minWidth: "24px",
        padding: "0px",
        width: "24px",
      });
      expect(icon).toHaveClass("MuiSvgIcon-root");
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

    it("uses the CSS-specified light icon tokens", () => {
      const { unmount } = renderCheckbox();

      expect(window.getComputedStyle(getCheckboxRoot()).color).toBe(
        "rgb(60, 69, 81)",
      );

      unmount();
      const checkedRender = renderCheckbox({ defaultChecked: true });

      expect(window.getComputedStyle(getCheckboxRoot()).color).toBe(
        "rgb(0, 81, 175)",
      );

      checkedRender.unmount();
      renderCheckbox({ disabled: true });

      expect(window.getComputedStyle(getCheckboxRoot()).color).toBe(
        "rgb(197, 199, 203)",
      );
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

    it("uses the CSS-specified dark icon tokens", () => {
      const { unmount } = renderCheckbox({}, true);

      expect(window.getComputedStyle(getCheckboxRoot()).color).toBe(
        "rgb(232, 233, 234)",
      );

      unmount();
      const checkedRender = renderCheckbox({ defaultChecked: true }, true);

      expect(window.getComputedStyle(getCheckboxRoot()).color).toBe(
        "rgb(18, 193, 255)",
      );

      checkedRender.unmount();
      renderCheckbox({ disabled: true }, true);

      expect(window.getComputedStyle(getCheckboxRoot()).color).toBe(
        "rgb(119, 125, 133)",
      );
    });
  });
});
