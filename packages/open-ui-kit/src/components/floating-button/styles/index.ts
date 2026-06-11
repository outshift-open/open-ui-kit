/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import type { FloatingButtonVariant } from "../types";

export const getFloatingButtonStyles = (
  theme: Theme,
  variant: FloatingButtonVariant,
) => {
  const borderColor =
    variant === "primary"
      ? theme.palette.vars.interactivePrimaryDefaultDefault
      : theme.palette.vars.controlBorderDefault;

  return {
    borderRadius: "100px",
    boxShadow: theme.shadows[4],
    background: `${theme.palette.vars.controlBackgroundDefault} !important`,
    color: `${theme.palette.vars.baseTextStrong} !important`,
    border: `2px solid ${borderColor} !important`,
    letterSpacing: "0.1px",
    "&:hover": {
      boxShadow: theme.shadows[4],
      border: `2px solid ${borderColor} !important`,
    },
    "&:active": {
      boxShadow: theme.shadows[4],
      border: `2px solid ${borderColor} !important`,
    },
    "&.Mui-disabled": {
      boxShadow: "none",
      opacity: 0.4,
    },
  };
};
