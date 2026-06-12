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
  getPopoverContentStyles,
  getPopoverPaperStyles,
  popoverActionsStyles,
  popoverBodyStyles,
  popoverColumnStyles,
  popoverHeaderStyles,
  popoverIconStyles,
  popoverTextStyles,
  popoverTitleStyles,
} from "../styles";
import type { PopoverProps } from "../types";

export type { PopoverProps };

export const Popover = ({
  title,
  body,
  actions,
  icon,
  showCloseButton = false,
  featureHighlight = false,
  size = "medium",
  arrowPosition,
  paperSx,
  onClose,
  children,
  ...props
}: PopoverProps) => {
  const theme = useTheme();
  const bg = featureHighlight
    ? theme.palette.vars.controlBorderActive
    : theme.palette.vars.controlBackgroundDefault;

  return (
    <MuiPopover
      {...props}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: [
            getPopoverPaperStyles(theme, size),
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
        <Box sx={getPopoverContentStyles(theme, featureHighlight)}>
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
    </MuiPopover>
  );
};
