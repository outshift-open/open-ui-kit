/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PaginationProps as MuiPaginationProps,
  PaginationItem,
} from "@mui/material";
import { SytledPagination } from "./elements";
import { SkipNextOutlined, SkipPreviousOutlined } from "@mui/icons-material";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaginationProps extends MuiPaginationProps {}

export const Pagination = (props: PaginationProps) => {
  return (
    <SytledPagination
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
