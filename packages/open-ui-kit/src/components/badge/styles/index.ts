/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import type { BadgeType } from "../types";

export const BADGE_TYPES = [
  "default",
  "excellent",
  "neutral",
  "error",
  "warning",
  "info",
  "success",
  "inactive",
  "moderate",
  "severe",
] as const satisfies readonly BadgeType[];

export const getBadgeBackgroundColor = (
  theme: Theme,
  type: BadgeType = "default",
) => {
  switch (type) {
    case "excellent":
      return theme.palette.vars.excellentBackgroundDefault;
    case "neutral":
      return theme.palette.vars.neutralBackgroundDefault;
    case "error":
      return theme.palette.vars.negativeBackgroundDefault;
    case "warning":
      return theme.palette.vars.warningBackgroundDefault;
    case "info":
      return theme.palette.vars.infoBackgroundDefault;
    case "success":
      return theme.palette.vars.successBackgroundDefault;
    case "inactive":
      return theme.palette.vars.inactiveBackgroundDefault;
    case "moderate":
      return theme.palette.vars.moderateBackgroundDefault;
    case "severe":
      return theme.palette.vars.severeWarningBackgroundDefault;
    case "default":
    default:
      return theme.palette.vars.controlBackgroundMedium;
  }
};

export const getBadgeTextColor = (
  theme: Theme,
  type: BadgeType = "default",
) => {
  switch (type) {
    case "excellent":
      return theme.palette.vars.excellentTextInDefault;
    case "neutral":
      return theme.palette.vars.neutralTextInDefault;
    case "error":
      return theme.palette.vars.negativeTextInDefault;
    case "info":
      return theme.palette.vars.infoTextInDefault;
    case "success":
      return theme.palette.vars.successTextInDefault;
    case "severe":
      return theme.palette.vars.severeWarningTextInDefault;
    case "inactive":
      return theme.palette.mode === "dark"
        ? theme.palette.vars.baseTextDark
        : theme.palette.vars.inactiveTextInDefault;
    case "warning":
    case "moderate":
      return theme.palette.vars.baseTextDark;
    case "default":
    default:
      return theme.palette.mode === "dark"
        ? theme.palette.vars.baseTextStrong
        : theme.palette.vars.baseTextDark;
  }
};
