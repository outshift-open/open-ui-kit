/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { surfaceDarkPalette } from "@/theme/color-palette";
import { darkTheme } from "@/theme/dark/dark-theme";

export const styles = {
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
      backgroundColor: surfaceDarkPalette[50],
      color: darkTheme.palette.grey[50],
      marginBottom: "2px !important",
      height: "auto",
      display: "flow",
    },
  },
  chip: {
    marginRight: "8px",
    maxWidth: "240px",
    textTransform: "none",
  },
};
