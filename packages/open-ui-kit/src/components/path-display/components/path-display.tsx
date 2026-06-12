/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography } from "@mui/material";
import { Tooltip, TooltipSize } from "@/components/tooltip";
import type { PathDisplayProps } from "../types";

const getPathSegments = (path: string) =>
  path
    .split("/")
    .map((segment) => segment.trim())
    .filter(Boolean);

export const PathDisplay = ({
  path,
  numberOfLevels = 3,
  tooltipProps,
  typographyProps,
}: PathDisplayProps) => {
  const segments = getPathSegments(path);

  if (segments.length === 0) return null;

  const fullPath = segments.join(" / ");
  const hasManyLevels = segments.length >= numberOfLevels;
  const displayPath = hasManyLevels
    ? `${segments[0]} / ... / ${segments[segments.length - 1]}`
    : fullPath;

  return (
    <Tooltip
      title={hasManyLevels ? fullPath : null}
      arrow
      size={TooltipSize.Large}
      {...tooltipProps}
    >
      <Typography component="span" {...typographyProps}>
        {displayPath}
      </Typography>
    </Tooltip>
  );
};
