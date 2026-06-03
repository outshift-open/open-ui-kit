/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";
import type { BreadcrumbsProps } from "@/components/breadcrumbs";

export interface PageTitleProps {
  title: ReactNode;
  subtitle?: ReactNode;
  image?: ReactNode;
  icon?: ReactNode;
  tag?: ReactNode;
  breadcrumbs?: BreadcrumbsProps["items"];
  actions?: ReactNode;
  sx?: SxProps<Theme>;
}
