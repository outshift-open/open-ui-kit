/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import { lightModeCardSubtle } from "@/theme/style/color-palette";

export const defaultPopperContentStyle = {
  width: "480px",
  maxHeight: "375px",
};

export const selectNodeListItemStyle = {
  gap: "8px",
  justifyContent: "space-between",
  cursor: "pointer",
};

export const iconStyle = {
  width: "24px",
  height: "24px",
};

export const selectNodeStyle = (nestLevel: number) => ({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  padding: 0,
  alignItems: "center",
  gap: "8px",
  alignSelf: "stretch",
  marginLeft: `${32 * nestLevel}px`,
  cursor: "pointer",
  overflow: "hidden",
});

export const overflowTooltipPopperStyle = {
  wordBreak: "break-word",
};

export const searchMatchTextStyle = (theme: Theme) => ({
  color: theme.palette.vars?.successTextDefault,
});

export const getNestedMenuPopoverPaperStyles = (theme: Theme) => ({
  width: "480px",
  maxHeight: "375px",
  overflowY: "auto",
  padding: "8px 0px",
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  border: `2px solid ${theme.palette.vars.controlBorderActive}`,
  boxShadow: lightModeCardSubtle,
  borderRadius: "4px",
  "& .MuiStack-root": {
    padding: "0px",
  },
  "& .MuiInput-root": {
    marginTop: "0px",
  },
  "& .MuiTextField-root": {
    padding: "0px 16px 8px 16px",
  },
  "& .MuiListItem-root": {
    background: "transparent",
    padding: "8px 16px",
  },
  "& .MuiCheckbox-root": {
    marginLeft: "-3px",
  },
  "& .MuiButton-root": {
    minWidth: "0px",
    padding: "0px",
    margin: "0px",
  },
});

export const getNestedMenuTriggerButtonStyles = (theme: Theme) => ({
  backgroundColor: `${theme.palette.vars.controlBackgroundDefault} !important`,
  border: `2px solid ${theme.palette.vars.controlBorderDefault} !important`,
  color: theme.palette.vars.baseTextWeak,
  "&:hover": {
    border: `2px solid ${theme.palette.vars.controlBorderHover} !important`,
  },
  "&:focus": {
    border: `2px solid ${theme.palette.vars.controlBorderHover} !important`,
  },
  "&:active": {
    border: `2px solid ${theme.palette.vars.controlBorderActive} !important`,
  },
  "&.Mui-disabled": {
    border: `2px solid ${theme.palette.vars.controlBorderDisabled} !important`,
    backgroundColor: `${theme.palette.vars.controlBackgroundDisabled} !important`,
  },
  "&.MuiButton-outlinedSizeMedium": {
    padding: "6px 8px 6px 16px !important",
  },
  "& .MuiSvgIcon-root": {
    color: `${theme.palette.vars.controlIconDefault} !important`,
  },
});

export const getNestedMenuTriggerContentStyles = () => ({
  display: "flex",
  alignContent: "center",
  width: "100%",
  justifyContent: "space-between",
});

export const getNestedMenuTriggerIconStyles = () => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: "8px",
});
