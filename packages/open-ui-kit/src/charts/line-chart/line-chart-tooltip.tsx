/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
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
