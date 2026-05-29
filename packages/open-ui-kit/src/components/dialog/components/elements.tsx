/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogActionsProps,
  DialogContent as MuiDialogContent,
  DialogContentProps,
  DialogContentText as MuiDialogContentText,
  DialogContentTextProps,
  DialogProps,
  styled,
} from "@mui/material";
import type { ComponentType } from "react";
import { breakpointValues } from "@/theme/style/common";
import {
  darkModeCardLifted,
  lightModeCardLifted,
} from "@/theme/style/color-palette";

export const StyledDialog: ComponentType<DialogProps> = styled(MuiDialog)(
  ({ theme }) => ({
    "& .MuiDialog-paper": {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "24px",
      borderRadius: "8px",
      background: theme.palette.vars.controlBackgroundDefault,
      boxShadow:
        theme.palette.mode === "dark"
          ? darkModeCardLifted
          : lightModeCardLifted,
    },
    "& .MuiDialog-paperWidthMd": {
      maxWidth: breakpointValues.sm,
    },
    "& .MuiDialog-paperWidthLg": {
      maxWidth: breakpointValues.md,
    },
    "& .MuiDialog-paperWidthXl": {
      maxWidth: breakpointValues.lg,
    },
  }),
);

export const StyledDialogContent: ComponentType<DialogContentProps> = styled(
  MuiDialogContent,
)({
  padding: 0,
});

export const StyledDialogActions: ComponentType<DialogActionsProps> = styled(
  MuiDialogActions,
)({
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "16px",
  padding: "8px 0 0",
});

export const StyledDialogContentText: ComponentType<DialogContentTextProps> =
  styled(MuiDialogContentText)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.vars.baseTextDefault,
  }));
