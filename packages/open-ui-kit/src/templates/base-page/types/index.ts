/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type { BoxProps, TabProps as MuiTabProps } from "@mui/material";
import type { BreadcrumbsProps, TabsProps } from "@/components";

type BasePageContainerProps = BoxProps & {
  [key: `data-${string}`]: string | number | undefined;
};

export type SubNavItem = Omit<MuiTabProps, "value"> & {
  /** Router destination used by the sub-navigation tab. */
  href?: string;
  /** Marks this item as the current page when URL matching is not enough. */
  selected?: boolean;
};

export interface BasePageProps {
  /** Page content rendered below the header and optional sub-navigation. */
  children: ReactNode;
  /** Props applied to the outer page container. Consumer `sx` is merged after internal spacing. */
  containerProps?: BasePageContainerProps;
  /** Breadcrumb items rendered above the page title when breadcrumbs are enabled. */
  breadcrumbs?: BreadcrumbsProps["items"];
  /** Main page title rendered as the heading. */
  title: ReactNode;
  /** Optional supporting text below the title. */
  description?: ReactNode;
  /** Actions or controls rendered on the right side of the header. */
  rightSideItems?: ReactNode;
  /** Props applied to the sub-navigation Tabs component. */
  tabsProps?: TabsProps;
  /** Optional tabbed page navigation rendered below the title area. */
  subNav?: SubNavItem[];
  /** Controls whether breadcrumbs render when breadcrumb items are supplied. */
  useBreadcrumbs?: boolean;
}
