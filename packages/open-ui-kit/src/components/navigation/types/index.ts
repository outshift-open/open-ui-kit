/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { HTMLAttributes, ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type NavigationItemState = "default" | "selected" | "disabled";

export interface NavigationItemData {
  /** Stable item id used for selection and callbacks. */
  id: string;
  /** Visible navigation label. */
  label: ReactNode;
  /** Optional secondary label shown in drawer/sub-navigation layouts. */
  subtext?: ReactNode;
  /** Visual state for the item. */
  state?: NavigationItemState;
  /** Disables item interaction and applies disabled styling. */
  disabled?: boolean;
  /** Optional nested items rendered by sub-navigation stories or panels. */
  children?: NavigationItemData[];
}

export interface NavigationSectionData {
  /** Section heading shown above a group of navigation items. */
  label: ReactNode;
  /** Items rendered inside the section. */
  items: NavigationItemData[];
}

export interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  /** Sections rendered in the primary navigation menu. */
  sections: NavigationSectionData[];
  /** Organization switcher label shown at the top of the menu. */
  organizationLabel?: ReactNode;
  /** Sections rendered in the organization drawer. Defaults to the primary sections. */
  organizationSections?: NavigationSectionData[];
  /** Drawer title shown when the organization switcher opens the drawer. */
  organizationDrawerTitle?: ReactNode;
  /** Initial or controlled compact icon-only navigation rail state. */
  compact?: boolean;
  /** Currently selected item id. Overrides individual item selected state. */
  selectedItemId?: string;
  /** Called when a navigation item is selected. */
  onItemSelect?: (item: NavigationItemData) => void;
  /** Called when the organization switcher is clicked. */
  onOrganizationClick?: () => void;
  /** Called when the collapse control is clicked. */
  onCollapseClick?: (compact: boolean) => void;
  /** Called when the generated sub-navigation panel is closed. */
  onSubNavigationClose?: () => void;
  /** Optional system overrides merged by the styled root. */
  sx?: SxProps<Theme>;
}

export interface NavigationDrawerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Drawer title shown in the header. */
  title?: ReactNode;
  /** Sections rendered inside the drawer. */
  sections: NavigationSectionData[];
  /** Called when the close button is clicked. */
  onClose?: () => void;
  /** Optional system overrides merged by the styled root. */
  sx?: SxProps<Theme>;
}

export interface NavigationSubNavigationProps
  extends HTMLAttributes<HTMLDivElement> {
  /** Panel headline shown in the sub-navigation header. */
  headline?: ReactNode;
  /** Sections rendered in the secondary navigation panel. */
  sections: NavigationSectionData[];
  /** Currently selected item id. */
  selectedItemId?: string;
  /** Called when a secondary navigation item is selected. */
  onItemSelect?: (item: NavigationItemData) => void;
  /** Called when the close button is clicked. */
  onClose?: () => void;
  /** Optional system overrides merged by the styled root. */
  sx?: SxProps<Theme>;
}
