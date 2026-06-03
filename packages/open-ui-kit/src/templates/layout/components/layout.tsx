/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Drawer } from "@mui/material";
import { Box } from "@/components";
import { Header, HeaderProps } from "@/components";

const NAV_WIDTH = 264;
const HEADER_HEIGHT = 56;

export interface LayoutProps {
  content?: React.ReactNode;
  showHeader?: boolean;
  headerProps?: HeaderProps;
  showSideNav?: boolean;
  sideNav?: React.ReactNode;
}

export const Layout = ({
  showHeader = true,
  showSideNav = true,
  headerProps,
  content,
  sideNav,
}: LayoutProps) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {showHeader && (
        <Header
          logo={headerProps?.logo ?? <></>}
          {...headerProps}
          position="fixed"
          sx={[
            (theme) => ({
              height: `${HEADER_HEIGHT}px`,
              borderBottom: `1px solid ${theme.palette.divider}`,
              zIndex: theme.zIndex.drawer + 1,
            }),
            ...(Array.isArray(headerProps?.sx)
              ? headerProps.sx
              : headerProps?.sx
                ? [headerProps.sx]
                : []),
          ]}
        />
      )}
      {showSideNav && (
        <Drawer
          variant="permanent"
          sx={(theme) => ({
            width: NAV_WIDTH,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: NAV_WIDTH,
              boxSizing: "border-box",
              top: showHeader ? `${HEADER_HEIGHT}px` : 0,
              height: showHeader ? `calc(100vh - ${HEADER_HEIGHT}px)` : "100vh",
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.vars.baseBackgroundStrong,
              overflowX: "hidden",
            },
          })}
        >
          <Box
            sx={{
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              height: "100%",
            }}
          >
            {sideNav}
          </Box>
        </Drawer>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: showSideNav ? `${NAV_WIDTH}px` : 0,
          marginTop: showHeader ? `${HEADER_HEIGHT}px` : 0,
          minHeight: showHeader ? `calc(100vh - ${HEADER_HEIGHT}px)` : "100vh",
          overflow: "auto",
        }}
      >
        {content}
      </Box>
    </Box>
  );
};
