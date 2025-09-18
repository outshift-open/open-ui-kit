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

import {
  Box,
  CircularProgress,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  useTheme,
  SxProps,
} from "@mui/material";
import { drawerContentContainerStyle, drawerPaperStyle } from "../styles";
import { useCallback } from "react";
import {
  DrawerShellHeader,
  DrawerShellHeaderProps,
} from "./drawer-shell-header";
import DrawerShellFooter, {
  DrawerShellFooterProps,
} from "./drawer-shell-footer";
import { EMPTY_FUNCTION } from "@/common";
import { LoadingErrorState } from "@/components";

export interface DrawerShellProps
  extends Omit<MuiDrawerProps, "onClose">,
    DrawerShellHeaderProps,
    DrawerShellFooterProps {
  title?: string;
  isLoading?: boolean;
  isError?: boolean;
  hideFooter?: boolean;
  paperProps?: SxProps;
}

export const DrawerShell = ({
  children,
  titleText,
  titleNode,
  open,
  isLoading = false,
  isError = false,
  isFavorite = false,
  severity,
  titleAction,
  copyURL,
  actionButtons = [],
  pageName = "",
  disablePrev = false,
  disableNext = false,
  hidePrev = false,
  hideNext = false,
  hideTitleAction = false,
  hideFooter = false,
  hideGotoPage = false,
  hideFavorite = false,
  hideCopyBtn = false,
  hideActionButtons = false,
  customDividerStyle,
  onPrev = EMPTY_FUNCTION,
  onNext = EMPTY_FUNCTION,
  onClose = EMPTY_FUNCTION,
  onFavorite = EMPTY_FUNCTION,
  onGotoPage = EMPTY_FUNCTION,
  onTitleAction = EMPTY_FUNCTION,
  onCopyLink = EMPTY_FUNCTION,
  paperProps,
  ...props
}: DrawerShellProps) => {
  const theme = useTheme();

  const onCloseCallback = useCallback(
    (event: React.MouseEvent<HTMLElement>) => onClose(event),
    [onClose],
  );

  return (
    <MuiDrawer
      anchor="right"
      open={open}
      onClose={onCloseCallback}
      slotProps={{
        paper: {
          sx: {
            ...drawerPaperStyle(isLoading || isError, theme),
            ...paperProps,
          },
        },
      }}
      {...props}
    >
      {isError ? (
        <LoadingErrorState />
      ) : isLoading ? (
        <CircularProgress aria-label="drawer spinner" />
      ) : (
        <>
          <DrawerShellHeader
            titleText={titleText}
            titleNode={titleNode}
            titleAction={titleAction}
            severity={severity}
            copyURL={copyURL}
            disablePrev={disablePrev}
            disableNext={disableNext}
            hidePrev={hidePrev}
            hideNext={hideNext}
            hideTitleAction={hideTitleAction}
            hideFavorite={hideFavorite}
            hideCopyBtn={hideCopyBtn}
            hideActionButtons={hideActionButtons}
            actionButtons={actionButtons}
            isFavorite={isFavorite}
            customDividerStyle={customDividerStyle}
            onClose={onClose}
            onPrev={onPrev}
            onNext={onNext}
            onFavorite={onFavorite}
            onTitleAction={onTitleAction}
            onCopyLink={onCopyLink}
          />
          <Box
            sx={drawerContentContainerStyle(!hideFooter, !hideActionButtons)}
          >
            {children}
          </Box>
          {!hideFooter && (
            <DrawerShellFooter
              hideGotoPage={hideGotoPage}
              onGotoPage={onGotoPage}
              pageName={pageName}
            />
          )}
        </>
      )}
    </MuiDrawer>
  );
};
