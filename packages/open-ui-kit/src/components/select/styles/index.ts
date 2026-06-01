/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

export const getSelectStyles = (theme: Theme) => ({
  "& .MuiSelect-select": {
    backgroundColor: theme.palette.vars?.controlBackgroundDefault,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.vars?.controlBorderDefault,
    borderRadius: "4px",
    legend: { width: "0px" },
  },
  "&:hover:not(.Mui-disabled, .Mui-error, .Mui-focused) .MuiOutlinedInput-notchedOutline":
    {
      borderColor: theme.palette.vars?.controlBorderHover,
    },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.vars?.controlBorderActive,
    borderWidth: "1px",
  },
  "&.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.vars?.controlBorderNegative,
  },
  "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.vars?.controlBorderDisabled,
  },
  "&.Mui-disabled .MuiSelect-select": {
    backgroundColor: theme.palette.vars?.controlBackgroundDisabled,
    WebkitTextFillColor: theme.palette.vars?.controlIconWeak,
  },
});
