/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material/styles";

export const cardRootStyles = (theme: Theme): CSSObject => ({
  alignItems: "flex-start",
  backgroundColor: theme.palette.vars.baseBackgroundWeak,
  backgroundImage: "none",
  borderRadius: "8px",
  boxShadow: theme.shadows[1],
  boxSizing: "border-box",
  color: theme.palette.vars.baseTextDefault,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  justifyContent: "center",
  padding: "16px",
});

export const cardInteractiveStyles = (theme: Theme): CSSObject => ({
  border: `1px solid ${theme.palette.vars.controlBorderActive}`,
});

export const cardActiveStyles = (theme: Theme): CSSObject => ({
  ...cardInteractiveStyles(theme),
  boxShadow: theme.shadows[2],
});

export const cardDisabledStyles = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  border: `1px solid ${theme.palette.vars.controlBorderWeak}`,
  boxShadow: theme.shadows[2],
  color: theme.palette.vars.baseTextDisabled,
  pointerEvents: "none" as const,
  "& .MuiTypography-root, & .MuiSvgIcon-root": {
    color: theme.palette.vars.baseTextDisabled,
  },
});

export const cardSkeletonStyles = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.vars.baseBackgroundWeak,
  "&.MuiSkeleton-wave::after": {
    background: `linear-gradient(90deg, ${theme.palette.vars.baseBackgroundWeak} 0%, ${theme.palette.vars.controlBorderWeak} 49.7%, ${theme.palette.vars.baseBackgroundWeak} 100%)`,
  },
});
