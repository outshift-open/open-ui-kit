/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Breadcrumbs as MuiBreadcrumbs,
  styled,
  type BreadcrumbsProps,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import type { ComponentType } from "react";
import {
  getBreadcrumbsRootStyles,
  getBreadcrumbSeparatorIconStyles,
} from "../styles";

export const StyledBreadcrumbs = styled(MuiBreadcrumbs)(({ theme }) =>
  getBreadcrumbsRootStyles(theme),
) as ComponentType<BreadcrumbsProps>;

export const BreadcrumbSeparator = () => (
  <ChevronRightIcon sx={getBreadcrumbSeparatorIconStyles()} />
);
