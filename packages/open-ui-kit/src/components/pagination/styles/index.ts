/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";

export const getPaginationItemSize = (
  size: "small" | "medium" | "large" = "medium",
) => {
  if (size === "small") {
    return "26px";
  }

  if (size === "large") {
    return "40px";
  }

  return "32px";
};

export const getPaginationRootStyles = (): CSSObject => ({
  "& .MuiPagination-ul": {
    alignItems: "center",
    flexWrap: "nowrap",
    gap: "4px",
    padding: "0 4px",
  },
  "& .MuiPagination-ul > li": {
    margin: 0,
  },
});

export const getPaginationItemStyles = (
  theme: Theme,
  size: "small" | "medium" | "large" = "medium",
): CSSObject => {
  const itemSize = getPaginationItemSize(size);

  return {
    ...theme.typography.body2,
    boxSizing: "border-box",
    minWidth: itemSize,
    width: itemSize,
    height: itemSize,
    margin: 0,
    padding: 0,
    borderRadius: "100px",
    color: theme.palette.vars.baseTextDefault,
    backgroundColor: "transparent",
    borderColor: "transparent",
    "&:hover": {
      backgroundColor: theme.palette.vars.controlBorderStrong,
      color: theme.palette.vars.baseTextStrong,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.vars.controlBorderStrong,
      color: theme.palette.vars.baseTextStrong,
      "&:hover": {
        backgroundColor: theme.palette.vars.controlBorderStrong,
      },
    },
    "&.MuiPaginationItem-colorPrimary:hover": {
      backgroundColor: theme.palette.vars.interactivePrimaryDefaultActive,
      color: theme.palette.vars.baseTextInverse,
    },
    "&.MuiPaginationItem-colorPrimary.Mui-selected": {
      backgroundColor: theme.palette.vars.interactivePrimaryDefaultActive,
      color: theme.palette.vars.baseTextInverse,
      "&:hover": {
        backgroundColor: theme.palette.vars.interactivePrimaryDefaultActive,
      },
    },
    "&.Mui-disabled, &.Mui-selected.Mui-disabled": {
      color: theme.palette.vars.baseTextDisabled,
      backgroundColor: "transparent",
      opacity: 1,
    },
  };
};

export const getPaginationOutlinedItemStyles = (theme: Theme): CSSObject => ({
  borderColor: theme.palette.vars.controlBorderStrong,
  "&.MuiPaginationItem-colorPrimary": {
    borderColor: theme.palette.vars.interactivePrimaryDefaultDefault,
  },
  "&:hover": {
    borderColor: theme.palette.vars.controlBorderStrong,
  },
  "&.Mui-selected": {
    borderColor: theme.palette.vars.controlBorderStrong,
  },
  "&.MuiPaginationItem-colorPrimary:hover": {
    borderColor: theme.palette.vars.interactivePrimaryDefaultActive,
  },
  "&.MuiPaginationItem-colorPrimary.Mui-selected": {
    borderColor: theme.palette.vars.interactivePrimaryDefaultActive,
  },
  "&.Mui-disabled, &.Mui-selected.Mui-disabled": {
    borderColor: theme.palette.vars.controlBorderWeak,
  },
  "&.MuiPaginationItem-colorPrimary.Mui-disabled": {
    borderColor: theme.palette.vars.interactivePrimaryDefaultDisabled,
  },
  "&.MuiPaginationItem-colorPrimary.Mui-selected.Mui-disabled": {
    borderColor: theme.palette.vars.interactivePrimaryDefaultDisabled,
  },
});

export const getPaginationControlStyles = (theme: Theme): CSSObject => ({
  minWidth: "20px",
  width: "20px",
  height: "20px",
  borderRadius: "4px",
  color: theme.palette.vars.controlIconDefault,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.vars.controlIconDefault,
  },
  "&.Mui-disabled": {
    color: theme.palette.vars.baseTextDisabled,
    backgroundColor: "transparent",
    opacity: 1,
  },
  "& .MuiPaginationItem-icon": {
    fontSize: "20px",
  },
});
