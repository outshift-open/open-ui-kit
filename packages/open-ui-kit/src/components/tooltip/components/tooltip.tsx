/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
  type Theme,
} from "@mui/material";
import {
  baseTooltipStyles,
  largeTooltipStyles,
  mediumTooltipStyles,
  tooltipArrowStyles,
} from "../styles";
import { TooltipSize } from "../types";

export interface TooltipProps extends MuiTooltipProps {
  size?: TooltipSize;
}

const tooltipPopper = {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, -2],
      },
    },
  ],
};

export const tooltipSlotProps = {
  [TooltipSize.Medium]: {
    popper: tooltipPopper,
    arrow: { sx: tooltipArrowStyles },
    tooltip: {
      sx: (theme: Theme) => ({
        ...theme.typography.captionMedium,
        ...baseTooltipStyles,
        ...mediumTooltipStyles,
      }),
    },
  },
  [TooltipSize.Large]: {
    popper: tooltipPopper,
    arrow: { sx: tooltipArrowStyles },
    tooltip: {
      sx: (theme: Theme) => ({
        ...theme.typography.captionMedium,
        ...baseTooltipStyles,
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
