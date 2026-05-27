/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Avatar as MuiAvatar,
  AvatarGroup as MuiAvatarGroup,
  AvatarProps as MuiAvatarProps,
  AvatarGroupProps as MuiAvatarGroupProps,
  styled,
  Box,
} from "@mui/material";
import type { ComponentType } from "react";

export const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) => prop !== "avatarSize" && prop !== "hasImage",
})<{ avatarSize: "L" | "M"; hasImage?: boolean }>(
  ({ theme, avatarSize, hasImage }) => ({
    width: avatarSize === "L" ? 40 : 32,
    height: avatarSize === "L" ? 40 : 32,
    borderRadius: "50px",
    backgroundColor: hasImage
      ? "transparent"
      : theme.palette.vars.brandBackgroundPrimaryWeak,
    color: theme.palette.vars.brandIconPrimaryDefault,
    fontSize: avatarSize === "L" ? "16px" : "12px",
    fontWeight: 600,
    lineHeight: "133%",
    letterSpacing: avatarSize === "L" ? "0.15px" : undefined,
    cursor: "default",
    position: "relative",
    overflow: "hidden",

    "& .MuiSvgIcon-root": {
      width: avatarSize === "L" ? 24 : 20,
      height: avatarSize === "L" ? 24 : 20,
      color: theme.palette.vars.brandIconPrimaryDefault,
    },

    "&:hover": {
      backgroundColor: hasImage
        ? "transparent"
        : theme.palette.vars.brandBackgroundPrimaryMedium,
      color: theme.palette.vars.brandIconPrimaryStrong,

      "& .MuiSvgIcon-root": {
        color: theme.palette.vars.brandIconPrimaryStrong,
      },

      "& .avatar-image-overlay": {
        opacity: 1,
      },
    },
  }),
) as ComponentType<
  MuiAvatarProps & { avatarSize: "L" | "M"; hasImage?: boolean }
>;

export const AvatarImageOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  opacity: 0,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 20, 43, 0.1)"
      : "rgba(0, 81, 175, 0.1)",
  pointerEvents: "none",
  transition: "opacity 0.2s",
})) as ComponentType<{ className?: string }>;

export const StyledAvatarGroup = styled(MuiAvatarGroup, {
  shouldForwardProp: (prop) => prop !== "avatarSize",
})<{ avatarSize: "L" | "M" }>(({ theme, avatarSize }) => ({
  "& .MuiAvatar-root": {
    width: avatarSize === "L" ? 40 : 32,
    height: avatarSize === "L" ? 40 : 32,
    borderRadius: "50px",
    border: `2px solid ${
      theme.palette.mode === "dark"
        ? theme.palette.vars.baseBorderWeak
        : theme.palette.vars.baseBackgroundWeak
    }`,
    boxSizing: "border-box",
    marginLeft: -16,
    "&:first-of-type": {
      marginLeft: 0,
    },
  },
})) as ComponentType<MuiAvatarGroupProps & { avatarSize: "L" | "M" }>;
