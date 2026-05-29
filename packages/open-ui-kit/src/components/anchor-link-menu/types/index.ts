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
