/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography } from "@mui/material";
import {
  StyledBadge,
  StyledBadgeIcon,
  StyledShapeBadge,
  StyledShapeBadgeLabel,
  StyledShapeBadgeRoot,
} from "./elements";
import type { BadgeProps } from "../types";

export const Badge = ({
  type = "default",
  shape,
  size = "medium",
  content,
  icon,
  styleBadge,
  notificationContent,
  styleContent,
}: BadgeProps) => {
  if (shape) {
    const marker = (
      <StyledShapeBadge
        sx={styleBadge}
        shape={shape}
        size={size}
        type={type}
        data-shape={shape}
        data-size={size}
      />
    );

    // A shape badge carries meaning through colour alone, so `content` names
    // the state beside the marker rather than filling it. Without content the
    // marker is returned bare, keeping the unlabelled markup unchanged.
    const hasLabel = content !== undefined && content !== null;
    if (!hasLabel) {
      return marker;
    }

    return (
      <StyledShapeBadgeRoot data-shape-label="">
        {marker}
        <StyledShapeBadgeLabel sx={styleContent} variant="captionSemibold">
          {content}
        </StyledShapeBadgeLabel>
      </StyledShapeBadgeRoot>
    );
  }

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
      <StyledBadge
        sx={styleBadge}
        type={type}
        isNotification={isNotification}
        hasIcon={Boolean(icon)}
      >
        {icon ? <StyledBadgeIcon>{icon}</StyledBadgeIcon> : null}
        <Typography sx={styleContent} variant="captionSemibold">
          {content}
        </Typography>
      </StyledBadge>
    );
  }
};
