/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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
import type { SxProps, Theme } from "@mui/material";
import {
  TagAvatarSize,
  TagBackgroundColorVariants,
  TagStatus,
  TagStatusStyle,
} from "../types";

const getStatusBorder = (
  theme: Theme,
  lightBorderColor: string,
  darkBorderColor: string,
) =>
  `1px solid ${
    theme.palette.mode === "dark" ? darkBorderColor : lightBorderColor
  }`;

export const selectTagStyle = (theme: Theme) => ({
  [TagStatus.Excellent]: {
    backgroundColor: theme.palette.vars?.excellentBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.excellentBackgroundWeak,
      theme.palette.vars.excellentBorderWeak,
    ),
    icon: StarIcon,
    iconColor: theme.palette.vars?.excellentIconDefault,
  },
  [TagStatus.Positive]: {
    backgroundColor: theme.palette.vars?.successBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.successBackgroundWeak,
      theme.palette.vars.successBorderWeak,
    ),
    icon: CheckCircleIcon,
    iconColor: theme.palette.vars?.successIconDefault,
  },
  [TagStatus.Warning]: {
    backgroundColor: theme.palette.vars?.warningBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.warningBackgroundWeak,
      theme.palette.vars.warningBorderWeak,
    ),
    icon: WarningIcon,
    iconColor: theme.palette.vars?.warningIconDefault,
  },
  [TagStatus.SevereWarning]: {
    backgroundColor: theme.palette.vars?.severeWarningBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.severeWarningBackgroundWeak,
      theme.palette.vars.severeWarningBorderWeak,
    ),
    icon: WarningIcon,
    iconColor: theme.palette.vars?.severeWarningIconDefault,
  },
  [TagStatus.Negative]: {
    backgroundColor: theme.palette.vars?.negativeBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.negativeBackgroundWeak,
      theme.palette.vars.negativeBorderWeak,
    ),
    iconColor: theme.palette.vars?.negativeIconDefault,
    icon: CancelIcon,
  },
  [TagStatus.Inactive]: {
    backgroundColor: theme.palette.vars?.inactiveBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.inactiveBackgroundWeak,
      theme.palette.vars.inactiveBorderWeak,
    ),
    iconColor: theme.palette.vars?.inactiveIconDefault,
    icon: RemoveCircleIcon,
  },
  [TagStatus.Disabled]: {
    backgroundColor: theme.palette.vars?.inactiveBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.inactiveBackgroundWeak,
      theme.palette.vars.inactiveBorderWeak,
    ),
    iconColor: theme.palette.vars?.inactiveIconDefault,
    icon: BlockFlippedIcon,
  },
  [TagStatus.InProgress]: {
    backgroundColor: theme.palette.vars?.infoBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.infoBackgroundWeak,
      theme.palette.vars.infoBorderWeak,
    ),
    icon: ScheduleIcon,
    iconColor: theme.palette.vars?.infoIconDefault,
  },
  [TagStatus.Info]: {
    backgroundColor: theme.palette.vars?.infoBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.infoBackgroundWeak,
      theme.palette.vars.infoBorderWeak,
    ),
    icon: InfoIcon,
    iconColor: theme.palette.vars?.infoIconDefault,
  },
  [TagStatus.Allow]: {
    backgroundColor: theme.palette.vars?.neutralBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.neutralBackgroundWeak,
      theme.palette.vars.neutralBorderWeak,
    ),
    icon: CheckCircleOutlineIcon,
    iconColor: theme.palette.vars?.neutralIconDefault,
  },
  [TagStatus.Deny]: {
    backgroundColor: theme.palette.vars?.negativeBackgroundWeak,
    border: getStatusBorder(
      theme,
      theme.palette.vars.negativeBackgroundWeak,
      theme.palette.vars.negativeBorderWeak,
    ),
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
    color: theme.palette.vars.baseTextDefault,
    backgroundColor: theme.palette.vars?.[color],
    ...(clickable && {
      "&:hover": {
        backgroundColor: theme.palette.vars?.controlBackgroundWeak,
      },
    }),
    ...(statusStyle && {
      backgroundColor: statusStyle?.backgroundColor,
      border: statusStyle?.border,
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
          width: `${TagAvatarSize[size]}px`,
        },
        "& .MuiChip-icon": {
          height: `12px`,
          width: `12px`,
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
          width: `${TagAvatarSize[size]}px`,
        },
        "& .MuiChip-icon": {
          height: `16px`,
          width: `16px`,
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
          width: `${TagAvatarSize[size]}px`,
        },
        "& .MuiChip-icon": {
          height: `20px`,
          width: `20px`,
          ...(statusStyle && {
            color: statusStyle?.iconColor,
          }),
        },
      };
      break;
  }
  return style;
};
