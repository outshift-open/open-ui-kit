/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material/styles";

/** Fixed column width so bars in the "inline" variant line up across rows. */
const INLINE_LABEL_WIDTH_PX = 96;
/** Bar thickness — the design's minimum bar height. */
export const MIN_BAR_HEIGHT_PX = 18;
/** Constant gap between rows, whatever their content. */
export const SPACE_BETWEEN_BARS_PX = 8;
/** Gap the design leaves between the end of a bar and its value. */
export const VALUE_GAP_PX = 2;
/** Width the design gives the value that trails each bar. */
export const VALUE_WIDTH_PX = 36;
/** Space a row keeps free on the right for the trailing value. */
export const VALUE_GUTTER_PX = VALUE_GAP_PX + VALUE_WIDTH_PX;
/**
 * Only the growing end of a bar is rounded. The left edge is square because it
 * sits on the row's baseline — rounding it would read as a floating pill rather
 * than a measurement running out from a common origin. Matches the vertical
 * chart, which rounds the top of a column and leaves its foot square.
 */
export const BAR_RADIUS = "0 4px 4px 0";

export const styles: Record<string | number | symbol, SxProps<Theme>> = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  /*
   * `minHeight: 0` lets this flex child shrink to the height the consumer gives
   * the chart; without it the rows push it taller instead and nothing scrolls.
   * Rows past that height scroll vertically.
   */
  barsContainer: {
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
    overflowX: "hidden",
    gap: `${SPACE_BETWEEN_BARS_PX}px`,
  },
  barContainer: { cursor: "pointer" },
  header: { display: "flex", justifyContent: "space-between", marginBottom: 2 },
  icon: { width: 32, height: 32 },
  /*
   * The value trails the bar rather than sitting in a fixed right-hand column,
   * so the track reserves the value's width as padding. Bar widths are a
   * percentage of what is left, which keeps them proportional to each other
   * and leaves the longest bar exactly enough room to print its own value.
   */
  barTrack: {
    display: "flex",
    alignItems: "center",
    paddingRight: `${VALUE_GUTTER_PX}px`,
  },
  /*
   * With the values hidden there is nothing to reserve room for, so the bars
   * span the whole row. Keeping the gutter would leave a margin the reader
   * cannot account for, and would shorten every bar against the same data.
   */
  barTrackBare: {
    display: "flex",
    alignItems: "center",
  },
  /*
   * As tall as the bar, so the number is centred against it. `minWidth` rather
   * than a fixed width: a value longer than the design's 36px column grows the
   * box instead of being clipped.
   */
  value: {
    minWidth: VALUE_WIDTH_PX,
    height: MIN_BAR_HEIGHT_PX,
    marginLeft: `${VALUE_GAP_PX}px`,
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  inlineLabel: {
    width: INLINE_LABEL_WIDTH_PX,
    flexShrink: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

/*
 * `flexShrink: 0` matters next to the trailing value: without it the bar would
 * give up width to the value instead of keeping the ratio it encodes.
 */
export const getBarStyle = (
  value: number,
  maxValue: number,
  color: string,
): SxProps<Theme> => ({
  width: maxValue > 0 ? `${(value / maxValue) * 100}%` : "0%",
  height: MIN_BAR_HEIGHT_PX,
  flexShrink: 0,
  borderRadius: BAR_RADIUS,
  backgroundColor: color,
});
