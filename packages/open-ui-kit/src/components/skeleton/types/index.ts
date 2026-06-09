/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SkeletonProps as MuiSkeletonProps } from "@mui/material";

export interface SkeletonProps extends MuiSkeletonProps {
  /** Placeholder shape. Use text, circular, rectangular, or rounded to match the content being loaded. */
  variant?: MuiSkeletonProps["variant"];
  /** Loading animation. Defaults to wave; set false for a static placeholder. */
  animation?: MuiSkeletonProps["animation"];
  /** Width of the placeholder. */
  width?: MuiSkeletonProps["width"];
  /** Height of the placeholder. */
  height?: MuiSkeletonProps["height"];
  /** MUI sx overrides merged after internal token styles so consumers can override safely. */
  sx?: MuiSkeletonProps["sx"];
}
