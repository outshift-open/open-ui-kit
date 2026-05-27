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
  label: string;
  selected?: boolean;
  subsection?: boolean;
  onClick?: () => void;
}

export const AnchorLinkMenuItemComponent = ({
  label,
  selected = false,
  subsection = false,
  onClick,
}: AnchorLinkMenuItemProps) => {
  return (
    <StyledAnchorLinkMenuItem subsection={subsection} onClick={onClick}>
      <StyledAnchorBar className="anchor-bar" selected={selected} />
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
