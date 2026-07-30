/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps extends Omit<MuiButtonProps, "ref"> {
  /** Button label, icon, or composed content rendered inside the control. */
  children?: MuiButtonProps["children"];
  /** Visual style for the action: primary, secondary, gradient, outlined, gradientOutlined, or tertariary. */
  variant?: MuiButtonProps["variant"];
  /** Button scale. Large min height is 40px, medium is 32px, and small is 24px. Width grows with label text until constrained, then height grows. */
  size?: MuiButtonProps["size"];
  /** Use `negative` for irreversible or destructive actions. */
  color?: MuiButtonProps["color"];
}
