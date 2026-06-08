/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { IconButton, Typography } from "@mui/material";
import type { BannerProps } from "../types";
import { IconBanner, StyledBanner } from "./elements";
import { CloseOutlined } from "@mui/icons-material";
import React from "react";
import { getCloseIconStyles } from "../styles";

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
            sx={{
              width: "24px",
              height: "24px",
              padding: 0,
              borderRadius: "4px",
            }}
            onClick={(e) => {
              setShow(false);
              onClose?.(e);
            }}
            aria-label="close"
          >
            <CloseOutlined sx={getCloseIconStyles()} />
          </IconButton>
        )
      }
      icon={icon ? icon : <IconBanner status={status} />}
    >
      <Typography variant="subtitle1">{text}</Typography>
    </StyledBanner>
  );
};
