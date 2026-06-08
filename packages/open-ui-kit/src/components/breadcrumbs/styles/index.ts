/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, SxProps, Theme } from "@mui/material";

export const getBreadcrumbsRootStyles = (theme: Theme): CSSObject => ({
  lineHeight: "20px",
  "& .MuiBreadcrumbs-separator": {
    marginLeft: "4px",
    marginRight: "4px",
  },
  "& .MuiBreadcrumbs-li, & .MuiBreadcrumbs-li > a": {
    verticalAlign: "middle",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiBreadcrumbs-li .MuiTypography-root": {
    letterSpacing: "0px",
  },
  "& .MuiBreadcrumbs-ol": {
    flexWrap: "nowrap",
    alignItems: "center",
  },
  "& .MuiBreadcrumbs-separator > svg": {
    color: theme.palette.vars.interactiveSecondaryDefaultDefault,
    width: "20px",
    height: "20px",
  },
});

export const getBreadcrumbCollapsedTriggerStyles = (
  theme: Theme,
): SxProps<Theme> => ({
  backgroundColor: "transparent",
  borderRadius: "4px",
  color: theme.palette.vars.interactiveSecondaryDefaultDefault,
  height: "20px",
  margin: 0,
  padding: 0,
  width: "20px",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.vars.interactiveSecondaryDefaultHover,
  },
  "& .MuiSvgIcon-root": {
    height: "20px",
    width: "20px",
  },
});

export const getBreadcrumbCurrentLinkStyles = (): SxProps<Theme> => ({
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "underline",
  },
  "&:active": {
    textDecoration: "underline",
  },
});

export const getBreadcrumbMenuItemStyles = (theme: Theme): SxProps<Theme> => ({
  "& a": {
    color: theme.palette.vars.baseTextDefault,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.vars.baseTextDefault,
      textDecoration: "none",
    },
    "&:active": {
      color: theme.palette.vars.baseTextDefault,
      textDecoration: "none",
    },
  },
  "& svg": {
    color: theme.palette.vars.baseTextDefault,
  },
});

export const getBreadcrumbSeparatorIconStyles = (): SxProps<Theme> => ({
  height: "20px",
  width: "20px",
});
