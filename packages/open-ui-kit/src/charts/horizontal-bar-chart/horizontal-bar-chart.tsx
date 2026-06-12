/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { KeyboardEvent } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { ChartDataItem, ChartProps } from "../common/types";
import { getBarStyle, styles } from "./styles";

export interface HorizontalBarChartProps extends ChartProps {
  /** Called with the selected item when a horizontal bar row is clicked or activated by keyboard. */
  handleClick?: (item: ChartDataItem) => void;
}

export const HorizontalBarChart = ({
  data,
  categories,
  handleClick,
}: HorizontalBarChartProps) => {
  const theme = useTheme();

  const chartData = data as ChartDataItem[];
  const maxValue = Math.max(0, ...chartData.map((d) => d.value));

  const handleRowKeyDown =
    (item: ChartDataItem) => (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleClick?.(item);
      }
    };

  return (
    <Box sx={styles.container}>
      {categories?.length ? (
        <Box sx={styles.header}>
          {categories?.map((category, i) => (
            <Typography
              key={i}
              variant="caption"
              color={theme.palette.vars.baseTextWeak}
            >
              {category.name}
            </Typography>
          ))}
        </Box>
      ) : undefined}
      <Stack spacing={2} sx={styles.barsContainer}>
        {chartData.map((d, i) => (
          <Stack
            direction="row"
            key={i}
            spacing={1}
            {...(handleClick && {
              onClick: () => handleClick(d),
              onKeyDown: handleRowKeyDown(d),
              role: "button",
              sx: styles.barContainer,
              tabIndex: 0,
            })}
          >
            {d.icon && <d.icon sx={styles.icon} />}
            <Stack flex={1} spacing={0.5}>
              <Box sx={styles.labelsContainer}>
                <Typography variant="caption">{d.name}</Typography>
                <Typography variant="caption">{d.value}</Typography>
              </Box>
              <Box sx={getBarStyle(d.value, maxValue, d.color)} />
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
