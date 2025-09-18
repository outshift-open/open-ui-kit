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

import { type DragEventHandler } from "react";
import IconButton, { type IconButtonProps } from "@mui/material/IconButton";
import { MRT_RowData, MRT_TableInstance } from "material-react-table";
import { parseFromValuesOrFunc } from "@/components/table/utils/helpers";

interface Props<TData extends MRT_RowData> extends IconButtonProps {
  iconButtonProps?: IconButtonProps;
  location?: "column" | "row";
  onDragEnd: DragEventHandler<HTMLButtonElement>;
  onDragStart: DragEventHandler<HTMLButtonElement>;
  table: MRT_TableInstance<TData>;
}

export const GrabHandleButton = <TData extends MRT_RowData>({
  iconButtonProps,
  onDragEnd,
  onDragStart,
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: {
      icons: { DragHandleIcon },
      localization,
    },
  } = table;

  const _iconButtonProps = { ...iconButtonProps, ...rest };

  return (
    <IconButton
      aria-label={_iconButtonProps.title ?? localization.move}
      disableRipple
      draggable="true"
      size="small"
      {..._iconButtonProps}
      onClick={(e) => {
        e.stopPropagation();
        _iconButtonProps?.onClick?.(e);
      }}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      sx={(theme) => ({
        "&:active": {
          cursor: "grabbing",
        },
        "&:hover": {
          color: theme.palette.vars.controlIconHover,
        },
        "&:disabled": {
          color: theme.palette.vars.controlIconDisabled,
          opacity: 1,
        },
        cursor: "grab",
        m: "0 -0.1rem",
        opacity: 1,
        p: "2px",
        transition: "all 150ms ease-in-out",
        color: theme.palette.vars.controlIconDefault,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(parseFromValuesOrFunc(_iconButtonProps?.sx, theme) as any),
      })}
      title={undefined}
    >
      <DragHandleIcon />
    </IconButton>
  );
};
