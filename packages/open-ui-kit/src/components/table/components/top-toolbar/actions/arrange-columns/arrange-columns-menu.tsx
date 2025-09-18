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

import { useMemo, useState } from "react";
import Divider from "@mui/material/Divider";
import Menu, { type MenuProps } from "@mui/material/Menu";
import {
  type MRT_Column,
  type MRT_RowData,
  type MRT_TableInstance,
} from "material-react-table";
import { Typography, Stack } from "@mui/material";
import { actionMenuStyle } from "../../styles";
import { ArrangeColumnsMenuItem } from "./arrange-columns-menu-items";

interface Props<TData extends MRT_RowData> extends Partial<MenuProps> {
  anchorEl: HTMLElement | null;
  isSubMenu?: boolean;
  setAnchorEl: (anchorEl: HTMLElement | null) => void;
  table: MRT_TableInstance<TData>;
}

export const ShowHideColumnsMenu = <TData extends MRT_RowData>({
  anchorEl,
  setAnchorEl,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getAllColumns,
    getCenterLeafColumns,
    getLeftLeafColumns,
    getRightLeafColumns,
    getState,
  } = table;
  const { columnOrder, density } = getState();

  const allColumns = useMemo(() => {
    const columns = getAllColumns();
    if (
      columnOrder.length > 0 &&
      !columns.some((col) => col.columnDef.columnDefType === "group")
    ) {
      return [
        ...getLeftLeafColumns(),
        ...Array.from(new Set(columnOrder)).map((colId) =>
          getCenterLeafColumns().find((col) => col?.id === colId),
        ),
        ...getRightLeafColumns(),
      ].filter(Boolean);
    }
    return columns;
  }, [
    columnOrder,
    getAllColumns,
    getCenterLeafColumns,
    getLeftLeafColumns,
    getRightLeafColumns,
  ]) as MRT_Column<TData>[];

  const [hoveredColumn, setHoveredColumn] = useState<MRT_Column<TData> | null>(
    null,
  );

  return (
    <Menu
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      MenuListProps={{
        dense: density === "compact",
      }}
      PaperProps={{ sx: actionMenuStyle }}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      open={!!anchorEl}
      {...rest}
    >
      <Stack p="0px 16px 8px 16px">
        <Typography variant="button">Arrange columns</Typography>
      </Stack>
      <Divider sx={{ marginBottom: "8px" }} />
      {allColumns.map((column, index) => (
        <ArrangeColumnsMenuItem
          allColumns={allColumns}
          column={column}
          hoveredColumn={hoveredColumn}
          key={`${index}-${column.id}`}
          setHoveredColumn={setHoveredColumn}
          table={table}
        />
      ))}
    </Menu>
  );
};
