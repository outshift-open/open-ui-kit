/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

export const styles = {
  container: (theme: Theme) => ({
    display: "flex",
    justifyContent: "space-between",
    px: "32px",
    py: "16px",
    alignItems: "center",
    maxWidth: "100vw",
    overflow: "hidden",
    position: "sticky",
    bottom: 0,
    zIndex: 40,
    height: "48px",
    borderTop: `1px solid ${theme.palette.vars.baseBorderDefault}`,
    backgroundColor: theme.palette.vars.baseBackgroundStrong,
  }),
  actionsContainer: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    flexShrink: 0,
  },
};
