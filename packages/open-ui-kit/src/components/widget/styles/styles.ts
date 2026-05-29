/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";
import { CSSProperties } from "react";

export const styles = (theme: Theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.vars.interactiveSecondaryWeakDefault,
    padding: "0px",
    "&:hover": {
      backgroundColor: theme.palette.vars.interactiveSecondaryWeakDefault,
    },
  } as CSSProperties,

  horizontalCard: {
    overflow: "visible",
    backgroundColor: theme.palette.vars.interactiveSecondaryWeakDefault,
    padding: "0px",
    width: "360px",
    "&:hover": {
      backgroundColor: theme.palette.vars.interactiveSecondaryWeakDefault,
    },
  } as CSSProperties,

  chartSkeleton: {
    marginBottom: "10px",
  } as CSSProperties,

  stack: {
    minHeight: "136px",
    width: "100%",
  } as CSSProperties,

  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflowY: "auto",
  } as CSSProperties,

  cardHeaderWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.vars.inactiveBorderHover}`,
    padding: "12px 16px",
    width: "100%",
  } as CSSProperties,

  legendContainer: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  } as CSSProperties,

  titleStack: {
    flexDirection: "row",
    gap: "4px",
    alignItems: "center",
  } as CSSProperties,

  tooltip: {
    maxWidth: "400px",
  } as CSSProperties,
});
