/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Badge as MuiBadge,
  Box,
  Typography,
  styled,
  type BadgeProps,
  type BoxProps,
  type TypographyProps,
} from "@mui/material";
import type { ComponentType } from "react";
import { BadgeShape, BadgeSize, BadgeType } from "../types";
import { grey0 } from "@/theme/style/color-palette";
import {
  getBadgeBackgroundColor,
  getBadgeShapeLabelStyles,
  getBadgeShapeRootStyles,
  getBadgeShapeStyles,
  getBadgeTextColor,
} from "../styles";

export const StyledBadge = styled(MuiBadge, {
  shouldForwardProp: (prop) =>
    prop !== "type" && prop !== "isNotification" && prop !== "hasIcon",
})<{ type?: BadgeType; isNotification?: boolean; hasIcon?: boolean }>(
  ({ theme, type, isNotification = false, hasIcon = false }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    // The icon badge is always white, per the Spark optional-behaviour frame.
    // grey0 rather than a theme var: no var resolves to white in both modes,
    // and the icon slot plus Typography both inherit this one declaration.
    color: isNotification
      ? "inherit"
      : hasIcon
        ? grey0
        : getBadgeTextColor(theme, type),
    backgroundColor: getBadgeBackgroundColor(theme, type),
    minWidth: "19px",
    height: "16px",
    borderRadius: "64px",
    paddingLeft: "6.5px",
    paddingRight: "6.5px",
    "& .MuiTypography-root": {
      display: "flex",
      alignItems: "center",
      height: "16px",
      color: "inherit",
      letterSpacing: 0,
    },
    ...(isNotification && {
      backgroundColor: "transparent",
      padding: 0,
      minWidth: "24px",
      width: "24px",
      height: "24px",
      "& > svg": {
        width: "24px",
        height: "24px",
        color: theme.palette.vars.interactivePrimaryDefaultDefault,
      },
      "& .MuiBadge-badge": {
        right: 0,
        top: 0,
        minWidth: "19px",
        height: "16px",
        paddingLeft: "6.5px",
        paddingRight: "6.5px",
        borderRadius: "64px",
        backgroundColor: getBadgeBackgroundColor(theme, type),
        color: getBadgeTextColor(theme, type),
      },
    }),
  }),
) as ComponentType<
  BadgeProps & {
    type?: BadgeType;
    isNotification?: boolean;
    hasIcon?: boolean;
  }
>;

/**
 * Shape badges are markers, not containers, so they render as a plain painted
 * box rather than a MuiBadge. That keeps them out of the pill sizing rules in
 * StyledBadge above, which would otherwise have to be unset one by one.
 */
export const StyledShapeBadge = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "shape" && prop !== "size" && prop !== "type",
})<{ shape: BadgeShape; size?: BadgeSize; type?: BadgeType }>(
  ({ theme, shape, size, type }) =>
    getBadgeShapeStyles(theme, shape, size, type),
) as ComponentType<
  BoxProps & { shape: BadgeShape; size?: BadgeSize; type?: BadgeType }
>;

/**
 * Pairs a shape marker with its label. Only rendered when a shape badge is
 * given content, so an unlabelled marker stays a single element with no
 * wrapper to affect its layout.
 */
export const StyledShapeBadgeRoot = styled(Box)(
  getBadgeShapeRootStyles,
) as ComponentType<BoxProps>;

/**
 * Label beside a shape marker. `shrink-0` is deliberately absent: the marker
 * holds its size on its own, so a long label wraps its own box instead of
 * squeezing the marker.
 */
export const StyledShapeBadgeLabel = styled(Typography)(({ theme }) =>
  getBadgeShapeLabelStyles(theme),
) as ComponentType<TypographyProps>;

/**
 * Icon slot for the optional-behaviour badge. The outer box is pinned to 16px
 * to match the badge height, and the glyph is pinned separately rather than
 * left to size itself, so a leading icon cannot change the pill's height.
 */
export const StyledBadgeIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: "16px",
  height: "16px",
  color: "inherit",
  "& > svg, & > img": {
    display: "block",
    width: "16px",
    height: "16px",
  },
}) as ComponentType<BoxProps>;
