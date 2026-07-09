/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Box,
  IconButton,
  Popover as MuiPopover,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useResolvedPopoverPlacement } from "../hooks/use-resolved-popover-placement";
import {
  closeButtonStyles,
  getArrowStyles,
  getPopoverContentStyles,
  getPopoverPaperStyles,
  popoverActionsStyles,
  popoverBodyStyles,
  popoverColumnStyles,
  popoverHeaderStyles,
  popoverIconStyles,
  popoverSurfaceStyles,
  popoverTextStyles,
  popoverTitleStyles,
} from "../styles";
import type { PopoverProps } from "../types";
import { PopoverHorizontalPlacement, PopoverPlacementSide } from "../types";

export type { PopoverProps };

export const Popover = ({
  title,
  body,
  actions,
  icon,
  showCloseButton = false,
  featureHighlight = false,
  size = "medium",
  placement,
  paperSx,
  onClose,
  children,
  anchorOrigin = {
    vertical: PopoverPlacementSide.Top,
    horizontal: PopoverHorizontalPlacement.Left,
  },
  transformOrigin = {
    vertical: PopoverPlacementSide.Top,
    horizontal: PopoverHorizontalPlacement.Left,
  },
  open = false,
  disableScrollLock = true,
  ...props
}: PopoverProps) => {
  const theme = useTheme();
  const {
    paperRef,
    anchorOrigin: resolvedAnchorOrigin,
    transformOrigin: resolvedTransformOrigin,
    placement: resolvedPlacement,
    paperOffsetSx,
  } = useResolvedPopoverPlacement({
    open,
    anchorEl: props.anchorEl,
    anchorOrigin,
    transformOrigin,
    placement,
  });
  const bg = featureHighlight
    ? theme.palette.vars.controlBorderActive
    : theme.palette.vars.controlBackgroundDefault;

  return (
    <MuiPopover
      {...props}
      open={open}
      disableScrollLock={disableScrollLock}
      marginThreshold={null}
      anchorOrigin={resolvedAnchorOrigin}
      transformOrigin={resolvedTransformOrigin}
      onClose={onClose}
      slotProps={{
        paper: {
          ref: paperRef,
          sx: [
            getPopoverPaperStyles(theme, size),
            paperOffsetSx,
            ...(Array.isArray(paperSx) ? paperSx : paperSx ? [paperSx] : []),
          ],
        },
      }}
    >
      <Box sx={popoverSurfaceStyles}>
        {resolvedPlacement && (
          <Box
            aria-hidden
            data-slot="popover-arrow"
            sx={getArrowStyles(resolvedPlacement, bg)}
          />
        )}
        {children ?? (
          <Box sx={getPopoverContentStyles(theme, featureHighlight, size)}>
            {icon && <Box sx={popoverIconStyles}>{icon}</Box>}
            <Box sx={popoverColumnStyles}>
              {(title || body || showCloseButton) && (
                <Box sx={popoverTextStyles}>
                  {(title || showCloseButton) && (
                    <Box sx={popoverHeaderStyles}>
                      {title && (
                        <Typography
                          component="div"
                          sx={popoverTitleStyles(theme)}
                        >
                          {title}
                        </Typography>
                      )}
                      {showCloseButton && (
                        <IconButton
                          aria-label="Close popover"
                          size="small"
                          onClick={() => onClose?.({}, "escapeKeyDown")}
                          sx={closeButtonStyles}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      )}
                    </Box>
                  )}
                  {body && (
                    <Typography component="div" sx={popoverBodyStyles(theme)}>
                      {body}
                    </Typography>
                  )}
                </Box>
              )}
              {actions && <Box sx={popoverActionsStyles}>{actions}</Box>}
            </Box>
          </Box>
        )}
      </Box>
    </MuiPopover>
  );
};
