/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const tooltipComponent = (theme: Theme): Components => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          ...theme.typography.captionMedium,
          backgroundColor: theme.palette.vars.inactiveBackgroundActive,
          color: theme.palette.vars.baseTextInverse,
        },
        arrow: {
          color: theme.palette.vars.inactiveBackgroundActive,
        },
      },
    },
  };
};
