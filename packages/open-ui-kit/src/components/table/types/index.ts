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

export {
  AtomicTypes,
  ExportProps,
  TableProps,
  TableRow,
  TopToolbarProps,
  TableTitle,
};
