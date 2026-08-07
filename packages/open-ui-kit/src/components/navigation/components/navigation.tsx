/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Close,
  DashboardSelected,
  DashboardUnSelected,
  KeyboardArrowRight,
  OrgSwitcher,
} from "@/custom-icons";
import { useEffect, useState, type ReactNode } from "react";
import type {
  NavigationDrawerProps,
  NavigationItemData,
  NavigationItemState,
  NavigationProps,
  NavigationSubNavigationProps,
} from "../types";
import {
  StyledNavigationCollapseButton,
  StyledNavigationCloseButton,
  StyledNavigationContent,
  StyledNavigationDrawer,
  StyledNavigationDrawerContent,
  StyledNavigationDrawerHeader,
  StyledNavigationDrawerItem,
  StyledNavigationDrawerTitle,
  StyledNavigationFrame,
  StyledNavigationItem,
  StyledNavigationItemLabel,
  StyledNavigationItems,
  StyledNavigationRoot,
  StyledNavigationSection,
  StyledNavigationSectionHead,
  StyledNavigationSections,
  StyledNavigationSubtext,
  StyledNavigationSwitcher,
  StyledNavigationSwitcherLabel,
} from "./elements";

const getItemState = (
  item: NavigationItemData,
  selectedItemId?: string,
): NavigationItemState => {
  if (item.disabled) {
    return "disabled";
  }

  if (selectedItemId ? selectedItemId === item.id : item.state === "selected") {
    return "selected";
  }

  return item.state ?? "default";
};

const NavigationGraphic = ({ selected }: { selected: boolean }) =>
  selected ? (
    <DashboardSelected fontSize="small" />
  ) : (
    <DashboardUnSelected fontSize="small" />
  );

const getAccessibleLabel = (
  label: ReactNode,
  fallback: string,
): string | undefined => {
  if (typeof label === "string" || typeof label === "number") {
    return String(label);
  }

  return fallback;
};

export const Navigation = ({
  compact = false,
  organizationDrawerTitle = "Headline",
  organizationLabel = "[Organization]",
  organizationSections,
  onCollapseClick,
  onItemSelect,
  onOrganizationClick,
  onSubNavigationClose,
  sections,
  selectedItemId,
  sx,
  ...props
}: NavigationProps) => {
  const [isCompact, setIsCompact] = useState(compact);
  const [isOrganizationDrawerOpen, setIsOrganizationDrawerOpen] =
    useState(false);
  const [subNavigationItem, setSubNavigationItem] =
    useState<NavigationItemData | null>(null);

  useEffect(() => {
    setIsCompact(compact);
  }, [compact]);

  const handleOrganizationClick = () => {
    setIsOrganizationDrawerOpen((open) => !open);
    setSubNavigationItem(null);
    onOrganizationClick?.();
  };

  const handleCollapseClick = () => {
    const nextCompact = !isCompact;

    setIsCompact(nextCompact);
    setIsOrganizationDrawerOpen(false);
    setSubNavigationItem(null);
    onCollapseClick?.(nextCompact);
  };

  const handleItemClick = (item: NavigationItemData) => {
    onItemSelect?.(item);

    if (item.children?.length) {
      setSubNavigationItem(item);
      setIsOrganizationDrawerOpen(false);
    }
  };

  const handleSubNavigationClose = () => {
    setSubNavigationItem(null);
    onSubNavigationClose?.();
  };

  const subNavigationSections = subNavigationItem?.children
    ? [{ label: "Menu list", items: subNavigationItem.children }]
    : [];

  return (
    <StyledNavigationFrame
      sx={Array.isArray(sx) ? sx : sx ? [sx] : []}
      {...props}
    >
      <StyledNavigationRoot compact={isCompact}>
        <StyledNavigationContent compact={isCompact}>
          <StyledNavigationSwitcher
            aria-expanded={isOrganizationDrawerOpen}
            aria-label={
              isCompact
                ? getAccessibleLabel(
                    organizationLabel,
                    "Open organization switcher",
                  )
                : undefined
            }
            compact={isCompact}
            onClick={handleOrganizationClick}
            selected={isOrganizationDrawerOpen}
            type="button"
          >
            <OrgSwitcher fontSize="small" />
            {!isCompact ? (
              <>
                <StyledNavigationSwitcherLabel>
                  {organizationLabel}
                </StyledNavigationSwitcherLabel>
                <KeyboardArrowRight fontSize="small" />
              </>
            ) : null}
          </StyledNavigationSwitcher>

          <StyledNavigationSections>
            {sections.map((section, sectionIndex) => (
              <StyledNavigationSection key={`${section.label}-${sectionIndex}`}>
                <StyledNavigationSectionHead compact={isCompact}>
                  {section.label}
                </StyledNavigationSectionHead>
                <StyledNavigationItems>
                  {section.items.map((item) => {
                    const state =
                      subNavigationItem?.id === item.id
                        ? "open"
                        : getItemState(item, selectedItemId);
                    // Only "selected" takes the primary icon ramp. An item with
                    // its sub-menu open keeps the secondary ramp, matching the
                    // Figma frame.
                    const selected = state === "selected";

                    return (
                      <StyledNavigationItem
                        aria-expanded={
                          item.children?.length
                            ? subNavigationItem?.id === item.id
                            : undefined
                        }
                        aria-label={
                          isCompact
                            ? getAccessibleLabel(item.label, "Navigation item")
                            : undefined
                        }
                        key={item.id}
                        compact={isCompact}
                        disabled={state === "disabled"}
                        itemState={state}
                        onClick={() => handleItemClick(item)}
                        type="button"
                      >
                        <NavigationGraphic selected={selected} />
                        {!isCompact ? (
                          <StyledNavigationItemLabel>
                            {item.label}
                          </StyledNavigationItemLabel>
                        ) : null}
                      </StyledNavigationItem>
                    );
                  })}
                </StyledNavigationItems>
              </StyledNavigationSection>
            ))}
          </StyledNavigationSections>

          <StyledNavigationCollapseButton
            aria-label={isCompact ? "Expand navigation" : "Collapse navigation"}
            compact={isCompact}
            onClick={handleCollapseClick}
          >
            <KeyboardArrowRight fontSize="small" />
          </StyledNavigationCollapseButton>
        </StyledNavigationContent>
      </StyledNavigationRoot>

      {isOrganizationDrawerOpen ? (
        <NavigationDrawer
          title={organizationDrawerTitle}
          sections={organizationSections ?? sections}
          onClose={() => setIsOrganizationDrawerOpen(false)}
        />
      ) : null}

      {subNavigationItem ? (
        <NavigationSubNavigation
          headline={subNavigationItem.label}
          sections={subNavigationSections}
          onClose={handleSubNavigationClose}
        />
      ) : null}
    </StyledNavigationFrame>
  );
};

export const NavigationDrawer = ({
  onClose,
  sections,
  sx,
  title = "Headline",
  ...props
}: NavigationDrawerProps) => (
  <StyledNavigationDrawer
    sx={Array.isArray(sx) ? sx : sx ? [sx] : []}
    {...props}
  >
    <StyledNavigationDrawerHeader>
      <StyledNavigationDrawerTitle>{title}</StyledNavigationDrawerTitle>
      <StyledNavigationCloseButton
        aria-label="Close navigation"
        onClick={onClose}
      >
        <Close fontSize="small" />
      </StyledNavigationCloseButton>
    </StyledNavigationDrawerHeader>
    <StyledNavigationDrawerContent>
      {sections.map((section, sectionIndex) => (
        <StyledNavigationSection key={`${section.label}-${sectionIndex}`}>
          <StyledNavigationSectionHead>
            {section.label}
          </StyledNavigationSectionHead>
          <StyledNavigationItems>
            {section.items.map((item) => (
              <StyledNavigationDrawerItem
                key={item.id}
                selected={item.state === "selected"}
                type="button"
              >
                {item.subtext ? (
                  <StyledNavigationSubtext>
                    {item.subtext}
                  </StyledNavigationSubtext>
                ) : null}
                <StyledNavigationItemLabel>
                  {item.label}
                </StyledNavigationItemLabel>
              </StyledNavigationDrawerItem>
            ))}
          </StyledNavigationItems>
        </StyledNavigationSection>
      ))}
    </StyledNavigationDrawerContent>
  </StyledNavigationDrawer>
);

export const NavigationSubNavigation = ({
  headline = "Headline",
  onClose,
  onItemSelect,
  sections,
  selectedItemId,
  sx,
  ...props
}: NavigationSubNavigationProps) => (
  <StyledNavigationDrawer
    sx={Array.isArray(sx) ? sx : sx ? [sx] : []}
    {...props}
  >
    <StyledNavigationDrawerHeader>
      <StyledNavigationDrawerTitle>{headline}</StyledNavigationDrawerTitle>
      <StyledNavigationCloseButton
        aria-label="Close sub navigation"
        onClick={onClose}
      >
        <Close fontSize="small" />
      </StyledNavigationCloseButton>
    </StyledNavigationDrawerHeader>
    <StyledNavigationDrawerContent>
      {sections.map((section, sectionIndex) => (
        <StyledNavigationSection key={`${section.label}-${sectionIndex}`}>
          <StyledNavigationSectionHead>
            {section.label}
          </StyledNavigationSectionHead>
          <StyledNavigationItems>
            {section.items.map((item) => {
              const selected = selectedItemId
                ? selectedItemId === item.id
                : item.state === "selected";

              return (
                <StyledNavigationDrawerItem
                  key={item.id}
                  selected={selected}
                  onClick={() => onItemSelect?.(item)}
                  type="button"
                >
                  <StyledNavigationItemLabel>
                    {item.label}
                  </StyledNavigationItemLabel>
                </StyledNavigationDrawerItem>
              );
            })}
          </StyledNavigationItems>
        </StyledNavigationSection>
      ))}
    </StyledNavigationDrawerContent>
  </StyledNavigationDrawer>
);
