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

import React from "react";
import {
  MoreVert as MoreVertIcon,
  SkipNextOutlined,
  SkipPreviousOutlined,
} from "@mui/icons-material";
import {
  MRT_Cell,
  MRT_RowData,
  MRT_TableInstance,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {
  Drag,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  ManageColumns,
  SkipNext,
  SkipPrevious,
} from "@/custom-icons";
import TopToolbar from "./top-toolbar/top-toolbar";
import { DEFAULT_PAGINATION_OPTIONS } from "../utils/consts";
import { TableFooter } from "./table-footer/table-footer";
import { TableProps } from "../types";
import { tableComfortStyles, tableCompactStyles } from "../styles";
import { Box, PaginationItem, SvgIconProps, useTheme } from "@mui/material";
import { EmptyState, Link, OverflowTooltip, TooltipSize } from "@/components";

/**
 * `Table` Component
 *
 * A customizable table component built on top of `MaterialReactTable`. It provides additional features
 * and configurations to cater to specific use cases, while also allowing for manual control over pagination
 * and sorting.
 *
 * @property {Array} columns - Defines the structure and headers of the table columns.
 * @property {Array} data - The data to be displayed in the table.
 * @property {boolean} [isLoading=true] - Determines if the table is in a loading state.
 * @property {boolean} [manualPagination=false] - If true, pagination is controlled manually outside the table component.
 * @property {boolean} [manualSorting=false] - If true, sorting is controlled manually outside the table component.
 * @property {MRT_PaginationState} [paginationState={ pageIndex: 0, pageSize: 10 }] - Defines the current pagination state of the table.
 * @property {number} [numOfRows=data.length] - Specifies the total number of rows.
 * @property {boolean} [densityCompact=false] - If true, the table uses a compact density for rows.
 * @property {...Object} props - Other properties passed to the component. These are directly passed to the underlying `MaterialReactTable` and can be any valid properties of that library.
 *
 * @returns {ReactElement} A rendered `MaterialReactTable` component with the provided configurations.
 *
 * @example
 * <Table columns={myColumns} data={myData} isLoading={false} />
 */
export const CreateTableInstance = <TData extends MRT_RowData>({
  columns,
  data,
  initialState,
  title,
  titleExtension,
  isLoading = true,
  manualPagination = false,
  manualSorting = false,
  densityCompact = false,
  enableExpandAll = false,
  enableColumnPinning = false,
  enableExpanding = false,
  enableTopToolbar = true,
  topToolbarProps = {},
  onRowLinkClick,
  positionActionsColumn = "last",
  initialPageIndex,
  rowCount,
  initialPageSize,
  rowsPerPageOptions,
  pageCount,
  emptyStateProps,
  ...props
}: TableProps<TData>): MRT_TableInstance<TData> => {
  const theme = useTheme();
  const rowPerPageOptions = rowsPerPageOptions || DEFAULT_PAGINATION_OPTIONS;
  const tableStyles = !densityCompact
    ? { ...tableComfortStyles(theme) }
    : { ...tableCompactStyles(theme) };

  const shouldShowTableFooter = () => {
    if (rowCount !== undefined) return rowCount > rowPerPageOptions[0];
    if (pageCount !== undefined) return pageCount > 1;
    return data.length > rowPerPageOptions[0];
  };

  return useMaterialReactTable({
    renderEmptyRowsFallback: () => (
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.vars.controlBackgroundDefault,
          paddingBottom: 4,
        })}
      >
        <EmptyState {...emptyStateProps} />
      </Box>
    ),
    enablePagination: shouldShowTableFooter(),
    enableBottomToolbar: shouldShowTableFooter(),
    enableRowActions: !!data.length,
    enableFilters: !!data.length,
    enableFullScreenToggle: !!data.length,
    enableHiding: !!data.length,
    columns,
    data,
    enableColumnActions: false,
    enableTopToolbar,
    enableMultiSort: false,
    enableSortingRemoval: true,
    sortDescFirst: true,
    enableDensityToggle: !!data.length,
    initialState: {
      density: densityCompact ? "compact" : "comfortable",
      pagination: {
        pageIndex: initialPageIndex ?? 0,
        pageSize: initialPageSize || rowPerPageOptions[0],
      },
      showLoadingOverlay: false,
      ...initialState,
    },
    enableExpanding: enableExpanding,
    enableExpandAll: enableExpandAll,
    enableColumnPinning: enableColumnPinning,
    displayColumnDefOptions: {
      "mrt-row-expand": {
        header: "",
        size: 45,
      },
      "mrt-row-select": {
        maxSize: 24,
      },
      "mrt-row-actions": {
        header: "",
        muiTableBodyCellProps: {
          align: "right",
        },
        size: 40,
        minSize: 40,
      },
    },
    positionActionsColumn: positionActionsColumn,
    renderDetailPanel: enableExpanding
      ? ({ row }) => row.original.subRows || null
      : undefined,
    paginateExpandedRows: true,
    manualPagination,
    manualSorting,
    autoResetPageIndex: !manualPagination,
    layoutMode: "grid",
    renderTopToolbar: ({ table }) => (
      <TopToolbar
        table={table}
        title={title}
        titleExtension={titleExtension}
        customActions={props.renderToolbarInternalActions}
        isLoading={isLoading}
        {...topToolbarProps}
      />
    ),
    paginationDisplayMode: "pages",
    rowCount,
    defaultColumn: {
      Cell: ({
        cell,
        renderedCellValue,
      }: {
        cell: MRT_Cell<TData, unknown>;
        renderedCellValue: React.ReactNode;
      }) => {
        const fontSettings = {
          ...(densityCompact ? theme.typography.body2 : theme.typography.body1),
        };

        const cellContent =
          typeof renderedCellValue === "string" ? (
            <OverflowTooltip
              size={TooltipSize.Large}
              value={cell.getValue<string>()}
              someLongText={renderedCellValue}
            />
          ) : (
            renderedCellValue
          );

        if (onRowLinkClick) {
          return (
            <Link
              ellipsis
              href={String(onRowLinkClick({ cell, renderedCellValue }))}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: "0 16px",
                textDecoration: "none",
                color: theme.palette.vars.baseTextStrong,
              }}
              fontStyle={fontSettings}
            >
              {cellContent}
            </Link>
          );
        }

        return cellContent;
      },
    },

    ...props,
    icons: {
      ChevronLeftIcon: KeyboardArrowLeft,
      ChevronRightIcon: KeyboardArrowRight,
      FirstPageIcon: SkipPrevious,
      LastPageIcon: SkipNext,
      DragHandleIcon: (props: SvgIconProps) => <Drag {...props} />,
      ViewColumnIcon: ManageColumns,
      ExpandMoreIcon: (props: { style: { transform: string } }) => {
        return (
          <KeyboardArrowRight
            fill={theme.palette.vars.interactiveSecondaryDefaultActive}
            style={{
              transform:
                props.style.transform === "rotate(0deg)"
                  ? "rotate(0deg)"
                  : "rotate(90deg)",
            }}
          />
        );
      },
      MoreHorizIcon: MoreVertIcon,
      ...props.icons,
    },
    // keep the load and skeletons state
    state: { isLoading, showSkeletons: isLoading, ...props.state },
    // keep styles but enable override/add additional props
    muiTablePaperProps: {
      sx: tableStyles.tablePaperStyle,
      elevation: 0,
      ...props.muiTablePaperProps,
    },
    muiTableHeadCellProps: ({ column, table }) => ({
      sx: tableStyles.columnHeaderStyle(column, table),
      ...props.muiTableHeadCellProps,
    }),
    muiTableBodyCellProps: ({ column, table }) => ({
      sx: {
        ...tableStyles.bodyCellStyle(column, table),
        // TODO reuse this borderLeft styling of the first column when we will have a usecase and a design for it
        // ...(columnScoreSeverityKey
        //   ? {
        //       "&:first-of-type": {
        //         borderLeft: `2px solid ${
        //           severityScoreToColorMapper
        //             ? severityScoreToColorMapper(
        //                 row.original[columnScoreSeverityKey],
        //               )
        //             : getHealthScoreColor(row.original[columnScoreSeverityKey])
        //         }`,
        //       },
        //     }
        //   : {}),
      },
      ...props.muiTableBodyCellProps,
    }),
    muiTableBodyRowProps: ({ table, isDetailPanel, staticRowIndex, row }) => {
      //remove border - for row that is not detail panel and  (last line in last page or last line in page )
      const rowSx =
        !isDetailPanel &&
        ((!table.getCanNextPage() &&
          (staticRowIndex + 1) % table.getState().pagination.pageSize ===
            data.length % table.getState().pagination.pageSize) ||
          (staticRowIndex + 1) % table.getState().pagination.pageSize === 0)
          ? {
              "&:not(.Mui-TableBodyCell-DetailPanel)>td": {
                borderBottom: "none",
              },
            }
          : undefined;
      // allow the user pass function or props
      const userRowProps =
        typeof props.muiTableBodyRowProps === "function"
          ? props.muiTableBodyRowProps({
              table,
              isDetailPanel,
              staticRowIndex,
              row,
            })
          : props.muiTableBodyRowProps;
      return {
        ...userRowProps,
        sx: { ...rowSx, ...userRowProps?.sx },
      };
    },
    muiDetailPanelProps: { sx: tableStyles.tableDetailsStyle },
    muiSelectCheckboxProps: {
      sx: tableStyles.checkBoxStyle,
      ...props.muiSelectCheckboxProps,
    },
    muiExpandButtonProps: {
      size: "small",
      // sx: tableStyles.expandButtonStyle,
      ...props.muiExpandButtonProps,
    },
    muiTableBodyProps: () => ({
      sx: tableStyles.tableBodyStyle(),
      ...props.muiTableBodyProps,
    }),
    muiBottomToolbarProps: {
      sx: tableStyles.tableBottomToolbarStyle,
      ...props.muiBottomToolbarProps,
    },
    muiSelectAllCheckboxProps: {
      sx: tableStyles.checkBoxStyle,
      ...props.muiSelectAllCheckboxProps,
    },
    muiTableContainerProps: {
      sx: tableStyles.tableContainerStyle,
      ...props.muiTableContainerProps,
    },
    renderBottomToolbarCustomActions: ({ table }) => (
      <TableFooter
        totalCount={rowCount ?? data.length ?? 0}
        options={rowPerPageOptions}
        onChange={table.setPageSize}
        selectedValue={table.getState().pagination.pageSize}
        pageIndex={table.getState().pagination.pageIndex}
      />
    ),
    muiTableProps: {
      ...props.muiTableProps,
    },
    mrtTheme: () => {
      return {
        baseBackgroundColor: theme.palette.vars.controlBackgroundMedium,
        draggingBorderColor: theme.palette.primary[500],
      };
    },
    muiPaginationProps: {
      rowsPerPageOptions: rowPerPageOptions,
      showRowsPerPage: false,
      renderItem: (item) => (
        <PaginationItem
          {...item}
          slots={{ first: SkipPreviousOutlined, last: SkipNextOutlined }}
          sx={{
            ...theme.typography.body2,
            "&:hover": {
              backgroundColor: theme.palette.vars.controlBorderStrong,
            },
            "&.Mui-selected": {
              backgroundColor:
                theme.palette.vars.interactivePrimaryDefaultActive,
              color: theme.palette.vars.baseTextInverse,
            },
            "&.Mui-disabled": {
              backgroundColor: "transparent !important",
            },
            ...(item.variant === "outlined" && {
              ...theme.typography.body2,
              backgroundColor: "transparent",
              border: `1px solid ${theme.palette.vars.controlBorderStrong}`,
              "&:hover": {
                backgroundColor: theme.palette.vars.controlBorderStrong,
              },
              "&.Mui-selected": {
                backgroundColor:
                  theme.palette.vars.interactivePrimaryDefaultActive,
                color: theme.palette.vars.baseTextInverse,
                border: `1px solid ${theme.palette.vars.interactivePrimaryDefaultActive}`,
              },
            }),
          }}
        />
      ),
      sx: {
        marginLeft: "auto",
      },
      ...props.muiPaginationProps,
    },
  });
};

export const Table = <TData extends MRT_RowData>({
  columns,
  data,
  initialState,
  isLoading = true,
  manualPagination = false,
  manualSorting = false,
  densityCompact = false,
  enableExpandAll = false,
  enableExpanding = false,
  titleExtension,
  ...props
}: TableProps<TData>) => {
  return (
    <MaterialReactTable
      table={CreateTableInstance({
        columns,
        data,
        initialState,
        isLoading,
        manualPagination,
        manualSorting,
        densityCompact,
        enableExpandAll,
        enableExpanding,
        titleExtension,
        ...props,
      })}
    />
  );
};
