/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  BoxProps,
  TabProps as MuiTabProps,
  TabsProps as MuiTabsProps,
} from "@mui/material";

export type TabsType = "main" | "subTab" | "toggleTab";

export interface TabsProps extends MuiTabsProps {
  /** Selects the visual tab family: primary page tabs, secondary subtabs, or segmented toggle tabs. */
  type?: TabsType;
  /** Props applied to the outer wrapper around the MUI Tabs element. */
  boxProps?: BoxProps;
}

export interface TabProps extends MuiTabProps {
  /** Shows a leading spinner while preserving the tab label. */
  loading?: boolean;
  /** Internal visual type inherited from the parent Tabs component. */
  type?: TabsType;
}
