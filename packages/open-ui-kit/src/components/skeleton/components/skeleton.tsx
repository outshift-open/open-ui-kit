/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skeleton as MuiSkeleton } from "@mui/material";
import { getSkeletonStyles } from "../styles";
import type { SkeletonProps } from "../types";

/** Open UI Kit skeleton placeholder with tokenized loading colors and animation defaults. */
export const Skeleton = ({
  animation = "wave",
  sx,
  ...props
}: SkeletonProps) => (
  <MuiSkeleton
    {...props}
    animation={animation}
    data-slot="skeleton"
    sx={[
      (theme) => getSkeletonStyles(theme),
      ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
    ]}
  />
);
