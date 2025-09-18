/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Theme } from "@mui/material";

const DRAWER_WIDTH = "840px";
const HEADER_HEIGHT = "137px";
const FOOTER_HEIGHT = "72px";
const ACTION_BUTTONS_HEIGHT = "32px";
const HEADER_BUTTONS_GAP = "12px";
const HEADER_COLUMN_GAP = "24px";
const ACTIONLESS_HEADER_HEIGHT = `calc(${HEADER_HEIGHT} - ${ACTION_BUTTONS_HEIGHT} - ${HEADER_COLUMN_GAP})`;

export const drawerHeaderBoxStyle = (hasActionButtons: boolean) => ({
  display: "flex",
  width: DRAWER_WIDTH,
  height: hasActionButtons
    ? HEADER_HEIGHT
    : `calc(${HEADER_HEIGHT}) - ${ACTION_BUTTONS_HEIGHT})`,
  padding: "24px 32px 0px 32px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: HEADER_COLUMN_GAP,
  position: "sticky",
  top: "0px",
});

export const navigationIconStyle = (isDisabled = false, theme: Theme) => ({
  color: isDisabled
    ? theme.palette.vars.controlIconDisabled
    : theme.palette.vars.interactiveSecondaryDefaultDefault,
});

export const closeButtonStyle = (theme: Theme) => ({
  color: theme.palette.vars.interactiveSecondaryDefaultDefault,
});

export const drawerPaperStyle = (isFullHeight: boolean, theme: Theme) => ({
  backgroundColor: theme.palette.vars.baseBackgroundMedium,
  width: DRAWER_WIDTH,
  boxShadow:
    " 0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15);",
  alignItems: isFullHeight ? "center" : undefined,
  justifyContent: isFullHeight ? "center" : undefined,
  overflow: "hidden",
  padding: 0,
});

export const drawerActionButtonsStyle = {
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
};

export const headerLabelStyle = (hasTitleIcon: boolean, theme: Theme) => ({
  color: theme.palette.vars.baseTextStrong,
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

export const drawerContentContainerStyle = (
  hasFooter: boolean,
  hasActionButtons = true,
) => ({
  display: "flex",
  height: `calc(100vh - ${
    hasActionButtons ? HEADER_HEIGHT : ACTIONLESS_HEADER_HEIGHT
  } - ${hasFooter ? FOOTER_HEIGHT : "0px"})`,
  width: DRAWER_WIDTH,
  padding: "32px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  overflow: "auto",
});

export const footerContainerStyle = (theme: Theme) => ({
  width: DRAWER_WIDTH,
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
