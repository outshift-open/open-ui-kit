/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { type MouseEvent, useState } from "react";
import IconButton, { type IconButtonProps } from "@mui/material/IconButton";
import { type MRT_RowData, type MRT_TableInstance } from "material-react-table";
import { Tooltip } from "@/components";
import { ShowHideColumnsMenu } from "./arrange-columns-menu";

interface Props<TData extends MRT_RowData> extends IconButtonProps {
  table: MRT_TableInstance<TData>;
}

export const ArrangeColumnsButton = <TData extends MRT_RowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: {
      icons: { ViewColumnIcon },
    },
  } = table;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Tooltip title="Arrange Columns">
        <IconButton onClick={handleClick} {...rest}>
          <ViewColumnIcon />
        </IconButton>
      </Tooltip>
      {anchorEl && (
        <ShowHideColumnsMenu
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          table={table}
        />
      )}
    </>
  );
};
