/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import type { MessageType } from "../types";

export const getMessageStatusColor = (
  theme: Theme,
  type: MessageType,
): string => {
  if (type === "error") {
    return theme.palette.vars.negativeBorderDefault;
  }

  if (type === "warning") {
    return theme.palette.vars.warningBorderDefault;
  }

  if (type === "info") {
    return theme.palette.vars.infoBorderDefault;
  }

  return theme.palette.vars.successBorderDefault;
};

export const getMessageIconColor = (
  theme: Theme,
  type: MessageType,
): string => {
  if (type === "error") {
    return theme.palette.vars.negativeIconDefault;
  }

  if (type === "warning") {
    return theme.palette.vars.warningIconDefault;
  }

  if (type === "info") {
    return theme.palette.vars.infoIconDefault;
  }

  return theme.palette.vars.successIconDefault;
};

export const getMessageRootStyles = (
  theme: Theme,
  type: MessageType,
  hasTitle: boolean,
  hasAction: boolean,
): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: hasTitle ? "flex-start" : "center",
  width: hasAction ? "480px" : "320px",
  height: "auto",
  padding: "12px 16px",
  gap: "12px",
  background: theme.palette.vars.controlBackgroundDefault,
  borderStyle: "solid",
  borderColor: getMessageStatusColor(theme, type),
  borderWidth: "1px 1px 1px 4px",
  borderRadius: "4px",
  color: theme.palette.vars.baseTextDefault,
});

export const getMessageIconStyles = (
  theme: Theme,
  type: MessageType,
): CSSObject => ({
  color: getMessageIconColor(theme, type),
  flex: "0 0 auto",
  width: "24px",
  height: "24px",
});

export const getMessageContentStyles = (
  hasTitle: boolean,
  hasAction: boolean,
): CSSObject => ({
  display: "flex",
  flexDirection: hasTitle ? "column" : "row",
  alignItems: hasTitle ? "flex-start" : "center",
  flex: "1 1 auto",
  minWidth: 0,
  width: "stretch",
  gap: hasTitle ? "4px" : "16px",
  ...(hasAction ? { paddingRight: "8px" } : {}),
});

export const getMessageTitleRowStyles = (): CSSObject => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flex: "1 1 auto",
  width: "stretch",
  height: "24px",
  gap: "4px",
});

export const getMessageTitleStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.body1Semibold,
  flex: "1 1 auto",
  color: theme.palette.vars.baseTextStrong,
  margin: 0,
});

export const getMessageTextStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.body2,
  color: theme.palette.vars.baseTextDefault,
  margin: 0,
});

export const getMessageActionStyles = (theme: Theme): CSSObject => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "125%",
  color: theme.palette.vars.interactivePrimaryDefaultDefault,
  background: "transparent",
  border: 0,
  padding: 0,
  margin: 0,
  cursor: "pointer",
  flex: "0 0 auto",
  "&:hover": {
    color: theme.palette.vars.interactivePrimaryDefaultHover,
  },
  "&:active": {
    color: theme.palette.vars.interactivePrimaryDefaultActive,
  },
});

export const getMessageCloseStyles = (theme: Theme): CSSObject => ({
  color: theme.palette.vars.controlIconDefault,
  width: "24px",
  height: "24px",
  padding: 0,
  flex: "0 0 auto",
  "&:hover": {
    background: "transparent",
    color: theme.palette.vars.controlIconHover,
  },
});
