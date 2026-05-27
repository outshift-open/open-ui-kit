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

export const StyledBreadcrumbs = styled(MuiBreadcrumbs)(({ theme }) => ({
  lineHeight: "20px",
  "& .MuiBreadcrumbs-separator": {
    marginLeft: "4px",
    marginRight: "4px",
  },
  "& .MuiButtonBase-root": {
    backgroundColor: "transparent",
    margin: 0,
    width: "20px",
    height: "20px",
  },
  "& .MuiButtonBase-root:hover": {
    backgroundColor: "initial",
  },
  "& .MuiBreadcrumbs-li, & .MuiBreadcrumbs-li > a": {
    verticalAlign: "middle",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiBreadcrumbs-ol": {
    flexWrap: "nowrap",
    alignItems: "center",
  },
  "& .MuiBreadcrumbs-separator > svg": {
    color: theme.palette.vars.interactiveSecondaryDefaultDefault,
    width: "20px",
    height: "20px",
  },
})) as ComponentType<BreadcrumbsProps>;

export const BreadcrumbSeparator = () => (
  <ChevronRightIcon sx={{ width: "20px", height: "20px" }} />
);
