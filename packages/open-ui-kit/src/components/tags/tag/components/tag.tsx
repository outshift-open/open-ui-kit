/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chip, ChipProps, useTheme } from "@mui/material";
import { GeneralSize } from "@/common";
import { TagBackgroundColorVariants, TagStatus } from "../types";
import { getTagStyle, selectTagStyle } from "../utils";

export interface TagProps
  extends Omit<ChipProps, "size" | "children" | "label" | "color"> {
  color?: TagBackgroundColorVariants;
  children: React.ReactNode;
  size?: GeneralSize;
  status?: TagStatus;
}

/**
 *
 * @param status - If status is provided, the tag will be styled according to the status, indepenently of the icon settings
 * @param avatar - When avatar is provided, icon is ignored and the size of the tag is bigger.
 * @returns
 */
export const Tag = ({
  avatar,
  children,
  color = TagBackgroundColorVariants.Primary,
  status,
  icon,
  onClick,
  size = GeneralSize.Large,
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
      sx={(theme) => {
        const tagStyle = getTagStyle({
          clickable: !!onClick,
          color,
          hasAvatar: !!avatar,
          theme,
          size,
          statusStyle,
        });
        return { ...tagStyle, ...props?.sx };
      }}
    />
  );
};
