/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { PaginationItem } from "@mui/material";
import { SkipNextOutlined, SkipPreviousOutlined } from "@mui/icons-material";
import { StyledPagination } from "./elements";
import type { PaginationProps } from "../types";

export type { PaginationProps };

export const Pagination = (props: PaginationProps) => {
  return (
    <StyledPagination
      renderItem={(item) => (
        <PaginationItem
          slots={{ first: SkipPreviousOutlined, last: SkipNextOutlined }}
          {...item}
        />
      )}
      {...props}
    />
  );
};
