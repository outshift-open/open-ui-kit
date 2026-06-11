/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  styled,
  Pagination as MuiPagination,
  type PaginationProps as MuiPaginationProps,
} from "@mui/material";
import type { ComponentType } from "react";
import {
  getPaginationControlStyles,
  getPaginationItemStyles,
  getPaginationOutlinedItemStyles,
  getPaginationRootStyles,
} from "../styles";

export const StyledPagination = styled(MuiPagination)(
  ({ theme, size = "medium" }) => ({
    ...getPaginationRootStyles(),
    "& .MuiPaginationItem-root": {
      ...getPaginationItemStyles(theme, size),
    },
    "& .MuiPaginationItem-outlined": {
      ...getPaginationOutlinedItemStyles(theme),
    },
    "& .MuiPaginationItem-previousNext, & .MuiPaginationItem-firstLast": {
      ...getPaginationControlStyles(theme),
    },
  }),
) as ComponentType<MuiPaginationProps>;
