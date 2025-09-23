/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  Typography,
} from "@mui/material";
import { IconPosition } from "@/common";
import { Link, LinkProps, LinkType } from "@/components";

export interface MenuItemProps extends MuiMenuItemProps {
  href?: LinkProps["href"];
  openInNewTab?: boolean;
  ellipsis?: boolean;
  iconPosition?: LinkProps["iconPosition"];
  Icon?: LinkProps["Icon"];
}

export const MenuItem = ({
  children,
  disabled = false,
  ellipsis = false,
  href,
  Icon,
  iconPosition = IconPosition.NoIcon,
  openInNewTab = false,
  ...props
}: MenuItemProps) => {
  if (!href) {
    return (
      <MuiMenuItem disabled={disabled} {...props}>
        {children}
      </MuiMenuItem>
    );
  }

  return (
    <MenuItem {...props} sx={{ padding: 0 }}>
      <Link
        disabled={disabled}
        href={href}
        ellipsis={ellipsis}
        iconPosition={iconPosition}
        Icon={Icon}
        openInNewTab={openInNewTab}
        linkType={LinkType.StandaloneRegular}
        style={{
          height: "100%",
          width: "100%",
          padding: "8px 16px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{ height: "fit-content", display: "flex", alignItems: "center" }}
        >
          {children}
        </Typography>
      </Link>
    </MenuItem>
  );
};
