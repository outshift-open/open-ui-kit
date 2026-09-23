/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { BoxProps, SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";
import type { GeneralSize } from "@/common";
import type { TagStatus } from "@/components/tags";

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

export interface KeyValuePairTagsProps {
  /** Tag labels rendered in the value slot. */
  tags: readonly ReactNode[];
  /** Number of tags rendered before the remainder collapses into a `+N` counter. */
  maxVisible?: number;
  /** Size passed through to each Tag. */
  size?: GeneralSize;
  /** Maximum width before tags wrap onto the next line. */
  maxWidth?: string | number;
  /** Lists the collapsed tags in a tooltip on the `+N` counter. */
  showOverflowTooltip?: boolean;
  /** Optional style overrides for the tag container. */
  sx?: SxProps<Theme>;
}

export interface KeyValuePairStatusProps {
  /** Semantic status treatment applied to the value tag. */
  status: TagStatus;
  /** Status label. Defaults to the status name. */
  label?: ReactNode;
  /** Size passed through to the Tag. */
  size?: GeneralSize;
  /** Optional style overrides for the status tag. */
  sx?: SxProps<Theme>;
}
