/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { TypographyProps } from "@mui/material";
import type { TooltipProps } from "@/components/tooltip";

export interface PathDisplayProps {
  /** Full path string, e.g. "Company / subgroup / leaf". Segments are split on "/". */
  path: string;
  /**
   * Minimum number of path segments before the middle is collapsed to "…".
   * Defaults to 3 — paths with 3 or more segments show "first / ... / last".
   */
  numberOfLevels?: number;
  /** Optional props forwarded to the wrapping Tooltip; PathDisplay supplies the title and child. */
  tooltipProps?: Partial<Omit<TooltipProps, "children" | "title">>;
  /** Props forwarded to the inner Typography element. */
  typographyProps?: TypographyProps;
}
