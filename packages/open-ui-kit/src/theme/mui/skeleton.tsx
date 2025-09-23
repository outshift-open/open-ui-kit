/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const skeletonComponent = (theme: Theme): Components => {
  return {
    MuiSkeleton: {
      styleOverrides: {
        wave: {
          backgroundColor: theme.palette.vars.baseBackgroundWeak,
          "&::after": {
            background: `linear-gradient(90deg, transparent, ${theme.palette.vars.controlBorderWeak}, transparent)`,
          },
        },
      },
    },
  };
};
