/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ComponentType } from "react";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  styled,
} from "@mui/material";

export const StyledCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  padding: 0,
  marginLeft: 0,
  borderRadius: 4,
  display: "inline-flex",
  height: 24,
  minWidth: 24,
  width: 24,
  color: theme.palette.vars.controlIconDefault,
  "& .MuiSvgIcon-root": {
    fontSize: 24,
    height: 24,
    width: 24,
  },
  "& + *": {
    marginLeft: 8,
  },
  "&.Mui-checked, &.MuiCheckbox-indeterminate": {
    color: theme.palette.vars.controlIconHover,
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.vars.controlIconHover,
  },
  "&.Mui-disabled": {
    color: theme.palette.vars.controlIconDisabled,
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.vars.controlBorderActive}`,
    outlineOffset: "2px",
  },
  "@media (max-width: 600px)": {
    height: 44,
    minWidth: 44,
    width: 44,
  },
})) as ComponentType<MuiCheckboxProps>;
