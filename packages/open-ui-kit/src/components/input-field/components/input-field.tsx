/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import type {
  SxProps,
  TextFieldProps as MuiTextFieldProps,
  Theme,
} from "@mui/material";
import { StyledInputField } from "./elements";

export type InputFieldProps = MuiTextFieldProps;

const toSxArray = (sx: SxProps<Theme> | undefined) =>
  Array.isArray(sx) ? sx : sx ? [sx] : [];

export const InputField = React.forwardRef<HTMLDivElement, InputFieldProps>(
  ({ slotProps, sx, variant = "standard", ...props }, ref) => (
    <StyledInputField
      ref={ref}
      slotProps={{
        ...slotProps,
        inputLabel: {
          shrink: true,
          ...slotProps?.inputLabel,
        },
      }}
      sx={[...toSxArray(sx)]}
      variant={variant}
      {...props}
    />
  ),
);

InputField.displayName = "InputField";
