/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material";

type TickProps = {
  payload?: { value: string };
  x?: number;
  y?: number;
};

export default function CustomRadarTick({ x = 0, y = 0, payload }: TickProps) {
  const theme = useTheme();
  return (
    <g>
      <text dx={5} y={y - 5} fill={theme.palette.vars.baseTextMedium}>
        <tspan x={x} dy="0em" fontSize={"0.625rem"} fontWeight={"600"}>
          {payload?.value}
        </tspan>
      </text>
    </g>
  );
}
