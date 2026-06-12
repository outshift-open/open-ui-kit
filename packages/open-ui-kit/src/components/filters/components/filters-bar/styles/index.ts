/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

export const getStyles = (theme: Theme) => ({
  root: {
    marginTop: 0,
    rowGap: "8px",
  },
  actionsRow: {
    alignItems: "center",
    columnGap: "8px",
    flexWrap: "wrap",
    minHeight: "40px",
  },
  filterButton: {
    flexShrink: 0,
  },
  favoriteButton: {
    flexShrink: 0,
  },
  searchStack: {
    flex: "0 1 240px",
    width: "240px",
  },
  searchInput: {
    width: "240px",
    "& .MuiInputBase-root": {
      borderRadius: "4px",
    },
  },
  chipsStack: {
    alignItems: "center",
    columnGap: "8px",
    flexWrap: "wrap",
    rowGap: "8px",
    minHeight: "32px",
    marginTop: 0,
  },
  chipTooltip: {
    "& .MuiTooltip-tooltip": {
      backgroundColor: theme.palette.vars.baseBackgroundStrong,
      color: theme.palette.vars.baseTextDefault,
      marginBottom: "2px !important",
      height: "auto",
      display: "block",
    },
  },
  chip: {
    maxWidth: "240px",
    textTransform: "none" as const,
  },
  inactiveCount: {
    color: theme.palette.vars.baseTextWeak,
  },
});
