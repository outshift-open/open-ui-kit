/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import type { NavigationItemState } from "../types";

const getNavigationActiveBackground = (theme: Theme) =>
  theme.palette.mode === "dark"
    ? theme.palette.vars.brandBackgroundSecondaryDefault
    : theme.palette.vars.interactivePrimaryWeakDefault;

const getNavigationActiveColor = (theme: Theme) =>
  theme.palette.mode === "dark"
    ? theme.palette.vars.brandIconPrimaryDefault
    : theme.palette.vars.interactivePrimaryDefaultActive;

export const getNavigationFrameStyles = (): CSSObject => ({
  display: "flex",
  alignItems: "flex-start",
  overflow: "visible",
});

export const getNavigationRootStyles = (
  theme: Theme,
  compact: boolean,
): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: compact ? "88px" : "264px",
  minHeight: compact ? "1364px" : "1426px",
  padding: 0,
  backgroundColor: theme.palette.vars.baseBackgroundStrong,
  borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  overflow: "visible",
});

export const getNavigationContentStyles = (compact: boolean): CSSObject => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  minHeight: compact ? "1364px" : "1426px",
  padding: compact ? "0px 24px 64px" : "32px 24px",
  gap: compact ? "24px" : "20px",
  overflow: "visible",
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
  padding: compact ? "5px" : "9px 12px",
  gap: compact ? "8px" : "12px",
  position: "relative",
  isolation: "isolate",
  borderRadius: selected ? "8px 0px 0px 8px" : "8px",
  borderStyle: "solid",
  borderWidth: selected ? "1px 0px 1px 1px" : "1px",
  borderColor: theme.palette.vars.controlBorderDefault,
  backgroundColor: selected
    ? getNavigationActiveBackground(theme)
    : "transparent",
  color: selected
    ? getNavigationActiveColor(theme)
    : theme.palette.vars.baseTextStrong,
  cursor: "pointer",
  font: "inherit",
  textAlign: "left",
  overflow: "visible",
  "&::after": selected
    ? {
        content: '""',
        position: "absolute",
        top: "-1px",
        right: "-23px",
        width: "23px",
        height: "50px",
        backgroundColor: getNavigationActiveBackground(theme),
        borderTop: `1px solid ${theme.palette.vars.controlBorderDefault}`,
        borderBottom: `1px solid ${theme.palette.vars.controlBorderDefault}`,
        zIndex: -1,
        ...(compact
          ? {
              right: "-24px",
              width: "24px",
              height: "40px",
            }
          : {}),
      }
    : undefined,
  "&:hover": {
    backgroundColor: getNavigationActiveBackground(theme),
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
  display: "flex",
  flexDirection: compact ? "column" : "row",
  alignItems: "flex-start",
  width: "100%",
  height: compact ? "17px" : "32px",
  padding: "8px",
  color: compact ? "transparent" : theme.palette.vars.baseTextStrong,
  ...(compact
    ? {
        "&::before": {
          content: '""',
          display: "block",
          width: "24px",
          height: 0,
          borderTop: `1px solid ${theme.palette.vars.controlBorderDefault}`,
          borderRadius: "100px",
        },
      }
    : {}),
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
  const selected = state === "selected" || state === "open";
  const open = state === "open";
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
    position: "relative",
    isolation: "isolate",
    border: selected
      ? `1px solid ${theme.palette.vars.controlBorderStrong}`
      : "1px solid transparent",
    borderRightWidth: selected ? 0 : "1px",
    borderRadius: selected ? "8px 0px 0px 8px" : "8px",
    backgroundColor: selected
      ? getNavigationActiveBackground(theme)
      : "transparent",
    color: disabled
      ? theme.palette.vars.baseTextDisabled
      : selected
        ? getNavigationActiveColor(theme)
        : theme.palette.vars.baseTextStrong,
    cursor: disabled ? "default" : "pointer",
    font: "inherit",
    textAlign: "left",
    overflow: "visible",
    "&::after": open
      ? {
          content: '""',
          position: "absolute",
          top: "-1px",
          right: compact ? "-24px" : "-23px",
          width: compact ? "24px" : "23px",
          height: "40px",
          backgroundColor: getNavigationActiveBackground(theme),
          borderTop: `1px solid ${theme.palette.vars.controlBorderStrong}`,
          borderBottom: `1px solid ${theme.palette.vars.controlBorderStrong}`,
          zIndex: -1,
        }
      : undefined,
    "&:hover": disabled
      ? {}
      : {
          backgroundColor: selected
            ? getNavigationActiveBackground(theme)
            : theme.palette.vars.baseBackgroundHover,
        },
  };
};

export const getNavigationItemLabelStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.captionMedium,
  color: "inherit",
});

export const getNavigationCollapseButtonStyles = (
  theme: Theme,
  compact: boolean,
): CSSObject => ({
  marginTop: "auto",
  width: "32px",
  height: "32px",
  padding: "6px",
  borderRadius: "4px",
  border: `2px solid ${theme.palette.vars.warningBorderDefault}`,
  color: theme.palette.vars.baseTextStrong,
  backgroundColor: "transparent",
  "& svg": {
    width: "20px",
    height: "20px",
    transform: compact ? "none" : "rotate(180deg)",
  },
  "&:hover": {
    backgroundColor: "transparent",
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
  minHeight: "1296px",
  backgroundColor: getNavigationActiveBackground(theme),
  borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  boxShadow: theme.shadows[6],
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
