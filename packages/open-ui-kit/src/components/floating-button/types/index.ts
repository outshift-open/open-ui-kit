/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ButtonProps } from "@/components/button";

export type FloatingButtonVariant = "primary" | "secondary";
export type FloatingButtonSize = "medium" | "small";

export interface FloatingButtonProps extends Omit<
  ButtonProps,
  "variant" | "size"
> {
  /** Border treatment for the floating control. Primary uses the accent border; secondary uses the neutral border. */
  variant?: FloatingButtonVariant;
  /** Visual scale for the pill. Medium is 40px tall; small is 32px tall. */
  size?: FloatingButtonSize;
}
