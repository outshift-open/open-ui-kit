/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from "@mui/material";
import { largeTooltipStyles, mediumTooltipStyles } from "../styles";
import { TooltipSize } from "../types";

export interface TooltipProps extends MuiTooltipProps {
  size?: TooltipSize;
}

const tooltipPopper = {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, -4],
      },
    },
  ],
};

export const tooltipSlotProps = {
  [TooltipSize.Medium]: {
    popper: tooltipPopper,
    tooltip: { sx: mediumTooltipStyles },
  },
  [TooltipSize.Large]: {
    popper: tooltipPopper,
    tooltip: { sx: largeTooltipStyles },
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
