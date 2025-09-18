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
