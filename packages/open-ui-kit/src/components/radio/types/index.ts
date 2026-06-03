/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  RadioProps as MuiRadioProps,
  RadioGroupProps as MuiRadioGroupProps,
  FormControlLabelProps,
} from "@mui/material";
import type { ReactNode } from "react";

export interface RadioButtonProps extends MuiRadioProps {
  /** Optional content displayed beside the radio control via FormControlLabel. */
  label?: ReactNode;
  /** Props forwarded to FormControlLabel when `label` is provided; its `sx` is merged after internal styles. */
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
}

/** Props for grouping RadioButton options into a single-choice set. */
export type RadioGroupProps = MuiRadioGroupProps;
