/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SearchFieldProps } from "@/components/search-field";
import { SxProps, Theme } from "@mui/material";
import React, { ReactNode } from "react";

export interface GlobalSearchItem {
  id: string;
  label: string;
  subtitle?: string;
  icon?: ReactNode;
}

export interface GlobalSearchGroup {
  key: string;
  label: string;
  items: GlobalSearchItem[];
}

export interface GlobalSearchProps {
  placeholder?: string;
  value?: string;
  groups?: GlobalSearchGroup[];
  onSearch?: (value: string) => void;
  onSelect?: (item: GlobalSearchItem) => void;
  onClear?: () => void;
  width?: string | number;
}

// Prop type for individual action items
export interface HeaderAction {
  id: string; // A unique identifier for the key prop
  tooltip?: string;
  icon: React.ReactElement; // The icon component, e.g., <BookIcon />
  onClick?: () => void;
  href?: string; // For external or internal links
  target?: string; // e.g., '_blank'
  "aria-label": string; // For accessibility
}

export interface HeaderProps {
  /**
   * The logo element to display on the left side.
   * Can be an img, svg, or a custom component.
   */
  logo: ReactNode;

  /**
   * The title to display next to the logo.
   */
  title?: string | ReactNode;

  /**
   * Configuration for the global search with grouped dropdown results.
   * If provided, renders a GlobalSearchField instead of the basic search.
   */
  globalSearchProps?: GlobalSearchProps;

  /**
   * Configuration object for the basic search field.
   * If undefined, the search field will not be rendered.
   */
  searchProps?: SearchFieldProps;

  /**
   * A custom search field component to override both search variants.
   * If provided, this will be used instead of searchProps or globalSearchProps.
   */
  customSearchNode?: ReactNode;

  /**
   * An array of action objects to render quick action icon buttons.
   */
  actions?: HeaderAction[];

  /**
   * The user-related section, typically a user menu or login button.
   */
  userSection?: ReactNode;

  /**
   * The CSS position of the header.
   * @default 'fixed'
   */
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";

  /**
   * Allows for custom styling overrides.
   */
  sx?: SxProps<Theme>;

  /**
   * Whether to use a divider between the logo and title.
   * @default false
   */
  useDivider?: boolean; // Whether to use a divider between the logo and title
}
