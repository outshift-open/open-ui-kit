/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, styled } from "@mui/material";

export const ScrollAreaRoot = styled(Box)(() => ({
  position: "relative",
}));

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
}));
