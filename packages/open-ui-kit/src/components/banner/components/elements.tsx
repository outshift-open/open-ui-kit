/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Alert, styled, type AlertProps } from "@mui/material";
import type { ComponentType } from "react";
import { StatusBanner } from "../types";
import {
  CheckCircleOutline,
  ErrorOutline,
  InfoOutline,
  WarningAmber,
} from "@mui/icons-material";
import { getBannerColors } from "../styles";

export const StyledBanner = styled(Alert, {
  shouldForwardProp: (prop) => prop !== "status",
})<{ status?: StatusBanner }>(({ theme, status }) => ({
  boxSizing: "border-box",
  padding: "8px 4px 8px 12px",
  width: "800px",
  maxWidth: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "16px",
  borderRadius: 0,
  border: `1px solid ${getBannerColors(theme, status).border}`,
  background: getBannerColors(theme, status).background,
  color: getBannerColors(theme, status).text,
  "& .MuiAlert-icon": {
    margin: 0,
    padding: 0,
    width: "24px",
    height: "24px",
    color: getBannerColors(theme, status).icon,
    "& > svg": {
      width: "24px",
      height: "24px",
    },
  },
  "& .MuiAlert-message": {
    margin: 0,
    padding: 0,
    width: "486px",
    maxWidth: "100%",
    height: "auto",
    minWidth: 0,
    color: "inherit",
    "& .MuiTypography-root": {
      color: "inherit",
      height: "auto",
      letterSpacing: "0.15px",
    },
  },
  "& .MuiAlert-action": {
    margin: 0,
    padding: 0,
    width: "24px",
    height: "24px",
    color: theme.palette.vars.controlIconDefault,
  },
})) as ComponentType<AlertProps & { status?: StatusBanner }>;

export const IconBanner = ({ status }: { status?: StatusBanner }) => {
  switch (status) {
    case "negative":
      return <ErrorOutline />;
    case "warning":
      return <WarningAmber />;
    case "success":
      return <CheckCircleOutline />;
    case "info":
      return <InfoOutline />;
    case "excellent":
      return <InfoOutline />;
    default:
      return <InfoOutline />;
  }
};
