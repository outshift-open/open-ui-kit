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
