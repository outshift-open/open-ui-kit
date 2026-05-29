/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Box } from "@mui/material";
import { StyledAvatar, AvatarImageOverlay } from "./elements";

export interface AvatarProps {
  /** Controls the avatar diameter. Large is 40px and medium is 32px. */
  size?: "L" | "M";
  /** Image source used when the avatar should represent a person or entity photo. */
  src?: string;
  /** Accessible text for the image avatar. */
  alt?: string;
  /** Initials displayed when no image or icon is provided. */
  initials?: string;
  /** Icon displayed when no image is provided. */
  icon?: React.ReactNode;
}

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
