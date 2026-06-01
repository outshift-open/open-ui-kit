/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";

export const INDICATOR_BADGE_VALUES_COUNT = 4;

export const getIndicatorBadgeContainerStyles = () =>
  ({
    width: "24px",
    height: "24px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }) as const;

export const getIndicatorBadgeBackdropStyles = (
  theme: Theme,
  badgeColor: string,
) =>
  ({
    width: "inherit",
    height: "inherit",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: badgeColor,
    opacity: 0.1,
  }) as const;

export const getIndicatorBadgeValueStackStyles = () =>
  ({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  }) as const;

export const getIndicatorBadgeValueBarStyles = (
  theme: Theme,
  badgeColor: string,
  isActive?: boolean,
) =>
  ({
    width: "6px",
    height: "3px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: badgeColor,
    opacity: isActive ? 1 : 0.4,
  }) as const;
