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

import {
  type Dispatch,
  type DragEvent,
  type SetStateAction,
  useRef,
  useState,
} from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem, { type MenuItemProps } from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {
  type MRT_Column,
  type MRT_RowData,
  type MRT_TableInstance,
  MRT_ColumnPinningButtons,
  reorderColumn,
} from "material-react-table";
import { Checkbox, useTheme } from "@mui/material";
import { GrabHandleButton } from "./grab-handle-button";
import { parseFromValuesOrFunc } from "@/components/table/utils/helpers";

const MENUITEM_INNER_GAP_PX = 8;

interface Props<TData extends MRT_RowData> extends MenuItemProps {
  allColumns: MRT_Column<TData>[];
  column: MRT_Column<TData>;
  hoveredColumn: MRT_Column<TData> | null;
  setHoveredColumn: Dispatch<SetStateAction<MRT_Column<TData> | null>>;
  table: MRT_TableInstance<TData>;
}

export const ArrangeColumnsMenuItem = <TData extends MRT_RowData>({
  allColumns,
  column,
  hoveredColumn,
  setHoveredColumn,
  table,
  ...rest
}: Props<TData>) => {
  const theme = useTheme();

  const {
    getState,
    options: { enableColumnPinning, enableHiding },
    setColumnOrder,
  } = table;
  const { columnOrder } = getState();
  const { columnDef } = column;
  const { columnDefType } = columnDef;

  const switchChecked =
    (columnDefType !== "group" && column.getIsVisible()) ||
    (columnDefType === "group" &&
      column.getLeafColumns().some((col) => col.getIsVisible()));

  const handleToggleColumnHidden = (column: MRT_Column<TData>) => {
    if (columnDefType === "group") {
      column?.columns?.forEach?.((childColumn: MRT_Column<TData>) => {
        childColumn.toggleVisibility(!switchChecked);
      });
    } else {
      column.toggleVisibility();
    }
  };

  const menuItemRef = useRef<HTMLElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: DragEvent<HTMLButtonElement>) => {
    setIsDragging(true);
    e.dataTransfer.setDragImage(menuItemRef.current as HTMLElement, 0, 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setHoveredColumn(null);
    if (hoveredColumn) {
      setColumnOrder(reorderColumn(column, hoveredColumn, columnOrder));
    }
  };

  const handleDragEnter = () => {
    if (!isDragging && columnDef.enableColumnOrdering !== false) {
      setHoveredColumn(column);
    }
  };

  if (!columnDef.header) return null;

  return (
    <>
      <MenuItem
        disableRipple
        onDragEnter={handleDragEnter}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={menuItemRef as any}
        {...rest}
        sx={{
          alignItems: "center",
          alignSelf: "stretch",
          justifyContent: "flex-start",
          opacity: isDragging ? 0.5 : 1,
          outline:
            hoveredColumn?.id === column.id
              ? `2px dashed ${theme.palette.vars.controlBackgroundDefault}`
              : "none",
          outlineOffset: "-2px",
          padding: "8px 16px",
          backgroundColor: theme.palette.vars.controlBackgroundWeak,
          minHeight: "24px",
          ":hover": {
            backgroundColor: theme.palette.vars.controlBackgroundMedium,
            cursor: "default",
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(parseFromValuesOrFunc(rest?.sx, theme) as any),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: `${MENUITEM_INNER_GAP_PX}px`,
          }}
        >
          {columnDefType !== "group" &&
            !allColumns.some(
              (col) => col.columnDef.columnDefType === "group",
            ) && (
              <GrabHandleButton
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
                disabled={columnDef.enableColumnOrdering === false}
                table={table}
                sx={{
                  padding: 0,
                  marginLeft: 0,
                }}
              />
            )}
          {enableColumnPinning &&
            (column.getCanPin() ? (
              <MRT_ColumnPinningButtons column={column} table={table} />
            ) : (
              <Box sx={{ width: "70px" }} />
            ))}
          {enableHiding ? (
            <FormControlLabel
              checked={switchChecked}
              componentsProps={{
                typography: {
                  variant: "body2",
                  sx: {
                    mb: 0,
                    marginLeft: 0,
                    color: `${theme.palette.vars.baseTextDefault} !important`,
                  },
                },
              }}
              control={<Checkbox />}
              disabled={!column.getCanHide()}
              label={columnDef.header}
              onChange={() => handleToggleColumnHidden(column)}
              sx={{
                gap: `${MENUITEM_INNER_GAP_PX}px`,
                marginRight: 0,
                marginLeft: 0,
              }}
            />
          ) : (
            <Typography
              variant="body2"
              sx={{
                alignSelf: "center",
                color: theme.palette.vars.baseTextWeak,
              }}
            >
              {columnDef.header}
            </Typography>
          )}
        </Box>
      </MenuItem>
      {column.columns?.map((c: MRT_Column<TData>, i) => (
        <ArrangeColumnsMenuItem
          allColumns={allColumns}
          column={c}
          hoveredColumn={hoveredColumn}
          key={`${i}-${c.id}`}
          setHoveredColumn={setHoveredColumn}
          table={table}
        />
      ))}
    </>
  );
};
