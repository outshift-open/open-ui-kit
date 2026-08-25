/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type { TimelineProps as MuiTimelineProps } from "@mui/lab";

export enum ActivityTimelineStepStatus {
  InProgress = "in-progress",
  Inactive = "inactive",
  Neutral = "neutral",
  Complete = "complete",
  Error = "error",
}

export interface ActivityTimelineStep {
  /** Dot and connector state for this timeline step. */
  status: ActivityTimelineStepStatus;
  /** Primary step label. */
  title: string;
  /** Optional icon rendered before the title. */
  titleStartIcon?: ReactNode;
  /** Optional secondary label shown when the step renders accordion content. */
  subTitle?: string;
  /** Optional expanded accordion content for the step. */
  content?: ReactNode;
  /** Expands accordion content by default when content is provided. */
  defaultExpanded?: boolean;
  /** Time label shown to the right of the line. Gradient variant only. */
  time?: string;
}

export interface ActivityTimelineProps extends Omit<
  MuiTimelineProps,
  "children" | "ref"
> {
  /** When true, step dots and connector colors are calculated from each step position. */
  automaticProgress?: boolean;
  /** Controls the timeline title typography and vertical spacing. */
  size?: "large" | "medium";
  /**
   * `gradient` renders the "Key Events" style: glowing status dots on a single
   * line that fades down the list, with each step's `time` beside it. Steps run
   * newest first, and the oldest two dim to 50% and 30%.
   */
  variant?: "default" | "gradient";
  /** Ordered steps rendered in the activity timeline, newest first. */
  steps: ActivityTimelineStep[];
}
