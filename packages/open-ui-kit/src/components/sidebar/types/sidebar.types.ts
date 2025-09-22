/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SxProps, Theme } from "@mui/material";

export interface SidebarItem {
  id: string; // A unique identifier for the key prop
  "aria-label": string; // For accessibility
  tooltip?: string;
  icon?: React.ReactElement; // The icon component, e.g., <BookIcon />
  onClick?: () => void;
  href?: string; // For external or internal links
  target?: string; // e.g., '_blank'
  iconOnly?: boolean;
}

export interface SidebarProps {
  /**
   * An array of action objects to render quick action icon buttons.
   */
  navigationItems?: Array<SidebarItem | React.ReactElement>;

  /**
   * Allows for custom styling overrides.
   */
  sx?: SxProps<Theme>;

  /**
   * can side nav be colapsed
   * @default true
   */
  collapsible?: boolean;

  /**
   * The width of the drawer when it is open.
   * @default '16.5rem'
   */
  drawerWidth?: string;
  /**
   * If `true`, the sidebar is open by default.
   * @default true
   */
  initialOpen?: boolean;
}
