/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
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
