/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import Menu, { type MenuProps } from "@mui/material/Menu";
import { type MRT_RowData, type MRT_TableInstance } from "material-react-table";
import { MenuItem, Typography } from "@mui/material";
import { actionMenuStyle } from "../../styles";

interface Props<TData extends MRT_RowData> extends Partial<MenuProps> {
  anchorEl: HTMLElement | null;
  isSubMenu?: boolean;
  setAnchorEl: (anchorEl: HTMLElement | null) => void;
  table: MRT_TableInstance<TData>;
  onClickExportCsv?: () => void;
  onClickExportJson?: () => void;
}

const ExportTableMenu = <TData extends MRT_RowData>({
  anchorEl,
  setAnchorEl,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  table, // For future use - remove if implemented buttons and not needed
  onClickExportCsv = undefined,
  onClickExportJson = undefined,
  ...rest
}: Props<TData>) => {
  return (
    <Menu
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      open={!!anchorEl}
      PaperProps={{ sx: actionMenuStyle }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      {...rest}
    >
      <MenuItem onClick={onClickExportJson}>
        <Typography variant="body2">JSON</Typography>
      </MenuItem>
      <MenuItem onClick={onClickExportCsv}>
        <Typography variant="body2">CSV</Typography>
      </MenuItem>
    </Menu>
  );
};

export default ExportTableMenu;
