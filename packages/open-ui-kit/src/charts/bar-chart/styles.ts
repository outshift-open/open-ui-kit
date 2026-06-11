/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material/styles";

export const getBarChartTooltipStyles = (theme: Theme): SxProps<Theme> => ({
  backgroundColor: theme.palette.vars.baseBackgroundMedium,
  padding: "2px 8px",
  borderRadius: "4px",
});

export const getBarChartTooltipTypographyStyles = (
  theme: Theme,
): SxProps<Theme> => ({
  ...theme.typography.body2,
  color: theme.palette.vars.baseTextStrong,
});

export const getBarChartTrackColor = (theme: Theme) =>
  theme.palette.vars.controlBorderMedium;

export const styles = (theme: Theme) =>
  ({
    tooltip: getBarChartTooltipStyles(theme),
    tooltipTypography: getBarChartTooltipTypographyStyles(theme),
  }) as {
    tooltip: SxProps<Theme>;
    tooltipTypography: SxProps<Theme>;
  };
