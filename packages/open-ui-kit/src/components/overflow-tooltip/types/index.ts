/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { TooltipProps } from "@/components/tooltip";
import type { CSSProperties, ReactNode } from "react";

export interface OverflowTooltipProps
  extends Omit<TooltipProps, "title" | "children"> {
  /** Content shown in the tooltip when the text overflows. */
  value: ReactNode;
  /** The text to display (and potentially truncate). */
  children: ReactNode;
  /**
   * Which end is truncated.
   * - "end" (default) — clips the right side: `"Long text…"`
   * - "start" — clips the left side via RTL: `"…/file/name"`
   */
  ellipsisDirection?: "start" | "end";
  /** Additional inline styles applied to the inner `<span>`. */
  styleText?: CSSProperties;
}
