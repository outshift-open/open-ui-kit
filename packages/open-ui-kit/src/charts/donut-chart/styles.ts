/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material/styles";
import type { CSSProperties } from "react";

export const donutLabel = (theme: Theme): CSSProperties => ({
  ...(theme.typography.h4 as CSSProperties),
});

export const styles = (theme: Theme) =>
  ({
    tooltip: {
      backgroundColor: theme.palette.vars.baseBackgroundWeak,
      padding: "2px 8px",
      borderRadius: "4px",
    },
    tooltipTypography: {
      ...theme.typography.body2,
      color: theme.palette.vars.baseTextDefault,
    },
  }) as {
    tooltip: SxProps<Theme>;
    tooltipTypography: SxProps<Theme>;
  };
