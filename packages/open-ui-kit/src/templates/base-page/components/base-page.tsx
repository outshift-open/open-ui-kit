/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Breadcrumbs,
  BreadcrumbsProps,
  Tab,
  Tabs,
  TabsProps,
} from "@/components";
import { ReactNode, useCallback, useEffect } from "react";
import type { BoxProps, TabProps as MuiTabProps } from "@mui/material";
import { Box, Typography } from "@/components";
import React from "react";
import { Link } from "react-router-dom";

type SubNavItem = MuiTabProps & { href?: string; selected?: boolean };

export interface BasePageProps {
  children: ReactNode;
  containerProps?: BoxProps;
  breadcrumbs?: BreadcrumbsProps["items"];
  title: ReactNode;
  description?: ReactNode;
  rightSideItems?: ReactNode;
  tabsProps?: TabsProps;
  subNav?: SubNavItem[];
  useBreadcrumbs?: boolean;
}

export const BasePage = ({
  children,
  containerProps,
  breadcrumbs,
  title,
  description,
  rightSideItems,
  subNav,
  tabsProps,
  useBreadcrumbs = true,
}: BasePageProps) => {
  const [tab, setTab] = React.useState(0);
  const hideHeader = !title && !description && !rightSideItems;
  const showHeader = !hideHeader;

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setTab(newValue);
    },
    [],
  );

  useEffect(() => {
    if (subNav) {
      const href = window.location.href;
      const currentTab = subNav.findIndex(
        (item) => item.href && href.includes(item.href),
      );
      if (currentTab !== -1) {
        setTab(currentTab);
      }
    }
  }, [subNav]);

  return (
    <Box
      sx={[
        { padding: "24px 32px 64px" },
        ...(Array.isArray(containerProps?.sx)
          ? containerProps.sx
          : containerProps?.sx
            ? [containerProps.sx]
            : []),
      ]}
      {...containerProps}
    >
      {showHeader && (
        <Box
          display="flex"
          flexDirection="column"
          gap="16px"
          pb={2}
          mb={1}
          borderBottom={!subNav ? 1 : 0}
          borderColor="divider"
        >
          {useBreadcrumbs && breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap="16px"
          >
            <Box display="flex" flexDirection="column" gap={0.5} flexGrow={1}>
              <Typography
                variant="h5"
                component="h1"
                fontWeight="bold"
                sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
              >
                {title}
              </Typography>
              {description && (
                <Typography
                  variant="body1"
                  sx={(theme) => ({
                    color: theme.palette.vars.baseTextDefault,
                  })}
                >
                  {description}
                </Typography>
              )}
            </Box>
            {rightSideItems && (
              <Box display="flex" gap="8px" flexWrap="wrap">
                {rightSideItems}
              </Box>
            )}
          </Box>
        </Box>
      )}
      {subNav && (
        <Box
          sx={(theme) => ({
            borderBottom: `1px solid ${theme.palette.divider}`,
            mb: 4,
          })}
        >
          <Tabs
            value={tab}
            onChange={handleChange}
            role="navigation"
            {...tabsProps}
          >
            {subNav.map((item, idx) => {
              return (
                <Tab
                  key={`item-tab-${idx}`}
                  component={Link}
                  aria-current={item.selected && "page"}
                  {...item}
                  to={item.href || "#"}
                />
              );
            })}
          </Tabs>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
