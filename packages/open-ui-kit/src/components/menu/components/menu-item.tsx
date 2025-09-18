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
