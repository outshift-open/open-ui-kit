/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormControlLabel } from "@mui/material";
import { getControlLabelStyles } from "@/theme/style/common";
import { checkboxLabelStyles } from "../styles";
import type { CheckboxProps } from "../types";
import { StyledCheckbox } from "./elements";

export const Checkbox = ({
  label,
  formControlLabelProps,
  ...props
}: CheckboxProps) => {
  const checkbox = <StyledCheckbox disableRipple {...props} />;

  const { sx: formControlLabelSx, ...restFormControlLabelProps } =
    formControlLabelProps ?? {};

  if (label === undefined) {
    return checkbox;
  }

  return (
    <FormControlLabel
      control={checkbox}
      label={label}
      {...restFormControlLabelProps}
      disabled={props.disabled}
      sx={[
        getControlLabelStyles,
        checkboxLabelStyles,
        ...(Array.isArray(formControlLabelSx)
          ? formControlLabelSx
          : formControlLabelSx
            ? [formControlLabelSx]
            : []),
      ]}
    />
  );
};
