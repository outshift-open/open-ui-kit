/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { IconProps as MuiIconProps, SxProps, Theme } from "@mui/material";
import { StyledIcon } from "./elements";

export type IconProps = MuiIconProps;

const toSxArray = (sx: SxProps<Theme> | undefined) =>
  Array.isArray(sx) ? sx : sx ? [sx] : [];

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ color, fontSize, sx, ...props }, ref) => (
    <StyledIcon
      ref={ref}
      color={color}
      fontSize={fontSize}
      hasColorProp={!!color}
      hasFontSizeProp={!!fontSize}
      sx={[...toSxArray(sx)]}
      {...props}
    />
  ),
);

Icon.displayName = "Icon";
