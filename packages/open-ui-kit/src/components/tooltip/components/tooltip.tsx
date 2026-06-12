/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Tooltip as MuiTooltip, type Theme } from "@mui/material";
import {
  baseTooltipStyles,
  largeTooltipStyles,
  mediumTooltipStyles,
  tooltipArrowStyles,
} from "../styles";
import { TooltipSize, type TooltipProps } from "../types";

const tooltipPopper = {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, -2],
      },
    },
  ],
  sx: {
    '&[data-popper-placement*="left"] .MuiTooltip-arrow, &[data-popper-placement*="right"] .MuiTooltip-arrow':
      {
        height: "10px",
        width: "6px",
      },
  },
};

export const tooltipSlotProps = {
  [TooltipSize.Medium]: {
    popper: tooltipPopper,
    arrow: { sx: tooltipArrowStyles },
    tooltip: {
      sx: (theme: Theme) => ({
        ...baseTooltipStyles(theme),
        ...mediumTooltipStyles,
      }),
    },
  },
  [TooltipSize.Large]: {
    popper: tooltipPopper,
    arrow: { sx: tooltipArrowStyles },
    tooltip: {
      sx: (theme: Theme) => ({
        ...baseTooltipStyles(theme),
        ...largeTooltipStyles,
      }),
    },
  },
};

export const Tooltip = ({
  size = TooltipSize.Medium,
  children,
  ...props
}: TooltipProps) => {
  return (
    <MuiTooltip slotProps={tooltipSlotProps[size]} arrow {...props}>
      {children}
    </MuiTooltip>
  );
};
