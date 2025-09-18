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

import { styled } from "@mui/material";
import { Pagination } from "@mui/material";

export const SytledPagination = styled(Pagination)(({ theme, variant }) => ({
  "& .MuiPaginationItem-root": {
    ...theme.typography.body2,
    "&:hover": {
      backgroundColor: theme.palette.vars.controlBorderStrong,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.vars.interactivePrimaryDefaultActive,
      color: theme.palette.vars.baseTextInverse,
    },
    "&.Mui-disabled": {
      backgroundColor: "transparent !important",
    },
  },
  ...(variant === "outlined" && {
    "& .MuiPaginationItem-root": {
      ...theme.typography.body2,
      backgroundColor: "transparent",
      border: `1px solid ${theme.palette.vars.controlBorderStrong}`,
      "&:hover": {
        backgroundColor: theme.palette.vars.controlBorderStrong,
      },
      "&.Mui-selected": {
        backgroundColor: theme.palette.vars.interactivePrimaryDefaultActive,
        color: theme.palette.vars.baseTextInverse,
        border: `1px solid ${theme.palette.vars.interactivePrimaryDefaultActive}`,
      },
    },
  }),
}));
