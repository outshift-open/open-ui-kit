/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";

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
}
