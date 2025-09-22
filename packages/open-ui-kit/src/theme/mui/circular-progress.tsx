/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const circularProgressComponent = (theme: Theme): Components => {
  return {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          "&.MuiCircularProgress-colorPrimary": {
            "& .MuiCircularProgress-circle": {
              color: theme.palette.vars.interactivePrimaryDefaultDefault,
            },
          },
          "&.MuiCircularProgress-colorSecondary": {
            "& .MuiCircularProgress-circle": {
              color: theme.palette.vars.interactiveSecondaryDefaultDefault,
            },
          },
        },
      },
    },
  };
};
