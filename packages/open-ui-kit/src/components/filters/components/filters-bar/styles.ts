/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

export const getStyles = (theme: Theme) => ({
  searchStack: {
    flex: "1",
  },
  searchInput: {
    flex: "1",
    "& .MuiInputBase-root": {
      borderRadius: "4px 0px 0px 4px",
    },
  },
  searchButton: {
    borderRadius: "0px 4px 4px 0px",
  },
  chipsStack: {
    flexWrap: "wrap",
    rowGap: "8px",
    minHeight: "32px",
    marginTop: "12px",
  },
  chipTooltip: {
    "& .MuiTooltip-tooltip": {
      backgroundColor: theme.palette.vars.baseBackgroundStrong,
      color: theme.palette.vars.baseTextDefault,
      marginBottom: "2px !important",
      height: "auto",
      display: "flow",
    },
  },
  chip: {
    marginRight: "8px",
    maxWidth: "240px",
    textTransform: "none" as const,
  },
  inactiveCount: {
    color: theme.palette.vars.baseTextWeak,
  },
});
