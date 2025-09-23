/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const dividerComponent = (theme: Theme): Components => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          "&.MuiDivider-root": {
            background: theme.palette.vars.controlBorderDefault,
            border: "none",
          },
        },
      },
      variants: [
        {
          props: { orientation: "horizontal" },
          style: {
            height: "1px",
          },
        },
        {
          props: { orientation: "vertical" },
          style: {
            width: "1px",
          },
        },
        {
          props: { variant: "bold", orientation: "horizontal" },
          style: {
            height: "2px",
          },
        },
        {
          props: { variant: "bold", orientation: "vertical" },
          style: {
            width: "2px",
          },
        },
      ],
    },
  };
};
