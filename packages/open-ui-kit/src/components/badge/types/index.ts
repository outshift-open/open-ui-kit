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
  /** Optional value rendered in the small bubble when the badge wraps another element. */
  notificationContent?: ReactNode;
  /** Badge label, or the wrapped child when `notificationContent` is provided. */
  content: ReactNode;
  /** Style overrides for the badge root. Use sparingly to preserve badge sizing. */
  styleBadge?: MuiBadgeProps["sx"];
  /** Style overrides for the visible badge text. */
  styleContent?: TypographyProps["sx"];
}
