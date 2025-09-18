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

import { SxProps, Theme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import BlockFlippedIcon from "@mui/icons-material/BlockFlipped";
import ScheduleIcon from "@mui/icons-material/Schedule";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { GeneralSize } from "@/common";
import {
  TagAvatarSize,
  TagBackgroundColorVariants,
  TagStatus,
  TagStatusStyle,
} from "../types";

export const selectTagStyle = (theme: Theme) => ({
  [TagStatus.Excellent]: {
    backgroundColor: theme.palette.vars?.excellentBackgroundWeak,
    icon: StarIcon,
    iconColor: theme.palette.vars?.excellentIconDefault,
  },
  [TagStatus.Positive]: {
    backgroundColor: theme.palette.vars?.successBackgroundWeak,
    icon: CheckCircleIcon,
    iconColor: theme.palette.vars?.successIconDefault,
  },
  [TagStatus.Warning]: {
    backgroundColor: theme.palette.vars?.warningBackgroundWeak,
    icon: WarningIcon,
    iconColor: theme.palette.vars?.warningIconDefault,
  },
  [TagStatus.SevereWarning]: {
    backgroundColor: theme.palette.vars?.severeWarningBackgroundWeak,
    icon: WarningIcon,
    iconColor: theme.palette.vars?.severeWarningIconDefault,
  },
  [TagStatus.Negative]: {
    backgroundColor: theme.palette.vars?.negativeBackgroundWeak,
    iconColor: theme.palette.vars?.negativeIconDefault,
    icon: CancelIcon,
  },
  [TagStatus.Inactive]: {
    backgroundColor: theme.palette.vars?.inactiveBackgroundWeak,
    iconColor: theme.palette.vars?.inactiveIconDefault,
    icon: RemoveCircleIcon,
  },
  [TagStatus.Disabled]: {
    backgroundColor: theme.palette.vars?.inactiveBackgroundWeak,
    iconColor: theme.palette.vars?.inactiveIconDefault,
    icon: BlockFlippedIcon,
  },
  [TagStatus.InProgress]: {
    backgroundColor: theme.palette.vars?.infoBackgroundWeak,
    icon: ScheduleIcon,
    iconColor: theme.palette.vars?.infoIconDefault,
  },
  [TagStatus.Info]: {
    backgroundColor: theme.palette.vars?.infoBackgroundWeak,
    icon: InfoIcon,
    iconColor: theme.palette.vars?.infoIconDefault,
  },
  [TagStatus.Allow]: {
    backgroundColor: theme.palette.vars?.neutralBackgroundWeak,
    icon: CheckCircleOutlineIcon,
    iconColor: theme.palette.vars?.neutralIconDefault,
  },
  [TagStatus.Deny]: {
    backgroundColor: theme.palette.vars?.negativeBackgroundWeak,
    iconColor: theme.palette.vars?.negativeIconDefault,
    icon: BlockFlippedIcon,
  },
});

export const getTagStyle = ({
  theme,
  size = GeneralSize.Large,
  statusStyle,
  clickable,
  color,
  hasAvatar,
}: {
  clickable: boolean;
  color: TagBackgroundColorVariants;
  hasAvatar: boolean;
  theme: Theme;
  size?: GeneralSize;
  statusStyle?: TagStatusStyle;
}): SxProps<Theme> => {
  let style: SxProps<Theme> = {
    backgroundColor: theme.palette.vars?.[color],
    ...(clickable && {
      "&:hover": {
        backgroundColor: theme.palette.vars?.controlBackgroundWeak,
      },
    }),
    ...(statusStyle && {
      backgroundColor: statusStyle?.backgroundColor,
    }),
    "&.MuiChip-outlinedDefault": {
      border: `2px dashed ${theme.palette.vars?.controlBorderDefault}`,
      backgroundColor: "transparent",
      "&:hover": {
        border: `2px dashed ${theme.palette.vars?.controlBorderHover}`,
        backgroundColor: "transparent",
      },
      "&:focus": {
        border: `2px solid ${theme.palette.vars?.controlBorderActive}`,
      },
      "&:active": {
        border: `2px solid ${theme.palette.vars?.controlBorderActive}`,
      },
    },
  };

  switch (size) {
    case GeneralSize.Small:
      style = {
        ...style,
        borderRadius: "14px",
        height: hasAvatar ? "24px" : "20px",
        ...theme.typography.captionSemibold,
        "& .MuiChip-label": {
          paddingRight: "8px",
          paddingLeft: "8px",
        },
        "& .MuiChip-deleteIcon": {
          fontSize: "12px",
        },
        "& .MuiChip-avatar": {
          height: `${TagAvatarSize[size]}px`,
        },
        "& .MuiChip-icon": {
          height: `12px`,
          ...(statusStyle && {
            color: statusStyle?.iconColor,
          }),
        },
      };
      break;
    case GeneralSize.Medium:
      style = {
        ...style,
        borderRadius: "16px",
        height: hasAvatar ? "32px" : "24px",
        ...theme.typography.captionSemibold,
        "& .MuiChip-label": {
          paddingRight: "8px",
          paddingLeft: "8px",
        },
        "& .MuiChip-deleteIcon": {
          fontSize: "16px",
        },
        "& .MuiChip-avatar": {
          height: `${TagAvatarSize[size]}px`,
        },
        "& .MuiChip-icon": {
          height: `16px`,
          ...(statusStyle && {
            color: statusStyle?.iconColor,
          }),
        },
      };

      break;
    default:
      // GeneralSize.Large
      style = {
        ...style,
        borderRadius: "20px",
        height: hasAvatar ? "40px" : "32px",
        ...theme.typography.body2Semibold,
        "& .MuiChip-label": {
          paddingRight: "12px",
          paddingLeft: "12px",
        },
        "& .MuiChip-deleteIcon": {
          fontSize: "20px",
        },
        "& .MuiChip-avatar": {
          height: `${TagAvatarSize[size]}px`,
        },
        "& .MuiChip-icon": {
          height: `20px`,
          ...(statusStyle && {
            color: statusStyle?.iconColor,
          }),
        },
      };
      break;
  }
  return style;
};
