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

import {
  Breadcrumbs,
  BreadcrumbsProps,
  Tab,
  Tabs,
  TabsProps,
} from "@/components";
import { Box, BoxProps, Typography } from "@mui/material";
import { ReactNode, useCallback, useEffect } from "react";
import { TabProps as MuiTabProps } from "@mui/material";
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
      sx={{
        padding: "24px 16px 64px 16px",
        overflow: "hidden scroll",
        ...containerProps?.sx,
      }}
      {...containerProps}
    >
      {useBreadcrumbs && breadcrumbs ? (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="100%"
          overflow="hidden"
        >
          <Breadcrumbs items={breadcrumbs} />
        </Box>
      ) : null}
      <Box>
        {showHeader && (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            gap={1}
            pb={1}
            mb={1}
            borderBottom={!subNav ? 1 : 0}
            borderColor="divider"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              gap={1}
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
                  <Typography variant="body2">{description}</Typography>
                )}
              </Box>
              {rightSideItems && (
                <Box display="flex" gap={2} flexWrap="wrap">
                  {rightSideItems}
                </Box>
              )}
            </Box>
          </Box>
        )}
        <Box
          sx={{
            maxWidth: "100%",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "auto",
          }}
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2.5}
        >
          {subNav && (
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
          )}
          {children}
        </Box>
      </Box>
    </Box>
  );
};
