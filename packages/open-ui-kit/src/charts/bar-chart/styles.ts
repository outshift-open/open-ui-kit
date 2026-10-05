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
/** Height of the box the design stacks above each bar to hold its value. */
export const BAR_CHART_VALUE_LABEL_HEIGHT_PX = 18;
/** Gap between that box and the top of the bar it belongs to. */
export const BAR_CHART_VALUE_LABEL_GAP_PX = 2;

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
 * The value printed above each bar. Recharts draws it as SVG text, so the caption
 * variant is unpacked into presentation attributes instead of being handed over as
 * an `sx`; `lineHeight` is left out because a one-line SVG label has no line box to
 * sit in — its vertical placement comes from the offset above the bar. It shares
 * `captionSemibold` and `baseTextMedium` with the horizontal bar chart's value so
 * the two charts read as the same component family.
 */
export const getBarChartValueLabelStyles = (theme: Theme) => ({
  fontFamily: theme.typography.captionSemibold.fontFamily,
  fontSize: theme.typography.captionSemibold.fontSize,
  fontWeight: theme.typography.captionSemibold.fontWeight,
  letterSpacing: theme.typography.captionSemibold.letterSpacing,
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
