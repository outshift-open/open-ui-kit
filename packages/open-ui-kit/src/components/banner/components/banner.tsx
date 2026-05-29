/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AlertProps, IconButton, Typography } from "@mui/material";
import { StatusBanner } from "../types";
import { IconBanner, StyledBanner } from "./elements";
import { CloseOutlined } from "@mui/icons-material";
import React from "react";

export interface BannerProps
  extends Omit<
    AlertProps,
    "variant" | "severity" | "children" | "iconMapping" | "action"
  > {
  status?: StatusBanner;
  text: React.ReactNode;
  showCloseButton?: boolean;
}

export const Banner = ({
  status = "info",
  showCloseButton = true,
  text,
  icon,
  onClose,
  ...props
}: BannerProps) => {
  const [show, setShow] = React.useState(true);

  if (!show) {
    return null;
  }

  return (
    <StyledBanner
      {...props}
      status={status}
      action={
        showCloseButton && (
          <IconButton
            sx={{ width: "24px", height: "24px" }}
            onClick={(e) => {
              setShow(false);
              onClose?.(e);
            }}
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
      icon={icon ? icon : <IconBanner status={status} />}
    >
      <Typography variant="subtitle1">{text}</Typography>
    </StyledBanner>
  );
};
