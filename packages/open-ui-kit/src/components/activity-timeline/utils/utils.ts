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
      return theme.palette.vars?.controlBorderDefault;
    case ActivityTimelineStepStatus.Complete:
      return theme.palette.vars?.controlIconActive;
    case ActivityTimelineStepStatus.Error:
      return theme.palette.vars?.negativeIconDefault;
    default:
      return theme.palette.vars?.interactiveTertiaryActive;
  }
};

/** Solid center color for a gradient-variant dot, by status. */
export const getStepDotColor = (
  status: ActivityTimelineStepStatus,
  theme: Theme,
): string => {
  switch (status) {
    case ActivityTimelineStepStatus.Complete:
      return theme.palette.vars?.excellentIconDefault;
    case ActivityTimelineStepStatus.InProgress:
      return theme.palette.vars?.warningIconDefault;
    case ActivityTimelineStepStatus.Error:
      return theme.palette.vars?.negativeIconDefault;
    case ActivityTimelineStepStatus.Neutral:
      return theme.palette.vars?.controlIconMedium;
    default:
      // Figma's inactive dot (274455:53846) is pure white, not the off-white
      // `controlIconDefault` the rest of the timeline uses for text.
      return theme.palette.vars?.controlIconStrong;
  }
};

/** Radial glow fill for a gradient dot, or `undefined` when it renders solid. */
export const getStepGlow = (
  status: ActivityTimelineStepStatus,
  theme: Theme,
): string | undefined => {
  switch (status) {
    case ActivityTimelineStepStatus.Complete:
      return theme.palette.gradients?.gradientGlowGreen;
    case ActivityTimelineStepStatus.InProgress:
      return theme.palette.gradients?.gradientGlowOrange;
    case ActivityTimelineStepStatus.Error:
      return theme.palette.gradients?.gradientGlowRed;
    default:
      return undefined;
  }
};
