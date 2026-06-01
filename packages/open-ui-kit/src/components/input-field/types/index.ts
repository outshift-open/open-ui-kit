/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { TextFieldProps as MuiTextFieldProps } from "@mui/material";

export type InputFieldProps = MuiTextFieldProps & {
  /** Visual variant for the input. Defaults to `standard` for the Spark field style. */
  variant?: MuiTextFieldProps["variant"];
  /** Input size. Use `small` for the compact 36px field and the default size for 40px. */
  size?: MuiTextFieldProps["size"];
  /** Label shown above the field. Labels are always shrunk to match the design. */
  label?: MuiTextFieldProps["label"];
  /** Helper or contextual hint text shown below the field. */
  helperText?: MuiTextFieldProps["helperText"];
  /** Whether the field should render the error border state. */
  error?: MuiTextFieldProps["error"];
  /** Custom MUI slot props, merged with the internal shrunk label behavior. */
  slotProps?: MuiTextFieldProps["slotProps"];
};
