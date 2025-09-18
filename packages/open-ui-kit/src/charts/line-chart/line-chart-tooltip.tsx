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

import { TooltipProps } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";
import { formatISODate } from "./utils";
import { tooltipStyles } from "./styles";

export interface LineChartTooltipProps extends TooltipProps<number, string> {
  subject?: string;
  valueFormatter?: (value?: number) => string;
}

export const LineChartTooltip = ({
  active,
  payload,
  label,
  subject,
  valueFormatter,
}: LineChartTooltipProps) => {
  const theme = useTheme();

  if (!active || !payload?.length) {
    return null;
  }
  return (
    <Box sx={tooltipStyles(theme).mainContainer}>
      <Typography
        component="div"
        variant="caption"
        sx={tooltipStyles(theme).title}
      >
        {subject ?? formatISODate(label, "LLL dd, yyyy")} -{" "}
        {formatISODate(label, "hh:mmaaa")}
      </Typography>
      <Box sx={tooltipStyles(theme).categoriesContainer}>
        {payload.map((category) => {
          return (
            <Typography
              key={category.name}
              component="span"
              variant="caption"
              sx={tooltipStyles(theme).categoryEntry(category.color)}
            >
              {category.name}:{" "}
              {valueFormatter ? valueFormatter(category.value) : category.value}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
