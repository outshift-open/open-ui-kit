/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import {
  darkModeSideDrawerRight,
  lightModeSideDrawerRight,
} from "@/theme/style/color-palette";

const DRAWER_WIDTH = "840px";
const HEADER_HEIGHT = "137px";
const FOOTER_HEIGHT = "72px";
const ACTION_BUTTONS_HEIGHT = "32px";
const HEADER_BUTTONS_GAP = "12px";
const HEADER_COLUMN_GAP = "24px";
const ACTIONLESS_HEADER_HEIGHT = `calc(${HEADER_HEIGHT} - ${ACTION_BUTTONS_HEIGHT} - ${HEADER_COLUMN_GAP})`;

const getDropShadowFilter = (shadow: string) =>
  `drop-shadow(${shadow.replace(/\),\s/g, ")) drop-shadow(")})`;

export const sideDrawerHeaderBoxStyle = (
  hasActionButtons: boolean,
  theme: Theme,
) => ({
  boxSizing: "border-box",
  display: "flex",
  width: "100%",
  height: hasActionButtons
    ? HEADER_HEIGHT
    : `calc(${HEADER_HEIGHT} - ${ACTION_BUTTONS_HEIGHT})`,
  padding: "24px 32px 0px 32px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: HEADER_COLUMN_GAP,
  backgroundColor: theme.palette.vars.baseBackgroundMedium,
  position: "sticky",
  top: "0px",
  zIndex: 1,
});

export const navigationIconStyle = (isDisabled = false, theme: Theme) => ({
  color: isDisabled
    ? theme.palette.vars.controlIconDisabled
    : theme.palette.vars.interactiveSecondaryDefaultDefault,
});

export const closeButtonStyle = (theme: Theme) => ({
  color: theme.palette.vars.interactiveSecondaryDefaultDefault,
});

export const sideDrawerPaperStyle = (isFullHeight: boolean, theme: Theme) => ({
  boxSizing: "border-box",
  backgroundColor: theme.palette.vars.baseBackgroundMedium,
  width: DRAWER_WIDTH,
  minWidth: DRAWER_WIDTH,
  [theme.breakpoints.up("xl")]: {
    width: "50vw",
  },
  boxShadow: "none",
  filter:
    theme.palette.mode === "dark"
      ? getDropShadowFilter(darkModeSideDrawerRight)
      : getDropShadowFilter(lightModeSideDrawerRight),
  alignItems: isFullHeight ? "center" : undefined,
  justifyContent: isFullHeight ? "center" : undefined,
  overflow: "hidden",
  padding: 0,
});

export const sideDrawerActionButtonsStyle = {
  display: "flex",
  height: "32px",
  gap: "8px",
  flexDirection: "row",
};

export const headerContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
};

// Have a minimum gap between navigation buttons and the title
export const titleSeparatorStyle = {
  flex: `1 0 ${HEADER_BUTTONS_GAP}`,
};

export const headerTitleContainerStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  alignItems: "flex-start",
};

export const headerTitleStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
};

export const headerLabelStyle = (hasTitleIcon: boolean, theme: Theme) => ({
  color: theme.palette.vars.baseTextStrong,
  height: "30px",
  lineHeight: "30px",
  alignSelf: "stretch",
  maxWidth: hasTitleIcon ? "580px" : "620px",
});

export const headerButtonsContainerStyle = {
  flexDirection: "row",
  gap: HEADER_BUTTONS_GAP,
  alignItems: "center",
};

export const navigationButtonsContainerStyle = {
  flexDirection: "row",
  gap: "4px",
  alignItems: "flex-start",
};

export const sideDrawerContentContainerStyle = (
  hasFooter: boolean,
  hasActionButtons = true,
) => ({
  boxSizing: "border-box",
  display: "flex",
  height: `calc(100vh - ${
    hasActionButtons ? HEADER_HEIGHT : ACTIONLESS_HEADER_HEIGHT
  } - ${hasFooter ? FOOTER_HEIGHT : "0px"})`,
  width: "100%",
  padding: "32px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  backgroundColor: "inherit",
  overflow: "auto",
});

export const footerContainerStyle = (theme: Theme) => ({
  boxSizing: "border-box",
  width: "100%",
  height: FOOTER_HEIGHT,
  padding: "16px 32px",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  backgroundColor: theme.palette.vars.baseBackgroundMedium,
  borderTop: `1px solid ${theme.palette.vars.baseBorderStrong}`,
  position: "sticky",
  bottom: "0px",
});

export const dividerStyle = (theme: Theme) => ({
  "&.MuiDivider-root": {
    width: "100%",
    background: theme.palette.vars.baseBorderStrong,
  },
});
