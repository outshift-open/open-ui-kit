/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const snackbarComponent = (theme: Theme): Components => {
  return {
    MuiSnackbar: {
      styleOverrides: {
        anchorOriginTopRight: {
          right: "16px",
          top: "16px",
        },
        root: {
          "& .MuiSnackbarContent-root": {
            backgroundColor: theme.palette.vars.controlBackgroundDefault,
            backgroundImage: "none",
            color: theme.palette.vars.baseTextDefault,
          },
          "& .MuiButtonBase-root": {
            color: theme.palette.vars.controlIconDefault,
          },
        },
      },
    },
  };
};
