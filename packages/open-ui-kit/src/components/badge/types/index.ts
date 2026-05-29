/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type {
  BadgeProps as MuiBadgeProps,
  TypographyProps,
} from "@mui/material";

export type BadgeType =
  | "default"
  | "excellent"
  | "neutral"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "inactive"
  | "moderate"
  | "severe";

export interface BadgeProps {
  /** Visual status color family for the badge. */
  type?: BadgeType;
  /** Optional notification value rendered inside the badge bubble. */
  notificationContent?: ReactNode;
  /** Main badge label or wrapped child content. */
  content: ReactNode;
  /** Style overrides for the MUI badge root. */
  styleBadge?: MuiBadgeProps["sx"];
  /** Style overrides for the badge label typography. */
  styleContent?: TypographyProps["sx"];
}
