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
  /** Label text displayed beside the radio button. */
  label?: ReactNode;
  /** Props forwarded to the wrapping FormControlLabel when label is provided. */
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
}

export type RadioGroupProps = MuiRadioGroupProps;
