/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import { lightModeCardSubtle } from "@/theme/style/color-palette";
import type { MenuItemSize } from "../types";

export const getMenuItemSizeStyles = (
  theme: Theme,
  size: MenuItemSize,
): CSSObject => {
  if (size === "small") {
    return {
      ...theme.typography.caption,
      padding: "4px 12px",
      minHeight: "24px",
    };
  }

  if (size === "medium") {
    return {
      ...theme.typography.body2,
      padding: "6px 16px",
      minHeight: "32px",
    };
  }

  return {
    ...theme.typography.body1,
    padding: "8px 16px",
    minHeight: "40px",
  };
};

export const getMenuPaperStyles = (
  theme: Theme,
  width?: string | number,
): CSSObject => ({
  backgroundImage: "none",
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  padding: "8px 0px",
  borderRadius: "8px",
  border: `2px solid ${theme.palette.vars.controlBorderActive}`,
  boxShadow: lightModeCardSubtle,
  "& .MuiMenu-list": {
    padding: 0,
  },
  ...(width ? { width } : {}),
});

export const getMenuItemStyles = (
  theme: Theme,
  size: MenuItemSize = "large",
  destructive = false,
): CSSObject => ({
  ...getMenuItemSizeStyles(theme, size),
  color: destructive
    ? theme.palette.vars.negativeTextDefault
    : theme.palette.vars.baseTextDefault,
  gap: "8px",
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  "&:hover": {
    backgroundColor: theme.palette.vars.controlBackgroundMedium,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.vars.controlBackgroundMedium,
    color: theme.palette.vars.controlBorderActive,
  },
  "&.Mui-selected:hover": {
    backgroundColor: theme.palette.vars.controlBackgroundMedium,
  },
  "&.Mui-disabled": {
    color: theme.palette.vars.baseTextDisabled,
    opacity: 1,
  },
});

export const getMenuItemLinkStyles = (
  size: MenuItemSize = "large",
): CSSObject => ({
  color: "inherit",
  height: "100%",
  width: "100%",
  padding:
    size === "small" ? "4px 12px" : size === "medium" ? "6px 16px" : "8px 16px",
  minHeight: size === "small" ? "24px" : size === "medium" ? "32px" : "40px",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const getMenuItemLabelStyles = (
  theme: Theme,
  size: MenuItemSize = "large",
): CSSObject => ({
  ...getMenuItemSizeStyles(theme, size),
  minHeight: undefined,
  padding: 0,
  height: "fit-content",
  display: "flex",
  alignItems: "center",
});

export const getMenuSubheaderStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.captionMedium,
  color: theme.palette.vars.baseTextWeak,
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  padding: "8px 16px",
  lineHeight: "32px",
  letterSpacing: "0.4px",
});
