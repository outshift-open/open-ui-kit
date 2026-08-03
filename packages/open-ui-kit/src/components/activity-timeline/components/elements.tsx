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

export const StyledTimelineSeparator = styled(TimelineSeparator)(() => ({
  alignItems: "center",
  marginTop: "2px",
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
  margin: "-1px 0px",
  position: "relative",
  zIndex: 1,
})) as ComponentType<BoxProps>;

// Overlaps the dots so the segments read as one continuous line.
export const StyledTimelineGlowConnector = styled(TimelineConnector, {
  shouldForwardProp: (prop) => prop !== "lineColor",
})<{ lineColor?: string }>(({ lineColor }) => ({
  backgroundColor: lineColor,
  width: "1px",
  margin: "-4px 0",
})) as ComponentType<TimelineConnectorProps & { lineColor?: string }>;

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
export const StyledTimelineTimeContent = styled(TimelineContent)(() => ({
  flex: "0 0 48px",
  minWidth: 0,
  margin: 0,
  padding: "0 0 40px 12px",
  textAlign: "left",
  whiteSpace: "nowrap",
})) as ComponentType<TimelineContentProps>;
