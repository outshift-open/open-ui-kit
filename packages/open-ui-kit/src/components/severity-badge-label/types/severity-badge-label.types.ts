/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { StackProps, TypographyProps } from "@mui/material";
import type { SeverityBadgeProps } from "../../severity-badge/types";

export interface SeverityBadgeLabelProps extends SeverityBadgeProps {
  /**
   * Custom text shown instead of the default severity or score label.
   */
  label?: string;
  /**
   * Props forwarded to the horizontal label container. Values override the
   * component defaults such as spacing and alignment.
   */
  containerStackProps?: StackProps;
  /**
   * Props forwarded to the text label. Values override the default body2
   * typography variant.
   */
  labelTypographyProps?: TypographyProps;
}
