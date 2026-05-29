/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { StyledAvatarGroup } from "./elements";
import { Avatar, AvatarProps } from "./avatar";

export interface AvatarGroupProps {
  /** Controls the size applied to every avatar in the group. */
  size?: "L" | "M";
  /** Avatar children to stack with the configured group overlap. */
  children: React.ReactNode;
}

export const AvatarGroup = ({ size = "L", children }: AvatarGroupProps) => {
  return (
    <StyledAvatarGroup avatarSize={size}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<AvatarProps>(child)) return child;
        return <Avatar {...child.props} size={size} />;
      })}
    </StyledAvatarGroup>
  );
};
