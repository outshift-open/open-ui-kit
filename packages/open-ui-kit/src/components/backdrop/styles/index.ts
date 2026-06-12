/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material";

export const getBackdropStyles = (): SxProps<Theme> => ({
  backgroundColor: (theme) =>
    theme.palette.vars.interactiveSecondaryWeakDisabled,
  "&.MuiBackdrop-invisible": {
    backgroundColor: "transparent",
  },
});
