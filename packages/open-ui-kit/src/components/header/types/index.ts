/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SearchInputProps } from "@/components/search-input";
import type { SxProps, Theme } from "@mui/material";
import type { ReactElement, ReactNode } from "react";

export interface GlobalSearchItem {
  /** Stable result id returned to `onSelect`. */
  id: string;
  /** Primary result text shown in the search dropdown. */
  label: string;
  /** Optional secondary result text shown below the label. */
  subtitle?: string;
  /** Optional leading icon for the result row. */
  icon?: ReactNode;
}

export interface GlobalSearchGroup {
  /** Stable group key for grouped search results. */
  key: string;
  /** Group label shown as a dropdown subheader. */
  label: string;
  /** Search results contained in this group. */
  items: GlobalSearchItem[];
}

export interface GlobalSearchProps {
  /** Search field placeholder text. */
  placeholder?: string;
  /** Controlled search text. */
  value?: string;
  /** Grouped results displayed while searching. */
  groups?: GlobalSearchGroup[];
  /** Called when search text changes. */
  onSearch?: (value: string) => void;
  /** Called when a result is selected from the dropdown. */
  onSelect?: (item: GlobalSearchItem) => void;
  /** Called when the search clear action is triggered. */
  onClear?: () => void;
  /** Search field width. */
  width?: string | number;
}

export interface HeaderAction {
  /** Stable id used as the React key. */
  id: string;
  /** Tooltip text shown on hover/focus. */
  tooltip?: string;
  /** Icon element rendered inside the action button. */
  icon: ReactElement;
  /** Click handler for button-like actions. */
  onClick?: () => void;
  /** Optional link target for anchor-like actions. */
  href?: string;
  /** Optional anchor target, for example `_blank`. */
  target?: string;
  /** Accessible label for the icon-only action. */
  "aria-label": string;
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
  searchProps?: SearchInputProps;

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
   * Whether to show a divider before the user section.
   * @default true
   */
  useDivider?: boolean;
}
