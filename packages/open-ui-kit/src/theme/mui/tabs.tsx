/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const tabsComponent = (theme: Theme): Components => {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            backgroundColor:
              theme.palette.vars.interactiveSecondaryDefaultActive,
            height: "3px",
          },
        },
      },
      variants: [
        {
          props: {
            orientation: "horizontal",
          },
          style: {
            borderBottom: `1px solid ${theme.palette.vars.controlBorderStrong}`,
          },
        },
        {
          props: {
            orientation: "vertical",
          },
          style: {
            borderRight: `1px solid ${theme.palette.vars.controlBorderStrong}`,
          },
        },
      ],
    },
  };
};
