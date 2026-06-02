/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIconProps } from "@mui/material";

export interface FlattenSelectTreeArgs {
  rootNode: AugmentedSelectNodeType[];
  nestLevel?: number;
  searchText?: string;
}

export interface SelectNodeType<T = unknown> {
  value: string | number;
  childNodes?: Array<SelectNodeType<T>>;
  valueFormatter?: (value: string | number) => string;
  isSelectable: boolean;
  icon?: React.ElementType<SvgIconProps> | null;
  isSelected?: boolean;

  /**
   * An optional key that uniquely identifies the node within the tree, in case `value` is not a unique identifier.
   * Only used as a key for the ListItem component, and not for any other purpose.
   */
  nodeKey?: string;

  /**
   * An optional field for any data you want to associate with the node.
   * This can be of any type and is typically used for storing custom additional data relevant to the node.
   */
  linkedData?: T;
}

export interface AugmentedSelectNodeType<T = unknown>
  extends SelectNodeType<T> {
  childNodes?: Array<AugmentedSelectNodeType<T>>;

  /**
   * A flag indicating whether the node is expanded (shows its children).
   */
  isExpanded?: boolean;

  /**
   * The nesting level of the node in the tree, used internally for rendering purposes.
   */
  nestLevel?: number;

  /**
   * A reference to the parent node, used internally for tree traversal.
   */
  parentNode?: AugmentedSelectNodeType<T> | null;

  /**
   * The count of selected leaf nodes within this node's subtree.
   */
  selectedLeavesCount?: number;

  /**
   * The count of selectable leaf nodes within this node's subtree.
   */
  selectableLeavesCount?: number;

  /**
   * The total number of leaf nodes within this node's subtree.
   */
  leavesCount?: number;
}
