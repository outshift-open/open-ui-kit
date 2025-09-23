/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import { Header, HeaderProps } from "@/components";

export interface LayoutProps {
  content?: React.ReactNode;
  showHeader?: boolean;
  headerProps?: HeaderProps;
  showSideNav?: boolean;
}

export const Layout = ({
  showHeader = true,
  showSideNav = true,
  headerProps,
  content,
}: LayoutProps) => {
  const defaultLayoutWidth = 240;
  const collapsedLayoutWidth = 56;
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsCollapsed(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      {showHeader && (
        <Header logo={headerProps?.logo ?? <></>} {...headerProps} />
      )}
      {showSideNav && (
        <Drawer
          variant="permanent"
          sx={(theme) => ({
            width: isCollapsed ? collapsedLayoutWidth : defaultLayoutWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: isCollapsed ? collapsedLayoutWidth : defaultLayoutWidth,
              boxSizing: "border-box",
              transition: "width 0.3s",
              backgroundColor: theme.palette.vars.baseBackgroundStrong,
            },
          })}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <Typography variant="body1">Side Navigation</Typography>
          </Box>
        </Drawer>
      )}
      <Box
        pt={showHeader ? 7.5 : 0}
        sx={{ flexGrow: 1, overflow: "hidden scroll" }}
      >
        {content}
      </Box>
    </Box>
  );
};
