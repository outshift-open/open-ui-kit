/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";
import { CSSProperties } from "react";

export const containerStackStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  borderRadius: "6px",
  position: "relative",
});

export const customStyle = (
  theme: Theme,
  showLineNumbers?: boolean,
): CSSProperties => ({
  padding: showLineNumbers ? 0 : "0 16px",
  margin: "0",
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  borderRadius: showLineNumbers ? "0 0 6px 6px" : "6px",
  color: theme.palette.vars.baseTextDefault,
});

export const lineNumberStyle = (
  theme: Theme,
  lineNumberWidth: number,
  showLineNumbers?: boolean,
): CSSProperties => ({
  width: `${lineNumberWidth}px`,
  textAlign: "right",
  paddingRight: "8px",
  paddingLeft: "8px",
  borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  marginRight: showLineNumbers ? "16px" : 0,
  color: theme.palette.vars.baseTextMedium,
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  ...(theme.typography.body1 as CSSProperties),
  minWidth: `${lineNumberWidth}px`,
});

export const separatorFirstBox = (
  theme: Theme,
  lineNumberWidth: number,
): CSSProperties => ({
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  borderRadius: "6px 0 0 6px",
  height: "16px",
  width: `${lineNumberWidth}px`,
  minWidth: "28px",
});

export const separatorSecondBox = (
  theme: Theme,
  showLineNumbers?: boolean,
): CSSProperties => ({
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  paddingTop: showLineNumbers ? "16px" : "8px",
  height: "16px",
});
