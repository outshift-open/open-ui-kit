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
  labelsContainer: { display: "flex", justifyContent: "space-between" },
  inlineLabel: {
    width: INLINE_LABEL_WIDTH_PX,
    flexShrink: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

export const getBarStyle = (
  value: number,
  maxValue: number,
  color: string,
): SxProps<Theme> => ({
  width: maxValue > 0 ? `${(value / maxValue) * 100}%` : "0%",
  height: MIN_BAR_HEIGHT_PX,
  flexShrink: 0,
  borderRadius: 0.5,
  backgroundColor: color,
});
