/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { type SxProps, type Theme, useTheme } from "@mui/material";
import { GeneralSize } from "@/common";
import {
  Link,
  LinkColorEnum,
  LinkColorStatus,
  LinkType,
} from "@/components/link";
import { getLinkColors } from "@/components/link/helpers";
import type { BreadcrumbsProps } from "../types";
import { BreadcrumbSeparator, StyledBreadcrumbs } from "./elements";

const MAX_NUMBER_OF_VISIBLE_BREADCRUMBS = 4;
type CollapsedIconSlotPropsObject = { sx?: SxProps<Theme> };

export const Breadcrumbs = ({
  iconPosition,
  items,
  size = GeneralSize.Medium,
  sx,
  color = LinkColorEnum.Secondary,
  type = LinkType.StandaloneBold,
  maximumNumberOfVisibleBreadcrumbs = MAX_NUMBER_OF_VISIBLE_BREADCRUMBS,
  separator,
  slotProps,
  ...props
}: BreadcrumbsProps) => {
  const theme = useTheme();
  const collapsedIconSlotProps = slotProps?.collapsedIcon;
  const mergeCollapsedIconSlotProps = (
    collapsedIconSlotProps?: CollapsedIconSlotPropsObject,
  ) => {
    const collapsedIconSx = collapsedIconSlotProps?.sx;

    return {
      ...collapsedIconSlotProps,
      sx: [
        { width: "20px", height: "20px" },
        ...(Array.isArray(collapsedIconSx)
          ? collapsedIconSx
          : collapsedIconSx
            ? [collapsedIconSx]
            : []),
      ],
    };
  };

  return (
    <StyledBreadcrumbs
      {...props}
      aria-label={props["aria-label"] ?? "breadcrumb"}
      separator={separator ?? <BreadcrumbSeparator />}
      slotProps={{
        ...slotProps,
        collapsedIcon:
          typeof collapsedIconSlotProps === "function"
            ? (ownerState) =>
                mergeCollapsedIconSlotProps(collapsedIconSlotProps(ownerState))
            : mergeCollapsedIconSlotProps(collapsedIconSlotProps),
      }}
      sx={sx}
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
    </StyledBreadcrumbs>
  );
};
