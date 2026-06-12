/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Toggle } from "../components/toggle";
import { getToggleStyles } from "../styles";

const normalizeHex = (color: string) => color.toLowerCase();

const renderToggle = (
  props: React.ComponentProps<typeof Toggle> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
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
    it("maps light styles to the CSS reference tokens", () => {
      expect(
        normalizeHex(lightTheme.palette.vars.interactivePrimaryDefaultActive),
      ).toBe("#0051af");
      expect(
        normalizeHex(lightTheme.palette.vars.interactivePrimaryDefaultHover),
      ).toBe("#79b9ff");
      expect(
        normalizeHex(lightTheme.palette.vars.interactivePrimaryDefaultDisabled),
      ).toBe("#0051af66");
      expect(normalizeHex(lightTheme.palette.vars.controlIconStrong)).toBe(
        "#1a1f27",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlIconMedium)).toBe(
        "#777d85",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlIconDisabled)).toBe(
        "#c5c7cb",
      );
      expect(normalizeHex(lightTheme.palette.vars.controlBackgroundWeak)).toBe(
        "#f5f8fd",
      );

      expect(getToggleStyles(lightTheme)).toMatchObject({
        height: 20,
        width: 40,
        "&& .MuiSwitch-thumb": {
          backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
          height: 14,
          width: 14,
        },
        "&& .MuiSwitch-track": {
          backgroundColor: lightTheme.palette.vars.controlIconStrong,
          opacity: 1,
        },
        "&&:hover:not(:has(.Mui-disabled))": {
          "&& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
            backgroundColor: lightTheme.palette.vars.controlIconMedium,
          },
          "&& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor:
              lightTheme.palette.vars.interactivePrimaryDefaultHover,
          },
        },
        "&&:has(.Mui-disabled)": {
          opacity: 0.5,
          "&& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
            backgroundColor: lightTheme.palette.vars.controlIconDisabled,
          },
          "&& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor:
              lightTheme.palette.vars.interactivePrimaryDefaultDisabled,
          },
        },
      });
    });

    it("maps dark styles to the CSS reference tokens", () => {
      expect(
        normalizeHex(darkTheme.palette.vars.interactivePrimaryDefaultActive),
      ).toBe("#12c1ff");
      expect(
        normalizeHex(darkTheme.palette.vars.interactivePrimaryDefaultHover),
      ).toBe("#62e0ff");
      expect(
        normalizeHex(darkTheme.palette.vars.interactivePrimaryDefaultDisabled),
      ).toBe("#1fd2ff66");
      expect(normalizeHex(darkTheme.palette.vars.controlIconStrong)).toBe(
        "#ffffff",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlIconMedium)).toBe(
        "#c5c7cb",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlIconDisabled)).toBe(
        "#777d85",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlBackgroundWeak)).toBe(
        "#0d274d",
      );

      expect(getToggleStyles(darkTheme)).toMatchObject({
        "&& .MuiSwitch-thumb": {
          backgroundColor: darkTheme.palette.vars.controlBackgroundWeak,
        },
        "&& .MuiSwitch-track": {
          backgroundColor: darkTheme.palette.vars.controlIconStrong,
        },
        "&&:hover:not(:has(.Mui-disabled))": {
          "&& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
            backgroundColor: darkTheme.palette.vars.controlIconMedium,
          },
          "&& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor:
              darkTheme.palette.vars.interactivePrimaryDefaultHover,
          },
        },
        "&&:has(.Mui-disabled)": {
          "&& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
            backgroundColor: darkTheme.palette.vars.controlIconDisabled,
          },
          "&& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor:
              darkTheme.palette.vars.interactivePrimaryDefaultDisabled,
          },
        },
      });
    });

    it("renders unchecked in dark theme without throwing", () => {
      expect(() => renderToggle({ defaultChecked: false }, true)).not.toThrow();
    });

    it("renders checked in dark theme without throwing", () => {
      expect(() => renderToggle({ defaultChecked: true }, true)).not.toThrow();
    });

    it("renders disabled unchecked in dark theme without throwing", () => {
      expect(() =>
        renderToggle({ disabled: true, defaultChecked: false }, true),
      ).not.toThrow();
    });
  });
});
