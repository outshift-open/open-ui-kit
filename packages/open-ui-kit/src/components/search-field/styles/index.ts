/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

export const searchIconStyle = (theme: Theme) => ({
  color: theme.palette.vars?.controlIconWeak,
  ".Mui-focused &": {
    color: theme.palette.vars.brandIconPrimaryDefault,
  },
});

export const clearIconStyle = (theme: Theme) => ({
  width: "21.6px",
  height: "21.6px",
  color: theme.palette.vars?.controlIconWeak,
});

export const clearButtonStyle = (inputHasValue: boolean) => {
  return {
    padding: "1px",
    visibility: inputHasValue ? "visible" : "hidden",
  };
};
