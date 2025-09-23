/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  MRT_Column,
  MRT_RowData,
  MRT_TableInstance,
} from "material-react-table";

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
