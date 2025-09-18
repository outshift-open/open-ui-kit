/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
