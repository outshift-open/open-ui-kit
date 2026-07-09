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

/** Popover content width. Use `large` for wider confirmation/content panels. */
export type PopoverSize = "medium" | "large";

/** Primary side of the anchor where the popover opens (MUI Tooltip / Popper convention). */
export enum PopoverPlacementSide {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right",
}

/** Secondary alignment along the popover edge (MUI Tooltip / Popper convention). */
export enum PopoverPlacementAlign {
  Start = "start",
  End = "end",
  Center = "center",
}

/**
 * Popover placement relative to the anchor — same values as MUI Tooltip `placement`
 * (without `auto` variants). Enables the arrow and maps to `anchorOrigin` /
 * `transformOrigin` internally.
 */
export enum PopoverPlacement {
  Top = "top",
  TopStart = "top-start",
  TopEnd = "top-end",
  Bottom = "bottom",
  BottomStart = "bottom-start",
  BottomEnd = "bottom-end",
  Left = "left",
  LeftStart = "left-start",
  LeftEnd = "left-end",
  Right = "right",
  RightStart = "right-start",
  RightEnd = "right-end",
}

export const POPOVER_PLACEMENTS = [
  PopoverPlacement.BottomStart,
  PopoverPlacement.Bottom,
  PopoverPlacement.BottomEnd,
  PopoverPlacement.TopStart,
  PopoverPlacement.Top,
  PopoverPlacement.TopEnd,
  PopoverPlacement.LeftStart,
  PopoverPlacement.Left,
  PopoverPlacement.LeftEnd,
  PopoverPlacement.RightStart,
  PopoverPlacement.Right,
  PopoverPlacement.RightEnd,
] as const satisfies readonly PopoverPlacement[];

/** Whether a top/bottom popover opens above or below the anchor. */
export enum PopoverVerticalPlacement {
  Above = "above",
  Below = "below",
}

/** Horizontal alignment for top/bottom popovers. */
export enum PopoverHorizontalPlacement {
  Left = "left",
  Center = "center",
  Right = "right",
}

/** Which horizontal side a left/right popover opens on. */
export enum PopoverSidePlacement {
  Left = "left",
  Right = "right",
}

/** Vertical alignment along the edge for left/right popovers. */
export enum PopoverEdgeAlignment {
  Top = "top",
  Center = "center",
  Bottom = "bottom",
}

/** Physical edge used to offset the arrow along the popover panel. */
export enum PopoverArrowAxisAlign {
  Left = "left",
  Right = "right",
  Top = "top",
  Bottom = "bottom",
  Center = "center",
}

export interface PopoverProps extends Omit<MuiPopoverProps, "title"> {
  /** Popover title rendered in bold above the body. */
  title?: ReactNode;
  /** Body text or content rendered below the title. */
  body?: ReactNode;
  /** Action elements (e.g. Buttons) rendered at the bottom-right of the popover. */
  actions?: ReactNode;
  /** Optional icon rendered before the title/body column. */
  icon?: ReactNode;
  /** When true, shows a close (×) button in the top-right corner. */
  showCloseButton?: boolean;
  /** Adds the active feature-highlight border and arrow styling. */
  featureHighlight?: boolean;
  /** Content width. Defaults to the compact `medium` popover. */
  size?: PopoverSize;
  /**
   * MUI Tooltip-style placement for the panel and its arrow.
   * Omit for a plain panel with no arrow.
   */
  placement?: PopoverPlacement;
  /** Additional sx applied to the Paper element, merged after internal styles. */
  paperSx?: SxProps<Theme>;
}
