/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ComponentType } from "react";
import { BarChart } from "../bar-chart/bar-chart";
import { HorizontalBarChart } from "../horizontal-bar-chart/horizontal-bar-chart";
import { DonutChart } from "../donut-chart/donut-chart";
import { GaugeChart } from "../gauge-chart/gauge-chart";
import { LineChart } from "../line-chart/line-chart";
import { BarGraph } from "../bar-graph/bar-graph";
import { ChartType, type ChartProps } from "./types";

export const ChartTypeComponents: {
  [key: string]: ComponentType<ChartProps>;
} = {
  [ChartType.VERTICAL_BAR]: BarChart,
  [ChartType.HORIZONTAL_BAR]: HorizontalBarChart,
  [ChartType.DONUT]: DonutChart,
  [ChartType.GAUGE]: GaugeChart,
  [ChartType.LINE]: LineChart,
  [ChartType.BAR_GRAPH]: BarGraph,
};
