/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skeleton as MuiSkeleton } from "@mui/material";
import type { SkeletonProps } from "../types";

export type { SkeletonProps };

export const Skeleton = ({ animation = "wave", ...props }: SkeletonProps) => (
  <MuiSkeleton animation={animation} {...props} />
);
