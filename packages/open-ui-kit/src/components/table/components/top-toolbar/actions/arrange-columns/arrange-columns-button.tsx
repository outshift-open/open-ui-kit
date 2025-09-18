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
