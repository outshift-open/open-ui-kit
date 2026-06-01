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

// Re-export MUI SelectProps directly — the generic signature is complex and wrapping it
// causes TypeScript to lose inherited props (value, disabled, size, sx, etc).
export type SelectProps<T = unknown> = MuiSelectProps<T>;
