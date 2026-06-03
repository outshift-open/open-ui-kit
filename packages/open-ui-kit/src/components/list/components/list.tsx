/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
  ListItemText as MuiListItemText,
  ListItemIcon as MuiListItemIcon,
  ListItemAvatar,
  ListSubheader as MuiListSubheader,
} from "@mui/material";
import type {
  ListProps,
  ListItemProps,
  ListItemButtonProps,
  ListItemTextProps,
  ListItemIconProps,
  ListSubheaderProps,
  SxProps,
  Theme,
} from "@mui/material";

export type {
  ListProps,
  ListItemProps,
  ListItemButtonProps,
  ListItemTextProps,
  ListItemIconProps,
  ListSubheaderProps,
};
export { ListItemAvatar };

const toSxArray = (sx: SxProps<Theme> | undefined) =>
  Array.isArray(sx) ? sx : sx ? [sx] : [];

const commonListItemSx = (theme: Theme) => ({
  ...theme.typography.body1,
  alignItems: "center",
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  color: theme.palette.vars.baseTextDefault,
  minHeight: "40px",
  "&.MuiListItem-dense, &.MuiListItemButton-dense": {
    ...theme.typography.body2,
    minHeight: "36px",
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.vars.controlBackgroundMedium,
    color: theme.palette.vars.interactiveSecondaryDefaultActive,
  },
  "&:hover": {
    backgroundColor: theme.palette.vars.controlBackgroundMedium,
  },
  "&:focus, &:focus-visible, &.Mui-focusVisible": {
    backgroundColor: theme.palette.vars.controlBackgroundMedium,
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.vars.controlBackgroundDisabled,
    color: theme.palette.vars.baseTextWeak,
  },
});

export const List = ({ disablePadding = true, ...props }: ListProps) => (
  <MuiList disablePadding={disablePadding} {...props} />
);

export const ListItem = ({ sx, ...props }: ListItemProps) => (
  <MuiListItem sx={[commonListItemSx, ...toSxArray(sx)]} {...props} />
);

export const ListItemButton = ({ sx, ...props }: ListItemButtonProps) => (
  <MuiListItemButton sx={[commonListItemSx, ...toSxArray(sx)]} {...props} />
);

export const ListItemIcon = ({ sx, ...props }: ListItemIconProps) => (
  <MuiListItemIcon
    sx={[
      {
        marginRight: "8px",
        minWidth: "24px",
      },
      ...toSxArray(sx),
    ]}
    {...props}
  />
);

export const ListSubheader = ({ sx, ...props }: ListSubheaderProps) => (
  <MuiListSubheader
    sx={[
      (theme) => ({
        color: theme.palette.vars.baseTextWeak,
      }),
      ...toSxArray(sx),
    ]}
    {...props}
  />
);

export const ListItemText = ({ sx, ...props }: ListItemTextProps) => (
  <MuiListItemText
    sx={[
      (theme) => ({
        "& .MuiListItemText-secondary": {
          color: theme.palette.vars.baseTextWeak,
        },
      }),
      ...toSxArray(sx),
    ]}
    {...props}
  />
);
