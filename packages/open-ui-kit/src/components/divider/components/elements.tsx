/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Divider as MuiDivider, DividerProps, styled } from "@mui/material";
import type { ComponentType } from "react";

export const StyledDivider: ComponentType<DividerProps> = styled(MuiDivider)(
  ({ theme }) => ({
    border: 0,
    borderRadius: "100px",
    backgroundColor: theme.palette.vars.controlBorderDefault,
    flexShrink: 0,
    width: "100%",
    height: "1px",
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
