/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ContentType } from "recharts/types/component/Tooltip";

export type DataPoint = {
  subject: string;
};

export type ExtendedDataPoint = {
  variableA?: number;
} & DataPoint;

export type RadarType = {
  name: string;
  dataKey: string;
  fill?: string;
  background?: string;
  shape?: React.ReactElement;
};

export type Offset = {
  cx: number;
  cy: number;
};

export type SpiderChartProps = {
  data: ExtendedDataPoint[];
  radars: RadarType[];
  outerRadius?: number;
  padData?: number;
  onTooltipClick?: (subject: string) => void;
  tooltipContent?: (dataPoint: ExtendedDataPoint) => React.ReactNode;
  showTooltip?: boolean;
  customTooltip?: ContentType<number, string>;
  labelOffsets?: Offset[];
  tickBand?: number;
  scale?: number;
};
