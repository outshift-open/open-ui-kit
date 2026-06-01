/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { toast as sonnerToast } from "sonner";
import { ToastType } from "../types";
import { IconToast, StyledToast } from "./elements";
import { AlertProps, Box, IconButton, Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { Button } from "@/components/button";
import React from "react";

export interface ToastProps
  extends Omit<
    AlertProps,
    | "variant"
    | "severity"
    | "children"
    | "iconMapping"
    | "action"
    | "id"
    | "icon"
  > {
  /** Unique id used when dismissing via sonner. */
  id: string;
  /** Visual type — controls icon and left border color. */
  type?: ToastType;
  /** Bold title line. */
  title?: string;
  /** Body description text. */
  description?: string;
  /** Whether to show the close (X) button. */
  showCloseButton?: boolean;
  /** When true, close button hides the toast via React state. When false, dismisses via sonner. */
  useNativeClose?: boolean;
  /** Optional action button below the description. */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Slot for custom action content when `action` is not used. */
  customActions?: React.ReactNode;
}

export const Toast = ({
  type = "default",
  showCloseButton = true,
  useNativeClose = true,
  title,
  description,
  action,
  id,
  customActions,
  ...props
}: ToastProps) => {
  const [show, setShow] = React.useState(true);

  if (useNativeClose && !show) {
    return null;
  }

  return (
    <StyledToast
      {...props}
      id={id}
      type={type}
      action={
        showCloseButton && (
          <IconButton
            sx={{ width: "24px", height: "24px", padding: 0 }}
            onClick={() =>
              useNativeClose ? setShow(false) : sonnerToast.dismiss(id)
            }
            aria-label="close"
          >
            <CloseOutlined
              sx={(theme) => ({
                color: theme.palette.vars.controlIconDefault,
                width: "18px",
                height: "18px",
              })}
            />
          </IconButton>
        )
      }
      icon={<IconToast type={type} />}
    >
      <Box display="flex" flexDirection="column" gap="4px">
        {title && (
          <Typography
            variant="subtitle1"
            sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography
            variant="body2"
            sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
          >
            {description}
          </Typography>
        )}
        {action && (
          <Button
            variant="tertariary"
            size="small"
            onClick={action.onClick}
            sx={{
              padding: 0,
              minWidth: 0,
              width: "fit-content",
              height: "auto",
            }}
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
