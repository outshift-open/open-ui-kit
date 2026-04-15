/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material/styles";
import type { CSSObject } from "@mui/system";

export const styles = (theme: Theme): {
  tooltip: CSSObject;
  tooltipTypography: CSSObject;
} => ({
  tooltip: {
    backgroundColor: theme.palette.vars.baseBackgroundMedium,
    padding: "2px 8px",
    borderRadius: "4px",
  },
  tooltipTypography: {
    ...theme.typography.body2,
  },
});
