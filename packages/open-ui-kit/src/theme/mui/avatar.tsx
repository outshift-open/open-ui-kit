/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";

export const avatarComponent = (theme: Theme): Components => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#E8F1FF",
          color: theme.palette.vars.interactivePrimaryDefaultDefault,
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "133%",
          letterSpacing: "0.15px",
          textAlign: "center",
          verticalAlign: "middle",
          "&:hover": {
            backgroundColor: theme.palette.vars.interactivePrimaryWeakHover,
            color: theme.palette.vars.controlIconHover,
            cursor: "pointer",
          },
        },
        img: {
          objectFit: "cover",
          width: "100%",
          height: "100%",
          "&:hover": {
            filter: `brightness(0.9) drop-shadow(0 0 4px ${theme.palette.vars.interactivePrimaryWeakDisabled})`,
          },
        },
      },
    },
  };
};
