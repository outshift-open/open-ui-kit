/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

export const defaultPopperContentStyle = {
  width: "480px",
  maxHeight: "375px",
};

export const selectNodeListItemStyle = {
  gap: "8px",
  justifyContent: "space-between",
  cursor: "pointer",
};

export const iconStyle = {
  width: "24px",
  height: "24px",
};

export const selectNodeStyle = (nestLevel: number) => ({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  padding: 0,
  alignItems: "center",
  gap: "8px",
  alignSelf: "stretch",
  marginLeft: `${32 * nestLevel}px`,
  cursor: "pointer",
  overflow: "hidden",
});

export const overflowTooltipPopperStyle = {
  wordBreak: "break-word",
};

export const searchMatchTextStyle = (theme: Theme) => ({
  color: theme.palette.vars?.successTextDefault,
});
