/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, styled, type BoxProps } from "@mui/material";
import type { ButtonHTMLAttributes, ComponentType } from "react";
import { ViewSwitcherSize } from "../types";

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "fullWidth",
})(({ fullWidth }: { fullWidth?: boolean }) => ({
  display: fullWidth ? "flex" : "inline-flex",
  flexDirection: "row",
  alignItems: "stretch",
  borderRadius: "8px",
})) as ComponentType<BoxProps & { fullWidth?: boolean }>;

export type ViewSwitcherStyledButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    fullWidth?: boolean;
    size?: ViewSwitcherSize;
    disabled?: boolean;
    selected: boolean;
    isIconOnly: boolean;
  };

export const StyledButton = styled("button", {
  shouldForwardProp: (prop) =>
    !["selected", "isIconOnly", "fullWidth"].includes(prop as string),
})<{
  fullWidth?: boolean;
  size?: ViewSwitcherSize;
  disabled?: boolean;
  selected: boolean;
  isIconOnly: boolean;
}>(({ theme, size, disabled, selected, isIconOnly }) => ({
  cursor: disabled ? "not-allowed" : "pointer",
  pointerEvents: disabled ? "none" : "all",

  display: "inline-flex",
  flex: 1,
  minWidth: "max-content",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",

  height: size === "sm" ? "28px" : "32px",

  padding: isIconOnly
    ? size === "sm"
      ? "4px"
      : "4px 8px"
    : size === "sm"
      ? "4px 8px"
      : "4px 12px",

  fontFamily: "Inter, sans-serif",
  fontSize: size === "sm" ? "12px" : "14px",
  fontWeight: 600,
  lineHeight: size === "sm" ? "16px" : "20px",
  textAlign: "center",

  color: disabled
    ? theme.palette.vars.baseTextDisabled
    : selected
      ? theme.palette.vars.baseTextStrong
      : theme.palette.vars.baseTextDefault,

  backgroundColor: disabled
    ? theme.palette.vars.controlBackgroundWeak
    : theme.palette.vars.controlBackgroundDefault,

  border: `2px solid ${
    selected && !disabled
      ? theme.palette.vars.interactiveTertiaryActive
      : theme.palette.vars.controlBorderMedium
  }`,
  borderRadius: 0,
  // collapse right border by default; selected keeps its own right border
  ...(!selected && { borderRightWidth: 0 }),

  "&:first-of-type": {
    borderTopLeftRadius: "6px",
    borderBottomLeftRadius: "6px",
  },

  "&:last-of-type": {
    borderRightWidth: "2px",
    borderTopRightRadius: "6px",
    borderBottomRightRadius: "6px",
  },

  // selected: raise above neighbours; sibling after selected suppresses its left border
  "&.osd-view-switcher-option-selected": {
    zIndex: 1,
    "& + button": {
      borderLeftWidth: 0,
    },
  },

  "&:hover:not(:disabled)": {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
    color: theme.palette.vars.baseTextStrong,
  },

  "& > .view-switcher-option-icon": {
    fontSize: size === "sm" ? "16px" : "20px",
    fill: disabled
      ? theme.palette.vars.baseTextDisabled
      : theme.palette.vars.controlIconDefault,
  },
})) as ComponentType<ViewSwitcherStyledButtonProps>;
