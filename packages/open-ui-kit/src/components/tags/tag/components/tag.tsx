/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chip, useTheme } from "@mui/material";
import { GeneralSize } from "@/common";
import { TagBackgroundColorVariants } from "../types";
import type { TagProps } from "../types";
import { getTagStyle, selectTagStyle } from "../utils";

/**
 * Tag labels categorized content with optional icon, avatar, status, and deletion affordances.
 */
export const Tag = ({
  avatar,
  children,
  color = TagBackgroundColorVariants.Primary,
  status,
  icon,
  onClick,
  size = GeneralSize.Large,
  sx,
  ...props
}: TagProps) => {
  const theme = useTheme();
  const statusStyle = status ? selectTagStyle(theme)[status] : undefined;

  return (
    <Chip
      icon={statusStyle ? <statusStyle.icon /> : icon}
      avatar={avatar}
      clickable={Boolean(onClick)}
      onClick={onClick}
      label={children}
      {...props}
      sx={[
        (theme) =>
          getTagStyle({
            clickable: !!onClick,
            color,
            hasAvatar: !!avatar,
            theme,
            size,
            statusStyle,
          }),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
};
