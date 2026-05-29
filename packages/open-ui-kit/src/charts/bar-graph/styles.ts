/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

export const graphStyles = (theme: Theme) => ({
  legendCircle: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
  },
  headerText: {
    color: theme.palette.vars.baseTextWeak,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  xAxisTick: {
    fill: theme.palette.vars.inactiveBackgroundDefault,
    fontSize: "10px",
    fontFamily: "Inter",
    fontWeight: 600,
    letterSpacing: "0.4px",
  },
  yAxisTick: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    alignItems: "center",
  },
  graphContainer: {
    width: "100%",
  },
});

export const tooltipStyles = (theme: Theme) => ({
  mainContainer: {
    padding: "8px 12px",
    borderRadius: "4px",
    background: theme.palette.vars.baseBackgroundStrong,
  },
  title: {
    marginBottom: "8px",
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  categoryEntry: (categoryColor?: string) => ({
    display: "flex",
    alignItems: "center",

    "&::before": {
      content: '""',
      height: "6px",
      width: "6px",
      borderRadius: "50%",
      marginRight: "6px",
      background: categoryColor ?? theme.palette.vars.baseBackgroundStrong,
    },
  }),
});
