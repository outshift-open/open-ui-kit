/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  StyledAnchorBar,
  StyledAnchorLabel,
  StyledAnchorLinkMenuItem,
} from "./elements";

export interface AnchorLinkMenuItemProps {
  /** Visible anchor label. */
  label: string;
  /** Whether this item should show the active indicator and selected label color. */
  selected?: boolean;
  /** Indents the item as a child section. */
  subsection?: boolean;
  /** Click handler for item selection. */
  onClick?: () => void;
}

export const AnchorLinkMenuItemComponent = ({
  label,
  selected = false,
  subsection = false,
  onClick,
}: AnchorLinkMenuItemProps) => {
  return (
    <StyledAnchorLinkMenuItem
      component="button"
      type="button"
      aria-current={selected ? "location" : undefined}
      subsection={subsection}
      onClick={onClick}
    >
      <StyledAnchorBar
        className={selected ? "anchor-bar anchor-bar-selected" : "anchor-bar"}
        selected={selected}
      />
      <StyledAnchorLabel
        className={selected ? "anchor-label-selected" : "anchor-label"}
        variant="body2Semibold"
        selected={selected}
      >
        {label}
      </StyledAnchorLabel>
    </StyledAnchorLinkMenuItem>
  );
};
