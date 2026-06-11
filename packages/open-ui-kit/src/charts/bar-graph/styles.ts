/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material/styles";

export const getBarGraphGridColor = (theme: Theme) =>
  theme.palette.vars.controlBorderMedium;

export const getBarGraphHeaderTextStyles = (theme: Theme): SxProps<Theme> => ({
  color: theme.palette.vars.baseTextMedium,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const getBarGraphAxisTickStyles = (theme: Theme) => ({
  fill: theme.palette.vars.baseTextMedium,
  fontSize: "10px",
  fontFamily: "Inter",
  fontWeight: 600,
  letterSpacing: "0.4px",
});

export const getBarGraphLegendStyles = (theme: Theme): SxProps<Theme> => ({
  backgroundColor: theme.palette.vars.baseBackgroundWeak,
});

export const graphStyles = (theme: Theme) => ({
  legendCircle: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
  },
  headerText: getBarGraphHeaderTextStyles(theme),
  xAxisTick: getBarGraphAxisTickStyles(theme),
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
    color: theme.palette.vars.baseTextStrong,

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
