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
import {
  closeButtonStyles,
  getArrowPadding,
  getArrowStyles,
  getPopoverPaperStyles,
  popoverActionsStyles,
  popoverBodyStyles,
  popoverContentStyles,
  popoverHeaderStyles,
  popoverTitleStyles,
} from "../styles";
import type { PopoverProps } from "../types";

export type { PopoverProps };

export const Popover = ({
  title,
  body,
  actions,
  showCloseButton = false,
  arrowPosition,
  paperSx,
  onClose,
  children,
  ...props
}: PopoverProps) => {
  const theme = useTheme();
  const bg = theme.palette.vars.controlBackgroundDefault;

  return (
    <MuiPopover
      {...props}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: [
            getPopoverPaperStyles(theme),
            getArrowPadding(arrowPosition),
            ...(Array.isArray(paperSx) ? paperSx : paperSx ? [paperSx] : []),
          ],
        },
      }}
    >
      {arrowPosition && (
        <Box
          aria-hidden
          data-slot="popover-arrow"
          sx={getArrowStyles(arrowPosition, bg)}
        />
      )}
      {children ?? (
        <Box sx={popoverContentStyles}>
          {(title || showCloseButton) && (
            <Box sx={popoverHeaderStyles}>
              {title && (
                <Typography component="div" sx={popoverTitleStyles(theme)}>
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
          {actions && <Box sx={popoverActionsStyles}>{actions}</Box>}
        </Box>
      )}
    </MuiPopover>
  );
};
