/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActivityTimelineStepStatus {
  InProgress = "in-progress",
  Inactive = "inactive",
  Neutral = "neutral",
  Complete = "complete",
  Error = "error",
}

export interface ActivityTimelineStep {
  status: ActivityTimelineStepStatus;
  title: string;
  subTitle?: string;
  content?: React.ReactNode;
}
