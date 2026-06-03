/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { InputField } from "..";
import { getInputFieldStyles } from "../styles";

const renderInputField = (
  props: React.ComponentProps<typeof InputField>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <InputField {...props} />
    </ThemeProvider>,
  );

const normalizeHex = (hex: string) => hex.toUpperCase();

describe("InputField", () => {
  describe("rendering", () => {
    it("renders a label and placeholder", () => {
      renderInputField({ label: "Label", placeholder: "Placeholder text" });
      expect(screen.getByLabelText("Label")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("Placeholder text"),
      ).toBeInTheDocument();
    });

    it("defaults to the standard variant", () => {
      const { container } = renderInputField({ label: "Label" });
      expect(container.querySelector(".MuiInput-root")).toBeInTheDocument();
    });
  });

  describe("variants and states", () => {
    it("renders medium and small sizes", () => {
      expect(() => renderInputField({ label: "Label" })).not.toThrow();
      expect(() =>
        renderInputField({ label: "Label", size: "small" }),
      ).not.toThrow();
    });

    it("renders error, focused, disabled, multiline, and number states", () => {
      expect(() =>
        renderInputField({ error: true, label: "Label" }),
      ).not.toThrow();
      expect(() =>
        renderInputField({ focused: true, label: "Label" }),
      ).not.toThrow();
      expect(() =>
        renderInputField({ disabled: true, label: "Label" }),
      ).not.toThrow();
      expect(() =>
        renderInputField({ label: "Label", multiline: true, minRows: 1 }),
      ).not.toThrow();
      expect(() =>
        renderInputField({ label: "Label", type: "number", defaultValue: 1 }),
      ).not.toThrow();
    });
  });

  describe("token coverage", () => {
    it("uses expected light theme control styles", () => {
      expect(getInputFieldStyles(lightTheme)).toMatchObject({
        "& .MuiInput-root": expect.objectContaining({
          height: "40px",
          marginTop: "24px",
          padding: "8px 16px",
          border: `2px solid ${lightTheme.palette.vars.controlBorderDefault}`,
          borderRadius: "4px",
          backgroundColor: lightTheme.palette.vars.controlBackgroundDefault,
          "&:hover:not(.Mui-disabled, .Mui-error, .Mui-focused)": {
            borderColor: lightTheme.palette.vars.controlBorderHover,
          },
          "&.Mui-error:not(.Mui-disabled)": {
            borderColor: lightTheme.palette.vars.controlBorderNegative,
          },
        }),
        "& .MuiFormHelperText-root": expect.objectContaining({
          color: lightTheme.palette.vars.baseTextWeak,
        }),
      });
    });

    it("uses expected dark theme control styles", () => {
      expect(getInputFieldStyles(darkTheme)).toMatchObject({
        "& .MuiInput-root": expect.objectContaining({
          border: `2px solid ${darkTheme.palette.vars.controlBorderDefault}`,
          backgroundColor: darkTheme.palette.vars.controlBackgroundDefault,
          "&.Mui-focused:not(.Mui-disabled, .Mui-error)": {
            borderColor: darkTheme.palette.vars.controlBorderActive,
          },
          "&.Mui-error:not(.Mui-disabled)": {
            borderColor: darkTheme.palette.vars.controlBorderNegative,
          },
        }),
        "& .MuiInput-input": expect.objectContaining({
          color: darkTheme.palette.vars.baseTextDefault,
          "&::placeholder": {
            color: darkTheme.palette.vars.baseTextWeak,
            opacity: 1,
          },
        }),
      });
    });

    it("uses exact CSS token mappings for light and dark negative borders", () => {
      expect(normalizeHex(lightTheme.palette.vars.controlBorderNegative)).toBe(
        "#C0244C",
      );
      expect(normalizeHex(darkTheme.palette.vars.controlBorderNegative)).toBe(
        "#C62953",
      );
      expect(getInputFieldStyles(lightTheme)["& .MuiInput-root"]).toMatchObject(
        {
          "&.Mui-error:not(.Mui-disabled)": {
            borderColor: lightTheme.palette.vars.controlBorderNegative,
          },
        },
      );
      expect(getInputFieldStyles(darkTheme)["& .MuiInput-root"]).toMatchObject({
        "&.Mui-error:not(.Mui-disabled)": {
          borderColor: darkTheme.palette.vars.controlBorderNegative,
        },
      });
    });

    it("uses exact CSS token mappings for disabled controls", () => {
      expect(
        normalizeHex(lightTheme.palette.vars.controlBackgroundDisabled),
      ).toBe("#F5F8FD");
      expect(normalizeHex(lightTheme.palette.vars.controlBorderDisabled)).toBe(
        "#E8EEFB",
      );
      expect(normalizeHex(lightTheme.palette.vars.baseTextDisabled)).toBe(
        "#C5C7CB",
      );
      expect(
        normalizeHex(darkTheme.palette.vars.controlBackgroundDisabled),
      ).toBe("#0D274D");
      expect(normalizeHex(darkTheme.palette.vars.controlBorderDisabled)).toBe(
        "#263B62",
      );
      expect(normalizeHex(darkTheme.palette.vars.baseTextDisabled)).toBe(
        "#777D85",
      );
      expect(getInputFieldStyles(lightTheme)["& .MuiInput-root"]).toMatchObject(
        {
          "&.Mui-disabled": {
            borderColor: lightTheme.palette.vars.controlBorderDisabled,
            backgroundColor: lightTheme.palette.vars.controlBackgroundDisabled,
          },
        },
      );
      expect(getInputFieldStyles(darkTheme)["& .MuiInput-root"]).toMatchObject({
        "&.Mui-disabled": {
          borderColor: darkTheme.palette.vars.controlBorderDisabled,
          backgroundColor: darkTheme.palette.vars.controlBackgroundDisabled,
        },
      });
    });

    it("removes the MUI underline pseudo-elements", () => {
      expect(getInputFieldStyles(lightTheme)["& .MuiInput-root"]).toMatchObject(
        {
          "&::before, &::after, &.MuiInput-underline::before, &.MuiInput-underline::after":
            {
              borderBottom: "0 !important",
              transform: "none !important",
            },
        },
      );
    });

    it("renders light theme control tokens without throwing", () => {
      expect(() =>
        renderInputField({
          label: "Label",
          placeholder: "Placeholder text",
          helperText: "Contextual hint",
        }),
      ).not.toThrow();
    });

    it("renders dark theme control tokens without throwing", () => {
      expect(() =>
        renderInputField(
          {
            label: "Label",
            placeholder: "Placeholder text",
            helperText: "Contextual hint",
          },
          true,
        ),
      ).not.toThrow();
    });
  });

  describe("props passthrough", () => {
    it("allows consumer sx to override internal layout", () => {
      renderInputField({
        label: "Label",
        placeholder: "Placeholder text",
        sx: { width: "320px" },
      });
      expect(screen.getByLabelText("Label")).toBeInTheDocument();
    });

    it("merges sx arrays without throwing", () => {
      expect(() =>
        renderInputField({
          label: "Label",
          sx: [{ width: "280px" }, { margin: 0 }],
        }),
      ).not.toThrow();
    });
  });
});
