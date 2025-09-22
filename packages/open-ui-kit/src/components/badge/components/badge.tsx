/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BadgeProps as MuiBadgeProps,
  TypographyProps,
  Typography,
} from "@mui/material";
import { StyledBadge } from "./elements";
import { BadgeType } from "../types";

export interface BadgeProps {
  type?: BadgeType;
  notificationContent?: React.ReactNode;
  content: React.ReactNode;
  styleBadge?: MuiBadgeProps["sx"];
  styleContent?: TypographyProps["sx"];
}

export const Badge = ({
  type = "default",
  content,
  styleBadge,
  notificationContent,
  styleContent,
}: BadgeProps) => {
  const isNotification =
    notificationContent !== undefined && notificationContent !== null;
  if (isNotification) {
    return (
      <StyledBadge
        sx={styleBadge}
        type={type}
        badgeContent={
          <Typography sx={styleContent} variant="captionSemibold">
            {notificationContent}
          </Typography>
        }
        isNotification={isNotification}
      >
        {content}
      </StyledBadge>
    );
  } else {
    return (
      <StyledBadge sx={styleBadge} type={type} isNotification={isNotification}>
        <Typography sx={styleContent} variant="captionSemibold">
          {content}
        </Typography>
      </StyledBadge>
    );
  }
};
