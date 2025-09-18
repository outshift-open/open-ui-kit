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

import { ReactNode } from "react";
import type { ContentType } from "recharts/types/component/Tooltip";
import { BarChart } from "../bar-chart/bar-chart";
import { HorizontalBarChart } from "../horizontal-bar-chart/horizontal-bar-chart";
import { DonutChart, DonutProps } from "../donut-chart/donut-chart";
import { GaugeChart, GaugeChartProps } from "../gauge-chart/gauge-chart";
import { LineChart } from "../line-chart/line-chart";
import { BarGraph, BarGraphProps } from "../bar-graph/bar-graph";
import type { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";

export interface ChartDataItem {
  name: string;
  value: number;
  color: string;
  icon?: React.ElementType;
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

export const ChartTypeComponents: {
  [key: string]: React.ComponentType<ChartProps>;
} = {
  [ChartType.VERTICAL_BAR]: BarChart,
  [ChartType.HORIZONTAL_BAR]: HorizontalBarChart,
  [ChartType.DONUT]: DonutChart,
  [ChartType.GAUGE]: GaugeChart,
  [ChartType.LINE]: LineChart,
  [ChartType.BAR_GRAPH]: BarGraph,
};

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
