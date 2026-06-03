/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, SxProps, Theme } from "@mui/material";

export const getSelectStyles = (
  theme: Theme,
  inputHasValue: boolean,
  showClearButton: boolean,
): CSSObject => ({
  ...theme.typography.body1,
  backgroundColor: theme.palette.vars?.controlBackgroundDefault,
  borderRadius: "4px",
  boxSizing: "border-box",
  color: inputHasValue
    ? theme.palette.vars?.baseTextDefault
    : theme.palette.vars?.baseTextWeak,
  height: "40px",
  width: "285px",
  "& .MuiSelect-icon": {
    color: theme.palette.vars.controlIconDefault,
    height: "24px",
    right: "8px",
    top: "calc(50% - 12px)",
    transform: "rotate(0deg)",
    width: "24px",
  },
  "& .MuiSelect-iconOpen": {
    transform: "rotate(180deg)",
  },
  "& .MuiSelect-select": {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    minHeight: "0 !important",
    color: "inherit",
  },
  "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
    {
      padding: showClearButton ? "8px 72px 8px 16px" : "8px 40px 8px 16px",
    },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.vars?.controlBorderDefault,
    borderWidth: "2px",
    borderRadius: "4px",
    legend: { width: "0px" },
  },
  "&:hover:not(.Mui-disabled, .Mui-error, .Mui-focused) .MuiOutlinedInput-notchedOutline":
    {
      borderColor: theme.palette.vars?.controlBorderHover,
    },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.vars?.controlBorderActive,
    borderWidth: "2px",
  },
  "&.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.vars?.controlBorderNegative,
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.vars?.controlBackgroundDisabled,
  },
  "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.vars?.controlBorderDisabled,
  },
  "&.Mui-disabled .MuiSelect-select": {
    color: theme.palette.vars?.baseTextDisabled,
    WebkitTextFillColor: theme.palette.vars?.baseTextDisabled,
  },
  "&.Mui-disabled .MuiSelect-icon": {
    color: theme.palette.vars?.controlIconDisabled,
  },
  "&.MuiInputBase-sizeSmall": {
    height: "36px",
    "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
      {
        paddingBottom: "6px",
        paddingTop: "6px",
      },
  },
  "@media (max-width: 600px)": {
    height: "44px",
    "&.MuiInputBase-sizeSmall": {
      height: "44px",
    },
  },
});

export const getSelectMenuPaperStyles = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  backgroundImage: "none",
  border: `2px solid ${theme.palette.vars.controlBorderActive}`,
  borderRadius: "8px",
  boxShadow: theme.shadows[2],
  boxSizing: "border-box",
  marginTop: "4px",
  overflow: "hidden",
  width: "283px",
});

export const getSelectClearButtonStyles = (theme: Theme): CSSObject => ({
  color: theme.palette.vars.controlIconWeak,
  height: "24px",
  padding: 0,
  position: "absolute",
  right: "32px",
  top: "calc(50% - 12px)",
  width: "24px",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "transparent",
  },
  "& .MuiSvgIcon-root": {
    height: "24px",
    width: "24px",
  },
});

export const getStorySelectHoverSx = (theme: Theme): SxProps<Theme> => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.vars.controlBorderHover,
  },
});

export const getStorySelectFocusedSx = (theme: Theme): SxProps<Theme> => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.vars.controlBorderActive,
  },
  "& .MuiSelect-icon": {
    transform: "rotate(180deg)",
  },
});
