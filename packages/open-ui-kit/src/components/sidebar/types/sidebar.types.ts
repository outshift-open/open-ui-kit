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

import { SxProps, Theme } from "@mui/material";

export interface SidebarItem {
  id: string; // A unique identifier for the key prop
  "aria-label": string; // For accessibility
  tooltip?: string;
  icon?: React.ReactElement; // The icon component, e.g., <BookIcon />
  onClick?: () => void;
  href?: string; // For external or internal links
  target?: string; // e.g., '_blank'
  iconOnly?: boolean;
}

export interface SidebarProps {
  /**
   * An array of action objects to render quick action icon buttons.
   */
  navigationItems?: Array<SidebarItem | React.ReactElement>;

  /**
   * Allows for custom styling overrides.
   */
  sx?: SxProps<Theme>;

  /**
   * can side nav be colapsed
   * @default true
   */
  collapsible?: boolean;

  /**
   * The width of the drawer when it is open.
   * @default '16.5rem'
   */
  drawerWidth?: string;
  /**
   * If `true`, the sidebar is open by default.
   * @default true
   */
  initialOpen?: boolean;
}
