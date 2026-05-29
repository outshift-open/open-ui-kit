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
  TypographyProps,
} from "@mui/material";

/** Flexible surface used to group related information and actions. */
export type CardProps = MuiCardProps;

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
