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

/** Geometric marker rendered instead of the default content pill. */
export type BadgeShape = "circle" | "triangleUp" | "triangleDown" | "dash";

/** Marker footprint. Only meaningful alongside `shape`. */
export type BadgeSize = "small" | "medium" | "large";

export interface BadgeProps {
  /** Visual status color family for the badge. */
  type?: BadgeType;
  /**
   * Renders the badge as a geometric marker rather than a content pill.
   * The marker is never filled, so `notificationContent` is ignored and
   * `content` becomes an optional label rendered beside it.
   */
  shape?: BadgeShape | undefined;
  /** Marker footprint. Ignored unless `shape` is set. Defaults to `medium`. */
  size?: BadgeSize | undefined;
  /**
   * Optional icon shown before the content, sized to the 16px badge height.
   * It inherits the badge text colour, so an icon painted with `currentColor`
   * tracks the `type` automatically. Ignored in notification and shape modes.
   */
  icon?: ReactNode | undefined;
  /** Optional value rendered in the small bubble when the badge wraps another element. */
  notificationContent?: ReactNode;
  /**
   * Badge label, the wrapped child when `notificationContent` is provided, or
   * the label beside the marker when `shape` is set. Omit it for a bare marker.
   */
  content?: ReactNode | undefined;
  /**
   * Style overrides for the badge root, or for the marker itself in shape
   * mode. Use sparingly to preserve badge sizing.
   */
  styleBadge?: MuiBadgeProps["sx"];
  /** Style overrides for the visible badge text, including a shape label. */
  styleContent?: TypographyProps["sx"];
}
