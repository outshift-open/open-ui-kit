/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  PopoverProps as MuiPopoverProps,
  PopoverOrigin,
  SxProps,
  Theme,
} from "@mui/material";
import type { ReactNode } from "react";

export type { PopoverOrigin };

/**
 * Where the directional arrow tip is rendered relative to the popover panel.
 * Use together with `anchorOrigin` / `transformOrigin` to align the arrow
 * with the trigger element.
 */
export type PopoverArrowPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface PopoverProps extends Omit<MuiPopoverProps, "title"> {
  /** Popover title rendered in bold above the body. */
  title?: ReactNode;
  /** Body text or content rendered below the title. */
  body?: ReactNode;
  /** Action elements (e.g. Buttons) rendered at the bottom-right of the popover. */
  actions?: ReactNode;
  /** When true, shows a close (×) button in the top-right corner. */
  showCloseButton?: boolean;
  /**
   * Renders a directional arrow on the popover panel pointing toward the anchor.
   * Omit for a plain panel with no arrow.
   */
  arrowPosition?: PopoverArrowPosition;
  /** Additional sx applied to the Paper element, merged after internal styles. */
  paperSx?: SxProps<Theme>;
}
