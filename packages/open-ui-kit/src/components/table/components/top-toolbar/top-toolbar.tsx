/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { MRT_RowData, MRT_TableInstance } from "material-react-table";
import { ReactNode } from "react";
import {
  titleBoxStyle,
  topToolbarActionStyle,
  topToolbarActionsBoxStyle,
  topToolbarBoxStyle,
  topToolbarTitlesBoxStyle,
} from "./styles";
import ExportTableButton from "./actions/export-table/export-table-button";
import { ArrangeColumnsButton } from "./actions/arrange-columns/arrange-columns-button";
import ReloadTableButton from "./actions/reload-table-button";
import { Box, CircularProgress, Typography } from "@mui/material";
import { TableTitle, TopToolbarProps } from "../../types";

interface TopToolbarInternalProps<TData extends MRT_RowData>
  extends TopToolbarProps {
  title?: TableTitle;
  titleExtension?: ReactNode;
  table: MRT_TableInstance<TData>;
  customActions?: (props: { table: MRT_TableInstance<TData> }) => ReactNode;
  isLoading: boolean;
}

const TopToolbar = <TData extends MRT_RowData>({
  title,
  titleExtension,
  table,
  customActions,
  export: { enableExport = true, onClickExportCsv, onClickExportJson } = {},
  enableActions = true,
  enableArrangeColumns = true,
  onReload,
  isLoading,
  ...rest
}: TopToolbarInternalProps<TData>) => {
  const titleLabelProps = {
    variant: title?.variant || "h6",
    ...(title?.color && { color: title.color }),
  };

  const getTitleCount = () => {
    const nRows = Object.keys(table.getState().rowSelection).length;

    const titleString =
      typeof title?.count !== "undefined" ? `${title.count}` : "";
    const selectedString =
      title?.showSelected && nRows ? `${nRows} Selected / ` : "";

    return `${selectedString}${titleString}`;
  };

  return (
    <Box sx={topToolbarBoxStyle}>
      <Box sx={topToolbarTitlesBoxStyle}>
        {title && (
          <Box sx={titleBoxStyle}>
            {isLoading ? (
              <CircularProgress size={24} />
            ) : (
              <Typography {...titleLabelProps}>{getTitleCount()}</Typography>
            )}
            <Typography {...titleLabelProps}>{title.label}</Typography>
          </Box>
        )}
        {titleExtension && titleExtension}
      </Box>
      {enableActions && (
        <Box sx={topToolbarActionsBoxStyle}>
          {customActions && (
            <div style={topToolbarActionStyle}>{customActions({ table })}</div>
          )}
          {onReload && (
            <ReloadTableButton
              // table={table}
              sx={topToolbarActionStyle}
              onReload={onReload}
              isLoading={isLoading}
            />
          )}
          {enableExport && (
            <ExportTableButton
              table={table}
              sx={topToolbarActionStyle}
              onClickExportCsv={onClickExportCsv}
              onClickExportJson={onClickExportJson}
              {...rest}
            />
          )}
          {enableArrangeColumns && (
            <ArrangeColumnsButton table={table} sx={topToolbarActionStyle} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default TopToolbar;
