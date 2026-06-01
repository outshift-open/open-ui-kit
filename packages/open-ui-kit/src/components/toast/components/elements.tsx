/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Alert, styled, Theme, type AlertProps } from "@mui/material";
import type { ComponentType } from "react";
import { ToastType } from "../types";
import {
  CheckCircleOutline,
  ErrorOutline,
  InfoOutline,
  WarningAmberOutlined,
} from "@mui/icons-material";

const customIconStyle = {
  margin: 0,
  padding: 0,
  marginTop: "2px",
};

const getStyleByStatus = (type: ToastType, theme: Theme) => {
  switch (type) {
    case "error":
      return {
        border: `1px solid ${theme.palette.vars.negativeBorderDefault}`,
        borderLeftWidth: "4px",
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.negativeIconDefault,
        },
      };
    case "warning":
      return {
        border: `1px solid ${theme.palette.vars.severeWarningBorderDefault}`,
        borderLeftWidth: "4px",
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.severeWarningIconDefault,
        },
      };
    case "success":
      return {
        border: `1px solid ${theme.palette.vars.successBorderDefault}`,
        borderLeftWidth: "4px",
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.successIconDefault,
        },
      };
    case "info":
      return {
        border: `1px solid ${theme.palette.vars.infoBorderDefault}`,
        borderLeftWidth: "4px",
        "& .MuiAlert-icon": {
          ...customIconStyle,
          color: theme.palette.vars.infoIconDefault,
        },
      };
    case "default":
      return {};
    default:
      return {};
  }
};

export const StyledToast = styled(Alert, {
  shouldForwardProp: (prop) => prop !== "type",
})<{ type?: ToastType }>(({ theme, type }) => ({
  padding: "12px 16px",
  borderRadius: "4px",
  color: theme.palette.vars.baseTextDefault,
  background: theme.palette.vars.baseBackgroundMedium,
  gap: "8px",
  maxWidth: "390px",
  "& .MuiAlertTitle-root, & .MuiAlert-message": {
    margin: 0,
    padding: 0,
  },
  "& .MuiAlert-action": {
    margin: 0,
    padding: 0,
    marginTop: "-2px",
  },
  ...(type && getStyleByStatus(type, theme)),
})) as ComponentType<AlertProps & { type?: ToastType }>;

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
