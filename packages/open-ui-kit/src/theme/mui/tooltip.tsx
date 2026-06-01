/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";
import { grey800, grey50 } from "../style/color-palette";

// Tooltip is always dark regardless of theme — intentional inversion.
const tooltipBg = grey800;
const tooltipText = grey50;

export const tooltipComponent = (theme: Theme): Components => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          ...theme.typography.captionMedium,
          backgroundColor: tooltipBg,
          color: tooltipText,
          borderRadius: "4px",
        },
        arrow: {
          color: tooltipBg,
        },
      },
    },
  };
};
