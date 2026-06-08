/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { TooltipProps as MuiTooltipProps } from "@mui/material";

export enum TooltipSize {
  Medium = "medium",
  Large = "large",
}

export interface TooltipProps extends MuiTooltipProps {
  /** Tooltip size from the design system: compact medium or roomier large. */
  size?: TooltipSize;
}
