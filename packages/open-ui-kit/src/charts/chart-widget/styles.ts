/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material/styles";
import { ChartType } from "../common/types";

export type ChartWidgetSxEntry = Exclude<SxProps<Theme>, readonly unknown[]>;

export const toSxArray = (sx?: SxProps<Theme>): ChartWidgetSxEntry[] =>
  Array.isArray(sx)
    ? (sx as ChartWidgetSxEntry[])
    : sx
      ? [sx as ChartWidgetSxEntry]
      : [];

export const getChartWidgetContainerStyles = (
  type: ChartType,
): ChartWidgetSxEntry =>
  type === ChartType.BAR_GRAPH ? { height: "392px", position: "relative" } : {};

export const getChartWidgetBodyStyles = (
  type: ChartType,
  isHorizontal: boolean,
): ChartWidgetSxEntry =>
  type === ChartType.BAR_GRAPH || type === ChartType.HORIZONTAL_BAR
    ? {}
    : {
        height: isHorizontal ? "134px" : "164px",
        flexShrink: 0,
      };
