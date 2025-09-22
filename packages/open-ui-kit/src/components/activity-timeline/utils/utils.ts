/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";
import { ActivityTimelineStepStatus } from "../types";

export const setStepColor = (
  status: ActivityTimelineStepStatus,
  theme: Theme,
) => {
  switch (status) {
    case ActivityTimelineStepStatus.InProgress:
      return theme.palette.vars?.interactiveTertiaryDefault;
    case ActivityTimelineStepStatus.Inactive:
      return theme.palette.vars?.controlBorderStrong;
    case ActivityTimelineStepStatus.Complete:
      return theme.palette.vars?.controlIconActive;
    case ActivityTimelineStepStatus.Error:
      return theme.palette.vars?.negativeIconDefault;
    default:
      return theme.palette.vars?.interactiveTertiaryActive;
  }
};
