/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";
import { breakpointValues } from "@/theme/style/common";

export const dialogComponent = (theme: Theme): Components => {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "8px",
          background: theme.palette.vars.controlBackgroundDefault,
          padding: "24px",
          boxShadow: "0px 4px 4px rgba(200, 213, 245, 0.33)",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          "&.MuiDialog-paperWidthMd": {
            maxWidth: breakpointValues.sm,
          },
          "&.MuiDialog-paperWidthLg": {
            maxWidth: breakpointValues.md,
          },
          "&.MuiDialog-paperWidthXl": {
            maxWidth: breakpointValues.lg,
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "8px 0 0 0",
          gap: "16px",
          justifyContent: "flex-end",
          alignItems: "center",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
          color: theme.palette.vars.baseTextDefault,
        },
      },
    },
  };
};
