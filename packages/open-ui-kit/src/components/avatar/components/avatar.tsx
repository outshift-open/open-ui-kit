/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { StyledAvatar, AvatarImageOverlay } from "./elements";

export interface AvatarProps {
  size?: "L" | "M";
  src?: string;
  alt?: string;
  initials?: string;
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
    <StyledAvatar avatarSize={size} hasImage={hasImage} src={src} alt={alt}>
      {hasImage ? (
        <AvatarImageOverlay className="avatar-image-overlay" />
      ) : icon ? (
        icon
      ) : (
        initials
      )}
    </StyledAvatar>
  );
};
