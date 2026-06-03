/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";

export const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    width: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    width: "100%",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    minWidth: 0,
  },
  image: {
    width: "72px",
    height: "72px",
    borderRadius: "12px",
    flexShrink: 0,
    overflow: "hidden",
  },
  icon: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    padding: "8px",
    borderRadius: "8px",
    flexShrink: 0,
    border: `1px solid ${theme.palette.vars.neutralBorderDefault}`,
    backgroundColor: theme.palette.vars.baseBackgroundWeak,
  }),
  text: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    flexShrink: 0,
  },
};
