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

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload || !payload[0].payload.subject) {
    return null;
  }
  const data = payload[0].payload;

  return (
    <StyledTooltip>
      <Typography variant="caption">
        {data.variableA && (
          <div>
            {data.variableA} {data.subject}
          </div>
        )}
      </Typography>
    </StyledTooltip>
  );
};

export default CustomTooltip;
