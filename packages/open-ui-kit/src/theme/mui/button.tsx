/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const buttonComponent = (theme: Theme): Components => {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: "primary",
        color: "default",
        size: "medium",
      },
    },
    // No local IconButton wrapper exists yet; keep primitive-level defaults here.
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
      variants: [
        {
          props: { color: "default" },
          style: {
            color: theme.palette.vars.brandIconPrimaryDefault,
          },
        },
      ],
    },
  };
};
