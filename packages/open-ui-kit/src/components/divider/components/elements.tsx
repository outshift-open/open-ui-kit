/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Divider as MuiDivider, styled } from "@mui/material";
import type { ComponentType } from "react";
import type { DividerProps } from "../types";

export const StyledDivider: ComponentType<DividerProps> = styled(MuiDivider)(
  ({ theme }) => ({
    alignItems: "flex-start",
    boxSizing: "border-box",
    border: 0,
    borderRadius: "100px",
    backgroundColor: theme.palette.vars.controlBorderDefault,
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    isolation: "isolate",
    margin: 0,
    padding: 0,
    height: "1px",
    width: "100%",
    "&.MuiDivider-vertical": {
      width: "1px",
      height: "100%",
    },
    "&.MuiDivider-bold": {
      height: "2px",
    },
    "&.MuiDivider-vertical.MuiDivider-bold": {
      width: "2px",
      height: "100%",
    },
  }),
);
