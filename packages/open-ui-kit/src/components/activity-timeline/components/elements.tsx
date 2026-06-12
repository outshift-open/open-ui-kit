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
  TimelineSeparator,
  type TimelineConnectorProps,
  type TimelineContentProps,
  type TimelineItemProps,
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
