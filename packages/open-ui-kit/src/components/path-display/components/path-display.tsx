/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography, useTheme } from "@mui/material";
import { Tooltip, TooltipSize } from "@/components/tooltip";
import type { PathDisplayProps } from "../types";

export type { PathDisplayProps };

export const PathDisplay = ({
  path,
  numberOfLevels = 3,
  tooltipProps,
  typographyProps,
}: PathDisplayProps) => {
  const theme = useTheme();

  if (!path) return null;

  const segments = path.split("/");
  const hasManyLevels = segments.length >= numberOfLevels;

  const prefix = segments[0] === "" ? segments[1] : segments[0];
  const displayPath = hasManyLevels
    ? `${prefix} / ... / ${segments[segments.length - 1]}`
    : path;

  return (
    <Tooltip
      title={hasManyLevels ? path : null}
      arrow
      size={TooltipSize.Large}
      slotProps={{
        tooltip: {
          sx: {
            padding: "8px 12px",
            boxShadow: theme.shadows[4],
            maxWidth: "none",
          },
        },
      }}
      {...tooltipProps}
    >
      <Typography component="span" {...typographyProps}>
        {displayPath}
      </Typography>
    </Tooltip>
  );
};
