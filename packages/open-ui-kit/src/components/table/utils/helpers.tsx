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
