/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSProperties } from "react";
import {
  Stack,
  Typography,
  Box,
  Divider,
  Button,
  useTheme,
} from "@mui/material";
import {
  closeButtonStyle,
  headerButtonsContainerStyle,
  headerContainerStyle,
  headerLabelStyle,
  navigationIconStyle,
  navigationButtonsContainerStyle,
  headerTitleContainerStyle,
  headerTitleStyle,
  drawerHeaderBoxStyle,
  drawerActionButtonsStyle,
  dividerStyle,
  titleSeparatorStyle,
} from "../styles";
import { EMPTY_FUNCTION, Severity } from "@/common";
import {
  ArrowBackIOS,
  ArrowForwardIOS,
  CloseLarge,
  OpenInNewTab,
} from "@/custom-icons";
import {
  CopyButton,
  FavoriteButton,
  OverflowTooltip,
  SeverityBar,
  Tooltip,
  TooltipSize,
} from "@/components";

export interface DrawerShellHeaderProps {
  titleText?: string;
  titleNode?: React.ReactNode;
  titleAction?: JSX.Element;
  severity?: Severity;
  copyURL: string;
  customDividerStyle?: CSSProperties;
  isFavorite?: boolean;
  actionButtons?: Array<JSX.Element>;
  disablePrev?: boolean;
  disableNext?: boolean;
  hidePrev?: boolean;
  hideNext?: boolean;
  hideTitleAction?: boolean;
  hideFavorite?: boolean;
  hideCopyBtn?: boolean;
  hideActionButtons?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  onClose?: (event?: React.MouseEvent<HTMLElement>) => void;
  onFavorite?: () => void;
  onTitleAction?: () => void;
  onCopyLink?: (link: string) => void;
}

export const DrawerShellHeader = ({
  titleText,
  titleNode,
  titleAction,
  severity,
  copyURL,
  customDividerStyle,
  isFavorite = false,
  actionButtons = [],
  disablePrev = false,
  disableNext = false,
  hidePrev = false,
  hideNext = false,
  hideTitleAction = false,
  hideFavorite = false,
  hideCopyBtn = false,
  hideActionButtons = false,
  onPrev = EMPTY_FUNCTION,
  onNext = EMPTY_FUNCTION,
  onClose = EMPTY_FUNCTION,
  onFavorite = EMPTY_FUNCTION,
  onTitleAction = EMPTY_FUNCTION,
  onCopyLink = EMPTY_FUNCTION,
}: DrawerShellHeaderProps) => {
  const theme = useTheme();

  return (
    <Box sx={drawerHeaderBoxStyle(!hideActionButtons)}>
      <Stack sx={headerContainerStyle}>
        <Stack sx={headerTitleContainerStyle}>
          {severity && <SeverityBar severity={severity} />}
          <Stack sx={headerTitleStyle}>
            {titleText && (
              <Typography
                variant="h5"
                sx={headerLabelStyle(!hideTitleAction, theme)}
                noWrap
              >
                <OverflowTooltip
                  key={titleText}
                  value={titleText}
                  someLongText={titleText}
                />
              </Typography>
            )}

            {titleNode}

            {!hideTitleAction &&
              (titleAction ?? (
                <Tooltip title="Open in a new tab" size={TooltipSize.Large}>
                  <Button
                    onClick={onTitleAction}
                    size={"medium"}
                    sx={{
                      "&.MuiButton-sizeMedium": {
                        color:
                          theme.palette.vars.interactiveSecondaryDefaultDefault,
                      },
                    }}
                    aria-label="drawer open in new tab"
                  >
                    <OpenInNewTab />
                  </Button>
                </Tooltip>
              ))}
          </Stack>
        </Stack>
        <div style={titleSeparatorStyle} />
        <Stack sx={headerButtonsContainerStyle}>
          <Stack sx={navigationButtonsContainerStyle}>
            {!hidePrev && (
              <Button
                onClick={onPrev}
                disabled={disablePrev}
                size={"medium"}
                aria-label="drawer prev"
              >
                <ArrowBackIOS sx={navigationIconStyle(disablePrev, theme)} />
              </Button>
            )}
            {!hideNext && (
              <Button
                onClick={onNext}
                disabled={disableNext}
                size={"medium"}
                aria-label="drawer next"
              >
                <ArrowForwardIOS sx={navigationIconStyle(disableNext, theme)} />
              </Button>
            )}
          </Stack>
          <Button onClick={onClose} size={"medium"} aria-label="drawer close">
            <CloseLarge sx={closeButtonStyle(theme)} />
          </Button>
        </Stack>
      </Stack>
      {!hideActionButtons && (
        <Stack sx={drawerActionButtonsStyle}>
          {actionButtons}
          {!hideFavorite && (
            <FavoriteButton isChecked={isFavorite} onClick={onFavorite} />
          )}
          {!hideCopyBtn && (
            <CopyButton text={copyURL} onCopy={() => onCopyLink} />
          )}
        </Stack>
      )}
      <Divider sx={{ ...dividerStyle(theme), ...customDividerStyle }} />
    </Box>
  );
};
