/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SearchFieldProps } from "@/components";
import { AppBarProps, SxProps, Theme } from "@mui/material";
import React, { ReactNode } from "react";

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
   * Configuration object for the search field.
   * If undefined, the search field will not be rendered.
   */
  searchProps?: SearchFieldProps;

  /**
   * A custom search field component to override the default search field.
   * If provided, this will be used instead of the default searchProps.
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
   * The positioning type of the AppBar.
   * @default 'fixed'
   */
  position?: AppBarProps["position"];

  /**
   * The elevation (shadow) of the AppBar.
   * @default 0
   */
  elevation?: number;

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
