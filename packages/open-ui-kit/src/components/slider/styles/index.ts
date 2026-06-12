/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";

const getSliderActiveMarkColor = (theme: Theme) =>
  theme.palette.mode === "dark"
    ? theme.palette.vars.controlBackgroundWeak
    : theme.palette.vars.controlBorderMedium;

export const getSliderStyles = (theme: Theme): CSSObject => ({
  borderRadius: "4px",
  color: theme.palette.vars.interactivePrimaryDefaultDefault,
  height: "8px",
  padding: "8px 0 28px",

  "&.MuiSlider-vertical": {
    height: "100%",
    padding: "0 13px",
    width: "8px",
  },

  "& .MuiSlider-rail": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.vars.controlBorderStrong
        : theme.palette.vars.controlBorderMedium,
    borderRadius: "50%",
    opacity: 1,
  },

  "& .MuiSlider-track": {
    backgroundColor: theme.palette.vars.interactivePrimaryDefaultDefault,
    border: "none",
    borderRadius: "4px",
  },

  "& .MuiSlider-thumb": {
    backgroundColor: theme.palette.vars.controlBackgroundDefault,
    border: `2px solid ${theme.palette.vars.controlBorderStrong}`,
    borderRadius: "50%",
    boxShadow: "none",
    height: "24px",
    width: "24px",
    "&:hover": {
      borderColor: theme.palette.vars.controlBorderHover,
      boxShadow: "none",
    },
    "&.Mui-focusVisible": {
      borderColor: theme.palette.vars.controlBorderActive,
      boxShadow: `0px 0px 0px 2px ${theme.palette.vars.controlFocusRingWeak}, 0px 0px 0px 4px ${theme.palette.vars.controlFocusRingStrong}`,
    },
    "&:active": {
      boxShadow: "none",
    },
    "&::before, &::after": {
      backgroundColor: "transparent",
      borderRadius: "50%",
      boxShadow: "none",
      height: "44px",
      width: "44px",
    },
  },

  "& .MuiSlider-mark": {
    backgroundColor: theme.palette.vars.controlIconWeak,
    borderRadius: "4px",
    height: "4px",
    opacity: 1,
    width: "4px",
  },

  "& .MuiSlider-markActive": {
    backgroundColor: getSliderActiveMarkColor(theme),
    opacity: 1,
  },

  "& .MuiSlider-markLabel": {
    ...theme.typography.caption,
    color: theme.palette.vars.baseTextMedium,
  },

  "& .MuiSlider-valueLabel": {
    ...theme.typography.caption,
    backgroundColor: theme.palette.vars.inactiveBackgroundActive,
    borderRadius: "4px",
    color: theme.palette.vars.baseTextInverse,
  },

  "&.Mui-disabled": {
    color: theme.palette.vars.controlBorderDisabled,
    opacity: 1,
    "& .MuiSlider-track": {
      backgroundColor: theme.palette.vars.controlBorderDisabled,
    },
    "& .MuiSlider-thumb": {
      backgroundColor: theme.palette.vars.controlBackgroundWeak,
      borderColor: theme.palette.vars.controlBorderDisabled,
    },
  },
});
