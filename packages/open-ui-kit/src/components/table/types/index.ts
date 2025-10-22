/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { MRT_TableOptions, MRT_RowData, MRT_Cell } from "material-react-table";
import { ReactNode } from "react";
import { TypographyVariant } from "@mui/material/styles/createTypography";
import { EmptyStateProps } from "@/components";

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

interface TableProps<TData extends MRT_RowData>
  extends MRT_TableOptions<TData> {
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

export {
  AtomicTypes,
  ExportProps,
  TableProps,
  TableRow,
  TopToolbarProps,
  TableTitle,
  HeaderTooltipMeta,
};
