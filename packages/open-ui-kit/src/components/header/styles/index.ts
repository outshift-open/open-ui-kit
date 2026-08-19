/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import type { HeaderProps } from "../types";

export const getHeaderStyles = (
  theme: Theme,
  position: HeaderProps["position"],
) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 32px",
  height: "56px",
  width: "100%",
  boxSizing: "border-box",
  position,
  top: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.appBar,
  backgroundColor: theme.palette.vars.baseBackgroundStrong,
  borderBottom: `1px solid ${theme.palette.vars.baseBorderDefault}`,
});

export const getActionButtonStyles = (theme: Theme) => ({
  color: theme.palette.vars.brandIconPrimaryDefault,
  width: "24px",
  height: "24px",
  padding: 0,
  borderRadius: "4px",
  backgroundColor: "transparent",
  "&:hover": {
    color: theme.palette.vars.interactivePrimaryDefaultHover,
    backgroundColor: "transparent",
  },
  "&:active": {
    color: theme.palette.vars.interactivePrimaryDefaultActive,
    backgroundColor: "transparent",
  },
  "& .MuiIcon-root, & .MuiSvgIcon-root": {
    color: "currentColor",
    fontSize: "24px",
    width: "24px",
    height: "24px",
  },
});

export const getUserDividerStyles = (theme: Theme) => ({
  height: "36px",
  width: "1px",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.vars.baseBorderStrong
      : theme.palette.vars.baseBorderDefault,
  "&&.MuiDivider-vertical": {
    height: "36px",
    width: "1px",
  },
});

export const getGlobalSearchInputStyles = (theme: Theme) => ({
  "& .MuiInput-root": {
    width: "100%",
    height: "36px",
    borderRadius: "4px",
    marginTop: 0,
    border: "none",
    backgroundColor: theme.palette.vars.baseBackgroundWeak,
  },
});

export const getGlobalSearchPaperStyles = (theme: Theme) => ({
  mt: "4px",
  width: "100%",
  maxHeight: "400px",
  overflowY: "auto",
  border: `1px solid ${theme.palette.vars.baseBorderDefault}`,
  borderRadius: "8px",
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  boxShadow: theme.shadows[2],
});

export const getGlobalSearchSubheaderStyles = (theme: Theme) => ({
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  color: theme.palette.vars.baseTextWeak,
  ...theme.typography.captionMedium,
  lineHeight: "32px",
  padding: "0 16px",
  letterSpacing: "0.4px",
  textTransform: "uppercase",
});

export const getGlobalSearchItemStyles = (theme: Theme) => ({
  padding: "8px 16px",
  gap: "12px",
  minHeight: "40px",
  "&:hover": {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
  },
});

export const getGlobalSearchItemIconStyles = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.vars.baseTextWeak,
  flexShrink: 0,
});

export const getCustomSearchInputStyles = (theme: Theme) => ({
  padding: 0,
  "& .MuiInput-root": {
    width: "360px",
    height: "36px",
    borderRadius: "4px",
    marginTop: 0,
    border: "none",
    backgroundColor: theme.palette.vars.baseBackgroundWeak,
  },
});

export const getStoryTitleStyles = (theme: Theme) => ({
  fontFamily: "Sharp Sans, sans-serif",
  fontWeight: 400,
  fontSize: "25.3208px",
  lineHeight: "34px",
  color:
    theme.palette.mode === "dark"
      ? theme.palette.vars.baseTextStrong
      : theme.palette.vars.brandMidnightBlue,
});

export const getStoryBetaStyles = (theme: Theme) => ({
  height: "20px",
  fontSize: "12px",
  fontWeight: 600,
  borderRadius: "12px",
  backgroundColor: theme.palette.vars.interactivePrimaryWeakDefault,
  color: theme.palette.vars.baseTextDefault,
});

export const getStoryMenuPaperStyles = (theme: Theme) => ({
  mt: "8px",
  "& .MuiPaper-root": {
    width: "125px",
    minWidth: "125px",
    height: "96px",
    boxSizing: "border-box",
    borderRadius: "8px",
    border: `2px solid ${theme.palette.vars.interactivePrimaryDefaultActive}`,
    backgroundColor: theme.palette.vars.controlBackgroundWeak,
    boxShadow: theme.shadows[2],
    padding: "8px 0",
  },
  "& .MuiList-root": { padding: 0 },
});

export const getStoryMenuItemStyles = (theme: Theme) => ({
  borderRadius: 0,
  gap: "8px",
  height: "40px",
  padding: "8px 16px",
  color: theme.palette.vars.baseTextDefault,
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  "&:hover": {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
  },
  "& .MuiIcon-root, & .MuiSvgIcon-root": {
    color: "currentColor",
    fontSize: "24px",
    width: "24px",
    height: "24px",
  },
});
