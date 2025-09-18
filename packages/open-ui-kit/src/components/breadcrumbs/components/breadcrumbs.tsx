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
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MUIBreadcrumbsProps,
  useTheme,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { GeneralSize, IconPosition } from "@/common";
import {
  Link,
  LinkColorEnum,
  LinkColorStatus,
  LinkProps,
  LinkType,
} from "@/components";
import { getLinkColors } from "@/components/link/helpers";

const MAX_NUMBER_OF_VISIBLE_BREADCRUMBS = 4;

interface BreadcrumbItem {
  Icon?: LinkProps["Icon"];
  text: string;
  link?: string;
  iconPosition?: IconPosition;
}

export interface BreadcrumbsProps extends MUIBreadcrumbsProps {
  iconPosition?: IconPosition;
  items: BreadcrumbItem[];
  color?: LinkColorEnum;
  type?: LinkType;
  size?: GeneralSize;
  maximumNumberOfVisibleBreadcrumbs?: number;
}

export const Breadcrumbs = ({
  iconPosition,
  items,
  size = GeneralSize.Medium,
  sx,
  color = LinkColorEnum.Secondary,
  type = LinkType.StandaloneBold,
  maximumNumberOfVisibleBreadcrumbs = MAX_NUMBER_OF_VISIBLE_BREADCRUMBS,
}: BreadcrumbsProps) => {
  const theme = useTheme();

  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      separator={
        <ChevronRightIcon
          color={color}
          sx={{
            width: "20px",
            height: "20px",
          }}
        />
      }
      slotProps={{
        collapsedIcon: {
          sx: {
            width: "20px",
            height: "20px",
          },
        },
      }}
      sx={{
        lineHeight: "20px",
        marginBottom: "16px",
        "& .MuiBreadcrumbs-separator": { marginX: "4px" },
        "& .MuiButtonBase-root": {
          backgroundColor: "transparent",
          margin: 0,
          width: "20px",
          height: "20px",
        },
        "& .MuiButtonBase-root:hover": { backgroundColor: "initial" },
        "& .MuiBreadcrumbs-li, & .MuiBreadcrumbs-li > a": {
          verticalAlign: "middle",
          display: "flex",
          alignItems: "center",
        },
        ...sx,
      }}
      maxItems={maximumNumberOfVisibleBreadcrumbs}
    >
      {items.map((item, idx) => {
        const selectBreadcrumbLinkColor = ({
          disabled,
          pressed,
          hovered,
        }: LinkColorStatus) => {
          const linkColors = getLinkColors(theme);
          if (idx === items.length - 1) {
            return linkColors[color].pressed;
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
        };

        return (
          <Link
            key={item.text + idx}
            size={size}
            href={item.link}
            color={LinkColorEnum.Secondary}
            customizeColor={selectBreadcrumbLinkColor}
            iconPosition={item.iconPosition ?? iconPosition}
            linkType={type}
            ellipsis={true}
            {...(item.Icon && { Icon: item.Icon })}
          >
            {item.text}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};
