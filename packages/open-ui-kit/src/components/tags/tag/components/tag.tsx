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
