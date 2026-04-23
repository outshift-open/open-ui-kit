/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, styled, type BoxProps } from "@mui/material";
import type { ComponentType } from "react";

export const ScrollAreaRoot = styled(Box)(() => ({
  position: "relative",
})) as ComponentType<BoxProps>;

export const ScrollAreaViewport = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  outlineStyle: "none",
  overflow: "hidden scroll",
  outline: "none",
  transition: "color 0.2s, box-shadow 0.2s",
  "&:focus-visible": {
    boxShadow: `0 0 0 3px ${theme.palette.primary.main}50`,
    outline: `1px solid ${theme.palette.primary.main}`,
  },
})) as ComponentType<BoxProps>;
