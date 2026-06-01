/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type { ButtonProps, SvgIconProps, SxProps } from "@mui/material";
import type { AugmentedSelectNodeType } from "@/types";

export interface NestedMenuProps {
  /** Content rendered inside the trigger button. */
  buttonContent: ReactNode;
  /** Trigger button size. */
  buttonSize?: "medium" | "large";
  /** Flattened tree nodes displayed in the menu listbox. */
  flattenedTreeOptions: AugmentedSelectNodeType[];
  /** Accessible id used to connect trigger and popover. */
  id?: string;
  /** Shows node icons when nodes provide them. */
  isIconAllowed?: boolean;
  /** Shows the search input at the top of the menu. */
  isSearchFieldEnabled?: boolean;
  /** Called when the select-all row toggles. */
  onSelectAllChange?: (isSelected: boolean) => void;
  /** Restricts checkbox selection to parent nodes. */
  parentSelectOnly?: boolean;
  /** Current search text. */
  searchText: string;
  /** Optional icon for the select-all row. */
  selectAllIcon?: React.ElementType<SvgIconProps>;
  /** Synthetic select-all node displayed above regular options. */
  selectAllNode: AugmentedSelectNodeType;
  /** Updates the search text. */
  setSearchText: (text: string) => void;
  /** Expands or collapses a tree node. */
  toggleExpand: (args: { selectNode: AugmentedSelectNodeType }) => void;
  /** Updates a node checkbox state. */
  updateCheckbox: (
    selectNode: AugmentedSelectNodeType,
    isSelected: boolean,
  ) => void;
  /** Optional overrides for the popover paper. */
  popOverPaperSx?: SxProps;
  /** Optional props forwarded to the trigger button. */
  buttonProps?: ButtonProps;
}
