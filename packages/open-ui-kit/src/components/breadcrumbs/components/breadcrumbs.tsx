/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { IconButton, useTheme } from "@mui/material";
import { useState, type MouseEvent } from "react";
import { GeneralSize } from "@/common";
import {
  Link,
  LinkColorEnum,
  LinkColorStatus,
  LinkType,
} from "@/components/link";
import { getLinkColors } from "@/components/link/helpers";
import { Menu, MenuItem } from "@/components/menu";
import { More } from "@/custom-icons";
import type { BreadcrumbsProps } from "../types";
import { BreadcrumbSeparator, StyledBreadcrumbs } from "./elements";
import {
  getBreadcrumbCollapsedTriggerStyles,
  getBreadcrumbCurrentLinkStyles,
  getBreadcrumbMenuItemStyles,
} from "../styles";

const MAX_NUMBER_OF_VISIBLE_BREADCRUMBS = 4;

export const Breadcrumbs = ({
  iconPosition,
  items,
  size = GeneralSize.Medium,
  sx,
  color = LinkColorEnum.Secondary,
  type = LinkType.StandaloneBold,
  maximumNumberOfVisibleBreadcrumbs = MAX_NUMBER_OF_VISIBLE_BREADCRUMBS,
  separator,
  slotProps,
  ...props
}: BreadcrumbsProps) => {
  const theme = useTheme();
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);
  const shouldCollapse =
    items.length > Math.max(2, maximumNumberOfVisibleBreadcrumbs);
  const hiddenItems = shouldCollapse ? items.slice(1, -1) : [];
  const hasHiddenIcons = hiddenItems.some((item) => Boolean(item.Icon));
  const menuOpen = Boolean(menuAnchorEl);

  const handleCollapsedClick = (event: MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const renderBreadcrumbLink = (item: (typeof items)[number], idx: number) => {
    const isCurrentPage = idx === items.length - 1;
    const selectBreadcrumbLinkColor = ({
      disabled,
      pressed,
      hovered,
    }: LinkColorStatus) => {
      const linkColors = getLinkColors(theme);

      if (disabled) {
        return linkColors[color].disabled;
      }
      if (pressed) {
        return linkColors[color].pressed;
      }
      if (hovered) {
        return linkColors[color].hover;
      }

      return linkColors[color].default;
    };

    return (
      <Link
        key={`${item.text}-${idx}`}
        size={size}
        href={item.link}
        color={LinkColorEnum.Secondary}
        customizeColor={selectBreadcrumbLinkColor}
        iconPosition={item.iconPosition ?? iconPosition}
        linkType={type}
        ellipsis={true}
        sx={isCurrentPage ? getBreadcrumbCurrentLinkStyles() : undefined}
        {...(item.Icon && { Icon: item.Icon })}
      >
        {item.text}
      </Link>
    );
  };

  const collapsedTrigger = (
    <IconButton
      key="breadcrumb-collapsed-trigger"
      aria-controls={menuOpen ? "breadcrumb-collapsed-menu" : undefined}
      aria-expanded={menuOpen || undefined}
      aria-haspopup="menu"
      aria-label="Show breadcrumb options"
      onClick={handleCollapsedClick}
      sx={getBreadcrumbCollapsedTriggerStyles(theme)}
    >
      <More />
    </IconButton>
  );

  const breadcrumbChildren = shouldCollapse
    ? [
        renderBreadcrumbLink(items[0], 0),
        collapsedTrigger,
        renderBreadcrumbLink(items[items.length - 1], items.length - 1),
      ]
    : items.map(renderBreadcrumbLink);

  return (
    <>
      <StyledBreadcrumbs
        {...props}
        aria-label={props["aria-label"] ?? "breadcrumb"}
        separator={separator ?? <BreadcrumbSeparator />}
        slotProps={slotProps}
        sx={Array.isArray(sx) ? sx : sx ? [sx] : []}
      >
        {breadcrumbChildren}
      </StyledBreadcrumbs>
      <Menu
        id="breadcrumb-collapsed-menu"
        anchorEl={menuAnchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        width={hasHiddenIcons ? "167px" : "135px"}
        MenuListProps={{ "aria-label": "Collapsed breadcrumb options" }}
      >
        {hiddenItems.map((item, index) => (
          <MenuItem
            key={`${item.text}-${index}`}
            href={item.link}
            iconPosition={item.iconPosition ?? iconPosition}
            onClick={handleMenuClose}
            size="large"
            sx={getBreadcrumbMenuItemStyles(theme)}
            {...(item.Icon && { Icon: item.Icon })}
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
