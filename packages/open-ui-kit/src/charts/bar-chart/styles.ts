/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.vars.baseBackgroundMedium,
    padding: "2px 8px",
    borderRadius: "4px",
  },
  tooltipTypography: {
    ...theme.typography.body2,
  },
});
