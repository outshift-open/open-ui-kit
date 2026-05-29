/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnchorLinkMenuItemComponent } from "./anchor-link-menu-item";
import { AnchorLinkMenuItem } from "../types";
import {
  StyledAnchorLinkMenuContainer,
  StyledAnchorLinkMenuFloatingContainer,
  StyledAnchorLinkMenuItemList,
  StyledAnchorLinkMenuTitle,
} from "./elements";

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

export const AnchorLinkMenu = ({
  items,
  selectedId,
  title,
  variant = "rail",
  onSelect,
}: AnchorLinkMenuProps) => {
  const isFloating = variant === "floating";
  const Container = isFloating
    ? StyledAnchorLinkMenuFloatingContainer
    : StyledAnchorLinkMenuContainer;

  return (
    <Container>
      {title && (
        <StyledAnchorLinkMenuTitle variant="body2Semibold">
          {title}
        </StyledAnchorLinkMenuTitle>
      )}
      <StyledAnchorLinkMenuItemList>
        {items.map((item) => (
          <AnchorLinkMenuItemComponent
            key={item.id}
            label={item.label}
            selected={item.id === selectedId}
            subsection={item.subsection}
            onClick={() => onSelect?.(item.id)}
          />
        ))}
      </StyledAnchorLinkMenuItemList>
    </Container>
  );
};
