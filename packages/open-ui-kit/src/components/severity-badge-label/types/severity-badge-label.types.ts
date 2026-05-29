/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { StackProps } from "@mui/material";
import { TypographyProps } from "@mui/material";
import type { SeverityBadgeProps } from "../../severity-badge/types/severity-badge.types";

export interface SeverityBadgeLabelProps extends SeverityBadgeProps {
  /**
   * Provide a custom label to override the default ones
   */
  label?: string;
  containerStackProps?: StackProps;
  labelTypographyProps?: TypographyProps;
}
