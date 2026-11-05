/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormControlLabel, Switch, useTheme } from "@mui/material";
import { getControlLabelStyles } from "@/theme/style/common";
import { getToggleStyles } from "../styles";
import type { ToggleProps } from "../types";

export const Toggle = ({
  label,
  formControlLabelProps,
  sx,
  ...props
}: ToggleProps) => {
  const theme = useTheme();

  const { sx: formControlLabelSx, ...restFormControlLabelProps } =
    formControlLabelProps ?? {};

  const toggle = (
    <Switch
      disableRipple
      sx={[
        getToggleStyles(theme),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    />
  );

  if (label === undefined) {
    return toggle;
  }

  return (
    <FormControlLabel
      control={toggle}
      label={label}
      {...restFormControlLabelProps}
      disabled={props.disabled}
      sx={[
        getControlLabelStyles,
        ...(Array.isArray(formControlLabelSx)
          ? formControlLabelSx
          : formControlLabelSx
            ? [formControlLabelSx]
            : []),
      ]}
    />
  );
};
