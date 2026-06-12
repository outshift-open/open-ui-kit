/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

import { Typography } from "@mui/material";
import { ExtendedDataPoint } from "../types/spider-chart.types";
import { StyledTooltip } from "../styles/spider-chart.styles";

export type CustomTooltipProps = {
  active?: boolean;
  payload?: { payload: ExtendedDataPoint }[];
  tooltipContent?: (dataPoint: ExtendedDataPoint) => React.ReactNode;
};

const CustomTooltip = ({
  active,
  payload,
  tooltipContent,
}: CustomTooltipProps) => {
  if (!active || !payload || !payload[0].payload.subject) {
    return null;
  }
  const data = payload[0].payload;

  return (
    <StyledTooltip>
      <Typography variant="caption">
        {tooltipContent ? (
          tooltipContent(data)
        ) : (
          <span>
            {data.variableA ?? 0} {data.subject}
          </span>
        )}
      </Typography>
    </StyledTooltip>
  );
};

export default CustomTooltip;
