/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Box,
  BoxProps,
  TabProps,
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
  useTheme,
} from "@mui/material";
import React, { useMemo } from "react";
import {
  boxTabs,
  groupSubTabs,
  groupTabs,
  toggleTabs,
  toggleTabsBox,
} from "../styles";

export type TabsType = "main" | "subTab" | "toggleTab";

export interface TabsProps extends MuiTabsProps {
  type?: TabsType;
  boxProps?: BoxProps;
}

export const Tabs = ({
  type = "main",
  sx,
  children,
  boxProps,
  ...props
}: TabsProps) => {
  const theme = useTheme();

  const styleTabs = useMemo(() => {
    if (type === "main") {
      return groupTabs;
    } else if (type === "subTab") {
      return groupSubTabs;
    } else if (type === "toggleTab") {
      return toggleTabs;
    }
    return {};
  }, [type]);

  const styleBox = useMemo(() => {
    if (type === "toggleTab") {
      return {
        ...toggleTabsBox,
        backgroundColor: theme.palette.vars.controlBackgroundWeak,
      };
    }
    return boxTabs;
  }, [theme.palette.vars.controlBackgroundWeak, type]);

  return (
    <Box sx={{ ...styleBox, ...boxProps?.sx }} {...boxProps}>
      <MuiTabs sx={{ ...styleTabs, ...sx }} {...props}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { type } as TabProps)
            : child,
        )}
      </MuiTabs>
    </Box>
  );
};
