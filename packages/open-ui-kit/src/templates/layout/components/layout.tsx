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
