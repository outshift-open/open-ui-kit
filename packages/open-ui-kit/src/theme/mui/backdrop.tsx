/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, type Theme } from "@mui/material";
import { surfaceDarkPalette } from "@/theme/style/color-palette";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const backdropComponent = (_theme: Theme): Components => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: `${surfaceDarkPalette[900]}80`,
          "&.MuiBackdrop-invisible": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  };
};
