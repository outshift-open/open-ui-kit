/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
