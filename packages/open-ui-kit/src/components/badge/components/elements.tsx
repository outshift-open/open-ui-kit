/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Badge as MuiBadge,
  styled,
  Theme,
  type BadgeProps,
} from "@mui/material";
import type { ComponentType } from "react";
import { BadgeType } from "../types";

const getLightTextColor = (theme: Theme, type?: BadgeType) => {
  switch (type) {
    case "excellent":
      return theme.palette.vars.excellentBackgroundWeak;
    case "neutral":
      return theme.palette.vars.neutralBackgroundWeak;
    case "error":
      return theme.palette.vars.negativeBackgroundWeak;
    case "info":
      return theme.palette.vars.infoBackgroundWeak;
    case "success":
      return theme.palette.vars.successBackgroundWeak;
    case "inactive":
      return theme.palette.vars.inactiveBackgroundWeak;
    case "severe":
      return theme.palette.vars.severeWarningBackgroundWeak;
    default:
      return theme.palette.vars.baseTextInverse;
  }
};

const getBadgeColor = (
  theme: Theme,
  type?: BadgeType,
  isNotification?: boolean,
) => {
  if (isNotification) {
    return "inherit";
  }
  if (type === "default" || type === "warning" || type === "moderate") {
    return theme.palette.vars.baseTextStrong;
  }
  return theme.palette.mode === "dark"
    ? theme.palette.vars.baseTextStrong
    : getLightTextColor(theme, type);
};

const getBadgeBackgroundColor = (theme: Theme, type?: BadgeType) => {
  switch (type) {
    case "default":
      return theme.palette.vars.controlBackgroundMedium;
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
    default:
      return "none";
  }
};

export const StyledBadge = styled(MuiBadge, {
  shouldForwardProp: (prop) => prop !== "type" && prop !== "isNotification",
})<{ type?: BadgeType; isNotification?: boolean }>(
  ({ theme, type, isNotification = false }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: getBadgeColor(theme, type, isNotification),
    backgroundColor: getBadgeBackgroundColor(theme, type),
    minWidth: "19px",
    height: "16px",
    borderRadius: "64px",
    paddingLeft: "6.5px",
    paddingRight: "6.5px",
    ...(isNotification && {
      backgroundColor: "transparent",
      padding: 0,
      minWidth: "18px",
      width: "18px",
      height: "18px",
      "& > svg": {
        width: "18px",
        height: "18px",
      },
      "& .MuiBadge-badge": {
        right: 0,
        top: 0,
        minWidth: "19px",
        height: "16px",
        paddingLeft: "6.5px",
        paddingRight: "6.5px",
        borderRadius: "64px",
        backgroundColor: getBadgeBackgroundColor(theme, type),
        color: getBadgeColor(theme, type, false),
      },
    }),
  }),
) as ComponentType<BadgeProps & { type?: BadgeType; isNotification?: boolean }>;
