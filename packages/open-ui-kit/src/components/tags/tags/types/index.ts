/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode, MouseEvent } from "react";
import type {
  AugmentedSelectNodeType,
  SelectNodeType,
} from "@/components/nested-menu";
import type { GeneralSize } from "@/common";

export interface TagsProps {
  /** Customizes the visible label for each rendered tag. */
  customizeLabel?: (node: AugmentedSelectNodeType | SelectNodeType) => string;
  /** Customizes the tooltip content shown for truncated tag labels. */
  customizeTooltip?: (
    node: AugmentedSelectNodeType | SelectNodeType,
  ) => ReactNode;
  /** Called when a tag delete control is clicked. */
  handleDelete?: (
    event: MouseEvent<HTMLElement>,
    node: AugmentedSelectNodeType | SelectNodeType,
    idx: number,
  ) => void;
  /** Items rendered as tags. Empty arrays render nothing. */
  items: AugmentedSelectNodeType[] | SelectNodeType[];
  /** Maximum number of tags shown before the remainder is collapsed. */
  maxTooltipTags?: number;
  /** Truncates long tag labels and shows the full value in a tooltip. */
  shouldTruncate?: boolean;
  /** Shows the first tag plus a count tag for the remaining items. */
  showOnlyFirst?: boolean;
  /** Size passed through to each Tag. */
  size?: GeneralSize;
}
