/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import type { NavigationItemState } from "../types";

const drawerShadow =
  "8px 0px 12px rgba(200, 213, 245, 0.1), 4px 0px 4px rgba(200, 213, 245, 0.1)";

export const getNavigationFrameStyles = (): CSSObject => ({
  display: "flex",
  alignItems: "flex-start",
});

export const getNavigationRootStyles = (
  theme: Theme,
  compact: boolean,
): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: compact ? "80px" : "264px",
  minHeight: compact ? "640px" : "720px",
  padding: 0,
  backgroundColor: theme.palette.vars.baseBackgroundStrong,
  borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
});

export const getNavigationContentStyles = (compact: boolean): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  padding: compact ? "32px 20px" : "32px 24px",
  gap: "20px",
});

export const getNavigationSwitcherStyles = (
  theme: Theme,
  compact: boolean,
  selected = false,
): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: compact ? "40px" : "216px",
  height: compact ? "40px" : "50px",
  padding: compact ? "4px" : "9px 12px",
  gap: "12px",
  borderRadius: selected ? "8px 0px 0px 8px" : "8px",
  borderStyle: "solid",
  borderWidth: selected ? "1px 0px 1px 1px" : "1px",
  borderColor: theme.palette.vars.controlBorderDefault,
  backgroundColor: selected
    ? theme.palette.vars.interactivePrimaryWeakDefault
    : "transparent",
  color: selected
    ? theme.palette.vars.interactivePrimaryDefaultActive
    : theme.palette.vars.baseTextStrong,
  cursor: "pointer",
  font: "inherit",
  textAlign: "left",
  "&:hover": {
    backgroundColor: theme.palette.vars.interactivePrimaryWeakDefault,
  },
});

export const getNavigationSwitcherLabelStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.subtitle2,
  color: "inherit",
  minWidth: 0,
  flex: "1 1 auto",
});

export const getNavigationSectionsStyles = (): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  gap: "24px",
});

export const getNavigationSectionStyles = (): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
});

export const getNavigationSectionHeadStyles = (
  theme: Theme,
  compact = false,
): CSSObject => ({
  ...theme.typography.caption,
  display: compact ? "none" : "flex",
  alignItems: "flex-start",
  width: "100%",
  height: "32px",
  padding: "8px",
  color: theme.palette.vars.baseTextStrong,
});

export const getNavigationItemsStyles = (): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  gap: "4px",
});

export const getNavigationItemStyles = (
  theme: Theme,
  state: NavigationItemState,
  compact = false,
): CSSObject => {
  const selected = state === "selected";
  const disabled = state === "disabled";

  return {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: compact ? "40px" : "100%",
    height: "40px",
    padding: "8px",
    gap: "8px",
    border: selected
      ? `1px solid ${theme.palette.vars.controlBorderStrong}`
      : "1px solid transparent",
    borderRightWidth: selected ? 0 : "1px",
    borderRadius: selected ? "8px 0px 0px 8px" : "8px",
    backgroundColor: selected
      ? theme.palette.vars.interactivePrimaryWeakDefault
      : "transparent",
    color: disabled
      ? theme.palette.vars.baseTextDisabled
      : selected
        ? theme.palette.vars.interactivePrimaryDefaultActive
        : theme.palette.vars.baseTextStrong,
    cursor: disabled ? "default" : "pointer",
    font: "inherit",
    textAlign: "left",
    "&:hover": disabled
      ? {}
      : {
          backgroundColor: selected
            ? theme.palette.vars.interactivePrimaryWeakDefault
            : theme.palette.vars.baseBackgroundHover,
        },
  };
};

export const getNavigationItemLabelStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.captionMedium,
  color: "inherit",
});

export const getNavigationCollapseButtonStyles = (theme: Theme): CSSObject => ({
  width: "24px",
  height: "24px",
  padding: 0,
  borderRadius: "4px",
  border: `2px solid ${theme.palette.vars.warningBorderDefault}`,
  color: theme.palette.vars.warningIconDefault,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: theme.palette.vars.interactivePrimaryWeakDefault,
  },
});

export const getNavigationCloseButtonStyles = (theme: Theme): CSSObject => ({
  width: "20px",
  height: "20px",
  padding: 0,
  borderRadius: "4px",
  color: theme.palette.vars.baseTextStrong,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
  },
});

export const getNavigationDrawerStyles = (theme: Theme): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  width: "224px",
  minHeight: "640px",
  backgroundColor: theme.palette.vars.interactivePrimaryWeakDefault,
  borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  boxShadow: drawerShadow,
});

export const getNavigationDrawerHeaderStyles = (theme: Theme): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "64px",
  padding: "24px 24px 16px",
  borderBottom: `1px solid ${theme.palette.vars.controlBorderDefault}`,
});

export const getNavigationDrawerTitleStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.body1Semibold,
  color: theme.palette.vars.baseTextStrong,
});

export const getNavigationDrawerContentStyles = (): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "24px 24px 64px",
  gap: "24px",
});

export const getNavigationDrawerItemStyles = (
  theme: Theme,
  selected = false,
): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  minHeight: "32px",
  padding: "8px",
  gap: "2px",
  border: 0,
  borderRadius: "6px",
  backgroundColor: selected
    ? theme.palette.vars.interactivePrimaryWeakHover
    : "transparent",
  color: selected
    ? theme.palette.vars.interactivePrimaryDefaultActive
    : theme.palette.vars.baseTextStrong,
  cursor: "pointer",
  font: "inherit",
  textAlign: "left",
  "&:hover": {
    backgroundColor: selected
      ? theme.palette.vars.interactivePrimaryWeakHover
      : theme.palette.vars.baseBackgroundHover,
  },
});

export const getNavigationSubtextStyles = (theme: Theme): CSSObject => ({
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontSize: "10px",
  lineHeight: "12px",
  letterSpacing: "0.4px",
  color: theme.palette.vars.baseTextMedium,
});
