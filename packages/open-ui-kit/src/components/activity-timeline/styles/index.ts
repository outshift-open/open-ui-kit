/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import { ActivityTimelineStepStatus } from "../types";
import { setStepColor } from "../utils/utils";

export const getActivityTimelineDotStyle = (
  status: ActivityTimelineStepStatus,
  theme: Theme,
) => {
  switch (status) {
    case ActivityTimelineStepStatus.InProgress:
      return {
        background: "transparent",
        ringColor: theme.palette.vars.controlBorderDefault,
        color: setStepColor(status, theme),
        percent: 67,
      };
    case ActivityTimelineStepStatus.Neutral:
      return {
        background: "transparent",
        ringColor: theme.palette.vars.interactiveTertiaryActive,
        color: setStepColor(status, theme),
        percent: 100,
      };
    case ActivityTimelineStepStatus.Complete:
      return {
        background: theme.palette.vars.controlBackgroundDefault,
        ringColor: theme.palette.vars.controlIconActive,
        color: setStepColor(status, theme),
        percent: 100,
      };
    case ActivityTimelineStepStatus.Error:
      return {
        background: theme.palette.vars.controlBackgroundDefault,
        ringColor: theme.palette.vars.controlBorderDefault,
        color: setStepColor(status, theme),
        percent: 67,
      };
    default:
      return {
        background: theme.palette.vars.controlBackgroundDefault,
        ringColor: theme.palette.vars.controlBorderDefault,
        color: setStepColor(status, theme),
        percent: 100,
      };
  }
};
