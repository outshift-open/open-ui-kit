/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { MouseEvent } from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  getLinkColor,
  getLinkRootStyles,
  getLinkTypographyStyles,
  iconStyle,
  linkStackStyle,
} from "../styles";
import { LinkColorEnum, LinkProps, LinkType } from "../types";
import { Box, Stack, useTheme, Typography } from "@mui/material";
import { ellipsisStyle } from "@/theme/style/common";
import { GeneralSize, IconPosition } from "@/common";

export const Link = ({
  Icon,
  children,
  color = LinkColorEnum.Primary,
  customizeColor,
  disabled = false,
  ellipsis = false,
  fontStyle,
  href = "",
  iconPosition = IconPosition.NoIcon,
  linkType = LinkType.UnderlineRegular,
  openInNewTab = false,
  size = GeneralSize.Medium,
  style,
  sx,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
  ...props
}: LinkProps) => {
  const theme = useTheme();

  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const linkColor = customizeColor
    ? customizeColor({ disabled, pressed, hovered })
    : getLinkColor(
        theme,
        color,
        disabled
          ? "disabled"
          : pressed
            ? "pressed"
            : hovered
              ? "hover"
              : "default",
      );
  const rootStyles = getLinkRootStyles({
    color,
    disabled,
    ellipsis,
    linkType,
    theme,
  });
  const hasIcon = iconPosition !== IconPosition.NoIcon && Boolean(Icon);

  return (
    <Box
      component={RouterLink}
      to={disabled ? "" : href}
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
      onMouseEnter={(event: MouseEvent<HTMLAnchorElement>) => {
        setHovered(true);
        onMouseEnter?.(event);
      }}
      onMouseDown={(event: MouseEvent<HTMLAnchorElement>) => {
        setPressed(true);
        onMouseDown?.(event);
      }}
      onMouseUp={(event: MouseEvent<HTMLAnchorElement>) => {
        setPressed(false);
        onMouseUp?.(event);
      }}
      onMouseLeave={(event: MouseEvent<HTMLAnchorElement>) => {
        setHovered(false);
        setPressed(false);
        onMouseLeave?.(event);
      }}
      style={style}
      sx={[
        rootStyles,
        ...(customizeColor
          ? [
              {
                color: linkColor,
                "&:hover": { color: linkColor },
                "&:active": { color: linkColor },
              },
            ]
          : []),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      aria-disabled={disabled || undefined}
      {...props}
    >
      <Stack
        sx={[
          linkStackStyle(size, hasIcon),
          ...(ellipsis ? [{ width: "100%" }] : []),
        ]}
      >
        {iconPosition === IconPosition.LeftIcon && Icon && (
          <Icon sx={iconStyle[size]} />
        )}
        <Typography
          component="span"
          sx={[
            getLinkTypographyStyles(size, linkType, theme),
            ...(fontStyle ? [fontStyle] : []),
            ...(ellipsis ? [ellipsisStyle] : []),
          ]}
        >
          {children}
        </Typography>
        {iconPosition === IconPosition.RightIcon && Icon && (
          <Icon sx={iconStyle[size]} />
        )}
      </Stack>
    </Box>
  );
};
