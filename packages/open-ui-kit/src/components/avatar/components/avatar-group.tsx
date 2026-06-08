/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { StyledAvatarGroup } from "./elements";
import { Avatar } from "./avatar";
import type { AvatarGroupProps, AvatarProps } from "../types";

export const AvatarGroup = ({
  size = "L",
  children,
  ...props
}: AvatarGroupProps) => {
  return (
    <StyledAvatarGroup avatarSize={size} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<AvatarProps>(child)) return child;
        return <Avatar {...child.props} size={size} />;
      })}
    </StyledAvatarGroup>
  );
};
