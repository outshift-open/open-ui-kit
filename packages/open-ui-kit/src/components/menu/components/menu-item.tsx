/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography } from "@mui/material";
import type { CSSProperties } from "react";
import { IconPosition } from "@/common";
import { Link, LinkType } from "@/components/link";
import { getMenuItemLabelStyles, getMenuItemLinkStyles } from "../styles";
import type { MenuItemProps } from "../types";
import { StyledMenuItem } from "./elements";

export const MenuItem = ({
  children,
  destructive = false,
  disabled = false,
  ellipsis = false,
  href,
  Icon,
  iconPosition = IconPosition.NoIcon,
  openInNewTab = false,
  size = "large",
  sx,
  ...props
}: MenuItemProps) => {
  if (!href) {
    return (
      <StyledMenuItem
        destructive={destructive}
        disabled={disabled}
        sizeVariant={size}
        sx={sx}
        {...props}
      >
        {children}
      </StyledMenuItem>
    );
  }

  return (
    <StyledMenuItem
      destructive={destructive}
      disabled={disabled}
      sizeVariant={size}
      {...props}
      sx={[{ padding: 0 }, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    >
      <Link
        disabled={disabled}
        href={href}
        ellipsis={ellipsis}
        iconPosition={iconPosition}
        Icon={Icon}
        openInNewTab={openInNewTab}
        linkType={LinkType.StandaloneRegular}
        style={getMenuItemLinkStyles() as CSSProperties}
      >
        <Typography variant="body1" sx={getMenuItemLabelStyles()}>
          {children}
        </Typography>
      </Link>
    </StyledMenuItem>
  );
};
