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

import { toast as sonnerToast } from "sonner";
import { ToastType } from "../types";
import { IconToast, StyledToast } from "./elements";
import { AlertProps, Box, Button, IconButton, Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
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
  id: string;
  type?: ToastType;
  title: string;
  description?: string;
  showCloseButton?: boolean;
  useNativeClose?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
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
            sx={{ width: "24px", height: "24px" }}
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
      <Box
        flexDirection="column"
        gap="8px"
        display="flex"
        justifyContent="start"
      >
        {title && (
          <Typography
            variant="subtitle1"
            sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
          >
            {title}
          </Typography>
        )}
        <Typography
          variant="body2"
          sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
        >
          {description}
        </Typography>
        {action && (
          <Button
            onClick={action.onClick}
            variant="tertariary"
            sx={{
              padding: 0,
              minWidth: "1px",
              width: "fit-content",
              "&.MuiButton-sizeSmall": {
                padding: 0,
              },
            }}
            size="small"
          >
            <Typography fontSize={"14px"} fontWeight={600}>
              {action.label}
            </Typography>
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
