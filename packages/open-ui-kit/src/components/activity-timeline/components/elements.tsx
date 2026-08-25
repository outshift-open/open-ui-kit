/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ComponentType } from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  type TimelineConnectorProps,
  type TimelineContentProps,
  type TimelineItemProps,
  type TimelineOppositeContentProps,
  type TimelineProps,
  type TimelineSeparatorProps,
} from "@mui/lab";
import { Box, styled, type BoxProps } from "@mui/material";

export const StyledTimeline = styled(Timeline)(() => ({
  margin: 0,
  padding: 0,
})) as ComponentType<TimelineProps>;

export const StyledTimelineItem = styled(TimelineItem)(() => ({
  "&::before": {
    display: "none",
  },
})) as ComponentType<TimelineItemProps>;

const SEPARATOR_TOP_MARGIN = 2;
const DOT_ROOT_TOP_MARGIN = -1;

export const StyledTimelineSeparator = styled(TimelineSeparator)(() => ({
  alignItems: "center",
  marginTop: `${SEPARATOR_TOP_MARGIN}px`,
})) as ComponentType<TimelineSeparatorProps>;

export const StyledTimelineConnector = styled(TimelineConnector, {
  shouldForwardProp: (prop) => prop !== "lineColor",
})<{ lineColor?: string }>(({ lineColor }) => ({
  backgroundColor: lineColor,
  width: "2px",
})) as ComponentType<TimelineConnectorProps & { lineColor?: string }>;

export const StyledTimelineContent = styled(TimelineContent, {
  shouldForwardProp: (prop) => prop !== "mediumSize",
})<{ mediumSize?: boolean }>(({ mediumSize }) => ({
  display: "flex",
  flexDirection: "column",
  gap: mediumSize ? "10px" : "16px",
  padding: "0px 0px 24px 16px",
})) as ComponentType<TimelineContentProps & { mediumSize?: boolean }>;

export const StyledTimelineDotRoot = styled(Box)(() => ({
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
  margin: `${DOT_ROOT_TOP_MARGIN}px 0px`,
  position: "relative",
  zIndex: 1,
})) as ComponentType<BoxProps>;

/** Gradient-variant geometry, from Figma `Key Events` (274455:53816). */
export const GLOW_DOT_SIZE = 7.142;
const TIME_COLUMN_WIDTH = 48;
const RAIL_WIDTH = 1;
const FIRST_DOT_CENTER =
  SEPARATOR_TOP_MARGIN + DOT_ROOT_TOP_MARGIN + GLOW_DOT_SIZE / 2;

/*
 * Gradient variant: one rail for the whole list, not a connector per step.
 *
 * Figma draws the line as a single vector (274455:53823) with a white ->
 * transparent stroke, so the fade has to run unbroken from the first dot to the
 * bottom. Per-item connectors would restart the ramp at every dot.
 *
 * The rail is pinned to the dot axis — the time column plus half a dot in from
 * the inline end — because that is where the separator sits between the two
 * content slots. It stays behind the dots, which paint at `zIndex: 1`.
 *
 * `showRail` is off for a single step: there is nothing to connect, and the
 * default variant leaves a lone step without a connector too.
 */
export const StyledGradientTimeline = styled(StyledTimeline, {
  shouldForwardProp: (prop) => prop !== "showRail",
})<{ showRail?: boolean }>(({ theme, showRail }) => ({
  position: "relative",
  ...(showRail && {
    "&::before": {
      content: '""',
      position: "absolute",
      top: `${FIRST_DOT_CENTER}px`,
      bottom: 0,
      // Logical, not `right`, so the rail follows the flex row in RTL.
      insetInlineEnd: `${TIME_COLUMN_WIDTH + GLOW_DOT_SIZE / 2 - RAIL_WIDTH / 2}px`,
      width: `${RAIL_WIDTH}px`,
      background: theme.palette.gradients?.gradientCardHighlightRadial,
      // Figma runs the ramp over 1065.96 on a 720.86 rail, so the line still
      // has about a third of its opacity left at the bottom, not zero.
      backgroundSize: "100% 147.9%",
      backgroundRepeat: "no-repeat",
      zIndex: 0,
    },
  }),
})) as ComponentType<TimelineProps & { showRail?: boolean }>;

// Event text sits to the left of the line.
export const StyledTimelineOppositeContent = styled(TimelineOppositeContent)(
  () => ({
    flex: 1,
    // `minWidth: 0` keeps every row the same width, so the line stays on one axis.
    minWidth: 0,
    margin: 0,
    padding: "0 16px 40px 0",
    textAlign: "left",
    overflowWrap: "anywhere",
  }),
) as ComponentType<TimelineOppositeContentProps>;

// Time sits to the right of the line, at a fixed width so the line stays aligned.
// The rail above is positioned off this width, so the two must not drift apart.
export const StyledTimelineTimeContent = styled(TimelineContent)(() => ({
  flex: `0 0 ${TIME_COLUMN_WIDTH}px`,
  minWidth: 0,
  margin: 0,
  padding: "0 0 40px 12px",
  textAlign: "left",
  whiteSpace: "nowrap",
})) as ComponentType<TimelineContentProps>;
