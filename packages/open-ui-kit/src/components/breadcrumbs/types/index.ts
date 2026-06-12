/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { BreadcrumbsProps as MUIBreadcrumbsProps } from "@mui/material";
import type { GeneralSize, IconPosition } from "@/common";
import type { LinkColorEnum, LinkProps, LinkType } from "@/components/link";

export interface BreadcrumbItem {
  /** Optional icon rendered beside the breadcrumb label. */
  Icon?: LinkProps["Icon"];
  /** Visible breadcrumb label. */
  text: string;
  /** Destination for the breadcrumb link. */
  link?: string;
  /** Position of the icon for this breadcrumb item. */
  iconPosition?: IconPosition;
}

export interface BreadcrumbsProps extends MUIBreadcrumbsProps {
  /** Default icon position applied to breadcrumb items with an icon. */
  iconPosition?: IconPosition;
  /** Ordered breadcrumb items from root to current page. */
  items: BreadcrumbItem[];
  /** Link color family used for breadcrumb labels. */
  color?: LinkColorEnum;
  /** Link visual style used for breadcrumb labels. */
  type?: LinkType;
  /** Link size used for breadcrumb labels. */
  size?: GeneralSize;
  /** Maximum number of visible breadcrumbs before middle items move into the collapsed menu. */
  maximumNumberOfVisibleBreadcrumbs?: number;
}
