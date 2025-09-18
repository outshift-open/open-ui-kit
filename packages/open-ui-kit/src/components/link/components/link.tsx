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

import { MouseEvent, useState, useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";
import { iconStyle, linkStackStyle } from "../styles";
import { LinkColorEnum, LinkProps, LinkType, LinkVariants } from "../types";
import { Stack, useTheme, Typography } from "@mui/material";
import { ellipsisStyle, GeneralSize, IconPosition } from "@/common";
import { getLinkColors, getLinkStyle } from "../helpers";

const sizeToVariantMapping: Record<GeneralSize, LinkVariants> = {
  [GeneralSize.Large]: "body1",
  [GeneralSize.Medium]: "body2",
  [GeneralSize.Small]: "caption",
};

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
  ...props
}: LinkProps) => {
  const theme = useTheme();

  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const getFontWeight = useCallback(
    (linkType: LinkType) =>
      linkType === LinkType.StandaloneBold
        ? theme.typography.fontWeightSemiBold
        : theme.typography.fontWeightRegular,
    [theme.typography.fontWeightRegular, theme.typography.fontWeightSemiBold],
  );

  const setUnderline = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, status: boolean) => {
      if (disabled || linkType === LinkType.UnderlineRegular) {
        e.preventDefault();
        return;
      }
      e.currentTarget.style.textDecoration = status ? "underline" : "none";
    },
    [disabled, linkType],
  );

  // const setBorder = useCallback(
  //   (e: FocusEvent<HTMLAnchorElement, Element>, status: boolean) => {
  //     e.currentTarget.style.borderRadius = "4px";
  //     e.currentTarget.style.outline = status
  //       ? `2px solid ${theme.palette.vars?.excellentBorderActive}`
  //       : "none";
  //   },
  //   [theme.palette.vars?.excellentBorderActive],
  // );

  const handleHover = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, status: boolean) => {
      setUnderline(e, status);
      setHovered(status);
    },
    [setUnderline],
  );

  const handlePress = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, status: boolean) => {
      setUnderline(e, status);
      setPressed(status);
    },
    [setUnderline],
  );

  // const handleFocus = useCallback(
  //   (e: FocusEvent<HTMLAnchorElement, Element>, status: boolean) => {
  //     setBorder(e, status);
  //   },
  //   [setBorder],
  // );

  const selectLinkColor = useCallback(() => {
    const linkColors = getLinkColors(theme);
    if (!href) {
      return linkColors[color].default;
    }

    if (disabled) {
      return linkColors[color].disabled;
    }
    if (pressed) {
      return linkColors[color].pressed;
    }
    if (hovered) {
      return linkColors[color].hover;
    }

    return linkColors[color].default;
  }, [color, disabled, href, pressed, hovered, theme]);

  const linkColor = customizeColor
    ? customizeColor({ disabled, pressed, hovered })
    : selectLinkColor();
  const linkStyle = getLinkStyle(linkColor, disabled, linkType, ellipsis);

  return (
    <RouterLink
      to={disabled ? "" : href}
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseDown={(e) => handlePress(e, true)}
      onMouseUp={(e) => handlePress(e, false)}
      onMouseLeave={(e) => handleHover(e, false)}
      // onFocus={(e) => handleFocus(e, true)}
      // onBlur={(e) => handleFocus(e, false)}
      style={{ ...linkStyle, ...style }}
      {...props}
    >
      <Stack
        sx={{ ...linkStackStyle(size), ...(ellipsis ? { width: "100%" } : {}) }}
      >
        {iconPosition === "left-icon" && Icon && <Icon sx={iconStyle[size]} />}
        <Typography
          fontWeight={getFontWeight(linkType)}
          variant={sizeToVariantMapping[size]}
          sx={{ ...fontStyle, ...ellipsisStyle }}
        >
          {children}
        </Typography>
        {iconPosition === "right-icon" && Icon && <Icon sx={iconStyle[size]} />}
      </Stack>
    </RouterLink>
  );
};
