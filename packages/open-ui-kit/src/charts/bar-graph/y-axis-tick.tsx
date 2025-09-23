/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { Box, useTheme } from "@mui/material";
import { graphStyles } from "./styles";

export const YAxisTick = ({
  x,
  y,
  value,
  yAxisWidth,
}: {
  x: number;
  y: number;
  value: ReactNode;
  yAxisWidth: number;
}) => {
  const theme = useTheme();

  return (
    <foreignObject
      height="24px"
      width={`${yAxisWidth}px`}
      x={x - yAxisWidth}
      y={y - 12.5}
    >
      <Box height={"24px"} sx={graphStyles(theme).yAxisTick}>
        {value}
      </Box>
    </foreignObject>
  );
};
