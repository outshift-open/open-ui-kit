/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { FormControlLabelProps, SwitchProps } from "@mui/material";
import type { ReactNode } from "react";

/**
 * Props for the Toggle component. Extends MUI Switch props for controlled,
 * uncontrolled, disabled, and form-field behavior.
 */
export interface ToggleProps extends SwitchProps {
  /** Optional content displayed beside the toggle via FormControlLabel. */
  label?: ReactNode;
  /** Props forwarded to FormControlLabel when `label` is provided; its `sx` is merged after internal styles. */
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
}
