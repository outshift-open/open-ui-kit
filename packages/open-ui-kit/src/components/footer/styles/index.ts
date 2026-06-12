/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";

export const styles = {
  container: (theme: Theme) => ({
    display: "flex",
    justifyContent: "space-between",
    px: "32px",
    py: "16px",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    gap: "16px",
    width: "100%",
    height: "48px",
    boxSizing: "border-box",
    borderTop: `1px solid ${theme.palette.vars.baseBorderDefault}`,
    backgroundColor: theme.palette.vars.baseBackgroundStrong,
  }),
  actionsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,
  },
};
