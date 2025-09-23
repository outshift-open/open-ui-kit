/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";
import { checkboxStyle } from "@/common";

export const checkboxComponent = (theme: Theme): Components => {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          ...checkboxStyle,
          color: theme.palette.vars.controlIconDefault, // unchecked color
          "&.Mui-disabled": {
            color: theme.palette.vars.controlIconDisabled,
          },
        },
      },
    },
  };
};
