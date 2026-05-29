/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { IconButtonProps } from "@mui/material";
import type { TooltipProps } from "@/components/tooltip";

/** Absolute placement option when the copy action is positioned inside a relative container. */
export type CopyButtonPosition = "left" | "right";

/** Visual size of the copy button and icon. */
export type CopyButtonSize = "small" | "medium" | "large";

export interface CopyButtonStylesProps {
  /** Optional absolute placement side inside the nearest positioned parent. */
  position?: CopyButtonPosition;
  /** Visual size. `large` is 32px with a border, `medium` is 20px, and `small` is 16px. */
  size?: CopyButtonSize;
  /** Top offset used when `position` is set. Defaults to `16px`. */
  top?: string;
  /** Left offset used when `position="left"`. Defaults to `16px`. */
  left?: string;
  /** Right offset used when `position="right"`. Defaults to `16px`. */
  right?: string;
  /** Removes the default outer margin used when the button sits inside code blocks. */
  disableMargin?: boolean;
}

export interface CopyButtonProps
  extends IconButtonProps,
    CopyButtonStylesProps {
  /** Text copied to the clipboard when the action is clicked. */
  text: string;
  /** Callback fired after the text is copied. */
  onCopy?: () => void;
  /** Tooltip placement around the icon button. Defaults to `top`. */
  tooltipPlacement?: TooltipProps["placement"];
  /** Tooltip label before a successful copy. Defaults to `Copy`. */
  copyLabel?: string;
  /** Tooltip label after a successful copy. Defaults to `Copied`. */
  copiedLabel?: string;
}
