/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AnchorLinkMenuItem {
  /** Stable id passed to `selectedId` and `onSelect`. */
  id: string;
  /** Visible anchor label. */
  label: string;
  /** Indents the item as a child section. */
  subsection?: boolean;
}

export interface AnchorLinkMenuProps {
  /** Ordered navigation items rendered inside the anchor menu. */
  items: AnchorLinkMenuItem[];
  /** Item id that should render with the active indicator. */
  selectedId?: string;
  /** Optional heading displayed above the anchor list. */
  title?: string;
  /** Visual menu treatment for page rails or floating panels. */
  variant?: "floating" | "rail";
  /** Called with the selected item id when a menu item is clicked. */
  onSelect?: (id: string) => void;
}
