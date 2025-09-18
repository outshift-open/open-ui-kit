/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
