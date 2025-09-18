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

import { Badge as MuiBadge, styled, Theme } from "@mui/material";
import { BadgeType } from "../types";

const getBadgeColor = (
  theme: Theme,
  type?: BadgeType,
  isNotification?: boolean,
) => {
  if (isNotification) {
    return "inherit";
  } else if (type === "default" || type === "warning" || type === "moderate") {
    return theme.palette.vars.baseTextStrong;
  } else {
    return theme.palette.vars.baseTextInverse;
  }
};

const getBadgeBackgroundColor = (theme: Theme, type?: BadgeType) => {
  switch (type) {
    case "default":
      return "none";
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
  shouldForwardProp: (prop) => prop !== "type",
})<{ type?: BadgeType; isNotification?: boolean }>(
  ({ theme, type, isNotification = false }) => ({
    color: getBadgeColor(theme, type, isNotification),
    backgroundColor: getBadgeBackgroundColor(theme, type),
    width: "19px",
    height: "16px",
    borderRadius: "64px",
    paddingLeft: "6.5px",
    paddingRight: "6.5px",
    ...(isNotification && {
      backgroundColor: "none",
      padding: 0,
      width: "18px",
      height: "18px",
      "& > svg": {
        width: "18px",
        height: "18px",
      },
      "& .MuiBadge-badge": {
        right: 0,
        top: 0,
        width: "19px",
        height: "16px",
        paddingLeft: "6.5px",
        paddingRight: "6.5px",
        backgroundColor: getBadgeBackgroundColor(theme, type),
        color: getBadgeColor(theme, type, false),
      },
    }),
  }),
);
