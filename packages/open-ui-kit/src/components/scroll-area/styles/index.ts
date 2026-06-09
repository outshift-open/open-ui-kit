/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";

export const getScrollAreaRootStyles = (): CSSObject => ({
  position: "relative",
});

export const getScrollAreaViewportStyles = (theme: Theme): CSSObject => ({
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  overflow: "hidden scroll",
  outline: "none",
  scrollbarWidth: "thin",
  scrollbarColor: `${theme.palette.vars.baseTextMedium} transparent`,
  transition: "color 0.2s, box-shadow 0.2s",
  "&::-webkit-scrollbar": {
    width: "12px",
    height: "12px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundClip: "content-box",
    backgroundColor: theme.palette.vars.controlIconMedium,
    border: "2px solid transparent",
    borderRadius: 8,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: theme.palette.vars.baseTextMedium,
  },
  "&::-webkit-scrollbar-corner": {
    backgroundColor: "transparent",
  },
  "&:focus-visible": {
    boxShadow: `0 0 0 3px ${theme.palette.vars.controlBorderActive}`,
    outline: `1px solid ${theme.palette.vars.controlBorderActive}`,
  },
});
