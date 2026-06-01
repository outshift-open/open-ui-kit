/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { styled, Pagination, type PaginationProps } from "@mui/material";
import type { ComponentType } from "react";

export const StyledPagination = styled(Pagination)(({ theme, variant }) => ({
  "& .MuiPaginationItem-root": {
    ...theme.typography.body2,
    color: theme.palette.vars?.controlIconDefault,
    "&:hover": {
      backgroundColor: theme.palette.vars?.controlBorderStrong,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.vars?.interactivePrimaryDefaultActive,
      color: theme.palette.vars?.baseTextInverse,
    },
    "&.Mui-disabled": {
      backgroundColor: "transparent !important",
    },
  },
  ...(variant === "outlined" && {
    "& .MuiPaginationItem-root": {
      ...theme.typography.body2,
      color: theme.palette.vars?.controlIconDefault,
      backgroundColor: "transparent",
      border: `1px solid ${theme.palette.vars?.controlBorderStrong}`,
      "&:hover": {
        backgroundColor: theme.palette.vars?.controlBorderStrong,
      },
      "&.Mui-selected": {
        backgroundColor: theme.palette.vars?.interactivePrimaryDefaultActive,
        color: theme.palette.vars?.baseTextInverse,
        border: `1px solid ${theme.palette.vars?.interactivePrimaryDefaultActive}`,
      },
    },
  }),
})) as ComponentType<PaginationProps>;
