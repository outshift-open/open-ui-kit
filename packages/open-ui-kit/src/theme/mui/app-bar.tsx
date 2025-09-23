/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const appBarComponent = (theme: Theme): Components => {
  return {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: theme.palette.vars.baseBackgroundStrong,
        },
        root: {
          paddingBlock: "0.625em",
          paddingInline: "2em",
          elevation: 0,
          borderBottom: `1px solid ${theme.palette.vars.baseBorderDefault}`,
          borderRadius: 0,
        },
      },
    },
  };
};
