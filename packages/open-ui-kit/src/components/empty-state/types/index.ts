/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ButtonProps } from "@/components/button";
import type { GeneralSize } from "@/common";
import type { StackProps } from "@mui/material";

/** Visual illustration style for the empty-state message. */
export type EmptyStateVariant = "info" | "positive" | "warning" | "negative";

/** Layout direction for the illustration and text content. */
export type EmptyStateDirection = "row" | "column";

export interface EmptyStateProps {
  /** Illustration variant that communicates the empty-state tone. */
  variant?: EmptyStateVariant;
  /** Positions the illustration above the text or beside it. */
  direction?: EmptyStateDirection;
  /** Controls illustration, typography, spacing, and action button size. */
  size?: GeneralSize;
  /** Main heading. Hidden automatically for the small size. */
  title?: string;
  /** Supporting message shown below the title or beside the small illustration. */
  description?: string;
  /** Click handler for the primary action. */
  actionCallback?: () => void;
  /** Label for the primary action button. */
  actionTitle?: string;
  /** Props forwarded to the primary action button. */
  actionButtonProps?: ButtonProps;
  /** Click handler for the optional secondary action. */
  secondaryActionCallback?: () => void;
  /** Label for the optional secondary action button. */
  secondaryActionTitle?: string;
  /** Props forwarded to the optional secondary action button. */
  secondaryActionButtonProps?: ButtonProps;
  /** Props forwarded to the root layout container. */
  containerProps?: StackProps;
}
