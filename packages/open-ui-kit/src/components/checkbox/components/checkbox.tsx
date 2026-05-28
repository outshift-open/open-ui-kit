/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckboxProps as MuiCheckboxProps } from "@mui/material";
import { StyledCheckbox } from "./elements";

export type CheckboxProps = MuiCheckboxProps;

export const Checkbox = (props: CheckboxProps) => (
  <StyledCheckbox disableRipple {...props} />
);
