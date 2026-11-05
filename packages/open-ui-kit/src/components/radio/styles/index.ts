/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, SxProps, Theme } from "@mui/material";
import { getControlLabelStyles } from "@/theme/style/common";

export const getRadioButtonStyles = (theme: Theme): CSSObject => ({
  height: "24px",
  padding: 0,
  width: "24px",
  color: theme.palette.vars.controlIconDefault,
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.vars.controlIconHover,
  },
  "&.Mui-checked": {
    color: theme.palette.vars.controlIconActive,
  },
  "&.Mui-disabled": {
    color: theme.palette.vars.controlIconDisabled,
  },
  "& svg": {
    height: "18px",
    width: "18px",
  },
  "&.MuiRadio-sizeSmall": {
    "& svg": {
      height: "18px",
      width: "18px",
    },
  },
  "@media (max-width: 600px)": {
    height: "44px",
    width: "44px",
  },
});

export const getRadioLabelStyles = getControlLabelStyles;

export const getStoryRadioHoverSx = (theme: Theme) =>
  ({
    "&&": {
      color: theme.palette.vars.controlIconHover,
    },
  }) satisfies SxProps<Theme>;
