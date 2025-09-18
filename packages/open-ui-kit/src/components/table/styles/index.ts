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

import { Theme } from "@mui/material";
import { isOuterPinnedColumn } from "../utils/helpers";
import {
  MRT_Column,
  MRT_RowData,
  MRT_TableInstance,
} from "material-react-table";

const tableBorderRadius = 8;
const tableComfortCellHeight = 40;
const tableCompactCellHeight = 32;
const subTablePadding = 16;

const setBorder = (isPinned = true, theme: Theme) =>
  isPinned ? `1px solid ${theme.palette.vars.controlBorderDefault}` : "none";

const commonCellStyles = <TData extends MRT_RowData>(
  column: MRT_Column<TData>,
  table: MRT_TableInstance<TData>,
  theme: Theme,
) => {
  const { isRightmostLeftPinnedColumn, isLeftmostRightPinnedColumn } =
    isOuterPinnedColumn(column, table);

  return {
    color: theme.palette.vars.baseTextStrong,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderLeft: setBorder(isLeftmostRightPinnedColumn, theme),
    borderRight: setBorder(isRightmostLeftPinnedColumn, theme),
    borderBottom: setBorder(true, theme),
    backgroundColor: column.getIsPinned()
      ? theme.palette.vars.controlBackgroundMedium
      : theme.palette.vars.controlBackgroundDefault,
    ".MuiBox-root": {
      whiteSpace: "nowrap",
    },
    padding: ["mrt-row-expand", "actions", "mrt-row-select"].includes(column.id)
      ? "0 8px"
      : "0px 16px",
  };
};

const commonHeaderStyles = (theme: Theme) => ({
  paddingTop: 0,
  paddingBottom: 0,
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  "& .Mui-TableHeadCell-Content": {
    margin: "auto",
  },
  "& .MuiTableSortLabel-root": {
    "& .MuiTableSortLabel-icon": {
      color: `${theme.palette.vars.controlIconDefault} !important`,
      "&:hover": {
        color: `${theme.palette.vars.controlIconHover} !important`,
      },
    },
  },
  "& .Mui-TableHeadCell-ResizeHandle-Divider": {
    borderLeftWidth: "1px",
    borderRightWidth: "0px",
  },
});

const commonTableStyles = (theme: Theme) => ({
  tableBottomToolbarStyle: {
    backgroundColor: "transparent",
    minHeight: "48px",
    "> .MuiBox-root": {
      paddingBottom: 0,
      paddingTop: "16px",
      height: "48px",
    },
    "& .MuiTablePagination-root": {
      paddingTop: "0",
      paddingBottom: "0",
    },
  },
  checkBoxStyle: {
    width: "24px",
    height: "24px",
    margin: "0 auto",
  },
  expandButtonStyle: {
    width: "20px",
    height: "20px",
  },
  tableDetailsStyle: {
    "&:has(.MuiCollapse-root)": {
      padding: `${subTablePadding}px`,
      backgroundColor: theme.palette.vars.controlBackgroundWeak,
      borderBottom: "unset",
    },
    "& .MuiCollapse-root": {
      width: "100%",
    },
  },
  tablePaperStyle: {
    backgroundColor: "transparent",
  },
  tableContainerStyle: {
    borderRadius: `${tableBorderRadius}px`,
  },
  tableBodyStyle: () => {
    const notSelectedOrPinned = `tr:not([data-selected="true"]):not([column-pinned="true"]):not([data-pinned="true"]):not(.Mui-TableBodyCell-DetailPanel)`;

    const styles: Record<string, { backgroundColor: string }> = {
      // Row backgroundColor when it is hovered, not selected, and not pinned.
      [`& ${notSelectedOrPinned}:hover > td`]: {
        backgroundColor: theme.palette.vars.controlBackgroundMedium,
      },
      // Row backgroundColor when it is selected, not pinned, and not a detail panel.
      '& tr[data-selected="true"]:not([data-pinned="true"]):not(.Mui-TableBodyCell-DetailPanel) > td':
        {
          backgroundColor: theme.palette.vars.controlBackgroundWeak,
        },
    };

    return styles;
  },
});

export const tableComfortStyles = (theme: Theme) => ({
  columnHeaderStyle: <TData extends MRT_RowData>(
    column: MRT_Column<TData>,
    table: MRT_TableInstance<TData>,
  ) => {
    return {
      ...commonCellStyles(column, table, theme),
      ...commonHeaderStyles(theme),
      ...theme.typography.subtitle1,
      fontWeight: 600,
      height: `${tableComfortCellHeight}px`,
    };
  },
  bodyCellStyle: <TData extends MRT_RowData>(
    column: MRT_Column<TData>,
    table: MRT_TableInstance<TData>,
  ) => {
    return {
      ...commonCellStyles(column, table, theme),
      ...theme.typography.body1,
      height: `${tableComfortCellHeight}px`,
    };
  },
  ...commonTableStyles(theme),
});

export const tableCompactStyles = (theme: Theme) => ({
  ...commonTableStyles(theme),
  columnHeaderStyle: <TData extends MRT_RowData>(
    column: MRT_Column<TData>,
    table: MRT_TableInstance<TData>,
  ) => {
    return {
      ...commonCellStyles(column, table, theme),
      ...commonHeaderStyles(theme),
      ...theme.typography.subtitle2,
      fontWeight: 600,
      paddingTop: "6px",
      paddingBottom: "6px",
      height: `${tableCompactCellHeight}px`,
    };
  },
  bodyCellStyle: <TData extends MRT_RowData>(
    column: MRT_Column<TData>,
    table: MRT_TableInstance<TData>,
  ) => {
    return {
      ...commonCellStyles(column, table, theme),
      ...theme.typography.body2,
      "&:has(.MuiCollapse-root)": {
        backgroundColor: theme.palette.vars.controlBackgroundDefault,
      },
      alignItems: "center",
      alignSelf: "stretch",
      height: `${tableCompactCellHeight}px`,
    };
  },
});
