/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { toast as sonnerToast } from "sonner";
import type { ToastProps } from "../types";
import { IconToast, StyledToast } from "./elements";
import { Box, IconButton, Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { Button } from "@/components/button";
import React from "react";
import {
  toastActionButtonStyle,
  toastCloseButtonStyle,
  toastCloseIconStyle,
  toastContentStyle,
  toastDescriptionStyle,
  toastInnerStyle,
  toastTitleStyle,
  toastTopRowStyle,
} from "../styles";

export const Toast = ({
  type = "default",
  showCloseButton = true,
  useNativeClose = true,
  title,
  description,
  action,
  id,
  customActions,
  glow,
  ...props
}: ToastProps) => {
  const [show, setShow] = React.useState(true);

  if (useNativeClose && !show) {
    return null;
  }

  const closeButton = showCloseButton ? (
    <IconButton
      sx={toastCloseButtonStyle}
      onClick={() =>
        useNativeClose ? setShow(false) : sonnerToast.dismiss(id)
      }
      aria-label="Close toast"
    >
      <CloseOutlined sx={toastCloseIconStyle} />
    </IconButton>
  ) : null;

  return (
    <StyledToast
      {...props}
      id={id}
      type={type}
      hasTitle={Boolean(title)}
      hasAction={Boolean(action)}
      glow={glow}
      icon={<IconToast type={type} />}
    >
      <Box sx={toastInnerStyle}>
        <Box sx={toastContentStyle}>
          <Box sx={toastTopRowStyle}>
            {title ? (
              <Typography variant="subtitle1" sx={toastTitleStyle}>
                {title}
              </Typography>
            ) : (
              description && (
                <Typography variant="body2" sx={toastDescriptionStyle}>
                  {description}
                </Typography>
              )
            )}
            {closeButton}
          </Box>
          {title && description && (
            <Typography variant="body2" sx={toastDescriptionStyle}>
              {description}
            </Typography>
          )}
        </Box>
        {action && (
          <Button
            variant="tertariary"
            size="small"
            onClick={action.onClick}
            sx={toastActionButtonStyle}
          >
            {action.label}
          </Button>
        )}
        {customActions && !action && <>{customActions}</>}
      </Box>
    </StyledToast>
  );
};

export const toast = ({ ...props }: Omit<ToastProps, "id">) => {
  return sonnerToast.custom((id) => (
    <Toast {...props} id={id as string} useNativeClose={false} />
  ));
};
