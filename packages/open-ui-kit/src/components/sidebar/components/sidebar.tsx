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

import React from "react";
import {
  Button,
  CSSObject,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Theme,
  Tooltip,
} from "@mui/material";
import { Icons } from "@/index";
import { SidebarItem, SidebarProps } from "../types/sidebar.types";

// Mixin for the opened state of the drawer
const openedMixin = (theme: Theme, width: string): CSSObject => ({
  width,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden", // Hide horizontal scrollbar
  backgroundColor: "#EFF3FC",
  borderRadius: 0,
});

// Mixin for the closed state of the drawer
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden", // Hide horizontal scrollbar
  backgroundColor: "#EFF3FC",
  borderRadius: 0,
  width: "5.5rem", // Width for collapsed state (icons only)
});

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})<{ drawerWidth: string; open?: boolean }>(({ theme, open, drawerWidth }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    borderRadius: 0,
  },
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    "& .MuiDrawer-paper": openedMixin(theme, drawerWidth),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Sidebar = ({
  navigationItems,
  drawerWidth = "16.5rem",
  initialOpen = true,
}: SidebarProps) => {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderListItem = (
    item: SidebarItem | React.ReactElement<SidebarItem>,
  ) => {
    if (React.isValidElement(item))
      return React.cloneElement(item, { iconOnly: !isOpen });

    const { id, tooltip, icon, href, target } = item as SidebarItem;

    const content = (
      <Tooltip
        title={tooltip || ""}
        placement="right"
        disableHoverListener={isOpen}
      >
        <Stack direction="row" alignItems="center" justifyContent="center">
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: "center",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={tooltip}
            sx={{ ml: "3px", opacity: isOpen ? 1 : 0 }}
          />
        </Stack>
      </Tooltip>
    );

    return (
      <ListItem
        key={id}
        sx={{
          backgroundColor: "transparent",
          borderRadius: "8px",
          padding: "5px",
        }}
      >
        {href ? (
          <Link
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            underline="none"
            color="inherit"
          >
            {content}
          </Link>
        ) : (
          content
        )}
      </ListItem>
    );
  };

  return (
    <StyledDrawer
      variant="permanent"
      data-testid="sidebar"
      open={isOpen}
      drawerWidth={drawerWidth}
      slotProps={{
        paper: {
          sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          },
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "baseline",
        }}
      >
        {navigationItems?.map(renderListItem)}
      </List>
      <Button
        sx={{
          borderRadius: "4px",
          padding: "6px",
          "&.MuiButtonBase-root": { ":focus": { outline: "none" } },
        }}
        variant="outlined"
        onClick={handleToggle}
      >
        {isOpen ? <Icons.KeyboardArrowLeft /> : <Icons.KeyboardArrowRight />}
      </Button>
    </StyledDrawer>
  );
};
