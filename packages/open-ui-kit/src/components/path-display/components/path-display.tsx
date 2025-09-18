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

import { Tooltip, TooltipSize } from "@/components";
import {
  TooltipProps,
  tooltipSlotProps,
} from "@/components/tooltip/components/tooltip";
import { Typography, TypographyProps, useTheme } from "@mui/material";

export type PathDisplayProps = {
  path: string;
  numberOfLevels?: number;
  tooltipProps?: TooltipProps;
  TypographyProps?: TypographyProps;
};

export const PathDisplay = ({
  path,
  numberOfLevels = 3,
  tooltipProps,
  TypographyProps,
}: PathDisplayProps) => {
  const theme = useTheme();
  if (!path) {
    return null;
  }
  const levels = path.split("/");
  const hasManyLevels = levels.length >= numberOfLevels;

  const prefix = levels[0] === "" ? levels[1] : levels[0];
  const displayPath = hasManyLevels
    ? `${prefix} / ... / ${levels[levels.length - 1]}`
    : path;

  return (
    <Tooltip
      title={hasManyLevels ? path : null}
      arrow
      size={TooltipSize.Large}
      slotProps={{
        tooltip: {
          sx: {
            ...tooltipSlotProps[TooltipSize.Large].tooltip.sx,
            boxShadow: theme.shadows[4],
            maxWidth: "none",
          },
        },
      }}
      {...tooltipProps}
    >
      <Typography component="span" {...TypographyProps}>
        {displayPath}
      </Typography>
    </Tooltip>
  );
};
