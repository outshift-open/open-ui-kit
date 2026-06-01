/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import { lightModeCardSubtle } from "@/theme/style/color-palette";
import type { MenuItemSize } from "../types";

const getSizeStyles = (theme: Theme, size: MenuItemSize): CSSObject => {
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
  ...(width ? { width } : {}),
});

export const getMenuItemStyles = (
  theme: Theme,
  size: MenuItemSize = "large",
  destructive = false,
): CSSObject => ({
  ...getSizeStyles(theme, size),
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
    color: theme.palette.vars.interactivePrimaryDefaultDefault,
  },
  "&.Mui-selected:hover": {
    backgroundColor: theme.palette.vars.controlBackgroundMedium,
  },
  "&.Mui-disabled": {
    color: theme.palette.vars.baseTextDisabled,
    opacity: 1,
  },
});

export const getMenuItemLinkStyles = (): CSSObject => ({
  height: "100%",
  width: "100%",
  padding: "8px 16px",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const getMenuItemLabelStyles = (): CSSObject => ({
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
