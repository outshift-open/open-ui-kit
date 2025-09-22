/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const popoverComponent = (theme: Theme): Components => {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          background: theme.palette.vars?.controlBackgroundWeak,
          border: `2px solid ${theme.palette.vars?.controlBorderActive}`,
          borderRadius: "4px",
        },
      },
    },
  };
};
