/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  card: {
    overflow: "visible",
    backgroundColor: theme.palette.vars.interactiveSecondaryWeakDefault,
    padding: "0px",
  },

  chartSkeleton: {
    marginBottom: "10px",
  },

  stack: {
    height: "136px",
    width: "100%",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  cardHeaderWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.vars.inactiveBorderHover}`,
    padding: "12px 16px",
    width: "100%",
  },

  legendContainer: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },

  titleStack: {
    flexDirection: "row",
    gap: "8px",
  },
});
