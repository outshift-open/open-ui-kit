/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";
import type { BreadcrumbsProps } from "@/components/breadcrumbs";

export interface PageTitleProps {
  /** Main page heading rendered as the h1. */
  title: ReactNode;
  /** Supporting text rendered below the title row. */
  subtitle?: ReactNode;
  /** Optional image displayed before the title block. */
  image?: ReactNode;
  /** Optional icon displayed before the title block when no image is supplied. */
  icon?: ReactNode;
  /** Optional status tag or badge rendered beside the title. */
  tag?: ReactNode;
  /** Breadcrumb items rendered above the title block. */
  breadcrumbs?: BreadcrumbsProps["items"];
  /** Action controls rendered at the end of the title block. */
  actions?: ReactNode;
  /** Style overrides for the outer title container. Consumer values are applied last. */
  sx?: SxProps<Theme>;
}
