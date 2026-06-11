/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Breadcrumbs, Tab, Tabs } from "@/components";
import { useCallback, useEffect, useState, type SyntheticEvent } from "react";
import { Box, Typography } from "@/components";
import { Link } from "react-router-dom";
import type { BasePageProps } from "../types";

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
  const [tab, setTab] = useState(0);
  const hideHeader = !title && !description && !rightSideItems;
  const showHeader = !hideHeader;
  const { sx: containerSx, ...restContainerProps } = containerProps ?? {};
  const {
    onChange: tabsOnChange,
    value: tabsValue,
    ...restTabsProps
  } = tabsProps ?? {};

  const handleChange = useCallback(
    (event: SyntheticEvent, newValue: number) => {
      setTab(newValue);
      tabsOnChange?.(event, newValue);
    },
    [tabsOnChange],
  );

  useEffect(() => {
    if (subNav) {
      const href = window.location.href;
      const currentTab = subNav.findIndex(
        (item) => item.selected || (item.href && href.includes(item.href)),
      );
      if (currentTab !== -1) {
        setTab(currentTab);
      }
    }
  }, [subNav]);

  return (
    <Box
      {...restContainerProps}
      sx={[
        { padding: "24px 32px 64px" },
        ...(Array.isArray(containerSx)
          ? containerSx
          : containerSx
            ? [containerSx]
            : []),
      ]}
    >
      {showHeader && (
        <Box
          display="flex"
          flexDirection="column"
          gap="16px"
          pb={2}
          mb={1}
          borderBottom={!subNav ? 1 : 0}
          sx={(theme) => ({
            borderColor: theme.palette.vars.controlBorderStrong,
          })}
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
            borderBottom: `1px solid ${theme.palette.vars.controlBorderStrong}`,
            mb: 4,
          })}
        >
          <Tabs
            value={tabsValue ?? tab}
            onChange={handleChange}
            role="navigation"
            {...restTabsProps}
          >
            {subNav.map((item, idx) => {
              const { href, selected, ...tabItemProps } = item;

              return (
                <Tab
                  key={`item-tab-${idx}`}
                  {...tabItemProps}
                  component={Link}
                  aria-current={selected ? "page" : undefined}
                  to={href || "#"}
                  value={idx}
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
