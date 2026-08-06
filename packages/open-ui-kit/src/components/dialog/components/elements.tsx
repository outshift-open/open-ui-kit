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
import {
  darkModeCardLifted,
  lightModeCardLifted,
} from "@/theme/style/color-palette";

const dialogMaxWidth = "calc(100vw - 80px)";

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
    "& .MuiDialog-paperWidthSm": {
      width: "480px",
      maxWidth: dialogMaxWidth,
    },
    "& .MuiDialog-paperWidthMd": {
      width: "720px",
      maxWidth: dialogMaxWidth,
    },
    "& .MuiDialog-paperWidthLg": {
      width: "1200px",
      maxWidth: dialogMaxWidth,
    },
    "& .MuiDialog-paperWidthXl": {
      width: "1200px",
      maxWidth: dialogMaxWidth,
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
  alignItems: "flex-end",
  justifyContent: "flex-end",
  gap: "16px",
  padding: "8px 0 0",
});

export const StyledDialogContentText: ComponentType<DialogContentTextProps> =
  styled(MuiDialogContentText)(({ theme }) => ({
    ...theme.typography.body2,
    // MUI injects color="textSecondary" as a system prop whose styles are
    // emitted after this override; the doubled selector outranks it.
    "&&": {
      color: theme.palette.vars.baseTextDefault,
    },
  }));
