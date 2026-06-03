/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material";

export const getToggleStyles = (theme: Theme): SxProps<Theme> => ({
  borderRadius: 100,
  display: "flex",
  flexShrink: 0,
  height: 20,
  overflow: "visible",
  padding: 0,
  position: "relative",
  width: 40,
  "&& .MuiSwitch-switchBase": {
    boxSizing: "border-box",
    height: 20,
    left: 0,
    minWidth: 0,
    padding: "3px",
    top: 0,
    transform: "translateX(0)",
    transition: "none",
    width: 20,
    "&.Mui-checked": {
      color: theme.palette.vars.controlBackgroundWeak,
      transform: "translateX(20px)",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.vars.interactivePrimaryDefaultActive,
        opacity: 1,
      },
    },
  },
  "&& .MuiSwitch-input": {
    height: "100%",
    left: 0,
    top: 0,
    width: "100%",
  },
  "&& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.vars.controlBackgroundWeak,
    borderRadius: 100,
    boxShadow: "none",
    height: 14,
    width: 14,
  },
  "&& .MuiSwitch-track": {
    backgroundColor: theme.palette.vars.controlIconStrong,
    borderRadius: 100,
    boxSizing: "border-box",
    opacity: 1,
  },
  "&&:hover:not(:has(.Mui-disabled))": {
    "&& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
      backgroundColor: theme.palette.vars.controlIconMedium,
    },
    "&& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: theme.palette.vars.interactivePrimaryDefaultHover,
    },
  },
  "&&:has(.Mui-disabled)": {
    opacity: 0.5,
    "&& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
      backgroundColor: theme.palette.vars.controlIconDisabled,
      opacity: "1 !important",
    },
    "&& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: theme.palette.vars.interactivePrimaryDefaultDisabled,
      opacity: "1 !important",
    },
  },
  "@media (max-width: 600px)": {
    height: 44,
    width: 44,
    "&& .MuiSwitch-switchBase": {
      left: 2,
      top: 12,
      "&.Mui-checked": {
        transform: "translateX(20px)",
      },
    },
    "&& .MuiSwitch-track": {
      height: 20,
      left: 2,
      position: "absolute",
      top: 12,
      width: 40,
    },
  },
});
