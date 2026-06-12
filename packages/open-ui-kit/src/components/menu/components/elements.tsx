/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ListSubheader,
  MenuItem as MuiMenuItem,
  styled,
  type ListSubheaderProps,
  type MenuItemProps as MuiMenuItemProps,
} from "@mui/material";
import type { ComponentType } from "react";
import { getMenuItemStyles, getMenuSubheaderStyles } from "../styles";
import type { MenuItemSize } from "../types";

export const StyledMenuItem = styled(MuiMenuItem, {
  shouldForwardProp: (prop) => prop !== "sizeVariant" && prop !== "destructive",
})<{
  sizeVariant: MenuItemSize;
  destructive?: boolean;
}>(({ theme, sizeVariant, destructive }) =>
  getMenuItemStyles(theme, sizeVariant, destructive),
) as ComponentType<
  MuiMenuItemProps & { sizeVariant: MenuItemSize; destructive?: boolean }
>;

export const StyledMenuSubheader = styled(ListSubheader)(({ theme }) =>
  getMenuSubheaderStyles(theme),
) as ComponentType<ListSubheaderProps>;
