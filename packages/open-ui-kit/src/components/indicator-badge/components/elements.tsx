/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, styled, type BoxProps } from "@mui/material";
import type { ComponentType } from "react";
import {
  getIndicatorBadgeBackdropStyles,
  getIndicatorBadgeContainerStyles,
  getIndicatorBadgeValueBarStyles,
  getIndicatorBadgeValueStackStyles,
} from "../styles";

export const IndicatorBadgeContainer = styled(Box)(() =>
  getIndicatorBadgeContainerStyles(),
) as ComponentType<BoxProps>;

export const IndicatorBadgeBackdrop = styled(Box, {
  shouldForwardProp: (prop) => prop !== "badgeColor",
})<{ badgeColor: string }>(({ theme, badgeColor }) =>
  getIndicatorBadgeBackdropStyles(theme, badgeColor),
) as ComponentType<BoxProps & { badgeColor: string }>;

export const IndicatorBadgeValueStack = styled(Box)(() =>
  getIndicatorBadgeValueStackStyles(),
) as ComponentType<BoxProps>;

export const IndicatorBadgeValueBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== "badgeColor" && prop !== "isActive",
})<{ badgeColor: string; isActive?: boolean }>(
  ({ theme, badgeColor, isActive }) =>
    getIndicatorBadgeValueBarStyles(theme, badgeColor, isActive),
) as ComponentType<BoxProps & { badgeColor: string; isActive?: boolean }>;
