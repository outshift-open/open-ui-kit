/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  SelectProps as MuiSelectProps,
  SelectChangeEvent,
} from "@mui/material";

export type { SelectChangeEvent };

// Keep MUI's generic SelectProps intact while adding library-specific clear affordance hooks.
export type SelectProps<T = unknown> = MuiSelectProps<T> & {
  /** Shows a clear button for single-value selected states. */
  clearable?: boolean;
  /** Called when the clear button is clicked. Controlled consumers should reset their value here. */
  onClear?: () => void;
};
