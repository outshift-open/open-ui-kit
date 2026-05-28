/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, styled, type BoxProps } from "@mui/material";
import type { ComponentType } from "react";

export const IndicatorBadgeContainer = styled(Box)({
  width: "24px",
  height: "24px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}) as ComponentType<BoxProps>;

export const IndicatorBadgeBackdrop = styled(Box, {
  shouldForwardProp: (prop) => prop !== "badgeColor",
})<{ badgeColor: string }>(({ theme, badgeColor }) => ({
  width: "inherit",
  height: "inherit",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: badgeColor,
  opacity: 0.1,
})) as ComponentType<BoxProps & { badgeColor: string }>;

export const IndicatorBadgeValueStack = styled(Box)({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
}) as ComponentType<BoxProps>;

export const IndicatorBadgeValueBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== "badgeColor" && prop !== "isActive",
})<{ badgeColor: string; isActive?: boolean }>(
  ({ theme, badgeColor, isActive }) => ({
    width: "6px",
    height: "3px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: badgeColor,
    opacity: isActive ? 1 : 0.4,
  }),
) as ComponentType<BoxProps & { badgeColor: string; isActive?: boolean }>;
