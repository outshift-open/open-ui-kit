/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { ViewSwitcher } from "../components/view-switcher";
import { Dashboard1, User } from "@/custom-icons";

const options = ["Option 1", "Option 2", "Option 3"];
const iconOptions = [
  { icon: User, value: "user" },
  { icon: Dashboard1, value: "dashboard" },
];

const renderSwitcher = (
  props: Partial<React.ComponentProps<typeof ViewSwitcher>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <ViewSwitcher
        options={options}
        value="Option 1"
        onChange={jest.fn()}
        {...props}
      />
    </ThemeProvider>,
  );

describe("ViewSwitcher", () => {
  describe("rendering", () => {
    it("renders all options", () => {
      renderSwitcher();
      expect(screen.getByText("Option 1")).toBeInTheDocument();
      expect(screen.getByText("Option 2")).toBeInTheDocument();
      expect(screen.getByText("Option 3")).toBeInTheDocument();
    });

    it("renders icon-only options without throwing", () => {
      renderSwitcher({ options: iconOptions, value: "user" });
      expect(screen.getByRole("button", { name: "user" })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "dashboard" }),
      ).toBeInTheDocument();
    });

    it("renders in dark mode without throwing", () => {
      expect(() => renderSwitcher({}, true)).not.toThrow();
    });

    it("keeps the selected active-border class without adding a false class", () => {
      renderSwitcher({ value: "Option 2" });
      expect(screen.getByText("Option 2")).toHaveClass(
        "osd-view-switcher-option-selected",
      );
      expect(screen.getByText("Option 1").className).not.toContain("false");
    });
  });

  describe("interaction", () => {
    it("calls onChange with the clicked option value", () => {
      const onChange = jest.fn();
      renderSwitcher({ onChange });
      fireEvent.click(screen.getByText("Option 2"));
      expect(onChange).toHaveBeenCalledWith("Option 2");
    });

    it("does not call onChange when disabled", () => {
      const onChange = jest.fn();
      renderSwitcher({ disabled: true, onChange });
      fireEvent.click(screen.getByText("Option 1"));
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("variants", () => {
    it("renders size sm without throwing", () => {
      expect(() => renderSwitcher({ size: "sm" })).not.toThrow();
    });

    it("renders fullWidth without throwing", () => {
      expect(() => renderSwitcher({ fullWidth: true })).not.toThrow();
    });

    it("renders disabled state without throwing", () => {
      expect(() => renderSwitcher({ disabled: true })).not.toThrow();
    });
  });

  describe("token coverage", () => {
    it("renders light theme tokens without throwing", () => {
      expect(() => renderSwitcher()).not.toThrow();
    });

    it("renders dark theme tokens without throwing", () => {
      expect(() => renderSwitcher({}, true)).not.toThrow();
    });
  });
});
