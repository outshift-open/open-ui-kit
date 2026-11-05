/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  MRT_Cell,
  MRT_ColumnDef,
  MRT_ColumnPinningState,
  MRT_PaginationState,
  MRT_Row,
  MRT_RowData,
  MRT_RowSelectionState,
  MRT_SortingState,
  MRT_TableInstance,
  MRT_TableOptions,
  MRT_VisibilityState,
} from "material-react-table";
import { ReactNode } from "react";
import type { TypographyVariant } from "@mui/material/styles";
import type { EmptyStateProps } from "@/components/empty-state";

interface ExportProps {
  enableExport?: boolean;
  onClickExportJson?: (props: {
    setSuccess: (message?: string) => void;
    setError(message?: string): void;
  }) => void;
  onClickExportCsv?: (props: {
    setSuccess: (message?: string) => void;
    setError(message?: string): void;
  }) => void;
}

interface TopToolbarProps {
  enableActions?: boolean;
  export?: ExportProps;
  enableArrangeColumns?: boolean;
  onReload?: () => void;
}

interface TableTitle {
  label: string;
  count?: number;
  variant?: TypographyVariant;
  color?: string;
  showSelected?: boolean;
}

interface RowData<TData extends MRT_RowData> {
  cell: MRT_Cell<TData, unknown>;
  renderedCellValue: React.ReactNode;
}

interface TableProps<
  TData extends MRT_RowData,
> extends MRT_TableOptions<TData> {
  isLoading?: boolean;
  manualPagination?: boolean;
  manualSorting?: boolean;
  numOfRows?: number;
  densityCompact?: boolean;
  enableExpandAll?: boolean;
  enableExpanding?: boolean;
  enableTopToolbar?: boolean;
  topToolbarProps?: TopToolbarProps;
  title?: TableTitle;
  titleExtension?: ReactNode;
  initialPageIndex?: number;
  initialPageSize?: number;
  rowsPerPageOptions?: number[];
  emptyStateProps?: EmptyStateProps;
  onRowLinkClick?: (rowData: RowData<TData>) => unknown;
}

type AtomicTypes = string | number | boolean | null | undefined;

interface TableRow {
  [key: string]: AtomicTypes | AtomicTypes[] | ReactNode;
  subRows?: ReactNode;
}

interface HeaderTooltipMeta {
  headerTooltip?: ReactNode;
}

/**
 * Kit-named aliases for the table state and model types that surface through
 * `TableProps` (which extends the underlying table library's options), so
 * consumers don't need to depend on the library's own type names.
 */

/** Sorting state: an ordered list of `{ id, desc }` entries. */
type TableSortingState = MRT_SortingState;

/** Row selection state: a map of row id to selected flag. */
type TableRowSelectionState = MRT_RowSelectionState;

/** Column visibility state: a map of column id to visible flag. */
type TableVisibilityState = MRT_VisibilityState;

/** Pagination state: `{ pageIndex, pageSize }`. */
type TablePaginationState = MRT_PaginationState;

/** Column pinning state: `{ left, right }` lists of column ids. */
type TableColumnPinningState = MRT_ColumnPinningState;

/** Column definition for a table with row type `TData`. */
type TableColumnDef<
  TData extends MRT_RowData,
  TValue = unknown,
> = MRT_ColumnDef<TData, TValue>;

/** A row instance, as passed to row-level render props and callbacks. */
type TableRowModel<TData extends MRT_RowData> = MRT_Row<TData>;

/** A cell instance, as passed to cell-level render props and callbacks. */
type TableCellModel<TData extends MRT_RowData, TValue = unknown> = MRT_Cell<
  TData,
  TValue
>;

/** The table instance returned by `CreateTableInstance`. */
type TableInstance<TData extends MRT_RowData> = MRT_TableInstance<TData>;

export type {
  AtomicTypes,
  ExportProps,
  TableCellModel,
  TableColumnDef,
  TableColumnPinningState,
  TableInstance,
  TablePaginationState,
  TableRowModel,
  TableRowSelectionState,
  TableSortingState,
  TableVisibilityState,
  TableProps,
  TableRow,
  TopToolbarProps,
  TableTitle,
  HeaderTooltipMeta,
};
