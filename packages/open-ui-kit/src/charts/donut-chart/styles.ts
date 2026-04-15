/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject } from "@mui/system";
import type { Theme } from "@mui/material/styles";
import type { CSSProperties } from "react";

export const donutLabel = (theme: Theme): CSSProperties => ({
  ...(theme.typography.h4 as CSSProperties),
});

export type DonutChartStyleSlots = {
  tooltip: CSSObject;
  tooltipTypography: CSSObject;
};

export const styles = (theme: Theme): DonutChartStyleSlots => ({
  tooltip: {
    backgroundColor: theme.palette.vars.baseBackgroundWeak,
    padding: "2px 8px",
    borderRadius: "4px",
  },
  tooltipTypography: {
    ...theme.typography.body2,
    color: theme.palette.vars.baseTextDefault,
  },
});
