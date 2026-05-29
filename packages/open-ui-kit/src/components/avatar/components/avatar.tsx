/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box } from "@mui/material";
import type { AvatarProps } from "../types";
import { StyledAvatar, AvatarImageOverlay } from "./elements";

export const Avatar = ({
  size = "L",
  src,
  alt,
  initials,
  icon,
}: AvatarProps) => {
  const hasImage = !!src;

  return (
    <StyledAvatar avatarSize={size} hasImage={hasImage}>
      {hasImage ? (
        <>
          <Box
            component="img"
            className="avatar-image"
            src={src}
            alt={alt ?? ""}
          />
          <AvatarImageOverlay className="avatar-image-overlay" />
        </>
      ) : icon ? (
        icon
      ) : (
        initials
      )}
    </StyledAvatar>
  );
};
