/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const listComponent = (theme: Theme): Components => {
  const commonStyle = {
    ...theme.typography.body1,
    color: theme.palette.vars.baseTextDefault,
    backgroundColor: theme.palette.vars.controlBackgroundDefault,
    minHeight: "40px",
    alignItems: "center",
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
      color: theme.palette.vars.baseTextWeak,
      backgroundColor: theme.palette.vars.controlBackgroundDisabled,
    },
  };

  return {
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: commonStyle,
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: commonStyle,
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "24px",
          marginRight: "8px",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: theme.palette.vars.baseTextWeak,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          color: theme.palette.vars.baseTextWeak,
        },
      },
    },
  };
};
