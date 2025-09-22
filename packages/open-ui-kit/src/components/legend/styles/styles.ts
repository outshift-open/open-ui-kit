/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

const tableCell = (theme: Theme) => ({
  borderBottom: "none",
  padding: "8px 0px 0px 0px",
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "16px",
  letterSpacing: "0.4px",
  color: theme.palette.vars.baseTextDefault,
});

const tableHeaderCell = (isHorizontal: boolean, theme: Theme) => ({
  borderBottom: "none",
  padding: isHorizontal ? "0px" : "8px 0px 0px 0px",
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "16px",
  letterSpacing: "0.4px",
  color: theme.palette.vars.baseTextWeak,
});

export const styles = (theme: Theme) => ({
  Table: (isHorizontal: boolean) => ({
    paddingTop: isHorizontal ? "0px" : "16px",
    overflow: "visible",
  }),
  leftMostColumnCell: {
    ...tableCell(theme),
    display: "inline-flex",
    alignItems: "center",
  },
  cell: {
    ...tableCell(theme),
    textAlign: "right",
  },
  leftMostHeaderCell: (isHorizontal: boolean) => ({
    ...tableHeaderCell(isHorizontal, theme),
  }),
  headerCell: (isHorizontal: boolean) => ({
    ...tableHeaderCell(isHorizontal, theme),
    textAlign: "right",
  }),
  circle: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "8px",
    flexShrink: 0,
  },
  clickable: {
    cursor: "pointer",
  },
});
