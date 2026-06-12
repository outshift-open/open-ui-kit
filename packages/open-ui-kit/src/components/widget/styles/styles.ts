/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material/styles";
import { CSSProperties } from "react";

export const styles = (theme: Theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.palette.vars.baseBackgroundWeak,
    boxShadow: theme.shadows[1],
    borderRadius: "8px",
    gap: 0,
    justifyContent: "flex-start",
    padding: "0px",
    "&:hover": {
      backgroundColor: theme.palette.vars.baseBackgroundWeak,
    },
  } as CSSProperties,

  horizontalCard: {
    overflow: "visible",
    alignItems: "flex-start",
    backgroundColor: theme.palette.vars.baseBackgroundWeak,
    boxShadow: theme.shadows[1],
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    justifyContent: "flex-start",
    padding: "0px",
    width: "360px",
    "&:hover": {
      backgroundColor: theme.palette.vars.baseBackgroundWeak,
    },
  } as CSSProperties,

  chartSkeleton: {
    marginBottom: "10px",
  } as CSSProperties,

  stack: {
    width: "100%",
  } as CSSProperties,

  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    gap: "16px",
    padding: "8px 16px 16px",
    width: "100%",
    height: "100%",
    overflowY: "visible",
    "&:last-child": {
      paddingBottom: "16px",
    },
  } as CSSProperties,

  cardHeaderWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
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
