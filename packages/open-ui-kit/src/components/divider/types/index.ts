/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DividerProps as MuiDividerProps } from "@mui/material";

/** Visual weight of the divider line. */
export type DividerVariant = MuiDividerProps["variant"] | "bold";

export interface DividerProps extends Omit<MuiDividerProps, "variant"> {
  /** Direction of the divider line. Horizontal is the default. */
  orientation?: MuiDividerProps["orientation"];
  /** Visual weight of the divider. Use `bold` for the 2px design-system line. */
  variant?: DividerVariant;
}
