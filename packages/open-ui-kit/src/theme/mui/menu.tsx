/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const menuComponent = (theme: Theme): Components => {
  return {
    MuiMenu: {
      defaultProps: {
        elevation: 4,
      },
      styleOverrides: {
        paper: {
          backgroundImage: "none",
          backgroundColor: theme.palette.vars.controlBackgroundWeak,
          padding: "8px 0px",
          borderRadius: "8px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body1,
          padding: "8px 16px",
          minHeight: "40px",
          backgroundColor: theme.palette.vars.controlBackgroundWeak,
          "&:hover, &.MuiMenuItem-root.Mui-selected, &.Mui-selected:hover": {
            backgroundColor: theme.palette.vars.controlBackgroundMedium,
          },
          "&.Mui-selected": {
            color: theme.palette.vars.interactiveSecondaryDefaultActive,
          },
        },
      },
    },
  };
};
