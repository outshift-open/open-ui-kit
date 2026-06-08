/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Badge as MuiBadge, styled, type BadgeProps } from "@mui/material";
import type { ComponentType } from "react";
import { BadgeType } from "../types";
import { getBadgeBackgroundColor, getBadgeTextColor } from "../styles";

export const StyledBadge = styled(MuiBadge, {
  shouldForwardProp: (prop) => prop !== "type" && prop !== "isNotification",
})<{ type?: BadgeType; isNotification?: boolean }>(
  ({ theme, type, isNotification = false }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    color: isNotification ? "inherit" : getBadgeTextColor(theme, type),
    backgroundColor: getBadgeBackgroundColor(theme, type),
    minWidth: "19px",
    height: "16px",
    borderRadius: "64px",
    paddingLeft: "6.5px",
    paddingRight: "6.5px",
    "& .MuiTypography-root": {
      display: "flex",
      alignItems: "center",
      height: "16px",
      color: "inherit",
      letterSpacing: 0,
    },
    ...(isNotification && {
      backgroundColor: "transparent",
      padding: 0,
      minWidth: "24px",
      width: "24px",
      height: "24px",
      "& > svg": {
        width: "24px",
        height: "24px",
        color: theme.palette.vars.interactivePrimaryDefaultDefault,
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
        color: getBadgeTextColor(theme, type),
      },
    }),
  }),
) as ComponentType<BadgeProps & { type?: BadgeType; isNotification?: boolean }>;
