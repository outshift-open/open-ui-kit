/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type { HeaderProps } from "@/components";

export interface LayoutProps {
  /** Main page content rendered beside the optional side navigation. */
  content?: ReactNode;
  /** Controls whether the fixed application header is rendered. */
  showHeader?: boolean;
  /** Props forwarded to the Header component. */
  headerProps?: HeaderProps;
  /** Controls whether the side navigation drawer is rendered on desktop. */
  showSideNav?: boolean;
  /** Content rendered inside the desktop side navigation drawer. */
  sideNav?: ReactNode;
}
