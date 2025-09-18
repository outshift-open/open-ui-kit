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
