/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material";
import type { Severity } from "@/common";

export interface SeverityBarProps {
  /**
   * Severity level used to resolve the bar color token.
   */
  severity: Severity;

  /**
   * Additional styles merged after the internal 4x32px bar sizing.
   */
  sx?: SxProps<Theme>;
}
