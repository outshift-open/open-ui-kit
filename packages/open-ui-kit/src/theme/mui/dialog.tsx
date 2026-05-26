/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Dialog paper `maxWidth` presets vs layout breakpoints
 * -------------------------------------------------------
 * MUI’s `maxWidth` string is a **dialog content-size preset**, not `theme.breakpoints.*`.
 * We map three presets to `breakpointValues` pixel widths so modals stay readable; the
 * **preset label** (md / lg / xl) does **not** match the **token key** (sm / md / lg).
 *
 * | MUI `maxWidth` | Paper `maxWidth` (px) | `breakpointValues` key | Same name as layout breakpoint? |
 * |----------------|----------------------:|------------------------|--------------------------------|
 * | `xs`           | *(MUI default)*      | —                      | —                              |
 * | `sm`           | *(MUI default)*      | —                      | —                              |
 * | `md`           | 600                   | `sm`                   | **No**                         |
 * | `lg`           | 1024                  | `md`                   | **No**                         |
 * | `xl`           | 1440                  | `lg`                   | **No**                         |
 *
 * In Storybook, prefer **S / M / L / XL (content)** in titles, not “layout md/lg”.
 * @see docs/new-breakpoints-branch-changes.md
 */

import { Components, Theme } from "@mui/material";
import { breakpointValues } from "@/theme/style/common";

export const dialogComponent = (theme: Theme): Components => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          background: theme.palette.vars.controlBackgroundDefault,
          padding: "24px",
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
          padding: "24px 0 0 0",
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
