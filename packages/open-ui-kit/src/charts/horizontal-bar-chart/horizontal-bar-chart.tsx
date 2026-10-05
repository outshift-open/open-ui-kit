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
  /**
   * "labelled" (default) shows the name above each bar.
   * "inline" shows the name before the bar, all on the same line.
   */
  variant?: "labelled" | "inline";
  /**
   * Prints each bar's value just past the end of its fill. The design ships the
   * chart both ways — with the values where the chart is read on its own, without
   * them where a surrounding table already carries the numbers. Turning them off
   * also releases the right-hand gutter, so the bars use the full row width.
   */
  showValues?: boolean;
}

/**
 * A bar and the value it stands for. The value is printed just past the end of
 * the fill, so it moves with the bar — a short bar carries its number near the
 * left, a long one near the right — instead of sitting in a column that reads
 * as a separate table.
 */
const BarTrack = ({
  item,
  maxValue,
  showValues,
}: {
  item: ChartDataItem;
  maxValue: number;
  showValues: boolean;
}) => {
  const theme = useTheme();

  return (
    <Box sx={showValues ? styles.barTrack : styles.barTrackBare}>
      <Box sx={getBarStyle(item.value, maxValue, item.color)} />
      {showValues && (
        <Typography
          variant="captionSemibold"
          color={theme.palette.vars.baseTextMedium}
          sx={styles.value}
        >
          {item.value}
        </Typography>
      )}
    </Box>
  );
};

export const HorizontalBarChart = ({
  data,
  categories,
  handleClick,
  variant = "labelled",
  showValues = true,
}: HorizontalBarChartProps) => {
  const theme = useTheme();

  const chartData = data as ChartDataItem[];
  const maxValue = Math.max(0, ...chartData.map((d) => d.value));
  const isInline = variant === "inline";

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
      <Stack sx={styles.barsContainer} data-testid="horizontal-bar-chart-rows">
        {chartData.map((d, i) =>
          isInline ? (
            <Stack
              direction="row"
              key={i}
              spacing={1}
              alignItems="center"
              {...(handleClick && {
                onClick: () => handleClick(d),
                onKeyDown: handleRowKeyDown(d),
                role: "button",
                sx: styles.barContainer,
                tabIndex: 0,
              })}
            >
              {d.icon && <d.icon sx={styles.icon} />}
              <Typography variant="caption" sx={styles.inlineLabel}>
                {d.name}
              </Typography>
              <Box flex={1}>
                <BarTrack
                  item={d}
                  maxValue={maxValue}
                  showValues={showValues}
                />
              </Box>
            </Stack>
          ) : (
            <Stack
              direction="row"
              key={i}
              spacing={1}
              // The row is two lines tall — name above bar — while the icon is a
              // fixed 32px square. Centring it against the pair keeps it level
              // with the row rather than hanging off the name's line box.
              alignItems="center"
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
                <Typography variant="caption">{d.name}</Typography>
                <BarTrack
                  item={d}
                  maxValue={maxValue}
                  showValues={showValues}
                />
              </Stack>
            </Stack>
          ),
        )}
      </Stack>
    </Box>
  );
};
