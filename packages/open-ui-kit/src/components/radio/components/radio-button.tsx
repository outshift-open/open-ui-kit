/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Radio as MuiRadio,
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import type { RadioButtonProps, RadioGroupProps } from "../types";

export type { RadioButtonProps, RadioGroupProps };

export const RadioButton = ({
  label,
  formControlLabelProps,
  ...props
}: RadioButtonProps) => {
  const radio = <MuiRadio {...props} />;

  if (label !== undefined) {
    return (
      <FormControlLabel
        control={radio}
        label={label}
        disabled={props.disabled}
        {...formControlLabelProps}
      />
    );
  }

  return radio;
};

export const RadioGroup = (props: RadioGroupProps) => (
  <MuiRadioGroup {...props} />
);
