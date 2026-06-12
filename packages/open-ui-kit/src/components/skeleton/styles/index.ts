/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";

export const getSkeletonStyles = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.vars.baseBackgroundWeak,
  "&.MuiSkeleton-wave": {
    backgroundColor: theme.palette.vars.baseBackgroundWeak,
    "&::after": {
      background: `linear-gradient(90deg, transparent, ${theme.palette.vars.controlBorderWeak}, transparent)`,
    },
  },
});
