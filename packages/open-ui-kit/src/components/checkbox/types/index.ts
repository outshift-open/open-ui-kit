/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  CheckboxProps as MuiCheckboxProps,
  FormControlLabelProps,
} from "@mui/material";
import type { ReactNode } from "react";

/** Checkbox input for unchecked, checked, mixed, and disabled selection states. */
export interface CheckboxProps extends MuiCheckboxProps {
  /** Optional content displayed beside the checkbox via FormControlLabel. */
  label?: ReactNode;
  /** Props forwarded to FormControlLabel when `label` is provided; its `sx` is merged after internal styles. */
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
}
