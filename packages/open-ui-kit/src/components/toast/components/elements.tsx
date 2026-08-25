/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Alert, styled, Theme, type AlertProps } from "@mui/material";
import type { ComponentType } from "react";
import { ToastType } from "../types";
import {
  toastGlowStyle,
  toastIconSlotStyle,
  toastMessageSlotStyle,
  toastRootStyle,
} from "../styles";
import {
  CheckCircleOutline,
  ErrorOutline,
  InfoOutline,
  WarningAmberOutlined,
} from "@mui/icons-material";

export const StyledToast = styled(Alert, {
  shouldForwardProp: (prop) =>
    prop !== "type" &&
    prop !== "hasTitle" &&
    prop !== "hasAction" &&
    prop !== "glow",
})<{
  type?: ToastType;
  hasTitle?: boolean;
  hasAction?: boolean;
  glow?: boolean;
}>(({ theme, type, hasTitle, hasAction, glow }) => ({
  ...toastRootStyle(theme as Theme, type, hasTitle, hasAction),
  ...(glow ? toastGlowStyle(theme as Theme, hasTitle) : {}),
  "& .MuiAlertTitle-root, & .MuiAlert-message": {
    margin: 0,
  },
  "& .MuiAlert-icon": {
    ...toastIconSlotStyle(theme as Theme, type),
  },
  "& .MuiAlert-action": {
    display: "none",
  },
  "& .MuiAlert-message": {
    ...toastMessageSlotStyle,
  },
  "& .MuiAlert-icon + .MuiAlert-message": {
    margin: 0,
  },
})) as ComponentType<
  AlertProps & {
    type?: ToastType;
    hasTitle?: boolean;
    hasAction?: boolean;
    glow?: boolean;
  }
>;

export const IconToast = ({ type }: { type?: ToastType }) => {
  switch (type) {
    case "default":
      return null;
    case "warning":
      return <WarningAmberOutlined />;
    case "success":
      return <CheckCircleOutline />;
    case "info":
      return <InfoOutline />;
    case "error":
      return <ErrorOutline />;
    default:
      return null;
  }
};
