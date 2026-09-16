/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Components } from "@mui/material";

export const svgIconComponent = (): Components => ({
  MuiSvgIcon: {
    styleOverrides: {
      fontSizeSmall: {
        fontSize: "20px",
      },
      fontSizeMedium: {
        fontSize: "24px",
      },
      fontSizeLarge: {
        fontSize: "32px",
      },
    },
    variants: [
      {
        props: { fontSize: "base" },
        style: {
          fontSize: "16px",
        },
      },
    ],
  },
});
