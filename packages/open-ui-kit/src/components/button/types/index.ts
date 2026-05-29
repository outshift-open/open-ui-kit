/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  /** Button label, icon, or composed content rendered inside the control. */
  children?: MuiButtonProps["children"];
  /** Visual style for the action: primary, secondary, outlined, or tertariary. */
  variant?: MuiButtonProps["variant"];
  /** Button scale. Large is 40px tall, medium is 32px, and small is 24px. */
  size?: MuiButtonProps["size"];
  /** Use `negative` for irreversible or destructive actions. */
  color?: MuiButtonProps["color"];
}
