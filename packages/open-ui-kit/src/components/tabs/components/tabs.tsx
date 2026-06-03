/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Tabs as MuiTabs, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import {
  boxTabs,
  getTabsBoxStyles,
  getTabsFrameStyles,
  toggleTabsBox,
} from "../styles";
import type { TabProps, TabsProps } from "../types";

export const Tabs = ({
  type = "main",
  sx,
  children,
  boxProps,
  orientation = "horizontal",
  ...props
}: TabsProps) => {
  const theme = useTheme();
  const { sx: boxSx, ...restBoxProps } = boxProps ?? {};

  const styleBox = useMemo(() => {
    if (type === "toggleTab") {
      return {
        ...toggleTabsBox,
        backgroundColor: theme.palette.vars.controlBackgroundDefault,
        borderColor: theme.palette.vars.controlBorderDefault,
      };
    }
    return boxTabs;
  }, [
    theme.palette.vars.controlBackgroundDefault,
    theme.palette.vars.controlBorderDefault,
    type,
  ]);

  return (
    <Box
      sx={[
        styleBox,
        getTabsBoxStyles(),
        ...(Array.isArray(boxSx) ? boxSx : boxSx ? [boxSx] : []),
      ]}
      {...restBoxProps}
    >
      <MuiTabs
        orientation={orientation}
        sx={[
          getTabsFrameStyles(theme, type, orientation),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
        {...props}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { type } as TabProps)
            : child,
        )}
      </MuiTabs>
    </Box>
  );
};
