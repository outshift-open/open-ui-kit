/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  DialogActionsProps as MuiDialogActionsProps,
  DialogContentProps as MuiDialogContentProps,
  DialogContentTextProps as MuiDialogContentTextProps,
  DialogProps as MuiDialogProps,
  TypographyProps,
} from "@mui/material";

/** Props for the modal dialog surface. */
export type DialogProps = MuiDialogProps;

/** Props for the dialog title text. */
export type DialogTitleProps = TypographyProps;

/** Props for the optional subtitle displayed below the dialog title. */
export type DialogSubtitleProps = TypographyProps;

/** Props for the main dialog content region. */
export type DialogContentProps = MuiDialogContentProps;

/** Props for descriptive body text inside dialog content. */
export type DialogContentTextProps = MuiDialogContentTextProps;

/** Props for the dialog action row, usually containing cancel and primary action buttons. */
export type DialogActionsProps = MuiDialogActionsProps;
