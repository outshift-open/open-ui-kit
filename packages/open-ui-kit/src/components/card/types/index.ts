/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type {
  CardActionAreaProps as MuiCardActionAreaProps,
  CardActionsProps as MuiCardActionsProps,
  CardContentProps as MuiCardContentProps,
  CardHeaderProps as MuiCardHeaderProps,
  CardProps as MuiCardProps,
  StackProps,
  TypographyProps,
} from "@mui/material";

/**
 * Severity levels the alert card is designed for.
 *
 * Deliberately not the `Severity` enum from `@/common`: that has no `WARNING`
 * member, and its other four levels have no design in `Alerts Card`
 * (274421:47415).
 */
export type CardAlertSeverity = "warning" | "critical";

export interface CardProps extends MuiCardProps {
  /**
   * Applies the alert treatment: a translucent surface at the larger alert
   * radius and padding. `critical` additionally draws the rainbow gradient
   * border; `warning` has no border.
   *
   * Pair with `CardAlertHeader`, which picks up the matching accent colour.
   */
  alert?: CardAlertSeverity | undefined;
  /** Applies the disabled card treatment and marks the grouped content unavailable. */
  disabled?: boolean;
  /**
   * Applies the graph-connector treatment: the `Graph-Connector` fill and glow
   * gradients over a backdrop blur, edged with the matching 1px gradient
   * stroke. A tighter 6px radius than the other treatments.
   */
  connector?: boolean;
  /** Applies the gradient border and blue glow treatment. */
  glow?: boolean;
  /**
   * Applies the frosted-glass treatment: the `Gradient/Card-Glass-BG` fill over
   * a backdrop blur, with a white hairline and a soft drop shadow.
   *
   * The fill is translucent, so the card picks up whatever is behind it.
   */
  glass?: boolean;
  /**
   * Background image URL. Applies the image treatment: the photo is layered
   * over `Gradient/Welcome-Card-BG-Dark` and under a
   * `Gradient/Overlay-Black-Fade-In` scrim, and the card switches to the
   * larger radius and padding the design uses for these surfaces.
   *
   * Mutually exclusive with `glow`.
   */
  image?: string | undefined;
}

/** Clickable wrapper for interactive cards. */
export type CardActionAreaProps = MuiCardActionAreaProps;

/** Header area for primary and secondary card text. */
export type CardHeaderProps = MuiCardHeaderProps;

/** Main content area inside a card. */
export type CardContentProps = MuiCardContentProps;

/** Action row for buttons and links at the bottom of a card. */
export type CardActionsProps = MuiCardActionsProps;

export interface CardDescriptionProps extends TypographyProps {
  /** Supporting body copy rendered inside the card. */
  children: ReactNode;
}

export interface CardSubheaderProps extends TypographyProps {
  /** Small supporting label, metadata, or date text. */
  children: ReactNode;
}

export interface CardAlertHeaderProps extends StackProps {
  /** Severity label, rendered in the parent card's accent colour. */
  children: ReactNode;
  /** Right-aligned relative time, e.g. `4m ago`. */
  timestamp?: ReactNode;
}
