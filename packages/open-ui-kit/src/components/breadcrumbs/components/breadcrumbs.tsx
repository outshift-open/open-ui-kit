/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
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
          sx={{
            width: "20px",
            height: "20px",
            color: theme.palette.vars.interactiveSecondaryDefaultDefault,
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
