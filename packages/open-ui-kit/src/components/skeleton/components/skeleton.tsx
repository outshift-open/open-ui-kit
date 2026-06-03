/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skeleton as MuiSkeleton } from "@mui/material";
import type { SkeletonProps } from "../types";

export type { SkeletonProps };

export const Skeleton = ({
  animation = "wave",
  sx,
  ...props
}: SkeletonProps) => (
  <MuiSkeleton
    animation={animation}
    sx={[
      (theme) => ({
        "&.MuiSkeleton-wave": {
          backgroundColor: theme.palette.vars.baseBackgroundWeak,
          "&::after": {
            background: `linear-gradient(90deg, transparent, ${theme.palette.vars.controlBorderWeak}, transparent)`,
          },
        },
      }),
      ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
    ]}
    {...props}
  />
);
