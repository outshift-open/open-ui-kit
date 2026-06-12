/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { BoxProps, SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

export type KeyValuePairsLayout = "inline" | "stacked";

export interface KeyValuePairItem {
  /** Key or label shown before or above the value. */
  key: ReactNode;
  /** Value content paired with the key. */
  value: ReactNode;
}

export interface KeyValuePairsProps extends Omit<BoxProps, "children"> {
  /** Key/value rows rendered by the component. */
  items: readonly KeyValuePairItem[];
  /** Pair layout. `inline` renders key and value side by side; `stacked` renders value below key. */
  layout?: KeyValuePairsLayout;
  /** Number of visual columns used to distribute pairs. */
  columns?: number;
  /** Fixed width for the key column in the inline layout so values align vertically. */
  keyWidth?: string | number;
  /** Horizontal gap between key and value in the inline layout. */
  pairGap?: string | number;
  /** Horizontal gap between columns. */
  columnGap?: string | number;
  /** Vertical gap between rows. */
  rowGap?: string | number;
  /** Optional style overrides for the root container. */
  sx?: SxProps<Theme>;
}
