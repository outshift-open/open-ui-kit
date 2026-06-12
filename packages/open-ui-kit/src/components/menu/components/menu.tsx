/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu as MuiMenu, type Theme } from "@mui/material";
import { getMenuPaperStyles } from "../styles";
import type { MenuProps } from "../types";

const toSxArray = (sx: MenuProps["sx"]) =>
  Array.isArray(sx) ? sx : sx ? [sx] : [];

export const Menu = ({
  elevation = 4,
  slotProps,
  width,
  ...props
}: MenuProps) => {
  const paperSlotProps = slotProps?.paper ?? {};
  const { sx: paperSx, ...restPaperSlotProps } =
    typeof paperSlotProps === "object" && !("ownerState" in paperSlotProps)
      ? paperSlotProps
      : {};

  return (
    <MuiMenu
      elevation={elevation}
      slotProps={{
        ...slotProps,
        paper: {
          ...restPaperSlotProps,
          sx: [
            (theme: Theme) => getMenuPaperStyles(theme, width),
            ...toSxArray(paperSx),
          ],
        },
      }}
      {...props}
    />
  );
};
