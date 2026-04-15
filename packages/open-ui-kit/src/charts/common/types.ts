/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ElementType, ReactNode } from "react";
import type { ContentType } from "recharts/types/component/Tooltip";
import type { DonutProps } from "../donut-chart/donut-chart";
import type { GaugeChartProps } from "../gauge-chart/gauge-chart";
import type { BarGraphProps } from "../bar-graph/bar-graph";
import type { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";

export interface ChartDataItem {
  name: string;
  value: number;
  color: string;
  icon?: ElementType;
}

export interface TableChartDataItem {
  name: string;
  value: number;
  color: string;
}

export interface ChartCategory {
  name: string;
  color?: string;
}

export interface ChartCategoryItem {
  date: string;
  [key: string]: number | string;
}

export interface BarGraphItem {
  value: ReactNode;
  barData: {
    [barKey: string]: string | number;
  };
}

export interface ChartProps {
  data:
    | ChartDataItem[]
    | ChartCategoryItem[]
    | BarGraphItem[]
    | TableChartDataItem[];
  showTooltip?: boolean;
  categories?: ChartCategory[];
  customTooltip?: ContentType<number, string>;
}

export enum ChartType {
  VERTICAL_BAR = "vertical_bar",
  HORIZONTAL_BAR = "horizontal_bar",
  DONUT = "donut",
  GAUGE = "gauge",
  LINE = "line",
  BAR_GRAPH = "bar_graph",
}

export type ConditionalPropsByType =
  | {
      type: ChartType.BAR_GRAPH;
      handleClick?: CategoricalChartFunc;
    }
  | {
      type: ChartType.DONUT;
      handleClick?: (sliceData: ChartDataItem) => void;
    }
  | {
      type: ChartType.HORIZONTAL_BAR;
      handleClick?: (sliceData: ChartDataItem) => void;
    }
  | {
      type: ChartType.VERTICAL_BAR;
      handleClick?: (sliceData: ChartDataItem) => void;
    }
  | {
      type: ChartType;
      handleClick?: never;
    };

export type ExtendedChartProps = GaugeChartProps &
  Omit<DonutProps, "handleClick"> &
  Omit<BarGraphProps, "handleClick">;
