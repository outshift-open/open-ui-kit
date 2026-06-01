/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";
import { lightOrange200, lightOrange800 } from "@/theme/style/color-palette";
import type { PickerDisplay, PickerSize } from "../types";

const ICON_SIZE: Record<PickerSize, string> = {
  large: "32px",
  medium: "24px",
  small: "20px",
};

const LABEL_FONT_SIZE: Record<PickerSize, string> = {
  large: "16px",
  medium: "16px",
  small: "14px",
};

const LABEL_LINE_HEIGHT: Record<PickerSize, string> = {
  large: "24px",
  medium: "24px",
  small: "20px",
};

const LABEL_LETTER_SPACING: Record<PickerSize, string> = {
  large: "0.5px",
  medium: "0.5px",
  small: "0.25px",
};

const PADDING: Record<PickerSize, string> = {
  large: "8px 16px",
  medium: "8px 16px",
  small: "6px 12px",
};

const GAP: Record<PickerDisplay, Record<PickerSize, string>> = {
  vertical: { large: "4px", medium: "4px", small: "4px" },
  horizontal: { large: "8px", medium: "8px", small: "4px" },
};

export const getPickerItemStyles = (
  theme: Theme,
  size: PickerSize,
  display: PickerDisplay,
  selected: boolean,
  disabled: boolean,
) => {
  const bg = disabled
    ? theme.palette.vars?.controlBackgroundDisabled
    : theme.palette.vars?.controlBackgroundDefault;

  // selected: lightOrange800 (#fb962e); dark mode same palette constant
  const borderColor = selected
    ? lightOrange800
    : disabled
      ? theme.palette.vars?.controlBorderDisabled
      : theme.palette.vars?.controlBorderDefault;

  const borderWidth = selected ? "2px" : "1px";

  const contentColor = disabled
    ? theme.palette.vars?.controlIconDisabled
    : theme.palette.vars?.controlIconDefault;

  return {
    display: "inline-flex",
    flexDirection:
      display === "vertical" ? ("column" as const) : ("row" as const),
    alignItems: "center",
    padding: PADDING[size],
    gap: GAP[display][size],
    background: bg,
    border: `${borderWidth} solid ${borderColor}`,
    borderRadius: "4px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: 1,
    transition: "border-color 0.15s",

    "&:hover:not([disabled])": {
      // hover border: lightOrange200 (#ffd7a2) per design
      borderColor: lightOrange200,
      "& .picker-icon": {
        color: theme.palette.vars?.controlIconStrong,
      },
      "& .picker-label": {
        color: theme.palette.vars?.controlIconStrong,
      },
    },

    "& .picker-icon": {
      width: ICON_SIZE[size],
      height: ICON_SIZE[size],
      color: contentColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },

    "& .picker-label": {
      fontSize: LABEL_FONT_SIZE[size],
      lineHeight: LABEL_LINE_HEIGHT[size],
      letterSpacing: LABEL_LETTER_SPACING[size],
      fontWeight: 400,
      color: contentColor,
      whiteSpace: "nowrap" as const,
    },
  };
};
