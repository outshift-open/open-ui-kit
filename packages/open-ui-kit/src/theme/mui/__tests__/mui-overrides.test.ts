/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from "node:fs";
import path from "node:path";
import { darkTheme } from "@/theme/dark/dark-theme";
import { iocTheme } from "@/theme/ioc/ioc-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { midnightTheme } from "@/theme/midnight/midnight-theme";

const componentKeys = (theme: typeof lightTheme) =>
  Object.keys(theme.components ?? {}).sort();

describe("MUI theme overrides", () => {
  it("keeps src/theme/mui limited to primitives without local wrappers", () => {
    const muiDir = path.resolve(process.cwd(), "src/theme/mui");
    const files = fs
      .readdirSync(muiDir)
      .filter((file) => file.endsWith(".tsx"))
      .sort();

    expect(files).toEqual([
      "button.tsx",
      "input.tsx",
      "snack-bar.tsx",
      "svg-icon.tsx",
    ]);
    expect(
      fs.existsSync(path.resolve(process.cwd(), "src/components/button")),
    ).toBe(true);
    expect(
      fs.existsSync(path.resolve(process.cwd(), "src/components/icon-button")),
    ).toBe(false);
    expect(
      fs.existsSync(path.resolve(process.cwd(), "src/components/autocomplete")),
    ).toBe(false);
    expect(
      fs.existsSync(path.resolve(process.cwd(), "src/components/snackbar")),
    ).toBe(false);
  });

  it("does not keep visual overrides for migrated local-wrapper components", () => {
    expect(componentKeys(lightTheme)).toEqual([
      "MuiAutocomplete",
      "MuiButton",
      "MuiButtonBase",
      "MuiIconButton",
      "MuiSnackbar",
      "MuiSvgIcon",
    ]);
    expect(componentKeys(darkTheme)).toEqual([
      "MuiAutocomplete",
      "MuiButton",
      "MuiButtonBase",
      "MuiCssBaseline",
      "MuiIconButton",
      "MuiSnackbar",
      "MuiSvgIcon",
    ]);
    expect(componentKeys(iocTheme)).toEqual([
      "MuiAutocomplete",
      "MuiButton",
      "MuiButtonBase",
      "MuiCssBaseline",
      "MuiIconButton",
      "MuiSnackbar",
      "MuiSvgIcon",
    ]);
    expect(componentKeys(midnightTheme)).toEqual([
      "MuiAutocomplete",
      "MuiButton",
      "MuiButtonBase",
      "MuiCssBaseline",
      "MuiIconButton",
      "MuiSnackbar",
      "MuiSvgIcon",
    ]);

    expect(lightTheme.components?.MuiButton?.styleOverrides).toBeUndefined();
    expect(darkTheme.components?.MuiButton?.styleOverrides).toBeUndefined();
    expect(iocTheme.components?.MuiButton?.styleOverrides).toBeUndefined();
    expect(midnightTheme.components?.MuiButton?.styleOverrides).toBeUndefined();

    for (const removedComponent of [
      "MuiAccordion",
      "MuiAccordionDetails",
      "MuiAccordionSummary",
      "MuiAlert",
      "MuiAppBar",
      "MuiAvatar",
      "MuiBackdrop",
      "MuiBadge",
      "MuiCard",
      "MuiChip",
      "MuiCircularProgress",
      "MuiDialog",
      "MuiDivider",
      "MuiDrawer",
      "MuiList",
      "MuiListItemButton",
      "MuiLinearProgress",
      "MuiMenu",
      "MuiMenuItem",
      "MuiPaper",
      "MuiRadio",
      "MuiSlider",
      "MuiSkeleton",
      "MuiSwitch",
      "MuiTab",
      "MuiTableCell",
      "MuiTabs",
      "MuiTextField",
      "MuiTooltip",
    ]) {
      expect(lightTheme.components).not.toHaveProperty(removedComponent);
      expect(darkTheme.components).not.toHaveProperty(removedComponent);
      expect(iocTheme.components).not.toHaveProperty(removedComponent);
      expect(midnightTheme.components).not.toHaveProperty(removedComponent);
    }
  });

  it("defines the Open UI Kit SvgIcon size scale", () => {
    for (const theme of [lightTheme, darkTheme, iocTheme, midnightTheme]) {
      expect(theme.components?.MuiSvgIcon?.styleOverrides).toMatchObject({
        fontSizeSmall: { fontSize: "20px" },
        fontSizeMedium: { fontSize: "24px" },
        fontSizeLarge: { fontSize: "32px" },
      });
      expect(theme.components?.MuiSvgIcon?.variants).toContainEqual({
        props: { fontSize: "base" },
        style: { fontSize: "16px" },
      });
    }
  });

  it("keeps only library-wide button defaults in the MUI theme", () => {
    expect(lightTheme.components?.MuiButtonBase?.defaultProps).toEqual({
      disableRipple: true,
    });
    expect(lightTheme.components?.MuiButton?.defaultProps).toEqual({
      color: "default",
      disableRipple: true,
      size: "medium",
      variant: "primary",
    });
    expect(darkTheme.components?.MuiButton?.defaultProps).toEqual(
      lightTheme.components?.MuiButton?.defaultProps,
    );
    expect(iocTheme.components?.MuiButton?.defaultProps).toEqual(
      lightTheme.components?.MuiButton?.defaultProps,
    );
  });
});
