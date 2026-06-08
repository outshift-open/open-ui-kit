/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { BackdropProps as MuiBackdropProps } from "@mui/material";

export interface BackdropProps extends MuiBackdropProps {
  /** Controls whether the backdrop is mounted and visible. */
  open: boolean;
  /** Removes the dimmed overlay while preserving the backdrop interaction layer. */
  invisible?: boolean;
}
