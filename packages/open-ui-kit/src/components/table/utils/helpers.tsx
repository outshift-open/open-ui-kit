/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  MRT_Column,
  MRT_ColumnDef,
  MRT_RowData,
  MRT_TableInstance,
} from "material-react-table";
import { Box, IconButton, Stack } from "@mui/material";
import { Tooltip, TooltipSize } from "@/components";
import { InfoCircleOutline } from "@/custom-icons";
import { HeaderTooltipMeta } from "../types";

//  Check rightmost left-pinned column / leftmost right-pinned column
export const isOuterPinnedColumn = <TData extends MRT_RowData>(
  column: MRT_Column<TData>,
  table: MRT_TableInstance<TData>,
) => {
  let isRightmostLeftPinnedColumn = false;
  let isLeftmostRightPinnedColumn = false;
  const pinnedColumns = table.getState().columnPinning;
  if (pinnedColumns.left) {
    const lastLeftPinnedColumn =
      pinnedColumns.left[pinnedColumns.left.length - 1];
    if (column.id === lastLeftPinnedColumn) {
      isRightmostLeftPinnedColumn = true;
    }
  }
  if (pinnedColumns.right) {
    const firstRightPinnedColumn = pinnedColumns.right[0];
    if (column.id === firstRightPinnedColumn) {
      isLeftmostRightPinnedColumn = true;
    }
  }
  return { isRightmostLeftPinnedColumn, isLeftmostRightPinnedColumn };
};

export const parseFromValuesOrFunc = <T, U>(
  fn: ((arg: U) => T) | T | undefined,
  arg: U,
): T | undefined => (fn instanceof Function ? fn(arg) : fn);

// Enhance column headers to optionally show an info tooltip icon.
// Usage: column.meta?.headerTooltip?: React.ReactNode
export const withHeaderHelpTooltips = <
  TData extends MRT_RowData,
  TValue = unknown,
>(
  columns: MRT_ColumnDef<TData, TValue>[],
): MRT_ColumnDef<TData, TValue>[] => {
  return columns.map((col) => {
    const meta = col.meta as HeaderTooltipMeta;
    const hasHeaderTooltip =
      meta?.headerTooltip !== undefined && meta?.headerTooltip !== null;

    const updated: MRT_ColumnDef<TData, TValue> = {
      ...col,
    };

    if (hasHeaderTooltip) {
      updated.Header = (
        <Stack direction="row" alignItems="flex-start" gap="2px">
          <Box component="span">{col.header}</Box>
          <Tooltip
            size={TooltipSize.Medium}
            title={meta?.headerTooltip}
            placement="top"
          >
            <IconButton
              sx={{
                color: (theme) => theme.palette.vars.controlIconDefault,
                "&:hover": {
                  color: (theme) => theme.palette.vars.controlIconHover,
                },
              }}
              aria-label="Column info"
            >
              <InfoCircleOutline sx={{ width: "16px", height: "16px" }} />
            </IconButton>
          </Tooltip>
        </Stack>
      );
    }

    return updated;
  });
};
