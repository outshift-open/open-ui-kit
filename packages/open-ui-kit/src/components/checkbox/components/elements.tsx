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
  color: theme.palette.vars.controlIconDefault,
  "& + *": {
    marginLeft: 8,
  },
  "&.Mui-checked, &.MuiCheckbox-indeterminate": {
    color: theme.palette.vars.controlIconHover,
  },
  "&.Mui-disabled": {
    color: theme.palette.vars.controlIconDisabled,
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.vars.controlBorderActive}`,
    outlineOffset: "2px",
  },
})) as ComponentType<MuiCheckboxProps>;
