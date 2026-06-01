/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  MenuItemProps as MuiMenuItemProps,
  MenuProps as MuiMenuProps,
} from "@mui/material";
import type { IconPosition } from "@/common";
import type { LinkProps } from "@/components/link";

export type MenuItemSize = "large" | "medium" | "small";

export interface MenuProps extends MuiMenuProps {
  /** Width of the menu paper. Use when matching a trigger or fixed menu layout. */
  width?: string | number;
}

export interface MenuItemProps extends MuiMenuItemProps {
  /** Optional link target. When present, the menu item renders as a full-width link. */
  href?: LinkProps["href"];
  /** Opens linked menu items in a new browser tab. */
  openInNewTab?: boolean;
  /** Truncates linked menu item text when the content overflows. */
  ellipsis?: boolean;
  /** Controls where the optional link icon appears. */
  iconPosition?: LinkProps["iconPosition"] | IconPosition;
  /** Optional icon shown by linked menu items. */
  Icon?: LinkProps["Icon"];
  /** Visual size matching the menu item sizes in Figma. */
  size?: MenuItemSize;
  /** Applies destructive text color for dangerous menu actions. */
  destructive?: boolean;
}
