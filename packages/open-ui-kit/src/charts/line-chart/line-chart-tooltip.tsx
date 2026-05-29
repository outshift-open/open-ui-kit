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

type LineChartPayloadItem = NonNullable<
  LineChartTooltipProps["payload"]
>[number];

export const LineChartTooltip = ({
  active,
  payload,
  label,
  subject,
  valueFormatter,
}: LineChartTooltipProps) => {
  const theme = useTheme();
  const styles = tooltipStyles(theme);

  if (!active || !payload?.length) {
    return null;
  }
  return (
    <Box sx={styles.mainContainer}>
      <Typography component="div" variant="caption" sx={styles.title}>
        {subject ?? formatISODate(label, "LLL dd, yyyy")} -{" "}
        {formatISODate(label, "hh:mmaaa")}
      </Typography>
      <Box sx={styles.categoriesContainer}>
        {payload.map((category: LineChartPayloadItem) => {
          return (
            <Typography
              key={String(category.name)}
              component="span"
              variant="caption"
              sx={styles.categoryEntry(category.color)}
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
