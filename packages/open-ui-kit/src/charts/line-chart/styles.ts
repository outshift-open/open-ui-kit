/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

export const tooltipStyles = (theme: Theme) => ({
  mainContainer: {
    padding: "8px 12px",
    borderRadius: "4px",
    background: theme.palette.vars.baseBackgroundMedium,
    ...theme.typography.body2,
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
      background: categoryColor ?? theme.palette.vars.baseBackgroundMedium,
    },
  }),
});
