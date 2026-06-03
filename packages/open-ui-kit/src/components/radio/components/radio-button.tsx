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
import { RadioChecked, RadioUnchecked } from "@/custom-icons";
import { getRadioButtonStyles, getRadioLabelStyles } from "../styles";
import type { RadioButtonProps, RadioGroupProps } from "../types";

export type { RadioButtonProps, RadioGroupProps };

export const RadioButton = ({
  label,
  formControlLabelProps,
  disableRipple = true,
  icon = <RadioUnchecked />,
  checkedIcon = <RadioChecked />,
  sx,
  ...props
}: RadioButtonProps) => {
  const radio = (
    <MuiRadio
      disableRipple={disableRipple}
      sx={[getRadioButtonStyles, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
      {...props}
      icon={icon}
      checkedIcon={checkedIcon}
    />
  );
  const { sx: formControlLabelSx, ...restFormControlLabelProps } =
    formControlLabelProps ?? {};

  if (label !== undefined) {
    return (
      <FormControlLabel
        control={radio}
        label={label}
        {...restFormControlLabelProps}
        disabled={props.disabled}
        sx={[
          getRadioLabelStyles,
          ...(Array.isArray(formControlLabelSx)
            ? formControlLabelSx
            : formControlLabelSx
              ? [formControlLabelSx]
              : []),
        ]}
      />
    );
  }

  return radio;
};

export const RadioGroup = (props: RadioGroupProps) => (
  <MuiRadioGroup {...props} />
);
