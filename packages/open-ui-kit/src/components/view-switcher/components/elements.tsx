/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, styled, useTheme } from "@mui/material";
import { ViewSwitcherSize } from "../types";

export const StyledBox = styled(Box)(
  ({ fullWidth }: { fullWidth?: boolean }) => ({
    display: fullWidth ? "flex" : "inline-block",
    borderRadius: "8px",
  }),
);

export const StyledButton = styled("button")(({
  size,
  disabled,
  selected,
  isIconOnly,
}: {
  fullWidth?: boolean;
  size?: ViewSwitcherSize;
  disabled?: boolean;
  selected: boolean;
  isIconOnly: boolean;
}) => {
  const theme = useTheme();
  return {
    cursor: disabled ? "not-allowed" : "pointer",
    pointerEvents: disabled ? "none" : "all",

    display: "inline-flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",

    padding: isIconOnly ? "4px" : size === "sm" ? "4px 8px" : "4px 12px",

    fontSize: size === "sm" ? "12px" : "14px",
    fontWeight: 600,
    lineHeight: size === "sm" ? "16px" : "20px",
    color: disabled
      ? theme.palette.vars.baseTextDisabled
      : selected
        ? theme.palette.vars.baseTextStrong
        : theme.palette.vars.baseTextDefault,

    backgroundColor: disabled
      ? theme.palette.vars.controlBackgroundDisabled
      : selected
        ? theme.palette.vars.controlBackgroundDefault
        : theme.palette.vars.controlBackgroundDefault,

    border: `2px solid ${disabled ? theme.palette.vars.controlBorderMedium : selected ? theme.palette.vars.interactiveTertiaryActive : theme.palette.vars.controlBorderMedium}`,
    borderRadius: 0,
    borderRightWidth: 0,

    "&:first-child": {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
    },

    "&:last-child": {
      borderRightWidth: "2px",
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    },

    "&:hover": {
      backgroundColor: theme.palette.vars.baseBackgroundHover,
      color: theme.palette.vars.baseTextStrong,
    },

    "&.osd-view-switcher-option-selected": {
      borderWidth: "2px",
      "& + .osd-view-switcher-option": {
        borderLeftWidth: 0,
      },
    },

    "& > .view-switcher-option-icon": {
      fontSize: size === "sm" ? "16px" : "20px",
      fill: theme.palette.vars.controlIconDefault,
    },
  };
});
