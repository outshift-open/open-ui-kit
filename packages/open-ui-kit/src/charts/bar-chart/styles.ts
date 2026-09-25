/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material/styles";

/** Width of the value label column plus its gap to the plot area. */
export const BAR_CHART_Y_AXIS_WIDTH_PX = 44;
/** Vertical space between the plot area and the category labels. */
export const BAR_CHART_LABEL_GAP_PX = 8;

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

export const getBarChartGridColor = (theme: Theme) =>
  theme.palette.vars.controlBorderMedium;

export const getBarChartAxisTickStyles = (theme: Theme) => ({
  fontFamily: "Inter",
  fontSize: 12,
  fontWeight: 400,
  letterSpacing: 0.4,
  fill: theme.palette.vars.baseTextMedium,
});

/**
 * The chart's viewport — the box the consumer sizes. It only becomes a horizontal
 * scroller when the bars cannot fit at their minimum width; otherwise overflow
 * stays visible so bars and tooltips can still escape the plot edges.
 */
export const getBarChartRootStyles = (scrollable = false): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  minWidth: 0,
  ...(scrollable && { overflowX: "auto", overflowY: "hidden" }),
});

/**
 * Plot plus category labels. Fills the viewport when the bars fit; when they do
 * not, it takes the bars' total width so the viewport scrolls it — labels
 * included, so they stay under the ends of the plot.
 */
export const getBarChartContentStyles = (
  contentWidth?: number | undefined,
): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  gap: `${BAR_CHART_LABEL_GAP_PX}px`,
  flex: 1,
  minHeight: 0,
  width: contentWidth === undefined ? "100%" : `${contentWidth}px`,
  flexShrink: 0,
});

export const getBarChartPlotStyles = (): SxProps<Theme> => ({
  flex: 1,
  minHeight: 0,
});

export const getBarChartCategoryLabelsStyles = (
  theme: Theme,
): SxProps<Theme> => ({
  display: "flex",
  justifyContent: "space-between",
  gap: 1,
  paddingLeft: `${BAR_CHART_Y_AXIS_WIDTH_PX}px`,
  ...theme.typography.caption,
  fontFamily: "Inter",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.4px",
  color: theme.palette.vars.baseTextMedium,
  "& > *": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

export const styles = (theme: Theme, contentWidth?: number | undefined) =>
  ({
    root: getBarChartRootStyles(contentWidth !== undefined),
    content: getBarChartContentStyles(contentWidth),
    plot: getBarChartPlotStyles(),
    categoryLabels: getBarChartCategoryLabelsStyles(theme),
    tooltip: getBarChartTooltipStyles(theme),
    tooltipTypography: getBarChartTooltipTypographyStyles(theme),
  }) as {
    root: SxProps<Theme>;
    content: SxProps<Theme>;
    plot: SxProps<Theme>;
    categoryLabels: SxProps<Theme>;
    tooltip: SxProps<Theme>;
    tooltipTypography: SxProps<Theme>;
  };
