/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
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
